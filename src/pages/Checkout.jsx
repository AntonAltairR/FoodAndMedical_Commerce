export default function Checkout() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Checkout</h1>
      <form className="bg-white rounded-lg shadow p-6 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-neutral-dark mb-1" htmlFor="name">Full Name</label>
          <input className="w-full border border-neutral-light rounded px-3 py-2" id="name" type="text" required />
        </div>
        <div className="mb-4">
          <label className="block text-neutral-dark mb-1" htmlFor="address">Shipping Address</label>
          <input className="w-full border border-neutral-light rounded px-3 py-2" id="address" type="text" required />
        </div>
        <div className="mb-4">
          <label className="block text-neutral-dark mb-1" htmlFor="email">Email</label>
          <input className="w-full border border-neutral-light rounded px-3 py-2" id="email" type="email" required />
        </div>
        <div className="mb-6">
          <label className="block text-neutral-dark mb-1" htmlFor="payment">Payment Method</label>
          <select className="w-full border border-neutral-light rounded px-3 py-2" id="payment" required>
            <option value="">Select</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 transition w-full" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}
