import { useState, useMemo } from "react";

export default function PassIssued() {
    const [passes] = useState([]); // Will be filled from backend later
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [hostFilter, setHostFilter] = useState("all");

    const hosts = useMemo(
        () => [...new Set(passes.map((p) => p.host))],
        [passes]
    );

    const filteredPasses = useMemo(() => {
        const term = search.toLowerCase();

        return passes.filter((p) => {
            const matchesSearch =
                p.name?.toLowerCase().includes(term) ||
                p.email?.toLowerCase().includes(term) ||
                p.phone?.includes(term);

            const matchesStatus =
                statusFilter === "all" || p.status === statusFilter;

            const matchesHost =
                hostFilter === "all" || p.host === hostFilter;

            return matchesSearch && matchesStatus && matchesHost;
        });
    }, [passes, search, statusFilter, hostFilter]);

    const statusBadge = (status) => {
        const styles = {
            issued: { bg: "#dbeafe", color: "#1e3a8a" },
            "checked-in": { bg: "#dcfce7", color: "#166534" },
            "checked-out": { bg: "#fee2e2", color: "#991b1b" },
            expired: { bg: "#fef3c7", color: "#92400e" },
        };
        if (!styles[status]) return null;

        return (
            <span
                style={{
                    padding: "4px 10px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    background: styles[status].bg,
                    color: styles[status].color,
                    textTransform: "capitalize",
                }}
            >
                {status.replace("-", " ")}
            </span>
        );
    };

    return (
        <div style={{ padding: 24 }}>
            <h2 style={{ marginBottom: 20, color: "#0f172a" }}>Pass Issued</h2>

            {/* Filters */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 24,
                }}
            >
                <input
                    type="text"
                    placeholder="Search by name, email, phone"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={inputStyle}
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    style={selectStyle}
                >
                    <option value="all">All Passes</option>
                    <option value="issued">Issued</option>
                    <option value="checked-in">Checked In</option>
                    <option value="checked-out">Checked Out</option>
                    <option value="expired">Expired</option>
                </select>

                <select
                    value={hostFilter}
                    onChange={(e) => setHostFilter(e.target.value)}
                    style={selectStyle}
                >
                    <option value="all">All Employees</option>
                    {hosts.map((host) => (
                        <option key={host} value={host}>
                            {host}
                        </option>
                    ))}
                </select>
            </div>

            {/* Table Card */}
            <div
                style={{
                    background: "white",
                    borderRadius: 16,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    overflow: "hidden",
                }}
            >
                <table width="100%" style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ background: "#f1f5f9", textAlign: "left" }}>
                            <th style={th}>Name</th>
                            <th style={th}>Email</th>
                            <th style={th}>Phone</th>
                            <th style={th}>Host</th>
                            <th style={th}>Status</th>
                            <th style={th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPasses.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="6"
                                    style={{
                                        textAlign: "center",
                                        padding: 40,
                                        color: "#64748b",
                                    }}
                                >
                                    No passes found
                                </td>
                            </tr>
                        ) : (
                            filteredPasses.map((p) => (
                                <tr key={p.id} style={{ borderTop: "1px solid #f1f5f9" }}>
                                    <td style={td}>{p.name}</td>
                                    <td style={td}>{p.email}</td>
                                    <td style={td}>{p.phone}</td>
                                    <td style={td}>{p.host}</td>
                                    <td style={td}>{statusBadge(p.status)}</td>
                                    <td style={td}>
                                        <button style={btn}>View QR</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const inputStyle = {
    height: 40,
    padding: "0 14px",
    borderRadius: 10,
    border: "1px solid #cbd5e1",
    width: 280,
    background: "#ffffff",
    color: "#0f172a",
    fontSize: 14,
};

const selectStyle = {
    height: 40,
    padding: "0 12px",
    borderRadius: 10,
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#0f172a",
    fontSize: 14,
    minWidth: 160,
};

const th = {
    padding: "14px 16px",
    fontSize: 14,
    fontWeight: 600,
    color: "#0f172a",
};

const td = {
    padding: "14px 16px",
    fontSize: 14,
    color: "#0f172a",
};

const btn = {
    padding: "6px 12px",
    borderRadius: 8,
    border: "1px solid #cbd5e1",
    background: "#f1f5f9",
    color: "#0f172a",
    cursor: "pointer",
    fontSize: 13,
};
