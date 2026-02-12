export default function DepartmentModal({ onClose }) {
  return (
    <Modal title="Departments" onClose={onClose}>
      <div className="flex gap-2 mb-3">
        <input
          className="border px-2 py-1 flex-1"
          placeholder="Add department"
        />
        <button className="border px-3">Add</button>
      </div>

      <p className="text-sm text-gray-400 text-center">
        No data matching the filter
      </p>

      <div className="flex justify-end mt-4">
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
}
