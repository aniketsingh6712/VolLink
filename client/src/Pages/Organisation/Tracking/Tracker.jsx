import { useMemo, useState } from "react";

import TrackerStats from "../../../component/Organisation/Tracker/TrackerStats";
import TrackerTabs from "../../../component/Organisation/Tracker/TrackerTabs";
import VolunteerTrackerTable from "../../../component/Organisation/Tracker/VolunteerTrackTable";
import VolunteerDetailsModal from "../../../component/Organisation/Tracker/VolunteerDetailsModal";

export default function Tracker() {
  const [tab, setTab] = useState("active");

  const [selected, setSelected] = useState(null);

  const volunteers = [
    {
      id: 1,
      name: "Emma Davis",
      email: "emma@example.com",
      avatar: "https://i.pravatar.cc/150?img=13",
      checkin: "09:00 AM",
      checkout: null,
      hours: 7.5,
      location: "Main Entrance",
      status: "ACTIVE",
      note: "Currently working at distribution station",
    },

    {
      id: 2,
      name: "Alex Rodriguez",
      email: "alex@example.com",
      avatar: "https://i.pravatar.cc/150?img=12",
      checkin: "09:15 AM",
      checkout: null,
      hours: 7.25,
      location: "Main Entrance",
      status: "ACTIVE",
    },

    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      checkin: "08:30 AM",
      checkout: "04:45 PM",
      hours: 8.25,
      location: "Main Entrance",
      status: "CHECKED_OUT",
    },

    {
      id: 4,
      name: "Mike Chen",
      email: "mike@example.com",
      avatar: "https://i.pravatar.cc/150?img=2",
      checkin: "08:45 AM",
      checkout: "05:00 PM",
      hours: 8.25,
      location: "Main Entrance",
      status: "CHECKED_OUT",
    },
  ];

  const filtered = useMemo(() => {
    if (tab === "active") {
      return volunteers.filter((v) => v.status === "ACTIVE");
    }

    return volunteers.filter((v) => v.status === "CHECKED_OUT");
  }, [tab]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold text-[#0F172A]">
          Volunteer Check-in Management
        </h1>

        <p className="mt-2 text-gray-500">
          Track volunteer attendance, hours worked and event participation
        </p>

        <TrackerStats volunteers={volunteers} />

        <TrackerTabs tab={tab} setTab={setTab} volunteers={volunteers} />
        <div className="flex items-center gap-4 mt-6">
          <div className="flex-1 relative hover:border-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 "
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input
              type="text"
              placeholder="Search volunteers by name..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
              value=""
            />
          </div>
          <button className="px-4 py-3 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition flex items-center gap-2 text-gray-700 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-funnel"
              aria-hidden="true"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
            </svg>
            Filter
          </button>
        </div>
        <VolunteerTrackerTable data={filtered} onView={setSelected} />
      </div>

      {selected && (
        <VolunteerDetailsModal
          volunteer={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
