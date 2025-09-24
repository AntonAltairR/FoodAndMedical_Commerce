export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">About RomsPharma Commerce</h1>
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <p className="text-neutral-dark mb-4">
          RomsPharma Commerce is your trusted online source for high-quality food supplements and medical devices. Our mission is to make health and wellness products accessible, affordable, and convenient for everyone.
        </p>
        <p className="text-neutral-dark mb-4">
          <strong>Contact us:</strong>
          <br />
          Email: <a href="mailto:support@romspharma.com" className="text-primary underline">support@romspharma.com</a>
          <br />
          Phone: <a href="tel:+639123456789" className="text-primary underline">+63 912 345 6789</a>
        </p>
        <form className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Send us a message</h2>
          <div className="mb-3">
            <label className="block text-neutral-dark mb-1" htmlFor="contact-name">Name</label>
            <input className="w-full border border-neutral-light rounded px-3 py-2" id="contact-name" type="text" required />
          </div>
          <div className="mb-3">
            <label className="block text-neutral-dark mb-1" htmlFor="contact-email">Email</label>
            <input className="w-full border border-neutral-light rounded px-3 py-2" id="contact-email" type="email" required />
          </div>
          <div className="mb-3">
            <label className="block text-neutral-dark mb-1" htmlFor="contact-message">Message</label>
            <textarea className="w-full border border-neutral-light rounded px-3 py-2" id="contact-message" rows="3" required />
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 transition" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
