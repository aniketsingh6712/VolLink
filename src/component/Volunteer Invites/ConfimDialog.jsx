// ConfirmDialog.jsx

import { FaTimes, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import Modal from "../ui/Modal";

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "success", // success | danger
}) {
  const styles = {
    success: {
      header: "from-green-600 to-emerald-500",
      btn: "bg-green-600 hover:bg-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    danger: {
      header: "from-red-500 to-rose-500",
      btn: "bg-red-500 hover:bg-red-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  };

  const current = styles[type];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* HEADER */}
      <div
        className={`bg-gradient-to-r ${current.header} text-white px-6 py-4 rounded-t-xl flex justify-between items-center`}
      >
        <h2 className="font-semibold">{title}</h2>

        
      </div>

      {/* BODY */}
      <div className="p-6 text-center">

        <div
          className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${current.iconBg}`}
        >
          <FaExclamationTriangle
            className={`${current.iconColor}`}
            size={22}
          />
        </div>

        <p className="mt-4 text-gray-700 leading-6">
          {message}
        </p>
      </div>

      {/* FOOTER */}
      <div className="flex gap-3 p-6 pt-0">
        <button
          onClick={onClose}
          className="flex-1 h-10 rounded-lg border text-sm font-semibold hover:bg-gray-50"
        >
          {cancelText}
        </button>

        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className={`flex-1 h-10 rounded-lg text-white text-sm font-semibold ${current.btn} flex items-center justify-center gap-2`}
        >
          <FaCheck size={12} />
          {confirmText}
        </button>
      </div>
    </Modal>
  );
}