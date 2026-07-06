import { useState } from "react";

import PrioritySelector from "./PrioritySelector";
import ScheduleSelector from "./ScheduleSelector";

const quickTemplates = [
    "Lunch Break",
    "Medical Assistance",
    "Move to Registration",
    "Parking Full",
    "Event Starting",
];

const AnnouncementComposer = () => {

    const [priority,setPriority] = useState("Normal");
    const [schedule,setSchedule] = useState("now");

    return (

        <div
            id="announcement-composer"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm"
        >

            {/* Header */}

            <div className="px-6 py-5 border-b">

                <h2 className="text-xl font-bold">

                    Create Announcement

                </h2>

                <p className="text-gray-500 mt-1">

                    Send updates to your volunteers.

                </p>

            </div>

            {/* Body */}

            <div className="p-6 space-y-6">

                {/* Quick Templates */}

                <div>

                    <label className="font-semibold block mb-3">

                        Quick Templates

                    </label>

                    <div className="flex flex-wrap gap-2">

                        {

                            quickTemplates.map((item)=>(

                                <button
                                    key={item}
                                    className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-sm transition"
                                >

                                    {item}

                                </button>

                            ))

                        }

                    </div>

                </div>

                {/* Title */}

                <div>

                    <label className="font-semibold block mb-2">

                        Title

                    </label>

                    <input
                        placeholder="Enter announcement title"
                        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                {/* Message */}

                <div>

                    <label className="font-semibold block mb-2">

                        Message

                    </label>

                    <textarea
                        rows={6}
                        placeholder="Write your announcement..."
                        className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                {/* Audience */}

                <div>

                    <label className="font-semibold block mb-2">

                        Audience

                    </label>

                    <select
                        className="w-full border rounded-xl px-4 py-3"
                    >

                        <option>

                            All Volunteers

                        </option>

                        <option>

                            Registration

                        </option>

                        <option>

                            Food Distribution

                        </option>

                        <option>

                            Parking

                        </option>

                        <option>

                            Medical

                        </option>

                    </select>

                </div>

                <PrioritySelector
                    priority={priority}
                    setPriority={setPriority}
                />

                <ScheduleSelector
                    schedule={schedule}
                    setSchedule={setSchedule}
                />

            </div>

            {/* Footer */}

            <div className="border-t px-6 py-5">

                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
                >

                    Publish Announcement

                </button>

            </div>

        </div>

    )

}

export default AnnouncementComposer;