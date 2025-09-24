export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <img src="/images/logo.png" alt="RomsPharma Logo" className="mx-auto w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-2">RomsPharma Commerce</h1>
        <p className="text-lg text-neutral-dark">Order Food Supplements & Medical Devices Online</p>
      </div>
      <div className="bg-secondary/10 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Featured Products</h2>
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
    </div>
  );
}
