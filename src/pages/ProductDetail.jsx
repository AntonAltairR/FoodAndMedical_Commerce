import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/ToastProvider";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) return <div className="container">Product not found.</div>;

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: 320,
            height: 320,
            objectFit: "contain",
            borderRadius: 16,
            boxShadow: "0 4px 16px rgba(44,122,123,0.10)",
            marginBottom: 24,
            alignSelf: "center",
            background: "#f1f5f9"
          }}
          onError={e => { e.target.src = "/images/placeholder.png"; }}
        />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p style={{ color: "var(--secondary)", fontWeight: "bold", fontSize: "1.5rem" }}>₱{product.price}</p>
          <button
            onClick={() => {
              addItem(product);
              showToast(`Added "${product.name}" to cart!`);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
