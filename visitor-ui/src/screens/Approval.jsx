import { useState } from "react";

function Approval({ setStep, visitId }) {
  const [status, setStatus] = useState("waiting");

  return (
    <div style={styles.screen}>
      {status === "waiting" && (
        <>
          <div style={styles.spinner} />
          <h2 style={styles.title}>Waiting for approval…</h2>
          <p style={styles.subtext}>Visit ID: {visitId}</p>

          {/* TEMP simulate button */}
          <button
            style={styles.button}
            onClick={() => setStatus("approved")}
          >
            Approve (Simulate)
          </button>
        </>
      )}

      {status === "approved" && (
        <>
          <div style={styles.circle}>✓</div>
          <h2 style={styles.title}>Approved</h2>

          <button
            style={{ ...styles.button, marginTop: 24 }}
            onClick={() => setStep("success")}
          >
            Proceed
          </button>
        </>
      )}
    </div>
  );
}

export default Approval;

const styles = {
  screen: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8fafc",
    textAlign: "center",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  title: {
    fontSize: 28,
    margin: "16px 0 4px",
    color: "#0f172a",
  },
  subtext: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 24,
  },
  button: {
    padding: "10px 18px",
    fontSize: 14,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "white",
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    background: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 80,
    fontWeight: "bold",
    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.35)",
    marginBottom: 16,
  },
  spinner: {
    width: 48,
    height: 48,
    border: "5px solid #cbd5f5",
    borderTop: "5px solid #2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
