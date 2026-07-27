// pages/MyEvents.jsx

import { useState } from "react";
import StatusCard from "./components/Stats/StatusCard";
import EventCard from "./components/EventRow/EventCard";
import EventTabs from "./components/EventTabs/EventTabs";
import StatsSection from "./components/Stats/StatsSection";
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
    <div className="bg-[#F9FAFB] min-h-screen max-w-7xl mx-auto px-6 md:px-12 py-8">

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#0F172A]">
          My Events
        </h1>
        <p className="text-gray-500 mt-1">
          Track your volunteer journey and event history
        </p>

       <StatsSection/>

        {/* Tabs */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <EventTabs active={active} setActive={setActive} />
        </div>

        {/* List */}
        <div className="mt-6 space-y-4">
          {filtered.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

      </div>
    </div>
  );
}