export default function Cart() {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Shopping Cart</h1>
      <div className="card">
        {/* Cart items will be listed here */}
        <p>Your cart is currently empty.</p>
        <button style={{ background: "var(--secondary)", color: "#fff" }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
