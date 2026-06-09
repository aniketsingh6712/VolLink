import { useState } from "react";

// import InvitationStats from "../../../component/Volunteer/Invitations/InvitationStats";
// import InvitationTabs from "../../../component/Volunteer/Invitations/InvitationTabs";
// import InvitationSearch from "../../../component/Volunteer/Invitations/InvitationSearch";
// import InvitationGrid from "../../../component/Volunteer/Invitations/InvitationGrid";
import InvitationStats from "../../component/Volunteer Invites/InvitationStats";
import InvitationTabs from "../../component/Volunteer Invites/InvitationTabs";
import InvitationSearch from "../../component/Volunteer Invites/InvitationSearch";
import InvitationGrid from "../../component/Volunteer Invites/InvitationGrid";

export default function VolunteerInvitations() {
  const [tab, setTab] = useState("pending");

  const [search, setSearch] = useState("");

  const invitations = [
    {
      id: 1,

      title: "Food Donation Drive - Fall 2024",

      organization: "Community Care",

      email: "contact@communitycare.com",

      role: "Event Coordinator",

      eventDate: "15/12/2024",

      sentDate: "1/12/2024",

      status: "Pending",

      message:
        "We loved your contribution in the last event! We'd like to invite you to lead this upcoming drive.",

      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    },

    {
      id: 2,

      title: "Tree Plantation for Future",

      organization: "Green Earth Initiative",

      email: "contact@greenearthinitiative.org",

      role: "Team Lead",

      eventDate: "28/12/2024",

      sentDate: "2/12/2024",

      status: "Pending",

      message:
        "Your leadership and environmental passion make you a perfect fit for this initiative!",

      image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    },

    {
      id: 3,

      title: "Winter Clothing Distribution",

      organization: "Warmth for All",

      email: "events@warmthforall.org",

      role: "Distribution Volunteer",

      eventDate: "20/12/2024",

      sentDate: "25/11/2024",

      status: "Accepted",

      message:
        "Join us in distributing winter clothing to those in need. Your help matters!",

      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },

    {
      id: 4,

      title: "Community Health Camp",

      organization: "Health Alliance",

      email: "health@alliance.org",

      role: "Medical Assistant",

      eventDate: "10/12/2024",

      sentDate: "20/11/2024",

      status: "Rejected",

      reason: "I have a prior commitment on that date",

      message:
        "Your medical knowledge and dedication were impressive. We'd love to have you back!",

      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    },
  ]; // later from supabase

  return (
    <div className="px-6 md:px-12 py-8 bg-[#F9FAFB] min-h-screen max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-[#0F172A]">Event Invitations</h1>

        <p className="text-gray-600 mt-2">
          Discover and respond to event invitations from organizations
        </p>
      </div>

      {/* SEND HERE */}
      <InvitationStats invitations={invitations} />

      <InvitationTabs tab={tab} setTab={setTab} />

      <InvitationSearch value={search} onChange={setSearch} />

      <InvitationGrid
        tab={tab}
        search={search}
        invitations={invitations}
        /* actions */
        onAccept={(invite) => {
          console.log("Accepted", invite);
        }}
        onReject={(invite) => {
          console.log("Rejected", invite);
        }}
        onViewEvent={(invite) => {
          console.log("View Event", invite);
        }}
      />
    </div>
  );
}
