import EventCard from "./EventCard/EventCard";

export default function EventGrid({ events }) {
    if (!events.length) {
        return (
            <div className="text-center py-12 text-gray-500">
                No events available.
            </div>
        );
    }

    return (
        <>
            <p className="mt-6 text-sm text-gray-500">
                Showing {events.length} events
            </p>

            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                    />
                ))}
            </div>
        </>
    );
}