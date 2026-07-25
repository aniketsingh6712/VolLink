import CurrentEventCard from "./CurrentEventCard";

export default function CurrentEventSection({
    event,
    onView,
    onPass,
}) {
    return (
        <section className="mt-8">

            <h2 className="uppercase font-bold text-gray-700 text-xl mb-4 tracking-wider">
                Current Assignment
            </h2>

            <CurrentEventCard
                event={event}
                onView={onView}
                onPass={onPass}
            />

        </section>
    );
}