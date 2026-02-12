import { useState } from "react";

/* -------- COUNTRY DATA (EXTENDED) -------- */
const COUNTRIES = [
  { code: "IN", name: "India", dial: "+91" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "VN", name: "Vietnam", dial: "+84" },
  { code: "ZW", name: "Zimbabwe", dial: "+263" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "JP", name: "Japan", dial: "+81" },
];

export default function WebCheckin({ open, onClose }) {
  const [dialOpen, setDialOpen] = useState(false);
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [phone, setPhone] = useState("");

  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        {/* HEADER */}
        <div style={header}>
          <h3 style={title}>Web Checkins</h3>
          <span style={close} onClick={onClose}>×</span>
        </div>

        <div style={body}>
          <div style={label}>Dial Code</div>

          {/* SINGLE INLINE FIELD */}
          <div style={inlineRow}>
            <span
              style={dial}
              onClick={() => setDialOpen(!dialOpen)}
            >
              {country.code} {country.dial} {country.name}
              <span style={arrow} />
            </span>

            <input
              style={phoneInput}
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* SINGLE UNDERLINE */}
          <div style={underline} />

          {/* DROPDOWN */}
          {dialOpen && (
            <div style={dropdown}>
              {COUNTRIES.map((c) => (
                <div
                  key={c.code}
                  style={item}
                  onClick={() => {
                    setCountry(c);
                    setDialOpen(false);
                  }}
                >
                  {c.code} {c.dial} {c.name}
                </div>
              ))}
            </div>
          )}

          {/* FOOTER */}
          <div style={footer}>
            <button style={nextBtn} disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------- STYLES -------- */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modal = {
  width: 560,
  background: "#fff",
  borderRadius: 4,
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  borderBottom: "1px solid #e5e7eb",
};

const title = {
  margin: 0,
  fontSize: 18,
  color: "#f97316",
  fontWeight: 500,
};

const close = {
  fontSize: 22,
  cursor: "pointer",
  color: "#f97316",
};

const body = {
  padding: 20,
};

const label = {
  fontSize: 12,
  color: "#9ca3af",
  marginBottom: 12,
};

const inlineRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const dial = {
  color: "#2563eb",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
};

const arrow = {
  marginLeft: 6,
  width: 0,
  height: 0,
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "6px solid #2563eb",
};

const phoneInput = {
  flex: 1,
  border: "none",
  outline: "none",
  fontSize: 14,
};

const underline = {
  height: 1,
  background: "#9ca3af",
  marginTop: 6,
};

const dropdown = {
  marginTop: 8,
  border: "1px solid #e5e7eb",
  maxHeight: 200,
  overflowY: "auto",
};

const item = {
  padding: "10px 14px",
  cursor: "pointer",
};

const footer = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 24,
};

const nextBtn = {
  padding: "8px 18px",
  border: "1px solid #d1d5db",
  background: "#fff",
  color: "#9ca3af",
  cursor: "not-allowed",
};
