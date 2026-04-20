import StatsCard from "../../../component/Organisation/Dashboard component/StatsCard";
import EventRow from "../../../component/Organisation/Dashboard component/EventRow";
import { FaPlus } from "react-icons/fa6";
import { PiClockCounterClockwise } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
export default function OrganizationDashboard() {
  const stats = [
    { label: "Active Events", value: 2, color: "blue" },
    { label: "Total Volunteers", value: 8, color: "green" },
    { label: "Pending Apps", value: 3, color: "yellow" },
    { label: "Approved", value: 5, color: "purple" },
    { label: "Events Done", value: 2, color: "orange" },
  ];

  const activeEvents = [
    {
      title: "Food Donation Drive",
      description: "Help us distribute food to people in need.",
      date: "31/10/2024",
      location: "Downtown Community Center",
      category: "food",
      applied: 3,
      needed: 15,
      benefit: "Certificate + Free Lunch",
    },
    {
      title: "Blood Donation Camp",
      description: "Save lives by donating blood.",
      date: "15/11/2024",
      location: "Central Hospital",
      category: "health",
      applied: 5,
      needed: 8,
      benefit: "Certificate + Free Health Checkup",
    },
  ];

  const historyEvents = [
    {
      title: "Beach Cleanup",
      description: "Clean beaches and protect marine life.",
      date: "20/11/2024",
      location: "Sandy Beach",
      category: "environment",
      applied: 12,
      needed: 25,
      benefit: "T-Shirt + Certificate + Meals",
      completed: true,
    },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen px-6 md:px-12 py-8 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0F172A]">
            Organization Dashboard
          </h1>
          <p className="text-gray-500">
            Manage your events and volunteers
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl">
          <FaPlus size={18} className="text-white"/>
          Create New Event
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {stats.map((item, i) => (
          <StatsCard key={i} {...item} />
        ))}
      </div>

      {/* ACTIVE EVENTS */}
      <div className="bg-white rounded-2xl shadow-sm  overflow-hidden mb-10">

  {/* HEADER */}
  <div className="bg-blue-100/70 px-6 py-5 flex items-start gap-3">
    
    {/* Icon */}
    <div className="text-blue-600 mt-1">
      <LuEye size={22} />
    </div>

    {/* Title + Subtitle */}
    <div>
      <h2 className="text-xl font-bold text-gray-900">
        Active Events
      </h2>
      <p className="text-sm text-gray-600 mt-1">
        Events currently accepting volunteers
      </p>
    </div>
  </div>

  {/* CONTENT */}
  <div className="divide-y">
    {activeEvents.map((event, i) => (
      <div key={i} className="px-6 py-5">
        <EventRow event={event} />
      </div>
    ))}
  </div>

</div>

      {/* HISTORY */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden mb-10">

  {/* HEADER */}
  <div className="bg-purple-100/70 px-6 py-5 flex items-start gap-3">

    {/* Icon */}
    <div className="text-purple-600 mt-1">
      <PiClockCounterClockwise size={22} />
    </div>

    {/* Title + Subtitle */}
    <div>
      <h2 className="text-xl font-bold text-gray-900">
        Event History
      </h2>
      <p className="text-sm text-gray-600 mt-1">
        Previously conducted events
      </p>
    </div>
  </div>

  {/* CONTENT */}
  <div className="divide-y">
    {historyEvents.map((event, i) => (
      <div key={i} className="px-6 py-5">
        <EventRow event={event} history />
      </div>
    ))}
  </div>

</div>

    </div>
  );
}