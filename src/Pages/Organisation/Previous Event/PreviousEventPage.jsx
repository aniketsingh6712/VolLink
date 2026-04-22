
import { useNavigate } from "react-router-dom";
export default function PreviousEventsPage() {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Beach Cleanup",
      date: "20/11/2024",
      location: "Sandy Beach",
      volunteers: 12,
    },
    {
      id: 2,
      title: "Education Workshop",
      date: "10/12/2024",
      location: "City School",
      volunteers: 8,
    },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen max-w-6xl mx-auto px-6 py-8">

      {/* 🔥 HEADER CARD */}
      <div className="bg-indigo-100/70 px-6 py-5 rounded-2xl mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Previous Events
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Review past events and re-invite volunteers
        </p>
      </div>

      {/* EVENTS LIST */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => navigate(`/previous-events/${event.id}`)}
            className="bg-white p-5 rounded-2xl border hover:shadow-md transition cursor-pointer flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {event.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                📍 {event.location} • 📅 {event.date}
              </p>

              <p className="text-sm text-indigo-600 mt-2 font-medium">
                {event.volunteers} volunteers participated
              </p>
            </div>

            {/* RIGHT TAG */}
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs">
              Completed
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}