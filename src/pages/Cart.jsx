import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Shopping Cart</h1>
      <div className="card">
        {items.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <>
            <table style={{ width: "100%", marginBottom: 16 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: 48, height: 48, objectFit: "contain", borderRadius: 6, background: "#f1f5f9" }}
                          onError={e => { e.target.src = "/images/placeholder.png"; }}
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>₱{item.price}</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={e => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
                        style={{ width: 48, textAlign: "center" }}
                      />
                    </td>
                    <td>₱{item.price * item.quantity}</td>
                    <td>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: "#e53e3e",
                          color: "#fff",
                          border: "none",
                          borderRadius: 4,
                          padding: "4px 10px",
                          cursor: "pointer"
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <button
                  onClick={clearCart}
                  style={{
                    background: "#e2e8f0",
                    color: "#2c7a7b",
                    border: "none",
                    borderRadius: 4,
                    padding: "6px 16px",
                    marginRight: 12,
                    cursor: "pointer"
                  }}
                >
                  Clear Cart
                </button>
              </div>
              <div style={{ fontWeight: "bold", fontSize: 20 }}>
                Total: ₱{total}
              </div>
              <a
                href="/checkout"
                style={{
                  background: "var(--secondary)",
                  color: "#fff",
                  padding: "8px 24px",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                Proceed to Checkout
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
