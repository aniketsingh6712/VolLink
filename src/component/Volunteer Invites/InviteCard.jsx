import { IoCalendarOutline } from "react-icons/io5";
import { LuMapPin, LuClock4 } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function InviteCard({ invite }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">

      {/* HEADER */}
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-[#0F172A]">
            {invite.title}
          </h3>

          <p className="text-gray-600 mt-1 text-base max-w-2xl">
            {invite.message}
          </p>
        </div>

        {/* STATUS */}
        <span
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm  capitalize font-semibold
            ${
              invite.status === "accepted"
                ? "bg-green-100 text-green-700"
                : invite.status === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700"
            }
          `}
        >
          {invite.status === "accepted" && (
            <IoCheckmarkCircleOutline size={14} />
          )}
          {invite.status}
        </span>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 my-5"></div>

      {/* INFO ROW */}
      <div className="grid md:grid-cols-3 gap-6 text-base">

        {/* DATE */}
        <div className="flex items-start gap-3">
          <IoCalendarOutline className="text-blue-500 mt-1" size={18} />
          <div>
            <p className="text-gray-400 text-xs">Event Date</p>
            <p className="font-semibold text-gray-900">{invite.date}</p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex items-start gap-3">
          <LuMapPin className="text-blue-500 mt-1" size={18} />
          <div>
            <p className="text-gray-400 text-xs">Location</p>
            <p className="font-semibold text-gray-900">{invite.location}</p>
          </div>
        </div>

        {/* EXPIRES */}
        <div className="flex items-start gap-3">
          <LuClock4 className="text-blue-500 mt-1" size={18} />
          <div>
            <p className="text-gray-400 text-xs">Expires</p>
            <p className="font-semibold text-gray-900">{invite.expires}</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 my-5"></div>

      {/* ORGANIZATION CARD */}
      <div className="bg-gray-50 rounded-xl p-5">

        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <FaRegBuilding className="text-blue-500" />
          Organization Details
        </h4>

        <div className="grid md:grid-cols-3 gap-6 text-sm">

          {/* ORG */}
          <div>
            <p className="text-gray-400 text-xs">Organization</p>
            <p className="font-semibold text-gray-900">
              {invite.organization}
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-2">
            <MdOutlineEmail className="text-blue-500 mt-1" size={16} />
            <div>
              <p className="text-gray-400 text-xs">Email</p>
              <p className="font-semibold text-gray-900">
                {invite.email}
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-2">
            <FiPhone className="text-blue-500 mt-1" size={16} />
            <div>
              <p className="text-gray-400 text-xs">Phone</p>
              <p className="font-semibold text-gray-900">
                {invite.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}