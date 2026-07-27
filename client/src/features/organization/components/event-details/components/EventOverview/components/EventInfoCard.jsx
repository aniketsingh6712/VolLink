import React from 'react'

export function EventInfoCard({ event }) {
    const percent =
        event.people_needed > 0
            ? Math.min(
                100,
                Math.round(
                    (event.people_applied /
                        event.people_needed) * 100
                )
            )
            : 0;
    return (
        <>
            <div className="flex-1">

                <h2 className="text-xl font-bold text-gray-900">
                    {event.title}
                </h2>

                <p className="text-gray-500 mt-1">
                    {event.description}
                </p>

                {/* INFO */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="font-medium truncate">
                            {event.location}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-400 text-sm">Date</p>
                        <p className="font-medium">{event.start_date}</p>

                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-400 text-sm">Total Applied</p>
                        <p className="font-medium">{event.people_applied}</p>
                    </div>
                </div>

                {/* PROGRESS */}
                <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>{event.people_applied} applied</span>
                        <span>{event.people_needed} needed</span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}



export function EventTitle({ event }) {
    return (<>
        <div className="mt-3">

            <p className="font-semibold text-gray-800 line-clamp-2">

                {event.title}

            </p>

            <p className="text-sm text-gray-500 mt-1">

                {event.category || "General"}

            </p>
            <div className="mt-2">

                <span className={`
    px-3 py-1 rounded-full text-xs font-medium

    ${event.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"}
  `}>

                    {event.status}

                </span>

            </div>

        </div>
    </>)
} 