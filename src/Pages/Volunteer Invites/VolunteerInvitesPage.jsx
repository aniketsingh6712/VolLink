// pages/InvitesPage.jsx

import { useState } from "react";
import InviteCard from "../../component/Volunteer Invites/InviteCard";

export default function VolunteerInvitesPage() {
  const [tab, setTab] = useState("pending");

  const invites = [
    {
      id: 1,
      title: "Beach Cleanup",
      message: "We'd love to have you join our beach cleanup event!",
      date: "20/11/2024",
      location: "Sandy Beach",
      expires: "5/11/2024",
      organization: "Ocean Guardians",
      email: "volunteer@ocean.org",
      phone: "+1-555-0789",
      status: "pending",
    },
    {
      id: 2,
      title: "Tree Planting Initiative",
      message: "Join us in creating a community garden!",
      date: "1/12/2024",
      location: "Riverside Forest",
      expires: "5/11/2024",
      organization: "Env Alliance",
      email: "env@org.com",
      phone: "+1-555-0987",
      status: "accepted",
    },
  ];

  // Filter
  const filtered = invites.filter((i) => i.status === tab);

  // Stats
  const stats = {
    pending: invites.filter((i) => i.status === "pending").length,
    accepted: invites.filter((i) => i.status === "accepted").length,
    rejected: invites.filter((i) => i.status === "rejected").length,
  };

  return (
    <div className="px-6 md:px-12 py-8 bg-[#F9FAFB] min-h-screen">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#0F172A]">
        Event Invitations
      </h1>

      <p className="text-gray-500 mt-1">
        Explore event invites from organizations
      </p>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">

        <div className="bg-yellow-50 p-6 rounded-xl">
          <p className="text-yellow-600">Pending</p>
          <h2 className="text-2xl font-bold">{stats.pending}</h2>
        </div>

        <div className="bg-green-50 p-6 rounded-xl">
          <p className="text-green-600">Accepted</p>
          <h2 className="text-2xl font-bold">{stats.accepted}</h2>
        </div>

        <div className="bg-red-50 p-6 rounded-xl">
          <p className="text-red-600">Rejected</p>
          <h2 className="text-2xl font-bold">{stats.rejected}</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 bg-white p-4 rounded-xl flex gap-3">
        {["pending", "accepted", "rejected"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm ${
              tab === t
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-6 space-y-6">
        {filtered.length > 0 ? (
          filtered.map((invite) => (
            <InviteCard key={invite.id} invite={invite} />
          ))
        ) : (
          <div className="bg-white p-10 rounded-xl text-center text-gray-500">
            No {tab} invitations
          </div>
        )}
      </div>
    </div>
  );
}