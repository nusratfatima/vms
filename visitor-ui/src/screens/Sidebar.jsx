import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Menu,
    LayoutGrid,
    Users,
    BadgeCheck,
    BarChart3,
} from "lucide-react";

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    const linkStyle = ({ isActive }) => ({
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "10px 14px",
        borderRadius: 8,
        textDecoration: "none",
        color: isActive ? "#1d4ed8" : "#334155",
        background: isActive ? "#e0e7ff" : "transparent",
        fontWeight: isActive ? 600 : 500,
    });

    return (
        <aside
            style={{
                width: open ? 240 : 72,
                transition: "width 0.25s",
                background: "#f1f5f9",
                borderRight: "1px solid #e2e8f0",
                padding: 12,
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: open ? "space-between" : "center",
                    marginBottom: 24,
                }}
            >
                {open && (
                    <div style={{ fontWeight: 600, color: "#0f172a" }}>
                        📍 Mumbai
                    </div>
                )}
                <Menu
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(!open)}
                />
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <NavLink to="/dashboard" style={linkStyle}>
                    <LayoutGrid size={18} />
                    {open && "Dashboard"}
                </NavLink>

                <NavLink to="/invites" style={linkStyle}>
                    <Users size={18} />
                    {open && "Visitor Log"}
                </NavLink>

                <NavLink to="/passes" style={linkStyle}>
                    <BadgeCheck size={18} />
                    {open && "Pass Issued"}
                </NavLink>

                {/* Reporting Screen Added */}
                <NavLink to="/reports" style={linkStyle}>
                    <BarChart3 size={18} />
                    {open && "Reporting"}
                </NavLink>
            </nav>
        </aside>
    );
}
