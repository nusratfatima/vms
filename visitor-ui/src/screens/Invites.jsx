import { useState } from "react";
import AddInviteModal from "./AddInviteModal";

export default function Invites() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 28,
                    flexWrap: "wrap",
                    gap: 12,
                }}
            >
                <h1 style={{ fontSize: 32, fontWeight: 600, color: "#0f172a" }}>
                    Visitor Log
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    style={{
                        background: "#2563eb",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: 12,
                        fontWeight: 500,
                        cursor: "pointer",
                        boxShadow: "0 6px 18px rgba(37,99,235,0.35)",
                    }}
                >
                    + Add Invite
                </button>
            </div>

            {/* Table */}
            <div
                style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: 24,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    overflowX: "auto",
                }}
            >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ textAlign: "left", color: "#64748b" }}>
                            {[
                                "Name",
                                "Email",
                                "Phone",
                                "Appointment Date",
                                "Host",
                                "Status",
                                "Actions",
                            ].map((h) => (
                                <th
                                    key={h}
                                    style={{ paddingBottom: 14, fontWeight: 600 }}
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td
                                colSpan={7}
                                style={{
                                    textAlign: "center",
                                    padding: 48,
                                    color: "#94a3b8",
                                }}
                            >
                                No invites found
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {showModal && <AddInviteModal onClose={() => setShowModal(false)} />}
        </div>
    );
}
