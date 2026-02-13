import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Mail,
  BadgeCheck,
  BarChart3,
  User,
} from "lucide-react";

/* ---------- Menu Config ---------- */

const visitorMenu = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/visitors", label: "Visitor Log", icon: Users },
  { to: "/invites", label: "Invite", icon: Mail },
  { to: "/passes", label: "Pass Issued", icon: BadgeCheck },
  { to: "/reports", label: "Reporting", icon: BarChart3 },
];

const employeeMenu = [
  { to: "/employee", label: "Employee", icon: User },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [role, setRole] = useState("visitor");

  const menu = role === "visitor" ? visitorMenu : employeeMenu;

  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: open ? "flex-start" : "center",
    gap: open ? 12 : 0,
    padding: open ? "12px 14px" : "12px 0",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 500,
    color: isActive ? "#2563eb" : "#475569",
    background: isActive ? "#eff6ff" : "transparent",
    transition: "all 0.2s ease",
    margin: open ? "0" : "0 6px",
  });

  return (
    <aside
      style={{
        width: open ? 250 : 64,
        transition: "width 0.25s ease",
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: open ? "stretch" : "center",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-start" : "center",
          gap: 10,
          marginBottom: 24,
          cursor: "pointer",
        }}
      >
        <img
          src="/Galaxy-logo.png"
          alt="Logo"
          style={{ width: 32, height: 32 }}
        />
        {open && (
          <span
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#2563eb",
              whiteSpace: "nowrap",
            }}
          >
            Galaxy VMS
          </span>
        )}
      </div>

      {/* Location */}
      {open && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            marginBottom: 18,
            borderRadius: 8,
            background: "#f8fafc",
            fontSize: 14,
            color: "#334155",
          }}
        >
          📍 Mumbai
        </div>
      )}

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          flex: 1,
          width: "100%",
        }}
      >
        {menu.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} style={linkStyle}>
            <Icon size={20} />
            {open && label}
          </NavLink>
        ))}
      </nav>

      {/* Role Switch */}
      <div
        style={{
          display: "flex",
          flexDirection: open ? "row" : "column",
          gap: 6,
          padding: 6,
          background: "#f8fafc",
          borderRadius: 10,
          width: open ? "100%" : "auto",
        }}
      >
        <button
          onClick={() => setRole("visitor")}
          style={roleBtn(role === "visitor", open)}
        >
          {open ? "Visitor" : "V"}
        </button>

        <button
          onClick={() => setRole("employee")}
          style={roleBtn(role === "employee", open)}
        >
          {open ? "Employee" : "E"}
        </button>
      </div>
    </aside>
  );
}

/* ---------- Helpers ---------- */

function roleBtn(active, open) {
  return {
    flex: open ? 1 : "none",
    padding: open ? "8px 0" : "8px",
    minWidth: open ? "auto" : 32,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    background: active ? "#2563eb" : "transparent",
    color: active ? "#fff" : "#475569",
    transition: "all 0.2s ease",
  };
}
