
import { useParams } from "react-router-dom";
import { useState } from "react";
import InviteModal from "../event-details/components/UserRow/InviteModal/SendInviteModal";
import { UserRow } from "../event-details/components/UserRow/UserRow";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
export default function PreviousEventDetails() {
  const { id } = useParams();

  const [selectedUser, setSelectedUser] = useState(null);
  const [openInvite, setOpenInvite] = useState(false);

  const event = {
    id,
    title: "Beach Cleanup",
    description: "Help clean beaches and protect marine life.",
    date: "20/11/2024",
    location: "Sandy Beach",
    volunteers: [
      {
        name: "John Doe",
        email: "john@example.com",
        phone: "555-0101",
        date: "20/11/2024",
      },
      {
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "555-0103",
        date: "20/11/2024",
      },
    ],
  };

  const handleInvite = (user) => {
    setSelectedUser(user);
    setOpenInvite(true);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen max-w-7xl mx-auto px-6 md:px-10 py-8">

      {/* EVENT CARD */}
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden mb-8">

        {/* TOP */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-900">
            {event.title}
          </h1>

          <p className="text-gray-600 text-sm mt-1">
            Completed Event Details
          </p>
        </div>

        {/* BODY */}
        <div className="p-6">
          <p className="text-gray-600 leading-7">
            {event.description}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-5">

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-400 text-sm flex  flex-row gap-2"><span className="text-blue-400 text-xl"><PiMapPinAreaBold/></span>Location</p>
              <p className="font-medium mt-1">{event.location}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-400 text-sm flex  flex-row gap-2"><span className="text-blue-400 text-xl"><MdOutlineCalendarMonth/></span>Date</p>
              <p className="font-medium mt-1">{event.date}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-400 text-sm flex  flex-row gap-2"><span className="text-blue-400 text-xl"><MdOutlinePeopleOutline/></span>Volunteers</p>
              <p className="font-medium mt-1">
                {event.volunteers.length}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* VOLUNTEERS */}
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">

        <div className="bg-purple-100/70 px-6 py-5">
          <h2 className="text-xl font-bold text-gray-900 flex flex-row items-center gap-2">
            <FaPeopleGroup className="text-blue-400 text-xl"/>Previous Volunteers
          </h2>

          <p className="text-sm text-gray-600 mt-1">
            Invite them again for future events
          </p>
        </div>

        <div className="divide-y">
          {event.volunteers.map((user, i) => (
            <div key={i} className="px-6 py-5">
              <UserRow user={user} type="approved" />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <InviteModal
        isOpen={openInvite}
        user={selectedUser}
        onClose={() => setOpenInvite(false)}
        onSend={(data) => {
          console.log("Invite:", data);
          setOpenInvite(false);
        }}
      />
    </div>
  );
}