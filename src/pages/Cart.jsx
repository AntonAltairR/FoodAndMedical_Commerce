export default function Cart() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {/* Cart items will be listed here */}
        <p className="text-neutral-dark mb-4">Your cart is currently empty.</p>
        <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary/80 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
