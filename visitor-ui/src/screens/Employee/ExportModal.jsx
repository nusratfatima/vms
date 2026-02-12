export default function ExportModal({ onClose }) {
  return (
    <Modal title="Export your file" onClose={onClose}>
      <div className="flex gap-3 justify-center">
        <button className="border px-4 py-2">CSV</button>
        <button className="border px-4 py-2">XLSX</button>
      </div>
    </Modal>
  );
}
