import { useState } from "react";

export default function QRScan({ setStep }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScanSuccess = async (qrData) => {
    try {
      setLoading(true);

      // 🔗 CALL CHECKOUT API
      const res = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qr: qrData }),
      });

      if (!res.ok) {
        throw new Error("Checkout failed");
      }

      // ✅ SUCCESS → MOVE TO SUCCESS SCREEN
      setStep("success");

    } catch (err) {
      setError("Invalid QR or already checked out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="screen center">
      <h2>Scan Visitor QR</h2>

      {/* TEMP BUTTON (for testing without camera) */}
      <button
        onClick={() => handleScanSuccess("TEST_QR_123")}
        disabled={loading}
      >
        {loading ? "Checking..." : "Simulate QR Scan"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
