import { useMemo, useState } from "react";

// import EventFilter from "../../components/manager/events/EventFilter";
// import EventCard from "../../components/manager/events/EventCard";

// import { myEvents } from "../../data/myEvents";
import EventFilter from "../../features/manager/my-events/components/Filters/EventFilter";
import { myEvents } from "../../features/manager/my-events/data/myevents";
import EventCard from "../../component/Manager/MyEvents/EventsCard";
import EmptyEvents from "../../features/manager/my-events/components/EmptyEvents/EmptyEvent";
const ManagerMyEvents = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const filteredEvents = useMemo(() => {
        return myEvents.filter((event) => {
            const matchesSearch = event.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesStatus =
                status === "All" || event.status === status;

            return matchesSearch && matchesStatus;
        });
    }, [search, status]);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-slate-900">
                    My Events
                </h1>

                <p className="text-slate-500 mt-2">
                    Manage the events assigned to you.
                </p>
            </div>

            <EventFilter
                search={search}
                setSearch={setSearch}
                status={status}
                setStatus={setStatus}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    filteredEvents.length ? (

                        filteredEvents.map((event) => (

                            <EventCard
                                key={event.id}
                                event={event}
                            />

                        ))

                    ) : (

                        <EmptyEvents />

                    )
                }
            </div>
        </div>
    );
};

export default ManagerMyEvents;