import { Pencil, Columns, Download } from "lucide-react";

export default function EmployeeTable({ onColumns, onExport }) {
  return (
    <div className="mt-4">
      {/* Column / Export */}
      <div className="flex items-center gap-6 text-sm text-slate-700 mb-2">
        <button
          type="button"
          onClick={onColumns}
          className="flex items-center gap-1 hover:text-black"
        >
          <Columns size={16} />
          Column
        </button>

        <button
          type="button"
          onClick={onExport}
          className="flex items-center gap-1 hover:text-black"
        >
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm border-collapse">
        <thead className="border-b">
          <tr className="text-left text-slate-700">
            <th className="py-2">Name</th>
            <th>Email</th>
            <th>Phonenumber</th>
            <th>Department</th>
            <th>Action</th>
            <th className="text-center">
              <input type="checkbox" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="py-2 flex items-center gap-2">
              <span className="text-purple-600">👤</span>
              Nusrat Fatima
            </td>
            <td>nm6800169@gmail.com</td>
            <td>+91 9167264382</td>
            <td>—</td>
            <td>
              <Pencil size={16} />
            </td>
            <td className="text-center">
              <input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          Items per page:
          <select className="border border-slate-300 text-xs">
            <option>10</option>
          </select>
        </div>

        <div className="mt-1">1–1 of 1</div>

        <div className="flex gap-3 mt-1 text-lg">
          ‹ ›
        </div>
      </div>
    </div>
  );
}
