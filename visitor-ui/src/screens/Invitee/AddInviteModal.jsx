import { X } from "lucide-react";

export default function AddInviteModal({ onClose }) {
    return (
        <div style={backdrop}>
            <div style={modal}>
                {/* Header */}
                <div style={header}>
                    <h2 style={title}>Add Invite Detail</h2>
                    <X size={22} style={{ cursor: "pointer" }} onClick={onClose} />
                </div>

                {/* Form wrapper to push content inward */}
                <div style={{ padding: "0 6px" }}>
                    <input placeholder="Name *" style={input} />
                    <input placeholder="Organization Name" style={input} />
                    <input placeholder="Email *" style={input} />

                    {/* Phone */}
                    <div style={{ display: "flex", gap: 12 }}>
                        <input
                            placeholder="+91"
                            style={{ ...input, maxWidth: 90, textAlign: "center" }}
                        />
                        <input
                            placeholder="Phone number *"
                            style={{ ...input, flex: 1 }}
                        />
                    </div>

                    {/* Host */}
                    <select style={{ ...input, color: "#0f172a" }}>
                        <option>Whom to meet *</option>
                    </select>

                    {/* Date + Time */}
                    <div style={{ display: "flex", gap: 12 }}>
                        <input
                            type="date"
                            style={{
                                ...input,
                                color: "#0f172a",
                            }}
                        />
                        <input
                            type="time"
                            style={{
                                ...input,
                                color: "#0f172a",
                            }}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div style={actions}>
                    <button style={cancelBtn} onClick={onClose}>
                        Cancel
                    </button>
                    <button style={sendBtn}>Send Invite</button>
                </div>
            </div>
        </div>
    );
}

/* ---------- Styles ---------- */

const backdrop = {
    position: "fixed",
    inset: 0,
    background: "rgba(15,23,42,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    zIndex: 50,
};

const modal = {
    background: "#fff",
    borderRadius: 22,
    width: "100%",
    maxWidth: 560,
    padding: "32px 36px 28px",
    boxShadow: "0 28px 80px rgba(0,0,0,0.28)",
};

const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
};

const title = {
    color: "#2563eb",
    fontSize: 24,
    fontWeight: 600,
};

const input = {
    width: "100%",
    padding: "14px 16px",
    marginBottom: 16,
    borderRadius: 14,
    border: "1px solid #e2e8f0",
    background: "#f8fafc",
    fontSize: 15,
    color: "#0f172a",
};

const actions = {
    display: "flex",
    justifyContent: "flex-end",
    gap: 16,
    marginTop: 28,
};

const cancelBtn = {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    padding: "12px 26px",
    borderRadius: 14,
    cursor: "pointer",
    fontSize: 15,
};

const sendBtn = {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "12px 26px",
    borderRadius: 14,
    cursor: "pointer",
    fontSize: 15,
    boxShadow: "0 8px 22px rgba(37,99,235,0.4)",
};
