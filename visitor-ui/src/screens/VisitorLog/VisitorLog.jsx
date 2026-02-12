import { useState } from "react";
import { UserPlus, Ticket } from "lucide-react";
import WebCheckin from "./WebCheckinModal";

export default function VisitorLog() {
  const [showCheckin, setShowCheckin] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);

  const visitors = [
    {
      name: "Riya Maji",
      phone: "+918649238402",
      host: "Nusrat Fatima",
      source: "WEB",
      checkin: "Feb 5, 2026, 7:59:53 AM",
      status: "NOT APPLICABLE",
    },
    {
      name: "Nusrat",
      phone: "+919167264382",
      host: "Nusrat Fatima",
      source: "WEB",
      checkin: "—",
      status: "—",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {/* Header */}
      <div style={header}>
        <h2 style={{ margin: 0 }}>Visitor Log</h2>

        <div style={{ display: "flex", gap: 10 }}>
          <input placeholder="Search..." style={searchInput} />
          <button style={rangeBtn}>Last 30 Days</button>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <button style={primaryBtn} onClick={() => setShowCheckin(true)}>
          <UserPlus size={16} style={{ marginRight: 8 }} />
          Web Check-in
        </button>

        <button style={secondaryBtn}>
          <Ticket size={16} style={{ marginRight: 8 }} />
          Invite Code
        </button>
      </div>

      <WebCheckin open={showCheckin} onClose={() => setShowCheckin(false)} />

      {/* Table */}
      <div style={card}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Visitor Name</th>
              <th style={th}>Phone Number</th>
              <th style={th}>Host</th>
              <th style={th}>Source</th>
              <th style={{ ...th, textAlign: "center", width: 80 }}>
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            {visitors.map((v, i) => (
              <>
                <tr key={i}>
                  <td style={td}>{v.name}</td>
                  <td style={td}>{v.phone}</td>
                  <td style={td}>{v.host}</td>
                  <td style={td}>
                    <span style={badge}>{v.source}</span>
                  </td>
                  <td style={{ ...td, textAlign: "center" }}>
                    <button
                      style={expandBtn}
                      onClick={() =>
                        setExpandedRow(expandedRow === i ? null : i)
                      }
                    >
                      {expandedRow === i ? "▲" : "▼"}
                    </button>
                  </td>
                </tr>

                {expandedRow === i && (
                  <tr>
                    <td colSpan={5} style={detailRow}>
                      <div style={detailGrid}>
                        <div>
                          <div style={label}>Check-in / Checkout</div>
                          <div style={green}>{v.checkin}</div>
                        </div>

                        <div>
                          <div style={label}>Approval Status</div>
                          <div style={muted}>{v.status}</div>
                        </div>

                        <div style={{ display: "flex", gap: 10 }}>
                          <button style={printBtn}>Print Badge</button>
                          <button style={checkoutBtn}>Checkout</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const searchInput = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid #c7d2fe",
  outline: "none",
};

const rangeBtn = {
  padding: "8px 14px",
  borderRadius: 8,
  background: "#2563eb",
  color: "#fff",
  border: "none",
  fontWeight: 500,
};

const primaryBtn = {
  padding: "8px 14px",
  borderRadius: 8,
  background: "#2563eb",
  color: "#fff",
  border: "none",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const secondaryBtn = {
  padding: "8px 14px",
  borderRadius: 8,
  background: "#fff",
  color: "#2563eb",
  border: "1px solid #c7d2fe",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const card = {
  background: "#fff",
  borderRadius: 14,
  boxShadow: "0 6px 18px rgba(37,99,235,0.08)",
  overflow: "hidden",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  tableLayout: "fixed",
};

const th = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 13,
  fontWeight: 600,
  color: "#475569",
  background: "#f8fafc",
  borderBottom: "1px solid #e5e7eb",
};

const td = {
  padding: "12px 16px",
  fontSize: 14,
  color: "#0f172a",
  borderBottom: "1px solid #e5e7eb",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const badge = {
  padding: "4px 12px",
  borderRadius: 999,
  background: "#e0e7ff",
  color: "#2563eb",
  fontSize: 12,
  fontWeight: 600,
  display: "inline-block",
};

const expandBtn = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#e0e7ff",
  color: "#2563eb",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 17,
  lineHeight: 1,
  padding: 0,
};

const detailRow = {
  background: "#f8fafc",
  padding: 20,
};

const detailGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr auto",
  alignItems: "center",
  gap: 24,
};

const label = {
  fontSize: 12,
  color: "#64748b",
  marginBottom: 4,
};

const muted = {
  color: "#475569",
  fontWeight: 500,
};

const green = {
  color: "#16a34a",
  fontWeight: 600,
};

const printBtn = {
  padding: "8px 14px",
  borderRadius: 8,
  border: "1px solid #c7d2fe",
  background: "#fff",
  color: "#2563eb",
  fontWeight: 500,
};

const checkoutBtn = {
  padding: "8px 14px",
  borderRadius: 8,
  background: "#f97316",
  color: "#fff",
  border: "none",
  fontWeight: 500,
};
