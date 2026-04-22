import Modal from "../../../ui/Modal";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
export default function ApproveModal({ isOpen, onClose, user, onConfirm }) {
  const [message, setMessage] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      
      {/* HEADER */}
      <div className="bg-green-600 text-white px-6 py-4 flex justify-between items-center rounded-t-xl">
        <h2 className="font-semibold">Approve Candidate</h2>
       
      </div>

      {/* BODY */}
      <div className="p-6 text-center space-y-4">

        <div className="flex justify-center">
          <div className="w-14 h-14  flex items-center justify-center text-green-500 text-6xl">
        <FiCheckCircle />
          </div>
        </div>

        <h3 className="font-semibold text-lg">{user?.name}</h3>

        <p className="text-gray-600 text-sm">
          Are you sure you want to approve this candidate?
        </p>

        {/* TEXTAREA */}
        <div className="text-left">
          <p className="text-sm mb-1">Approval Message (Optional)</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={200}
            className="w-full border rounded-lg p-3 outline-none"
            placeholder="Add a message..."
          />
          <p className="text-xs text-gray-400 mt-1">
            {message.length}/200 characters
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex gap-3 p-6 border-t">
        <button onClick={onClose} className="flex-1 border py-2 rounded-lg">
          Cancel
        </button>

        <button
          onClick={() => onConfirm(message)}
          className="flex-1 bg-green-600 text-white py-2 rounded-lg"
        >
          Approve
        </button>
      </div>
    </Modal>
  );
}