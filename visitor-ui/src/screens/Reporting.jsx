import { useState } from "react";

export default function Reporting() {
    const [activeTab, setActiveTab] = useState("visitors");
    const [search, setSearch] = useState("");
    const [range, setRange] = useState("30");

    return (
        <div style={{ padding: 24 }}>
            {/* 🔒 Kill browser focus outline globally for this page */}
            <style>
                {`
                button:focus {
                    outline: none;
                }
                button:active {
                    outline: none;
                }
                `}
            </style>

            {/* Header */}
            <div style={headerRow}>
                <h2 style={title}>Reporting</h2>

                <div style={{ display: "flex", gap: 12 }}>
                    <input
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={inputStyle}
                    />

                    <select
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                        style={blueSelect}
                    >
                        <option value="7">Last 7 Days</option>
                        <option value="30">Last 30 Days</option>
                        <option value="90">Last 90 Days</option>
                    </select>
                </div>
            </div>

            {/* Tabs */}
            <div style={tabsContainer}>
                <div style={tabsRow}>
                    <button
                        onClick={() => setActiveTab("visitors")}
                        style={tabText(activeTab === "visitors")}
                    >
                        Visitor Report
                    </button>

                    <button
                        onClick={() => setActiveTab("employees")}
                        style={tabText(activeTab === "employees")}
                    >
                        Employees Report
                    </button>
                </div>

                <div style={tabTrack}>
                    <div
                        style={{
                            ...tabIndicator,
                            transform:
                                activeTab === "visitors"
                                    ? "translateX(0)"
                                    : "translateX(160px)",
                        }}
                    />
                </div>
            </div>

            {/* Actions (Export only) */}
            <div style={actionsRow}>
                <div style={actionItem}>
                    <button style={circleBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path
                                d="M12 3v12m0 0l4-4m-4 4l-4-4"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                            <rect
                                x="4"
                                y="19"
                                width="16"
                                height="2"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                    <span style={actionLabel}>Export</span>
                </div>
            </div>

            {/* Table */}
            <div style={card}>
                <table width="100%" style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={thead}>
                            {activeTab === "visitors" ? (
                                <>
                                    <th style={th}>Name</th>
                                    <th style={th}>Email</th>
                                    <th style={th}>Phone Number</th>
                                    <th style={th}>Count</th>
                                    <th style={th}>First Check-in</th>
                                    <th style={th}>Last Check-in</th>
                                </>
                            ) : (
                                <>
                                    <th style={th}>Employee</th>
                                    <th style={th}>Department</th>
                                    <th style={th}>Visitors Hosted</th>
                                    <th style={th}>Last Visitor</th>
                                </>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td
                                colSpan={activeTab === "visitors" ? 6 : 4}
                                style={emptyState}
                            >
                                No data matching the filter
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Footer */}
                <div style={footer}>
                    <span>Items per page:</span>

                    <select style={smallSelect}>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>

                    <span>0 of 0</span>

                    <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                        <button style={pageBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <path
                                    d="M15 18l-6-6 6-6"
                                    stroke="#374151"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        </button>
                        <button style={pageBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <path
                                    d="M9 6l6 6-6 6"
                                    stroke="#374151"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------------- STYLES ---------------- */

const headerRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
};

const title = {
    fontWeight: 700,
    color: "#111827",
};

const inputStyle = {
    height: 38,
    padding: "0 12px",
    border: "1px solid #d1d5db",
    borderRadius: 4,
    width: 260,
};

const blueSelect = {
    height: 38,
    padding: "0 12px",
    borderRadius: 4,
    border: "1px solid #2563eb",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
};

const tabsContainer = { marginBottom: 16 };
const tabsRow = { display: "flex", gap: 48 };

const tabText = (active) => ({
    background: "none",
    border: "none",
    padding: "6px 0",
    fontSize: 16,
    fontWeight: 600,
    color: active ? "#111827" : "#9ca3af",
    cursor: "pointer",

    outline: "none",
    boxShadow: "none",
    borderRadius: 0,
});

const tabTrack = {
    position: "relative",
    height: 2,
    background: "#e5e7eb",
    marginTop: 6,
};

const tabIndicator = {
    position: "absolute",
    left: 0,
    width: 120,
    height: 2,
    background: "#2563eb",
    transition: "transform 200ms ease",
};

const actionsRow = {
    display: "flex",
    justifyContent: "flex-end",
    gap: 24,
    marginBottom: 12,
};

const actionItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
};

const circleBtn = {
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "none",
    background: "#9ca3af",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};

const actionLabel = {
    fontSize: 12,
    color: "#6b7280",
};

const card = {
    background: "#fff",
    border: "1px solid #e5e7eb",
};

const thead = { background: "#f9fafb" };

const th = {
    padding: "12px 14px",
    fontWeight: 600,
    borderBottom: "1px solid #e5e7eb",
};

const emptyState = {
    padding: 36,
    textAlign: "center",
    color: "#6b7280",
};

const footer = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderTop: "1px solid #e5e7eb",
    color: "#6b7280",
};

const smallSelect = {
    padding: "4px 8px",
    border: "1px solid #d1d5db",
    borderRadius: 4,
};

const pageBtn = {
    width: 44,
    height: 44,
    border: "1px solid #d1d5db",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};
