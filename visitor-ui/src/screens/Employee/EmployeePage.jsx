import { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeModal from "./AddEmployeeModal";
import BulkImportModal from "./BulkImportModal";
import DepartmentModal from "./DepartmentModal";
import EmployeeAssociation from "./EmployeeAssociation";
import ColumnSelectorModal from "./ColumnSelectorModal";
import ExportModal from "./ExportModal";

console.log("EMPLOYEE PAGE RENDERED");

export default function EmployeePage() {
  const [modal, setModal] = useState(null);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* ---------- Header ---------- */}
      <div className="flex items-center mb-6">
        <h1 className="text-xl font-semibold text-slate-800">
          Employee
        </h1>

        <input
          placeholder="Search..."
          className="ml-auto border border-slate-300 px-2.5 py-1 rounded-md
          text-sm w-40 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      {/* ---------- Action Bar ---------- */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-5">
        <div className="flex flex-wrap gap-2 p-4">
          <ToolbarBtn onClick={() => setModal("association")}>
            Employee Association
          </ToolbarBtn>
          <ToolbarBtn onClick={() => setModal("import")}>
            Import Bulk
          </ToolbarBtn>
          <ToolbarBtn primary onClick={() => setModal("add")}>
            Add Employee
          </ToolbarBtn>
          <ToolbarBtn onClick={() => setModal("dept")}>
            Departments
          </ToolbarBtn>
        </div>
      </div>

      {/* ---------- Table Card ---------- */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <EmployeeTable
          onColumns={() => setModal("columns")}
          onExport={() => setModal("export")}
        />
      </div>

      {/* ---------- Modals ---------- */}
      {modal === "association" && (
        <EmployeeAssociation onClose={() => setModal(null)} />
      )}
      {modal === "import" && (
        <BulkImportModal onClose={() => setModal(null)} />
      )}
      {modal === "add" && (
        <AddEmployeeModal onClose={() => setModal(null)} />
      )}
      {modal === "dept" && (
        <DepartmentModal onClose={() => setModal(null)} />
      )}
      {modal === "columns" && (
        <ColumnSelectorModal onClose={() => setModal(null)} />
      )}
      {modal === "export" && (
        <ExportModal onClose={() => setModal(null)} />
      )}
    </div>
  );
}

/* ---------- Small UI Button ---------- */
function ToolbarBtn({ children, onClick, primary }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-md text-sm font-medium transition
        ${
          primary
            ? "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700"
            : "bg-white border border-slate-300 hover:bg-slate-50"
        }`}
    >
      {children}
    </button>
  );
}
