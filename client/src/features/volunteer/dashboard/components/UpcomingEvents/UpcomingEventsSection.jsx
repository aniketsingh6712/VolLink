import UpcomingEventCard from "./upcomingEventCard";
export default function UpcomingEventsSection({
   events,
    onView,
    onPass,
}) {
   

    return (
        <>
        <div className="mt-10">
                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    text-gray-700
                                    mb-5
                                    uppercase
                                    "
                            >
                                Upcoming Events
                            </h2>
        
                            <div
                                className="
                                    grid
                                    gap-6
                                    md:grid-cols-2
                                    lg:grid-cols-3
                                    "
                            >
                                {events.map((event) => (
                                    <UpcomingEventCard
                                        key={event.id}
                                        event={event}
                                        onView={() => onView(event)}
                                        onPass={() =>
                                            onPass(event)
                                        }
                                    />
                                ))}
                            </div>
                        </div>
        
                </>
    );
}