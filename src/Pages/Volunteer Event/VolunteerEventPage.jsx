// pages/MyEvents.jsx

import { useState } from "react";
import StatusCard from "../../component/Volunteer Event Page/EventCard";
import EventRowCard from "../../component/Volunteer Event Page/EventRowCard";
import EventTabs from "../../component/Volunteer Event Page/EventTabs";
export default function MyEvents() {
  const [active, setActive] = useState("All");

  const events = [
    {
      title: "Food Donation Drive",
      org: "Community Care",
      description: "Help distribute food to people in need.",
      date: "31/10/2024",
      location: "Downtown Community",
      appliedDate: "20/10/2024",
      benefit: "Certificate + Free Lunch",
      status: "accepted",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
    },
    {
      title: "Blood Donation Camp",
      org: "Red Cross",
      description: "Save lives by donating blood.",
      date: "15/11/2024",
      location: "Central Hospital",
      appliedDate: "22/10/2024",
      benefit: "Free Health Checkup",
      status: "pending",
      image: "https://images.unsplash.com/photo-1588776814546-ec7e6c1f9f6e",
    },
    {
      title: "Education Workshop",
      org: "Tech for All",
      description: "Teach kids digital skills.",
      date: "25/11/2024",
      location: "Community School",
      appliedDate: "01/09/2024",
      benefit: "Certificate + Recommendation",
      status: "completed",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
  ];

  const filtered =
    active === "All"
      ? events
      : events.filter((e) => e.status.toLowerCase() === active.toLowerCase());

  return (
    <div className="bg-[#F9FAFB] min-h-screen ">

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#0F172A]">
          My Events
        </h1>
        <p className="text-gray-500 mt-1">
          Track your volunteer journey and event history
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <StatusCard title="Applied" count={1} color={{ bg: "bg-blue-100", text: "text-blue-500" }} />
          <StatusCard title="Accepted" count={2} color={{ bg: "bg-green-100", text: "text-green-500" }} />
          <StatusCard title="Completed" count={1} color={{ bg: "bg-purple-100", text: "text-purple-500" }} />
          <StatusCard title="Rejected" count={1} color={{ bg: "bg-red-100", text: "text-red-500" }} />
        </div>

        {/* Tabs */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <EventTabs active={active} setActive={setActive} />
        </div>

        {/* List */}
        <div className="mt-6 space-y-4">
          {filtered.map((event, index) => (
            <EventRowCard key={index} event={event} />
          ))}
        </div>

      </div>
    </div>
  );
}