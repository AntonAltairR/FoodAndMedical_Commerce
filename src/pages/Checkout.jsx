import { useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import html2canvas from "html2canvas";
import { useToast } from "../components/ToastProvider";

const COD_FEE = 250;

export default function Checkout() {
  const { items, clearCart } = useCart();
  const { showToast } = useToast();
  const receiptRef = useRef();
  const [orderNum] = useState(() => "ORD-" + Date.now());

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = subtotal + COD_FEE;

  const handlePlaceOrder = async () => {
    if (items.length === 0) {
      showToast("Your cart is empty.");
      return;
    }
    // Wait for DOM to render
    setTimeout(async () => {
      const canvas = await html2canvas(receiptRef.current, { backgroundColor: "#fff", scale: 2 });
      const link = document.createElement("a");
      link.download = `receipt-${orderNum}.jpg`;
      link.href = canvas.toDataURL("image/jpeg", 0.98);
      link.click();
      showToast("Receipt saved! Please send it to the owner.");
      clearCart();
    }, 100);
  };

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Checkout</h1>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div
          ref={receiptRef}
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(44,122,123,0.10)",
            padding: 32,
            marginBottom: 24,
            color: "#222",
            fontFamily: "Arial, sans-serif"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <img src="/images/Logo.jpg" alt="AAD Quali-1st Trading OPC Logo" style={{ width: 64, height: 64, borderRadius: 8, marginBottom: 8 }} />
            <div style={{ fontWeight: "bold", fontSize: 22, color: "#2c7a7b" }}>AAD Quali-1st Trading OPC</div>
            <div style={{ fontSize: 14, color: "#888" }}>Order Receipt</div>
          </div>
          <div style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>
            Order #: <b>{orderNum}</b><br />
            Date: {new Date().toLocaleString()}
          </div>
          <table style={{ width: "100%", marginBottom: 12, fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Product</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td style={{ textAlign: "center" }}>{item.quantity}</td>
                  <td>₱{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ borderTop: "1px dashed #bbb", margin: "12px 0" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
            <span>Subtotal</span>
            <span>₱{subtotal}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
            <span>Cash on Delivery Fee</span>
            <span>₱{COD_FEE}</span>
          </div>
          <div style={{ borderTop: "2px solid #2c7a7b", margin: "12px 0" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: 18, color: "#2c7a7b" }}>
            <span>Grand Total</span>
            <span>₱{grandTotal}</span>
          </div>
        </div>
        <button
          onClick={handlePlaceOrder}
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #2c7a7b 60%, #38b2ac 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            border: "none",
            borderRadius: 8,
            padding: "16px 0",
            boxShadow: "0 2px 8px rgba(44,122,123,0.10)",
            cursor: "pointer"
          }}
        >
          Place Order & Download Receipt
        </button>
      </div>
    </div>
  );
}
