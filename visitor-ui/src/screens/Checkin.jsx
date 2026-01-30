import { useState } from "react";

export default function Checkin({ setStep, setVisitId }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckin = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/visits/checkin/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            company,
            purpose,
            host_id: 1, // 🔴 TEMP: replace with real host later
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setVisitId(data.visit_id);
        setStep("approval"); // 👉 move to waiting/approval screen
      } else {
        alert("Check-in failed");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Visitor Check-in</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /><br /><br />

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      /><br /><br />

      <input
        placeholder="Purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
      /><br /><br />

      <button onClick={handleCheckin} disabled={loading}>
        {loading ? "Checking in..." : "Check In"}
      </button>
    </div>
  );
}
