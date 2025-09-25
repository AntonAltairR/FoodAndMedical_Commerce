import { useRef } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

const featured = products.slice(0, 10);

export default function FeaturedCarousel() {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth"
      });
    }
  };

  return (
    <div style={{ position: "relative", margin: "2rem 0" }}>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>Featured Products</h2>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          style={{
            position: "relative",
            left: 0,
            zIndex: 2,
            background: "rgba(255,255,255,0.85)",
            border: "none",
            borderRadius: "50%",
            width: 44,
            height: 44,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            marginRight: 12,
            fontSize: 24,
            color: "#2c7a7b",
            cursor: "pointer",
            transition: "background 0.2s, box-shadow 0.2s",
            outline: "none"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#e6f7fa"}
          onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.85)"}
        >{"<"}</button>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: 24,
            scrollBehavior: "smooth",
            padding: "0 0.5rem",
            background: "linear-gradient(90deg, #f8fafc 0%, #e6f7fa 100%)",
            borderRadius: 16,
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 12px rgba(44,122,123,0.07)",
            minHeight: 260
          }}
        >
          {featured.map(product => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              style={{
                minWidth: 220,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(44,122,123,0.10)",
                padding: 16,
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
                border: "1.5px solid #e2e8f0",
                transition: "box-shadow 0.2s, border 0.2s",
                margin: "16px 0"
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(44,122,123,0.18)";
                e.currentTarget.style.border = "1.5px solid #2c7a7b";
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(44,122,123,0.10)";
                e.currentTarget.style.border = "1.5px solid #e2e8f0";
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: 120,
                  height: 120,
                  objectFit: "contain",
                  marginBottom: 8,
                  borderRadius: 8,
                  background: "#f1f5f9"
                }}
                onError={e => { e.target.src = "/images/placeholder.png"; }}
              />
              <div style={{ fontWeight: "bold", fontSize: 16, marginBottom: 4 }}>{product.name}</div>
              <div style={{ color: "#2c7a7b", fontWeight: "bold", fontSize: 18 }}>₱{product.price}</div>
            </Link>
          ))}
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          style={{
            position: "relative",
            right: 0,
            zIndex: 2,
            background: "rgba(255,255,255,0.85)",
            border: "none",
            borderRadius: "50%",
            width: 44,
            height: 44,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            marginLeft: 12,
            fontSize: 24,
            color: "#2c7a7b",
            cursor: "pointer",
            transition: "background 0.2s, box-shadow 0.2s",
            outline: "none"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#e6f7fa"}
          onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.85)"}
        >{">"}</button>
      </div>
    </div>
  );
}
