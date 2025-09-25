import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, duration = 2000) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 9999,
            background: "linear-gradient(90deg, #2c7a7b 60%, #38b2ac 100%)",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: 8,
            boxShadow: "0 4px 16px rgba(44,122,123,0.18)",
            fontWeight: "bold",
            fontSize: 18,
            letterSpacing: 0.5,
            opacity: 0.97,
            transition: "opacity 0.2s"
          }}
        >
          {toast}
        </div>
      )}
    </ToastContext.Provider>
  );
}
