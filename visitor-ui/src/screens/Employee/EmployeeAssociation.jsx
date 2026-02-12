import { useState } from "react";

export default function EmployeeAssociation({
  onClose,
  data = [],
  onExport,
}) {
  const pageSize = 10;
  const [page, setPage] = useState(0);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const start = page * pageSize;
  const end = start + pageSize;
  const pageData = data.slice(start, end);

  return (
    <div style={overlay}>
      <div style={modal}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ fontSize: 18, fontWeight: 600 }}>
            Employees Association
          </h2>

          {/* UPDATED EXPORT BUTTON */}
          <button onClick={onExport} style={exportBtn} title="Export CSV">
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >

              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </button>
        </div>

        {/* Table */}
        <div style={tableOuter}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Email</th>
                <th style={th}>Phone number</th>
                <th style={th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {pageData.length === 0 ? (
                <tr>
                  <td colSpan={4} style={empty}>
                    No employees associated
                  </td>
                </tr>
              ) : (
                pageData.map((item, idx) => (
                  <tr key={idx}>
                    <td style={td}>{item.name}</td>
                    <td style={td}>{item.email}</td>
                    <td style={td}>{item.phone}</td>
                    <td
                      style={{
                        ...td,
                        fontWeight: 600,
                        color:
                          item.status === "ACCEPTED"
                            ? "#16a34a"
                            : "#f59e0b",
                      }}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div style={footer}>
          <div style={footerText}>
            Items per page: 10 •{" "}
            {totalItems === 0
              ? "0"
              : `${start + 1}–${Math.min(end, totalItems)}`}{" "}
            of {totalItems}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <PageBtn
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
            >
              ‹
            </PageBtn>

            <PageBtn
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              ›
            </PageBtn>

            <button style={closeBtn} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Pagination Button (UPDATED) ---------- */

function PageBtn({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        border: "1px solid #cbd5e1",
        background: "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.35 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,        // ⬅ bigger arrows
        fontWeight: 600,
        color: "#334155",   // ⬅ darker
      }}
    >
      {children}
    </button>
  );
}

/* ---------- Styles ---------- */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 50,
};

const modal = {
  background: "#fff",
  width: "90%",
  maxWidth: 1100,
  borderRadius: 10,
  padding: 20,
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const exportBtn = {
  width: 38,
  height: 38,
  borderRadius: "50%",
  border: "1px solid #d1d5db",
  background: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#334155",
};

const tableOuter = {
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  overflowX: "auto",
};

const table = {
  width: "100%",
  minWidth: 900,
  borderCollapse: "collapse",
  tableLayout: "fixed",
};

const th = {
  padding: "12px 16px",
  textAlign: "left",
  background: "#f8fafc",
  borderBottom: "1px solid #e5e7eb",
  fontWeight: 600,
  color: "#334155",
};

const td = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  color: "#475569",
};

const empty = {
  padding: 40,
  textAlign: "center",
  color: "#94a3b8",
};

const footer = {
  marginTop: 16,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const footerText = {
  fontSize: 12,
  color: "#64748b",
};

const closeBtn = {
  border: "1px solid #d1d5db",
  background: "#fff",
  padding: "6px 14px",
  borderRadius: 6,
  cursor: "pointer",
};
