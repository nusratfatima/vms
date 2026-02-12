export default function AddEmployeeModal({ onClose }) {
  return (
    <Modal title="Add Employee" onClose={onClose}>
      <Input label="Name" />
      <Input label="Email" />
      <Select label="Select Department" />
      <Select label="Select Level" />
      <Input label="Phone Number" />
      <Input label="Employee Code" />

      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose}>Cancel</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Add Employee
        </button>
      </div>
    </Modal>
  );
}
