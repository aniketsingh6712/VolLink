import Modal from "../../../ui/Modal";
import { FaTimes } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";

export default function RejectModal({ isOpen, onClose, user, onConfirm }) {
  const [reason, setReason] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      
      <div className="bg-red-500 text-white px-6 py-4 flex justify-between items-center rounded-t-xl">
        <h2 className="font-semibold">Reject Candidate</h2>
       
      </div>

      <div className="p-6 space-y-4 text-center">

        <div className="text-5xl text-red-500 flex justify-center ">
          <RxCrossCircled />
        </div>

        <h3 className="font-semibold">{user?.name}</h3>

        <p className="text-gray-600 text-sm">
          Are you sure you want to reject this candidate?
        </p>

        <div className="text-left">
          <p className="text-sm mb-1">Rejection Reason (Optional)</p>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            maxLength={200}
            className="w-full border rounded-lg p-3"
            placeholder="Explain why you're rejecting..."
          />
          <p className="text-xs text-gray-400 mt-1">
            {reason.length}/200 characters
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          This action will send a rejection notification to the candidate.
        </div>
      </div>

      <div className="flex gap-3 p-6 border-t">
        <button onClick={onClose} className="flex-1 border py-2 rounded-lg">
          Cancel
        </button>

        <button
          onClick={() => onConfirm(reason)}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg"
        >
          Reject
        </button>
      </div>
    </Modal>
  );
}