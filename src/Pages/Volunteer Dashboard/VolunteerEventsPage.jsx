// pages/Dashboard.jsx

import { useState } from "react";
import EventCard from "../../component/Volunteer Dashboard/EventCard";
import SearchFilter from "../../component/Volunteer Dashboard/SearchFilter";
export default function VolunteerEventsPage() {
  const [selected, setSelected] = useState("");

  const events = [
    {
      title: "Food Donation Drive",
      category: "Food & Hunger",
      description: "Help distribute food to people in need.",
      location: "Downtown Community Center",
      date: "31/10/2024",
      volunteers: 12,
      applied: 3,
      needed: 15,
      benefit: "Certificate + Free Lunch",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
    },
    {
      title: "Blood Donation Camp",
      category: "Health & Wellness",
      description: "Save lives by donating blood.",
      location: "Central Hospital",
      date: "15/11/2024",
      volunteers: 3,
      applied: 5,
      needed: 8,
      benefit: "Free Health Checkup",
      image: "https://images.unsplash.com/photo-1588776814546-ec7e6c1f9f6e",
    },
    {
      title: "Beach Cleanup",
      category: "Environment",
      description: "Help clean beaches and protect nature.",
      location: "Coastal Area",
      date: "20/11/2024",
      volunteers: 13,
      applied: 12,
      needed: 25,
      benefit: "T-shirt + Certificate",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
  ];

  const filtered = selected
    ? events.filter((e) => e.category === selected)
    : events;

  return (
     <div className="bg-[#F9FAFB] min-h-screen max-w-7xl mx-auto px-6 md:px-12 py-8">

      {/* CENTERED CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Find Volunteer Opportunities
        </h1>
        <p className="text-gray-500 mt-1">
          Discover events that match your interests and make an impact
        </p>

        {/* Search + Filters */}
        <div className="mt-6">
          <SearchFilter selected={selected} setSelected={setSelected} />
        </div>

        {/* Count */}
        <p className="mt-6 text-sm text-gray-500">
          Showing {filtered.length} events
        </p>

        {/* Grid */}
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

      </div>
    </div>
  );
}