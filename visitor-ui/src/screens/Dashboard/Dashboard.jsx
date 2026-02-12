import { useState } from "react";

export default function Dashboard() {
    const [range, setRange] = useState("30d");

    const rangeLabelMap = {
        "1h": "Last 1 Hour",
        "3h": "Last 3 Hours",
        "6h": "Last 6 Hours",
        "12h": "Last 12 Hours",

        "1d": "Last 1 Day",
        "7d": "Last 7 Days",
        "15d": "Last 15 Days",
        "30d": "Last 30 Days",

        "3m": "Last 3 Months",
        "6m": "Last 6 Months",
        "9m": "Last 9 Months",
        "1y": "Last 1 Year",
        "3y": "Last 3 Years",
        "5y": "Last 5 Years",
    };

    const rangeLabel = rangeLabelMap[range];

    return (
        <div style={page}>
            {/* Header */}
            <div style={header}>
                <h1 style={welcome}>Welcome back, Nusrat Fatima</h1>

                <select
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    style={filterSelect}
                >
                    <optgroup label="Hours">
                        <option value="1h">Last 1 Hour</option>
                        <option value="3h">Last 3 Hours</option>
                        <option value="6h">Last 6 Hours</option>
                        <option value="12h">Last 12 Hours</option>
                    </optgroup>

                    <optgroup label="Days">
                        <option value="1d">Last 1 Day</option>
                        <option value="7d">Last 7 Days</option>
                        <option value="15d">Last 15 Days</option>
                        <option value="30d">Last 30 Days</option>
                    </optgroup>

                    <optgroup label="Months / Years">
                        <option value="3m">Last 3 Months</option>
                        <option value="6m">Last 6 Months</option>
                        <option value="9m">Last 9 Months</option>
                        <option value="1y">Last 1 Year</option>
                        <option value="3y">Last 3 Years</option>
                        <option value="5y">Last 5 Years</option>
                    </optgroup>
                </select>
            </div>

            {/* Stats */}
            <div style={cardGrid}>
                <StatCard title="Organization Occupancy" value="0" />
                <StatCard title="Visitors Peak Time" value="0" />
                <StatCard title="Total Invites" value="0" />
                <StatCard title="Busiest Week Day" value="-" />
            </div>

            {/* Charts */}
            <div style={gridTwo}>
                <ChartCard title="Visitor">
                    <EmptyChart label={`Visitors (${rangeLabel})`} />
                </ChartCard>

                <ChartCard title="Employee With Most Visits">
                    <EmptyState text="No data available" />
                </ChartCard>
            </div>

            <div style={gridTwo}>
                <ChartCard title="Visitor Count">
                    <EmptyChart label={`Visitor Count (${rangeLabel})`} />
                </ChartCard>

                <ChartCard title="Top Visits">
                    <EmptyState text="No visits yet" />
                </ChartCard>
            </div>
        </div>
    );
}

/* ---------- Components ---------- */

function StatCard({ title, value }) {
    return (
        <div style={statCard}>
            <div style={statValue}>{value}</div>
            <div style={statTitle}>{title}</div>
        </div>
    );
}

function ChartCard({ title, children }) {
    return (
        <div style={chartCard}>
            <h3 style={chartTitle}>{title}</h3>
            {children}
        </div>
    );
}

function EmptyChart({ label }) {
    return (
        <div style={chartPlaceholder}>
            <div style={gridLines} />
            <span style={chartLabel}>{label}</span>
        </div>
    );
}

function EmptyState({ text }) {
    return <div style={emptyState}>{text}</div>;
}

/* ---------- Styles ---------- */

const page = {
    padding: "28px",
    background: "#f8fafc",
    minHeight: "100vh",
};

const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
};

const welcome = {
    fontSize: 28,
    fontWeight: 500,
    color: "#0f172a",
};

/* 🔵 Advanced Blue Filter */
const filterSelect = {
    appearance: "none",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 10,
    fontSize: 14,
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(37,99,235,0.35)",
};

const cardGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    marginBottom: 28,
};

const statCard = {
    background: "#fff",
    borderRadius: 16,
    padding: "22px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
};

const statValue = {
    fontSize: 36,
    fontWeight: 600,
    color: "#334155",
    marginBottom: 6,
};

const statTitle = {
    fontSize: 15,
    color: "#64748b",
};

const gridTwo = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 22,
    marginBottom: 22,
};

const chartCard = {
    background: "#fff",
    borderRadius: 18,
    padding: 22,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    minHeight: 260,
};

const chartTitle = {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 500,
    color: "#334155",
};

const chartPlaceholder = {
    height: "180px",
    borderRadius: 14,
    background: "#f1f5f9",
    position: "relative",
    overflow: "hidden",
};

const gridLines = {
    position: "absolute",
    inset: 0,
    background:
        "linear-gradient(to top, rgba(0,0,0,0.05) 1px, transparent 1px)",
    backgroundSize: "100% 24px",
};

const chartLabel = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8",
    fontSize: 14,
};

const emptyState = {
    height: "180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8",
    fontSize: 15,
};
