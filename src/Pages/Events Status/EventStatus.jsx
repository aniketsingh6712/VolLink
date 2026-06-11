import React from 'react'
import StatusCard from '../../component/Event Status/StatusCard'
import { useState } from "react";
import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
import InvitationTabs from '../../component/Volunteer Invites/InvitationTabs';
import { BsCheck2All } from "react-icons/bs";
function EventStatus() {
  const [tab, setTab] = useState("pending");
  
    const [search, setSearch] = useState("");
      const tabs = [
      ["awaiting", "Awaiting", FiClock],
      ["confirmed", "Confirmed", FiCheckCircle],
      ["declined", "Declined", FiXCircle],
      ["completed", "Completed", BsCheck2All],
    ];
  
  
  return (
    <div className="px-4 md:px-12 py-8 bg-[#F9FAFB] min-h-screen max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">My Event & Status</h1>
          <p className="text-gray-600 text-lg">
            Track your event applications, boarding passes, and check-in status
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <StatusCard cardTitle="Pending" cardValue="12" cardColor="text-grey-900" />
          <StatusCard cardTitle="Accepted" cardValue="5" cardColor="text-green-600" />
          <StatusCard cardTitle="Rejected" cardValue="3" cardColor="text-red-600" />
          <StatusCard cardTitle="Completed" cardValue="3" cardColor="text-blue-600" />
          <StatusCard cardTitle="Hours Worked" cardValue="3" cardColor="text-blue-600" />
        </div>
          <InvitationTabs tab={tab} setTab={setTab} tabs={tabs} />
        
      </div>
  )
}

export default EventStatus