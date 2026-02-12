import { useState } from "react";

export default function QRScan({ setStep }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScanSuccess = async (qrData) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qr: qrData }),
      });

      if (!res.ok) throw new Error("Checkout failed");

      setStep("success");
    } catch (err) {
      setError("Invalid QR or already checked out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .qr-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #eef2f7, #f9fbfd);
          padding: 20px;
          font-family: system-ui, sans-serif;
        }

        .qr-card {
          background: white;
          width: 100%;
          max-width: 420px;
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
          text-align: center;
        }

        .qr-title {
          font-size: 22px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .qr-sub {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 24px;
        }

        .scan-area {
          border: 2px dashed #cbd5e1;
          border-radius: 12px;
          padding: 30px 20px;
          margin-bottom: 20px;
          background: #f8fafc;
        }

        .scan-area span {
          font-size: 40px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #0b5ed7;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        button:hover:not(:disabled) {
          background: #094db1;
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.15);
        }

        button:disabled {
          background: #9bbcf3;
          cursor: not-allowed;
        }

        .status {
          margin-top: 16px;
          font-size: 14px;
        }

        .error {
          color: #dc2626;
          background: #fee2e2;
          padding: 10px;
          border-radius: 6px;
        }

        .loading {
          color: #0b5ed7;
        }
      `}</style>

      <div className="qr-page">
        <div className="qr-card">
          <div className="qr-title">Scan Visitor QR</div>
          <div className="qr-sub">
            Point the camera at the visitor’s QR code to check them out
          </div>

          <div className="scan-area">
            <span>📷</span>
            <div style={{ marginTop: 8, fontSize: 13, color: "#64748b" }}>
              Camera scanner will appear here
            </div>
          </div>

          <button
            onClick={() => handleScanSuccess("TEST_QR_123")}
            disabled={loading}
          >
            {loading ? "Checking visitor…" : "Simulate QR Scan"}
          </button>

          <div className="status">
            {loading && <div className="loading">Processing checkout...</div>}
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
