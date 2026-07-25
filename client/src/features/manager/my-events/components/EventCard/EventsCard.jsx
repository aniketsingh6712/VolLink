import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

import StatusBadge from "./Components/StatusBadge";

const EventCard = ({ event }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Image */}

      <div className="relative h-52 overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-4 right-4">

          <StatusBadge status={event.status} />

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-5">

          {event.title}

        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-3 text-gray-600">

            <FaCalendarAlt className="text-emerald-500" />

            <span>{event.date}</span>

          </div>

          <div className="flex items-center gap-3 text-gray-600">

            <FaClock className="text-emerald-500" />

            <span>{event.time}</span>

          </div>

          <div className="flex items-center gap-3 text-gray-600">

            <FaMapMarkerAlt className="text-emerald-500" />

            <span>{event.location}</span>

          </div>

          <div className="flex items-center gap-3 text-gray-600">

            <FaUsers className="text-emerald-500" />

            <span>

              {event.volunteers} / {event.totalVolunteers} Volunteers

            </span>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-7">

          <div className="flex justify-between text-sm mb-2">

            <span className="font-medium">

              Event Progress

            </span>

            <span className="font-semibold text-emerald-600">

              {event.progress}%

            </span>

          </div>

          <div className="w-full h-2 rounded-full bg-gray-200">

            <div
              className="h-2 rounded-full bg-emerald-500 transition-all"
              style={{
                width: `${event.progress}%`,
              }}
            />

          </div>

        </div>

        {/* Footer */}

        <button
          className="w-full mt-7 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-semibold transition"
        >
          Manage Event

          <FaArrowRight />

        </button>

      </div>

    </div>
  );
};

export default EventCard;