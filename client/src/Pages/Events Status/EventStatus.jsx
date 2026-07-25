//done

import React, { useMemo, useState } from "react";

import StatusCard from "../../component/Event Status/StatusCard";
import EventCard from "../../component/Event Status/EventCard";

import InvitationTabs from "../../features/volunteer/invites/components/Tabs/InvitationTabs";
import InvitationSearch from "../../features/volunteer/invites/components/Search/InvitationSearch";

import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { BsCheck2All } from "react-icons/bs";
import BoardingPass from "../../component/Event Status/EventPass";
function EventStatus() {
  const [tab, setTab] = useState("awaiting");
  const [search, setSearch] = useState("");
  const [selectedPass, setSelectedPass] = useState(null); // For boarding pass modal
  const tabs = [
    ["awaiting", "Awaiting", FiClock],
    ["confirmed", "Confirmed", FiCheckCircle],
    ["declined", "Declined", FiXCircle],
    ["completed", "Completed", BsCheck2All],
  ];

  // Replace with API later
  const events = [
    {
      id: 1,
      title: "Community Health Camp",
      location: "City Hospital",
      date: "12/10/2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      status: "awaiting",
    },

    {
      id: 2,
      title: "Winter Clothing Distribution",
      location: "Central Park",
      date: "12/20/2024",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      status: "confirmed",
      showPass: true,
    },

    {
      id: 3,
      title: "Food Donation Drive",
      location: "Downtown Community Center",
      date: "10/31/2024",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      status: "completed",
      hours: "8.25 hours",
      showPass: true,
    },

    {
      id: 4,
      title: "Beach Cleanup Initiative",
      location: "Sandy Beach",
      date: "11/20/2024",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      status: "completed",
      hours: "6.5 hours",
    },
    {
      id: 5,
      title: "Waiter for a Cause - Fundraiser",
      location: "Central Park",
      date: "12/20/2024",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      status: "declined",
    },
  ];

  // Filter by tab + search
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const tabMatch = event.status === tab;

      const searchMatch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase());

      return tabMatch && searchMatch;
    });
  }, [tab, search]);

  return (
    <div className="px-4 md:px-12 py-8 bg-[#F9FAFB] min-h-screen max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">
          My Event & Status
        </h1>

        <p className="text-gray-600 text-lg">
          Track your event applications, boarding passes, and check-in status
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        <StatusCard
          cardTitle="Pending"
          cardValue="12"
          cardColor="text-gray-900"
        />

        <StatusCard
          cardTitle="Accepted"
          cardValue="5"
          cardColor="text-green-600"
        />

        <StatusCard
          cardTitle="Rejected"
          cardValue="3"
          cardColor="text-red-600"
        />

        <StatusCard
          cardTitle="Completed"
          cardValue="3"
          cardColor="text-blue-600"
        />

        <StatusCard
          cardTitle="Hours Worked"
          cardValue="14.8"
          cardColor="text-blue-600"
        />
      </div>

      <InvitationTabs tab={tab} setTab={setTab} tabs={tabs} />

      <InvitationSearch
        value={search}
        onChange={setSearch}
        placeholder="Search events..."
      />

      <div className="space-y-6">
        {filteredEvents.length ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onAccept={() => console.log("Accepted", event.id)}
              onDecline={() => console.log("Declined", event.id)}
              onViewPass={() => setSelectedPass(event)}
            />
          ))
        ) : (
          <div className="bg-white rounded-2xl p-14 text-center">
            <div className="text-5xl mb-4">⚠️</div>

            <h2 className="text-2xl font-semibold">No events found</h2>

            <p className="text-gray-500 mt-2">
              Try adjusting your search or check other tabs
            </p>
          </div>
        )}
      </div>

      {selectedPass && (
        <div
          className="
        fixed inset-0 z-50
        bg-black/50
        overflow-y-auto
        flex justify-center
        p-6
      "
        >
          <div
            className="
          w-full
          max-w-[540px]
          my-auto
        "
          >
            <BoardingPass
              volunteer="John Doe"
              role="Volunteer"
              event={selectedPass.title}
              status={selectedPass.status}
              passId={`BP-00${selectedPass.id}-2024`}
              date={selectedPass.date}
              location={selectedPass.location}
              onClose={() => setSelectedPass(null)}
              checkIn="08:30 AM"
              checkOut="04:45 PM"
              hoursWorked={selectedPass.hours || "8.25"}
              onDownload={() => console.log("download")}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventStatus;
// import React from 'react'
// import StatusCard from '../../component/Event Status/StatusCard'
// import { useState } from "react";
// import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
// import InvitationTabs from '../../component/Volunteer Invites/InvitationTabs';
// import { BsCheck2All } from "react-icons/bs";
// import InvitationSearch from '../../component/Volunteer Invites/InvitationSearch';
// import EventCard from '../../component/Event Status/EventCard';
// function EventStatus() {
//   const [tab, setTab] = useState("awaiting");

//     const [search, setSearch] = useState("");
//       const tabs = [
//       ["awaiting", "Awaiting", FiClock],
//       ["confirmed", "Confirmed", FiCheckCircle],
//       ["declined", "Declined", FiXCircle],
//       ["completed", "Completed", BsCheck2All],
//     ];

//   return (
//     <div className="px-4 md:px-12 py-8 bg-[#F9FAFB] min-h-screen max-w-6xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">My Event & Status</h1>
//           <p className="text-gray-600 text-lg">
//             Track your event applications, boarding passes, and check-in status
//           </p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
//           <StatusCard cardTitle="Pending" cardValue="12" cardColor="text-grey-900" />
//           <StatusCard cardTitle="Accepted" cardValue="5" cardColor="text-green-600" />
//           <StatusCard cardTitle="Rejected" cardValue="3" cardColor="text-red-600" />
//           <StatusCard cardTitle="Completed" cardValue="3" cardColor="text-blue-600" />
//           <StatusCard cardTitle="Hours Worked" cardValue="3" cardColor="text-blue-600" />
//         </div>
//           <InvitationTabs tab={tab} setTab={setTab} tabs={tabs} />
//           <InvitationSearch value={search} onChange={setSearch} placeholder={"Search events...."}/>

//       </div>
//   )
// }

// export default EventStatus
