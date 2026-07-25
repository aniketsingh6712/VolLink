import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function InvitationCard({
  invite,
  onAccept,
  onReject,
  onViewEvent,
}) {
  const pending = invite.status === "Pending";
  const accepted = invite.status === "Accepted";
  const rejected = invite.status === "Rejected";

  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-sm
      hover:shadow-md
      transition-all
      group
    "
    >
      {/* IMAGE */}
      <div className="relative h-40 overflow-hidden bg-gray-100">
        <img
          src={invite.image}
          alt={invite.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* STATUS */}
        <div
          className={`
          absolute top-3 right-3
          px-4 py-1
          rounded-full
          text-xs
          font-semibold
          flex items-center gap-1

          ${
            pending
              ? "bg-yellow-100 text-yellow-800"
              : accepted
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
          }
        `}
        >
          {pending && <FiClock />}
          {accepted && <FiCheckCircle />}
          {rejected && <FiXCircle />}

          {invite.status}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <h3 className="text-xl font-bold text-[#0F172A] mb-3 line-clamp-2">{invite.title}</h3>

        {/* ORG */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-sm text-gray-600 mb-1">From</p>

          <h3 className="font-semibold">{invite.organization}</h3>

          <p className="text-gray-500 text-xs">{invite.email}</p>
        </div>

        {/* INFO */}
        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
          <div>
            <p className="uppercase text-xs  text-gray-600 font-medium mb-1">Role</p>

            <p className="font-semibold">{invite.role}</p>
          </div>

          <div>
            <p className="uppercase text-xs text-gray-600 font-medium mb-1">Event Date</p>

            <p className="font-semibold">{invite.eventDate}</p>
          </div>
        </div>

        {/* MESSAGE */}
        <div
          className="
          mb-4
          rounded-lg
          bg-blue-50
          border
          border-blue-200
          p-3
        "
        >
          <p className="italic text-gray-700 text-sm">"{invite.message}"</p>
        </div>

        {/* SENT */}
        <p className="text-xs text-gray-500 mb-4">Sent {invite.sentDate}</p>

        {/* REASON */}
        {rejected && invite.reason && (
          <div
            className="
            
            rounded-lg
            bg-red-50
            border
            border-red-200
            p-3
          "
          >
            <p className="text-xs text-gray-600 font-medium mb-1">Your Reason</p>

            <p className="text-red-700 text-sm">{invite.reason}</p>
          </div>
        )}

        {/* ACTIONS */}
        <div >
          {pending && (
            <div className="flex gap-3">
              <button
                onClick={() => onAccept(invite)}
                className="
                flex-1
                px-4
                py-2
                rounded-xl
                bg-blue-600
                text-white
                font-semibold
                hover:bg-blue-700
                transition
              "
              >
                Accept
              </button>

              <button
                onClick={() => onReject(invite)}
                className=" flex-1 px-4
                py-2
                rounded-xl
                border
                border-gray-300
                hover:bg-gray-50
                transition
                font-semibold
               
              "
              >
                Decline
              </button>
            </div>
          )}

          {accepted && (
            <button
              onClick={() => onViewEvent?.(invite)}
              className="
              w-full
              px-4
              py-2
              rounded-xl
              bg-green-50
              text-green-700
              font-semibold
              hover:bg-green-100
              transition
            "
            >
              View Event Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
