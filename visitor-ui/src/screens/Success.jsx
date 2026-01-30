import { useEffect } from "react";

export default function Success({ onReset }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="screen center">
      <h1>✅ Checked out successfully</h1>
      <p>Redirecting to check-in...</p>
    </div>
  );
}
