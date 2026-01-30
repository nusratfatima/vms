import { useState } from "react";

export default function Checkin({ setStep, setVisitId }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckin = async () => {
    if (!name || !phone) {
      alert("Name and phone are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/visits/checkin/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            company,
            purpose,
            host_id: 1,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setVisitId(data.visit_id);
        setStep("approval");
      } else {
        alert("Check-in failed");
      }
    } catch {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: system-ui, sans-serif;
          background: #f4f7fb;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          width: 100%;
          max-width: 420px;
          padding: 20px;
        }

        .logo {
          text-align: center;
          margin-bottom: 20px;
          color: #0b5ed7;
          font-size: 22px;
          font-weight: 600;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.12);
        }

        .card h1 {
          text-align: center;
          color: #0b5ed7;
          margin-bottom: 24px;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        input:focus {
          outline: none;
          border-color: #0b5ed7;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
        }

        button:hover {
          background: #b02a37;
          transform: translateY(-1px);
        }

        button:disabled {
          background: #e99aa3;
          cursor: not-allowed;
        }
      `}</style>

      <div className="page">
        <div className="container">
          <div className="logo">Visitor Management System</div>

          <div className="card">
            <h1>Visitor Check-In</h1>

            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              placeholder="Company / Organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <input
              placeholder="Purpose of Visit"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />

            <button onClick={handleCheckin} disabled={loading}>
              {loading ? "Checking in..." : "Check In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
