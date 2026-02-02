import { useEffect } from "react";

export default function Success({ onReset }) {
  useEffect(() => {
    const timer = setTimeout(onReset, 5000);
    return () => clearTimeout(timer);
  }, [onReset]);

  return (
    <div style={styles.screen}>
      <div style={styles.circle}>
        ✓
      </div>

      <h1 style={styles.title}>Checked out successfully</h1>
      <p style={styles.subtitle}>Redirecting to check-in…</p>
    </div>
  );
}

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
  circle: {
    width: 160,
    height: 160,
    borderRadius: "50%",
    background: "#2563eb", // blue
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 90,
    fontWeight: "bold",
    marginBottom: 24,
    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.35)",
  },
  title: {
    fontSize: 32,
    margin: 0,
    color: "#0f172a",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#475569",
  },
};
