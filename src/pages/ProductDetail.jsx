import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  // Placeholder product data
  const product = {
    id,
    name: id === "device" ? "Sample Device" : "Sample Supplement",
    price: id === "device" ? 1200 : 500,
    image: id === "device"
      ? "/images/products/sample-device.jpg"
      : "/images/products/sample-supplement.jpg",
    description:
      id === "device"
        ? "A high-quality medical device for home and clinical use."
        : "A premium food supplement for daily health and wellness.",
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-contain rounded-lg shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
          <p className="text-lg text-neutral-dark mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-secondary mb-4">₱{product.price}</p>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
