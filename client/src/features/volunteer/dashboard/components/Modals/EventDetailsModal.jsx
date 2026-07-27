import Modal from "../../../../common/Modal/Modal";

import {
    FiCalendar,
    FiMapPin,
    FiUsers,
    FiPhone,
    FiMail,
    FiUser,
} from "react-icons/fi";

import { IoCheckmarkCircle } from "react-icons/io5";

export default function EventDetailsModal({
    isOpen,
    onClose,
    event,
}) {
    if (!event) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="max-h-[90vh] overflow-y-auto">

                {/* HEADER */}

                <div
                    className="
bg-gradient-to-r
from-blue-600
to-indigo-600
text-white
p-6
rounded-t-xl
"
                >
                    <p className="text-sm opacity-90">
                        Event Details
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {event.title}
                    </h2>

                    <div className="flex gap-3 mt-4 flex-wrap">

                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            {event.category}
                        </span>

                        <span className="bg-green-500/30 px-3 py-1 rounded-full text-sm">
                            Open Event
                        </span>

                    </div>
                </div>

                <div className="p-6 space-y-6">

                    {/* BASIC */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Event Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            <InfoCard
                                icon={<FiCalendar />}
                                label="Date"
                                value={event.date}
                            />

                            <InfoCard
                                icon={<FiMapPin />}
                                label="Location"
                                value={event.location}
                            />

                            <InfoCard
                                icon={<FiUsers />}
                                label="Volunteers Needed"
                                value={event.totalVolunteers}
                            />

                            <InfoCard
                                icon={<FiUser />}
                                label="Organizer"
                                value={event.organization}
                            />

                        </div>

                    </div>

                    {/* CONTACT */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Organizer Contact
                        </h3>

                        <div
                            className="
bg-gray-50
rounded-xl
p-5
space-y-3
"
                        >

                            <div className="flex gap-3">

                                <FiUser />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        Organization
                                    </p>

                                    <p className="font-semibold">
                                        {event.organization}
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-3">

                                <FiMail />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        Email
                                    </p>

                                    <p>
                                        {event.organizationEmail}
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-3">

                                <FiPhone />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        Phone
                                    </p>

                                    <p>
                                        {event.organizationPhone}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* MANAGER */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Event Manager
                        </h3>

                        <div
                            className="
border
rounded-xl
p-5
space-y-3
"
                        >

                            <div className="font-semibold text-xl">
                                {event.manager.name}
                            </div>

                            <div className="text-gray-600">
                                {event.manager.email}
                            </div>

                            <div className="text-gray-600">
                                {event.manager.phone}
                            </div>

                        </div>

                    </div>

                    {/* TASKS */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Your Responsibilities
                        </h3>

                        <div className="space-y-3">

                            {event.tasks.map((task, i) => (
                                <div
                                    key={i}
                                    className="
flex
gap-3
items-start
bg-green-50
rounded-xl
p-4
"
                                >

                                    <IoCheckmarkCircle
                                        className="
text-green-600
mt-1
"
                                    />

                                    <div>
                                        {task}
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* FOOTER */}

                <div className="border-t p-6">

                    <button
                        onClick={onClose}
                        className="
w-full
bg-blue-600
text-white
rounded-xl
py-3
font-semibold
"
                    >
                        Close
                    </button>

                </div>

            </div>
        </Modal>
    );
}

function InfoCard({
    icon,
    label,
    value,
}) {
    return (
        <div
            className="
border
rounded-xl
p-4
"
        >

            <div
                className="
flex
gap-2
text-blue-600
text-sm
mb-2
"
            >
                {icon}
                {label}
            </div>

            <div className="font-semibold">
                {value}
            </div>

        </div>
    );
}