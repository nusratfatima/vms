import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
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
        justifyContent: open ? "flex-start" : "center",
        gap: open ? 14 : 0,
        padding: "10px 14px",
        borderRadius: 10,
        textDecoration: "none",
        color: isActive ? "#1d4ed8" : "#334155",
        background: isActive ? "#e0e7ff" : "transparent",
        fontWeight: isActive ? 600 : 500,
    });

    return (
        <aside
            style={{
                width: open ? 240 : 72,
                transition: "width 0.25s ease",
                background: "#f1f5f9",
                borderRight: "1px solid #e2e8f0",
                padding: 12,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}
            <div
                style={{
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: open ? "space-between" : "center",
                    marginBottom: 28,
                }}
            >
                <div
                    onClick={() => setOpen(!open)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        cursor: "pointer",
                    }}
                >
                    <img
                        src="/Galaxy-logo.png"
                        alt="Company Logo"
                        style={{
                            height: 32,
                            width: 32,
                            objectFit: "contain",
                        }}
                    />

                    {open && (
                        <span
                            style={{
                                fontWeight: 600,
                                fontSize: 16,
                                color: "#0f172a",
                                whiteSpace: "nowrap",
                            }}
                        >
                            📍 Mumbai
                        </span>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                }}
            >
                <NavLink to="/dashboard" style={linkStyle}>
                    <LayoutGrid size={20} />
                    {open && "Dashboard"}
                </NavLink>

                <NavLink to="/invites" style={linkStyle}>
                    <Users size={20} />
                    {open && "Visitor Log"}
                </NavLink>

                <NavLink to="/passes" style={linkStyle}>
                    <BadgeCheck size={20} />
                    {open && "Pass Issued"}
                </NavLink>

                <NavLink to="/reports" style={linkStyle}>
                    <BarChart3 size={20} />
                    {open && "Reporting"}
                </NavLink>
            </nav>
        </aside>
    );
}
