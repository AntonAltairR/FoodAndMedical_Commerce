import FeaturedCarousel from "../components/FeaturedCarousel";

export default function Home() {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img src="/images/Logo.jpg" alt="AAD Quali-1st Trading OPC Logo" style={{ margin: "0 auto 1rem", width: 128, height: 128 }} />
        <h1>AAD Quali-1st Trading OPC</h1>
        <p>Order Food Supplements & Medical Devices Online</p>
      </div>
      <FeaturedCarousel />
    </div>
  );
}
