export default function Checkout() {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Checkout</h1>
      <form className="card" style={{ maxWidth: 480, margin: "0 auto" }}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" required />
        </div>
        <div>
          <label htmlFor="address">Shipping Address</label>
          <input id="address" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
        </div>
        <div>
          <label htmlFor="payment">Payment Method</label>
          <select id="payment" required>
            <option value="">Select</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>
        <button type="submit" style={{ width: "100%" }}>
          Place Order
        </button>
      </form>
    </div>
  );
}
