export default function ColumnSelectorModal({ onClose }) {
  return (
    <Modal title="Table Columns" onClose={onClose}>
      {["Name", "Email", "Phone Number", "Department", "Code", "Level"].map(
        (col) => (
          <label key={col} className="block text-sm">
            <input type="checkbox" defaultChecked /> {col}
          </label>
        )
      )}

      <div className="flex justify-end mt-4">
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Save
        </button>
      </div>
    </Modal>
  );
}
