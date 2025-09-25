import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;
const JWT_SECRET = "supersecretkey"; // Change this in production!

// Path helpers for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SQLite DB
const db = new Database(path.join(__dirname, "db", "database.sqlite"));

// CORS config
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(express.json());

// JWT Auth Middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// Admin Login Route
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  const admin = db.prepare("SELECT * FROM admins WHERE username = ?").get(username);
  if (!admin) return res.status(401).json({ error: "Invalid credentials" });
  if (!bcrypt.compareSync(password, admin.password_hash)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Example protected route
app.get("/api/admin/protected", authMiddleware, (req, res) => {
  res.json({ message: "You are authenticated!", admin: req.admin });
});

// Product CRUD routes (all require JWT auth)

// Get all products
app.get("/api/admin/products", authMiddleware, (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

// Add a new product
app.post("/api/admin/products", authMiddleware, (req, res) => {
  const { name, description, sku, price } = req.body;
  if (!name || !sku || !price) {
    return res.status(400).json({ error: "Name, SKU, and price are required" });
  }
  try {
    const stmt = db.prepare("INSERT INTO products (name, description, sku, price) VALUES (?, ?, ?, ?)");
    const info = stmt.run(name, description || "", sku, price);
    res.json({ id: info.lastInsertRowid, name, description, sku, price });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a product
app.put("/api/admin/products/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const { name, description, sku, price } = req.body;
  if (!name || !sku || !price) {
    return res.status(400).json({ error: "Name, SKU, and price are required" });
  }
  try {
    const stmt = db.prepare("UPDATE products SET name = ?, description = ?, sku = ?, price = ? WHERE id = ?");
    const info = stmt.run(name, description || "", sku, price, id);
    if (info.changes === 0) return res.status(404).json({ error: "Product not found" });
    res.json({ id, name, description, sku, price });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a product
app.delete("/api/admin/products/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare("DELETE FROM products WHERE id = ?");
  const info = stmt.run(id);
  if (info.changes === 0) return res.status(404).json({ error: "Product not found" });
  res.json({ success: true });
});

// Get all orders with items (sales tracking)
app.get("/api/admin/orders", authMiddleware, (req, res) => {
  // Get all orders
  const orders = db.prepare("SELECT * FROM orders ORDER BY created_at DESC").all();
  // For each order, get its items
  const orderItemsStmt = db.prepare(`
    SELECT oi.*, p.name, p.sku
    FROM order_items oi
    JOIN products p ON oi.product_id = p.id
    WHERE oi.order_id = ?
  `);
  const ordersWithItems = orders.map(order => ({
    ...order,
    items: orderItemsStmt.all(order.id)
  }));
  res.json(ordersWithItems);
});

// Root route for health check / friendly message
app.get("/", (req, res) => {
  res.send("RomsPharma Backend API is running. Use /api/admin/* endpoints.");
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
