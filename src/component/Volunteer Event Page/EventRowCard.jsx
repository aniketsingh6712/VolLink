// components/EventRowCard.jsx


import { LuMapPin } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
export default function EventRowCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start">

      {/* Image */}
      <img
        src={event.image}
        className="w-32 h-24 rounded-lg object-cover"
      />

      {/* Content */}
      <div className="flex-1">

        {/* Title */}
        <h3 className="font-bold text-lg text-[#0F172A]">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500">{event.org}</p>

        <p className="text-sm text-gray-600 mt-2">
          {event.description}
        </p>

        {/* Info */}
        <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <MdOutlineCalendarToday size={14} className="text-sky-500"/> {event.date}
          </span>

          <span className="flex items-center gap-1">
            <LuMapPin size={14} className="text-sky-500" /> {event.location}
          </span>

          <span>Applied: {event.appliedDate}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            View Details
          </button>

          {event.status === "accepted" && (
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
              Message Organization
            </button>
          )}

          {event.status === "completed" && (
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
              Download Certificate
            </button>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
     <div className="flex flex-col items-end gap-3 min-w-[140px]">

  {/* STATUS BADGE */}
  <div
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold capitalize text-xl
      ${
        event.status === "accepted"
          ? "bg-green-100 text-green-700"
          : event.status === "pending"
          ? "bg-blue-100 text-blue-700"
          : event.status === "completed"
          ? "bg-purple-100 text-purple-700"
          : "bg-red-100 text-red-700"
      }
    `}
  >
    {/* ICON */}
    <span className="flex items-center">
      {event.status === "accepted" && <IoCheckmarkCircleOutline size={14} />}
      {event.status === "pending" && <GoClock size={14} />}
      {event.status === "completed" && <IoCheckmarkCircleOutline size={14} />}
      {event.status === "rejected" && <FaRegCircleXmark size={14} />}
    </span>

    {/* TEXT */}
    <span>{event.status}</span>
  </div>

  {/* BENEFIT */}
  <div className="text-right max-w-[160px]">
    <p className="text-xs text-gray-500">Benefits</p>
    <p className="text-sm font-medium text-green-600 leading-tight">
      {event.benefit}
    </p>
  </div>
</div>
    </div>
  );
}

