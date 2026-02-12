import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Username and password required");
      return;
    }

    setLoading(true);

    // TEMP: simulate login
    setTimeout(() => {
      setLoading(false);
      onLogin?.(); // move to next step
    }, 1200);
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
          background: linear-gradient(135deg, #eef2f7, #f9fbfd);
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          width: 100%;
          max-width: 380px;
        }

        .card {
          background: white;
          padding: 32px;
          border-radius: 14px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.12);
        }

        .logo-space {
          height: 60px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-space img {
          max-height: 50px;
          max-width: 100%;
          object-fit: contain;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
          transition: border 0.2s, box-shadow 0.2s;
        }

        input:focus {
          outline: none;
          border-color: #0b5ed7;
          box-shadow: 0 0 0 2px rgba(11, 94, 215, 0.15);
        }

        button {
          width: 100%;
          padding: 12px;
          background: #0b5ed7;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.25s, transform 0.15s, box-shadow 0.15s;
        }

        button:hover:not(:disabled) {
          background: #094db1;
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
        }

        button:disabled {
          background: #9bbcf3;
          cursor: not-allowed;
        }

        .footer {
          margin-top: 16px;
          text-align: center;
          font-size: 13px;
          color: #64748b;
        }

        .footer a {
          color: #0b5ed7;
          text-decoration: none;
          cursor: pointer;
          font-weight: 500;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="page">
        <div className="container">
          <div className="card">
            {/* Company Logo */}
            <div className="logo-space">
              <img src="/Galaxy-full-logo.png" alt="Company Logo" />
            </div>

            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin} disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </button>

            <div className="footer">
              <a onClick={() => alert("Please contact system administrator")}>
                Contact admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
