import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

export default function SendInviteModal({
  volunteer,
  events,
  selectedEvent,
  setSelectedEvent,
  role,
  setRole,
  message,
  setMessage,
  onClose,
  onSend,
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white w-lg max-w-xl rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-start justify-between p-4 border-b border-gray-300">

          <div className="flex gap-4">

            <img
              src={volunteer.avatar}
              alt={volunteer.name}
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />

            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                Send Event Invite
              </h3>

              <p className="text-xs text-gray-600">
                To {volunteer.name}
              </p>
            </div>

          </div>

          <button
            onClick={onClose}
            className="p-2 text-base hover:bg-gray-100 rounded-lg transition"
          >
            <IoClose size={28} />
          </button>

        </div>

        {/* BODY */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">

          {/* EVENTS */}
          <div>

            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Select Event *
            </label>

            <div className="space-y-2">

              {events.map((event) => (

                <button
                  key={event.id}
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className={`
                    w-full text-left border rounded-lg p-3 transition
                    ${
                      selectedEvent?.id === event.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }
                  `}
                >

                  <h3 className="font-semibold text-md text-gray-900">
                    {event.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {event.date} • {event.category}
                  </p>

                </button>

              ))}

            </div>

          </div>

          {/* ROLE */}
          <div className="mt-6">

            <label className="block font-semibold mb-2 text-sm text-gray-900">
              Role/Task *
            </label>

            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Event Coordinator, Logistics Lead, Volunteer"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
            />

          </div>

          {/* MESSAGE */}
          <div className="mt-6">

            <label className="block font-semibold mb-2 text-sm text-gray-900">
              Personal Message (Optional)
            </label>

            <textarea
              rows={4}
              maxLength={200}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a personal note to encourage them to join..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="text-xs text-gray-400 mt-2">
              {message.length}/200 characters
            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="border-t p-6 flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            disabled={!selectedEvent || !role}
            onClick={onSend}
            className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
          >
            <FiSend />
            Send Invite
          </button>

        </div>

      </div>

    </div>
  );
}