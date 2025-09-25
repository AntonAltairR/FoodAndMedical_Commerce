export default function About() {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>About AAD Quali-1st Trading OPC Commerce</h1>
      <div className="card" style={{ maxWidth: 700, margin: "0 auto" }}>
        <p>
          AAD Quali 1st Trading OPC is your trusted online source for high-quality food supplements and medical devices. Our mission is to make health and wellness products accessible, affordable, and convenient for everyone.
        </p>
        <p>
          <strong>Contact us:</strong>
          <br />
          Email: <a href="mailto:support@aadqualitrading.com">support@aadqualitrading.com</a>
          <br />
          Phone: <a href="tel:+639989611651">+63 912 345 6789</a>
        </p>
        <form style={{ marginTop: 24 }}>
          <h2 style={{ color: "var(--secondary)" }}>Send us a message</h2>
          <div>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" required />
          </div>
          <div>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" required />
          </div>
          <div>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" rows="3" required />
          </div>
          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
