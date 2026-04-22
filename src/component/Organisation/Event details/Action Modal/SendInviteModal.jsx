import Modal from "../../../ui/Modal";
import { useState } from "react";
import { LuSend } from "react-icons/lu";
export default function InviteModal({ isOpen, onClose, user, onSend }) {
  const [message, setMessage] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 🔥 Dummy event data (replace with API later)
  const events = [
    {
      id: 1,
      title: "Food Donation Drive",
      date: "31/10/2024",
      needed: 15,
    },
    {
      id: 2,
      title: "Beach Cleanup",
      date: "20/11/2024",
      needed: 20,
    },
    {
      id: 3,
      title: "Education Workshop",
      date: "05/12/2024",
      needed: 10,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-4 rounded-t-xl">
        <h2 className="font-semibold">Send Event Invite</h2>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-6 space-y-5">

        {/* USER */}
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Inviting volunteer</p>
          <p className="font-semibold">{user?.name}</p>
        </div>

        {/* 🔥 SELECT EVENT */}
        <div>
          <p className="text-sm font-medium mb-2">Select Event</p>

          <div className="space-y-3 max-h-40 overflow-y-auto px-2">

            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`border rounded-lg p-3 cursor-pointer transition ${
                  selectedEvent?.id === event.id
                    ? "border-purple-600 bg-purple-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <p className="font-medium">{event.title}</p>
                <p className="text-xs text-gray-500">
                  {event.date} • {event.needed} volunteers needed
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={300}
            className="w-full border rounded-lg p-3"
            placeholder="Write invitation message..."
          />

          <p className="text-xs text-gray-400 mt-1">
            {message.length}/300 characters
          </p>
        </div>

        {/* NOTE */}
        <div className="bg-gray-50 p-3 text-xs rounded-lg text-gray-500">
         Note: Your contact details will be shared with the volunteer along with the event invitation.
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex gap-3 p-6 border-t">
        <button onClick={onClose} className="flex-1 border py-2 rounded-lg">
          Cancel
        </button>

        <button
          disabled={!selectedEvent}
          onClick={() => onSend({ message, event: selectedEvent })}
          className={`flex-1 py-2 rounded-lg text-white ${
            selectedEvent
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
            <LuSend className="inline mr-1 text-white text-lg" />
          Send Invite
        </button>
      </div>
    </Modal>
  );
}