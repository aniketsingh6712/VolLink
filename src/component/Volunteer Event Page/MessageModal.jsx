// components/modals/MessageModal.jsx

import { useState } from "react";
import Modal from "../ui/Modal";

export default function MessageModal({ isOpen, onClose, event }) {
  const [message, setMessage] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      <h2 className="text-xl font-bold text-[#0F172A]">
        Message Organization
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Contact {event.org}
      </p>

      {/* Input */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
        className="w-full mt-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
          Send Message
        </button>

        <button
          onClick={onClose}
          className="flex-1 border border-gray-300 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>

    </Modal>
  );
}