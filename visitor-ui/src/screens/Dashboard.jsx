export default function Dashboard() {
    return (
        <div style={page}>
            {/* Header */}
            <div style={header}>
                <h1 style={welcome}>Welcome back, Nusrat Fatima</h1>

                <button style={filterBtn}>
                    Last 30 Days ⌄
                </button>
            </div>

            {/* Stats Cards */}
            <div style={cardGrid}>
                <StatCard title="Organization Occupancy" value="0" />
                <StatCard title="Visitors Peak Time" value="0" />
                <StatCard title="Total Invites" value="0" />
                <StatCard title="Busiest Week Day" value="-" />
            </div>

            {/* Charts Row 1 */}
            <div style={gridTwo}>
                <ChartCard title="Visitor">
                    <EmptyChart />
                </ChartCard>

                <ChartCard title="Employee With Most Visits">
                    <EmptyState text="No data available" />
                </ChartCard>
            </div>

            {/* Charts Row 2 */}
            <div style={gridTwo}>
                <ChartCard title="Visitor Count">
                    <EmptyChart />
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

function EmptyChart() {
    return (
        <div style={chartPlaceholder}>
            <div style={gridLines} />
            <span style={chartLabel}>Chart will appear here</span>
        </div>
    );
}

function EmptyState({ text }) {
    return (
        <div style={emptyState}>
            {text}
        </div>
    );
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

const filterBtn = {
    background: "#fb923c",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 8,
    fontSize: 14,
    cursor: "pointer",
};

const cardGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    marginBottom: 28,
};

const statCard = {
    background: "#fff",
    borderRadius: 14,
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
    borderRadius: 16,
    padding: 20,
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
    borderRadius: 12,
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
