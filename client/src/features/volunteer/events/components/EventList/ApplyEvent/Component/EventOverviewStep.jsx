import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaClock,
    FaGift,
    FaUserTag,
} from "react-icons/fa";

const categoryColor = {
    "Food & Hunger": "bg-orange-100 text-orange-600",
    "Education": "bg-blue-100 text-blue-600",
    "Environment": "bg-green-100 text-green-600",
    "Health & Wellness": "bg-red-100 text-red-600",
    "Community": "bg-purple-100 text-purple-600",
};

const EventOverviewStep = ({
    event,
    onContinue,
}) => {

    return (

        <div className="space-y-8">

            {/* Event */}

            <div className="flex gap-6">

                <img
                    src={event.image}
                    alt={event.title}
                    className="w-36 h-36 rounded-2xl object-cover"
                />

                <div className="flex-1">

                    <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                        ${categoryColor[event.category]}
                        `}
                    >
                        {event.category}
                    </span>

                    <h2 className="text-3xl font-bold mt-3">

                        {event.title}

                    </h2>

                    <div className="flex flex-wrap gap-6 mt-4 text-gray-600">

                        <span className="flex items-center gap-2">

                            <FaCalendarAlt />

                            {event.date}

                        </span>

                        <span className="flex items-center gap-2">

                            <FaMapMarkerAlt />

                            {event.location}

                        </span>

                        <span className="flex items-center gap-2">

                            <FaClock />

                            {event.hours} Hours

                        </span>

                    </div>

                </div>

            </div>

            {/* Benefits */}

            <div className="rounded-2xl bg-green-50 p-5 flex gap-3">

                <FaGift className="text-green-600 mt-1"/>

                <div>

                    <h3 className="font-semibold">

                        Benefits

                    </h3>

                    <p className="text-gray-700 mt-2">

                        {event.benefit}

                    </p>

                </div>

            </div>

            {/* About */}

            <div>

                <h3 className="font-semibold text-lg mb-3">

                    About This Event

                </h3>

                <p className="text-gray-600 leading-7">

                    {event.description}

                </p>

            </div>

            {/* Volunteer Positions */}

            <div>

                <h3 className="font-semibold text-lg mb-4">

                    Volunteer Positions

                </h3>

                <div className="flex flex-wrap gap-3">

                    {

                        event.positions.map(position=>(

                            <div
                                key={position.id}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border bg-gray-50"
                            >

                                <FaUserTag className="text-blue-600"/>

                                <span>

                                    {position.title}

                                </span>

                                <span className="text-gray-500">

                                    ({position.needed})

                                </span>

                            </div>

                        ))

                    }

                </div>

            </div>

            {/* Continue */}

            <div className="flex justify-end">

                <button
                    onClick={onContinue}
                    className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
                >

                    Continue

                </button>

            </div>

        </div>

    );

};

export default EventOverviewStep;