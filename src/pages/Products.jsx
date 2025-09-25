import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/ToastProvider";

export default function Products() {
  const { addItem } = useCart();
  const { showToast } = useToast();

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>All Products</h1>
      <div className="grid grid-2 grid-3">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: 96, height: 96, objectFit: "contain", marginBottom: 8 }}
                onError={e => { e.target.src = "/images/placeholder.png"; }}
              />
              <h3>{product.name}</h3>
            </Link>
            <p style={{ color: "var(--primary)", fontWeight: "bold" }}>₱{product.price}</p>
            <button
              onClick={() => {
                addItem(product);
                showToast(`Added "${product.name}" to cart!`);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
