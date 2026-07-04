import { FaSignOutAlt } from "react-icons/fa";

const AttendanceFooter = ({
  volunteer,
  onClose,
  onCheckOut,
}) => {
  const showCheckout =
    volunteer.status !== "Checked Out" &&
    volunteer.status !== "Absent";

  return (
    <div className="sticky bottom-0 bg-white border-t p-6">

      <div className="flex justify-end gap-4">

        <button
          onClick={onClose}
          className="px-6 py-3 border rounded-xl hover:bg-gray-50 transition"
        >
          Close
        </button>

        {showCheckout && (
          <button
            onClick={() => onCheckOut?.(volunteer)}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition"
          >
            <FaSignOutAlt />

            Check Out
          </button>
        )}

      </div>

    </div>
  );
};

export default AttendanceFooter;