import { IoClose } from "react-icons/io5";

export default function NotificationPanel({ notifications, onClose }) {
  return (
    <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border z-50">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="font-semibold text-gray-800">Notifications</h3>
        <button onClick={onClose}>
          <IoClose className="text-gray-500 hover:text-black" />
        </button>
      </div>

      {/* List */}
      <div className="max-h-80 overflow-y-auto">

        {notifications.length === 0 ? (
          <p className="text-center text-gray-400 py-6 text-sm">
            No notifications
          </p>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 px-4 py-3 border-b hover:bg-gray-50 transition"
            >
              {/* Status Indicator */}
              <div
                className={`w-1 rounded-full ${
                  item.type === "success"
                    ? "bg-green-500"
                    : item.type === "error"
                    ? "bg-red-500"
                    : "bg-blue-500"
                }`}
              />

              {/* Content */}
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-800">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">
                  {item.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.time}
                </p>
              </div>

              {/* Close */}
              <button>
                <IoClose className="text-gray-400 hover:text-black text-sm" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}