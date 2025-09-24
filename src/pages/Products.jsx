export default function Products() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* ProductCard components will go here */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="/images/products/sample-supplement.jpg" alt="Sample Supplement" className="w-24 h-24 object-contain mb-2" />
          <h3 className="font-semibold text-lg">Sample Supplement</h3>
          <p className="text-primary font-bold mb-2">₱500</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition">Add to Cart</button>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="/images/products/sample-device.jpg" alt="Sample Device" className="w-24 h-24 object-contain mb-2" />
          <h3 className="font-semibold text-lg">Sample Device</h3>
          <p className="text-primary font-bold mb-2">₱1,200</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
