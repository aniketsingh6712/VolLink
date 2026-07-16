import {
    FiCalendar,
    FiMapPin,
    FiClock,
    FiUsers,
    FiCheckCircle,
    FiClock as PendingIcon,
    FiXCircle,
} from "react-icons/fi";

export default function EventHeader({

    event,

    stats,

}) {

    return (

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

            <div className="flex justify-between items-center gap-8">

                {/* LEFT */}

                <div className="flex gap-6 flex-1">

                    {/* IMAGE */}

                    <div className="w-48 h-36 rounded-2xl overflow-hidden flex-shrink-0">

                        <img

                            src={event.image}

                            className="w-full h-full object-cover"

                            alt="event"

                        />

                    </div>

                    {/* INFO */}

                    <div className="flex flex-col justify-center">

                        <span className="inline-block w-fit bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">

                            ACTIVE

                        </span>

                        <h1 className="text-4xl font-bold mt-3">

                            {event.title}

                        </h1>

                        <p className="text-gray-500 mt-3 max-w-xl">

                            {event.description}

                        </p>

                        <div className="flex gap-6 mt-5 text-sm text-gray-600 flex-wrap">

                            <span className="flex items-center gap-2">

                                <FiCalendar />

                                {event.date}

                            </span>

                            <span className="flex items-center gap-2">

                                <FiMapPin />

                                {event.location}

                            </span>

                            <span className="flex items-center gap-2">

                                <FiClock />

                                {event.time}

                            </span>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="grid grid-cols-2 gap-4">

                    <StatCard

                        icon={<FiUsers />}

                        value={stats.applied}

                        title="Total Applied"

                        color="blue"

                    />

                    <StatCard

                        icon={<FiCheckCircle />}

                        value={stats.approved}

                        title="Approved"

                        color="green"

                    />

                    <StatCard

                        icon={<PendingIcon />}

                        value={stats.pending}

                        title="Pending"

                        color="orange"

                    />

                    <StatCard

                        icon={<FiXCircle />}

                        value={stats.rejected}

                        title="Rejected"

                        color="red"

                    />

                </div>

            </div>

        </div>

    );

}

function StatCard({

    icon,

    value,

    title,

    color,

}) {

    const styles = {

        blue: {

            bg: "bg-blue-50",

            text: "text-blue-600",

            border: "border-blue-200",

        },

        green: {

            bg: "bg-green-50",

            text: "text-green-600",

            border: "border-green-200",

        },

        orange: {

            bg: "bg-orange-50",

            text: "text-orange-500",

            border: "border-orange-200",

        },

        red: {

            bg: "bg-red-50",

            text: "text-red-500",

            border: "border-red-200",

        },

    };

    return (

        <div className={`w-44 h-32 rounded-2xl border ${styles[color].border} ${styles[color].bg} p-5`}>

            <div className={`text-3xl ${styles[color].text}`}>

                {icon}

            </div>

            <h2 className="text-4xl font-bold mt-3">

                {value}

            </h2>

            <p className="text-gray-500 mt-1">

                {title}

            </p>

        </div>

    );

}