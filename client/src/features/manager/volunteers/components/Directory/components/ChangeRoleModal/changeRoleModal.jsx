import { FaTimes } from "react-icons/fa";

const roles = [
  "Registration",
  "Food",
  "Medical",
  "Security",
  "Photography",
  "Logistics",
];

const ChangeRoleModal = ({
  open,
  volunteer,
  role,
  setRole,
  reason,
  setReason,
  onClose,
  onSave,
}) => {
  if (!open || !volunteer) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">

        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">

          <div className="flex justify-between items-center p-6 border-b">

            <h2 className="text-2xl font-bold">
              Change Volunteer Role
            </h2>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg hover:bg-gray-100"
            >
              <FaTimes />
            </button>

          </div>

          <div className="p-6 space-y-6">

            <div>

              <h3 className="font-semibold text-lg">

                {volunteer.name}

              </h3>

              <p className="text-gray-500">

                {volunteer.email}

              </p>

            </div>

            <div>

              <label className="block mb-2 font-medium">

                Current Role

              </label>

              <input
                disabled
                value={volunteer.role}
                className="w-full border rounded-xl px-4 py-3 bg-gray-100"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">

                Assign New Role

              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              >
                {roles.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>

            <div>

              <label className="block mb-2 font-medium">

                Reason (Optional)

              </label>

              <textarea
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Why are you changing this role?"
                className="w-full border rounded-xl p-4 resize-none"
              />

            </div>

          </div>

          <div className="border-t p-6 flex justify-end gap-4">

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              onClick={onSave}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Save Changes
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default ChangeRoleModal;