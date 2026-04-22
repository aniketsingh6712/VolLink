import { useParams } from "react-router-dom";
import { useState } from "react";
import InviteModal from "../../../component/Organisation/Event details/Action Modal/SendInviteModal";
import { UserRow } from "../../../component/Organisation/Event details/UserRow";

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
    <div className="bg-[#F9FAFB] min-h-screen max-w-6xl mx-auto px-6 py-8">

      {/* 🔥 EVENT HEADER */}
      <div className="bg-white rounded-2xl shadow-sm border mb-6 overflow-hidden">

        <div className="bg-indigo-100/70 px-6 py-4">
          <h1 className="text-xl font-bold text-gray-900">
            {event.title}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Completed Event Details
          </p>
        </div>

        <div className="p-6">

          <p className="text-gray-600">
            {event.description}
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-400">Location</p>
              <p className="font-medium">{event.location}</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-400">Date</p>
              <p className="font-medium">{event.date}</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-400">Volunteers</p>
              <p className="font-medium">{event.volunteers.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 VOLUNTEERS SECTION */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

        <div className="bg-purple-100/70 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Volunteers ({event.volunteers.length})
          </h2>
          <p className="text-sm text-gray-600">
            Invite previous volunteers again
          </p>
        </div>

        <div className="divide-y">
          {event.volunteers.map((user, i) => (
            <div key={i} className="px-6 py-4 relative">

              {/* ✅ REUSED COMPONENT */}
              <UserRow user={user} type="approved" />

              {/* 🔥 INVITE BUTTON */}
             

            </div>
          ))}
        </div>
      </div>

      {/* ✅ REUSED MODAL */}
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