// components/EventCard.jsx
import { LuMapPin } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaUtensils, FaBookOpen, FaLeaf, FaHeartbeat, FaUsers } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { useState } from "react";
import ApplyModal from "../ApplyEvent/ApplyEvent";

export default function EventCard({ event }) {
    const categoryConfig = {
        "Food & Hunger": {
            icon: <FaUtensils />,
            style: "bg-orange-100 text-orange-600",
        },
        "Education": {
            icon: <FaBookOpen />,
            style: "bg-blue-100 text-blue-600",
        },
        "Environment": {
            icon: <FaLeaf />,
            style: "bg-green-100 text-green-600",
        },
        "Health & Wellness": {
            icon: <FaHeartbeat />,
            style: "bg-red-100 text-red-600",
        },
        "Community": {
            icon: <FaUsers />,
            style: "bg-purple-100 text-purple-600",
        },
    };

    const [showApply, setShowApply] = useState(false);
    event.positions = [

        {
            id: 1,
            title: "Registration Volunteer",
            description: "Handle attendee registration and welcome desk.",
            needed: 5,
            applied: 2,
        },

        {
            id: 2,
            title: "Parking Volunteer",
            description: "Guide visitors and manage vehicle parking.",
            needed: 8,
            applied: 4,
        },

        {
            id: 3,
            title: "Cleanup Team Volunteer",
            description: "Collect and segregate waste from the venue.",
            needed: 20,
            applied: 15,
        },

        {
            id: 4,
            title: "Medical Support Volunteer",
            description: "Assist medical staff and first aid support.",
            needed: 7,
            applied: 1,
        }

    ];
    event.hours = "4-5";
    const currentCategory = categoryConfig[event.category] || {
        icon: "📌",
        style: "bg-gray-100 text-gray-600",
    };
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">

            {/* Image */}
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">

                {/* Category */}
                <div
                    className={`inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full shadow-sm ${currentCategory.style} width-max`}
                >
                    <span>{currentCategory.icon}</span>
                    {event.category}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mt-3 text-[#0F172A]">
                    {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-1">
                    {event.description}
                </p>

                {/* Info */}
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                        <LuMapPin size={14} className="text-sky-500" /> {event.location}
                    </p>
                    <p className="flex items-center gap-2">
                        <MdOutlineCalendarToday size={14} className="text-sky-500" /> {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                        <FiUsers size={14} className="text-sky-500" /> {event.volunteers} volunteers needed
                    </p>
                </div>

                {/* Benefit */}
                <div className="mt-3 bg-green-50 text-green-700 text-xs px-3 py-2 rounded-md">
                    <IoIosCheckmark className="inline mr-1 text-2xl" /> {event.benefit}
                </div>

                {/* Progress */}
                <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>{event.applied} applied</span>
                        <span>{event.needed} needed</span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                        <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{
                                width: `${(event.applied / event.needed) * 100}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg"
                    onClick={() => setShowApply(true)}
                >
                    View & Apply
                </button>
            </div>

            <ApplyModal
                isOpen={showApply}
                onClose={() => setShowApply(false)}
                event={event}
            />
        </div>
    );
}
