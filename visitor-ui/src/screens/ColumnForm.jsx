import React from "react";

export default function ColumnForm({
    open,
    onClose,
    columns,
    setColumns,
    onSave,
}) {
    if (!open) return null;

    const toggle = (key) => {
        setColumns((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div style={overlay}>
            <div style={modal}>
                {/* Header */}
                <div style={header}>
                    <h3 style={title}>Table Columns</h3>
                    <button style={closeBtn} onClick={onClose}>
                        ×
                    </button>
                </div>

                <p style={subtitle}>
                    Select columns to appear in table
                </p>

                {/* Columns */}
                <div style={grid}>
                    <div style={row} onClick={() => toggle("name")}>
                        <input type="checkbox" checked={columns.name} readOnly />
                        <span>Name</span>
                    </div>

                    <div style={row} onClick={() => toggle("email")}>
                        <input type="checkbox" checked={columns.email} readOnly />
                        <span>Email</span>
                    </div>

                    <div style={row} onClick={() => toggle("phone")}>
                        <input type="checkbox" checked={columns.phone} readOnly />
                        <span>Phone Number</span>
                    </div>

                    <div style={row} onClick={() => toggle("count")}>
                        <input type="checkbox" checked={columns.count} readOnly />
                        <span>Count</span>
                    </div>

                    <div style={row} onClick={() => toggle("checkin")}>
                        <input type="checkbox" checked={columns.checkin} readOnly />
                        <span>First / Last Check-in</span>
                    </div>
                </div>

                {/* Footer */}
                <div style={footer}>
                    <button style={saveBtn} onClick={onSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ---------------- STYLES (FIXED) ---------------- */

const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(15,23,42,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modal = {
    width: 600,
    background: "#fff",
    borderRadius: 10,
    padding: "28px 32px",
};

const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const title = {
    margin: 0,
    fontSize: 24,
    fontWeight: 700,
    color: "#2563eb",
};

const closeBtn = {
    background: "none",
    border: "none",
    fontSize: 28,
    color: "#64748b",
    cursor: "pointer",
};

const subtitle = {
    margin: "12px 0 28px",
    fontSize: 15,
    color: "#64748b",
};

/* 🔥 THIS IS THE IMPORTANT PART */
const grid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "22px 40px",
};

const row = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 16,
    color: "#334155",
    cursor: "pointer",
};

const footer = {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 36,
};

const saveBtn = {
    padding: "12px 32px",
    background: "#2563eb",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
};
