
import { FiMapPin } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { LuTicket } from "react-icons/lu";
const STATUS_CONFIG = {
  awaiting: {
    label: "Awaiting Response",
    className: "bg-yellow-100 text-yellow-700",
  },
  confirmed: {
    label: "Confirmed",
    className: "bg-green-100 text-green-700",
  },
  declined: {
    label: "Declined",
    className: "bg-red-100 text-red-600",
  },
  completed: {
    label: "Completed",
    className: "bg-blue-100 text-blue-700",
  },
};
export default function EventCard({
  title,
  location,
  date,
  image,
  status,
  hours,
  showPass = false,
  onViewPass,
  onAccept,
  onDecline,
}) {
  const currentStatus = STATUS_CONFIG[status];
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex justify-between items-center gap-6">
      {/* LEFT */}
      <div className="flex gap-5">
        <img
          src={image}
          alt={title}
          className="w-[150px] h-[100px] rounded-xl object-cover bg-gray-100"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <FiMapPin size={14} />
                {location}
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineClockCircle size={14} />
                {date}
              </div>
              {hours && (
                <div className="flex items-center gap-1">
                  <CiCircleCheck size={14} />
                  {hours}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${currentStatus.className}`}
            >
              {status === "awaiting" ? (
                <CiCircleAlert size={13} />
              ) : (
                <CiCircleCheck size={13} />
              )}
              {currentStatus.label}
            </span>
            {/* {status === "awaiting" && (
              <>
                <button
                  onClick={onAccept}
                  className="px-4 py-1.5 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={onDecline}
                  className="px-4 py-1.5 rounded-lg border border-red-300 text-red-600 text-sm"
                >
                  Decline
                </button>
              </>
            )} */}
          </div>
        </div>
      </div>
      {/* RIGHT ACTION */}
      {(showPass || status === "confirmed" || status === "completed") && (
        <button
          onClick={onViewPass}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          <LuTicket size={16} />
          View Pass
        </button>
      )}
    </div>
  );
}
