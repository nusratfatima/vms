import {
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";

import Checkin from "./screens/Loadings/Checkin";
import Approval from "./screens/Loadings/Approval";
import Success from "./screens/Loadings/Success";

import Invites from "./screens/Invitee/Invites";
import ScanQR from "./screens/Invitee/ScanQR";
import ShowQR from "./screens/Invitee/ShowQR";
import PassIssued from "./screens/Invitee/PassIssued";

import Sidebar from "./screens/Sidebar/Sidebar";
import Dashboard from "./screens/Dashboard/Dashboard";
import EmployeePage from "./screens/Employee/EmployeePage";
import Reporting from "./screens/Reporting/Reporting";
import VisitorLog from "./screens/VisitorLog/VisitorLog";

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
      <div
        style={{
          flex: 1,
          padding: 20,
          overflowY: "auto",
          background: "#f8fafc",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <Routes>
      {/* ---------- Visitor flow (NO sidebar) ---------- */}
      <Route path="/" element={<Checkin />} />
      <Route path="/scan" element={<ScanQR />} />
      <Route path="/showqr" element={<ShowQR />} />
      <Route path="/approval/:visitId?" element={<ApprovalWrapper />} />
      <Route path="/success" element={<Success />} />

      {/* ---------- Admin / Host flow (WITH sidebar) ---------- */}
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/visitors" element={<VisitorLog />} />
        <Route path="/invites" element={<Invites />} />
        <Route path="/passes" element={<PassIssued />} />
        <Route path="/reports" element={<Reporting />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Route>
    </Routes>
  );
}
