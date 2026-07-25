import { useState } from "react";
import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaTimes,
    FaSearch,
} from "react-icons/fa";

const AssignEventModal = ({
    open,
    manager,
    events = [],
    onClose,
    onAssign,
}) => {

    const [selectedEvent, setSelectedEvent] = useState(null);

    const [search, setSearch] = useState("");

    if (!open || !manager) return null;

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/40 z-50"
            />

            <div className="fixed inset-0 flex justify-center items-center z-[60] p-6">

                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden">

                    {/* Header */}

                    <div className="border-b p-6 flex justify-between">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Assign Event

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Assign

                                <strong>

                                    {" "}

                                    {manager.name}

                                </strong>

                                {" "}to manage an event.

                            </p>

                        </div>

                        <button onClick={onClose}>

                            <FaTimes/>

                        </button>

                    </div>

                    {/* Search */}

                    <div className="p-6 border-b">

                        <div className="relative">

                            <FaSearch className="absolute left-4 top-4 text-gray-400"/>

                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder="Search event..."
                                className="w-full border rounded-xl pl-12 pr-4 py-3"
                            />

                        </div>

                    </div>

                    {/* Events */}

                    <div className="max-h-[450px] overflow-y-auto">

                        {

                            filteredEvents.map(event=>(

                                <label
                                    key={event.id}
                                    className={`block border-b p-5 cursor-pointer transition

                                    ${event.assigned
                                        ? "bg-gray-50 opacity-60 cursor-not-allowed"
                                        : "hover:bg-blue-50"}
                                    `}
                                >

                                    <div className="flex items-start gap-4">

                                        <input
                                            type="radio"
                                            disabled={event.assigned}
                                            checked={selectedEvent===event.id}
                                            onChange={()=>setSelectedEvent(event.id)}
                                        />

                                        <div className="flex-1">

                                            <h3 className="font-semibold">

                                                {event.title}

                                            </h3>

                                            <div className="flex gap-6 mt-3 text-sm text-gray-500">

                                                <span className="flex items-center gap-2">

                                                    <FaCalendarAlt/>

                                                    {event.date}

                                                </span>

                                                <span className="flex items-center gap-2">

                                                    <FaMapMarkerAlt/>

                                                    {event.location}

                                                </span>

                                            </div>

                                        </div>

                                        {

                                            event.assigned

                                            ?

                                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">

                                                Assigned

                                            </span>

                                            :

                                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">

                                                Available

                                            </span>

                                        }

                                    </div>

                                </label>

                            ))

                        }

                    </div>

                    {/* Footer */}

                    <div className="border-t p-5 flex justify-end gap-3">

                        <button
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl border"
                        >

                            Cancel

                        </button>

                        <button
                            disabled={!selectedEvent}
                            onClick={()=>onAssign(selectedEvent)}
                            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white"
                        >

                            Assign Event

                        </button>

                    </div>

                </div>

            </div>

        </>
    );

};

export default AssignEventModal;