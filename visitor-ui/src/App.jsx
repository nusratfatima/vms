import {
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";

import Checkin from "./screens/Checkin";
import Approval from "./screens/Approval";
import Success from "./screens/Success";
import Invites from "./screens/Invites";
import Sidebar from "./screens/Sidebar";

/* ---------- Wrapper for Approval ---------- */
function ApprovalWrapper() {
  const { visitId } = useParams();
  const navigate = useNavigate();

  return (
    <Approval
      visitId={visitId}
      onApproved={() => navigate("/success")}
    />
  );
}

/* ---------- Layout WITH sidebar ---------- */
function AdminLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <Routes>
      {/* Visitor flow (NO sidebar) */}
      <Route path="/" element={<Checkin />} />
      <Route path="/approval/:visitId" element={<ApprovalWrapper />} />
      <Route path="/success" element={<Success />} />

      {/* Admin / host (WITH sidebar) */}
      <Route element={<AdminLayout />}>
        <Route path="/invites" element={<Invites />} />
      </Route>
    </Routes>
  );
}
