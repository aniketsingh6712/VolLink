import { LuTicketPercent } from "react-icons/lu";
export default function UpcomingEventCard({
 event,
onView,
onPass,
}) {
  return (
    <div
      className="
      bg-white
      rounded-lg
      overflow-hidden
      border
      border-gray-100
      shadow-sm
      hover:shadow-lg
      transition
      "
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="
          h-56
          w-full
          object-cover
          "
        />

        <div
          className="
          absolute
          top-4
          left-4
          bg-black/70
          text-white
          px-3
          py-1
          rounded-full
          text-xs
          "
        >
          Upcoming
        </div>
      </div>

      <div className="p-5 space-y-4">

        {/* Title */}
        <div>
          <h3
            className="
            text-xl
            font-bold
            text-gray-900
            "
          >
            {event.title}
          </h3>

          <p
            className="
            text-sm
            text-gray-500
            mt-1
            "
          >
            Hosted by {event.organizer}
          </p>
        </div>

        {/* Event Info */}
        <div
          className="
          grid
          gap-3
          text-sm
          text-gray-700
          "
        >
          <div>
            📅 {event.date}
          </div>

          <div>
            ⏰ {event.time}
          </div>

          <div>
            📍 {event.location}
          </div>

          <div>
            🎟️ {event.passType}
          </div>
        </div>

        {/* Description */}
        <p
          className="
          text-sm
          text-gray-600
          line-clamp-3
          "
        >
          {event.description}
        </p>

        {/* Buttons */}
        <div
          className="
          flex
          flex-col
          gap-2
          pt-2
          space-y-2
          "
        >
          <button
          onClick={onPass}
            className="
          w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm
            "
          >
            View Pass
          </button>

          <button
          onClick={onView}
            className="
           w-full px-4 py-2 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition text-sm flex items-center justify-center gap-2
            "
          >
            <span><LuTicketPercent/></span>
            View Event
          </button>
        </div>

      </div>
    </div>
  );
}