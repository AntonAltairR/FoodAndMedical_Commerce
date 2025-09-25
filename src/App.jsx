import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";

import { CartProvider } from "./context/CartContext";
import ToastProvider from "./components/ToastProvider";

export default function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-neutral-light">
        <nav className="bg-white shadow mb-6">
          <div className="container mx-auto flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/Logo.jpg" alt="AAD Quali-1st Trading OPC Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-primary">AAD Quali-1st Trading OPC</span>
            </Link>
            <div className="flex gap-2 items-center">
              <Link to="/" className="text-neutral-dark hover:text-primary">Home</Link>
              <span style={{ color: "#bbb", fontWeight: "bold" }}>|</span>
              <Link to="/products" className="text-neutral-dark hover:text-primary">Products</Link>
              <span style={{ color: "#bbb", fontWeight: "bold" }}>|</span>
              <Link to="/cart" className="text-neutral-dark hover:text-primary">Cart</Link>
              <span style={{ color: "#bbb", fontWeight: "bold" }}>|</span>
              <Link to="/about" className="text-neutral-dark hover:text-primary">About</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="bg-white shadow mt-8">
          <div className="container mx-auto py-4 text-center text-neutral-dark">
            &copy; {new Date().getFullYear()} AAD Quali-1st Trading OPC. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
    </ToastProvider>
    </CartProvider>
  );
}
