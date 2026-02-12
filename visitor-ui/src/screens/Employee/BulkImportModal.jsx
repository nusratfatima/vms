export default function BulkImportModal({ onClose }) {
  return (
    <Modal title="Bulk Import" onClose={onClose}>
      <p className="text-sm mb-3">
        Upload a CSV file to import employee directory.
      </p>

      <code className="text-xs text-blue-600">
        name, email, phoneNumber, department
      </code>

      <div className="flex justify-end mt-4">
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
}
