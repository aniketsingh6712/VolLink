import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";


import { UserRow } from "../../../component/Organisation/Event details/UserRow";
import { Section } from "../../../component/Organisation/Event details/Section";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import ManagerAssignmentCard from "../../../component/Organisation/Event details/Action Modal/ManagerAssignmentCard";
import AssignManagerModal from "../../../component/Organisation/Event details/Action Modal/AssignManagerModal";
import managers from "../../../features/organization/components/event-details/data/managerData";
export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // for the manager
  const [selectedManager, setSelectedManager] = useState(null);
  const [openAssignManager, setOpenAssignManager] = useState(false);


  useEffect(() => {
    fetchEventDetails();
  }, []);

  const fetchEventDetails = async () => {

    try {

      // FETCH EVENT
      const { data: eventData, error: eventError } =
        await supabase
          .from("events")
          .select("*")
          .eq("id", id)
          .single();
      console.log("Fetched event data:", eventData, id);
      if (eventError) throw eventError;

      setEvent(eventData);

      // FETCH APPLICATIONS
      const { data: applications, error: appError } =
        await supabase
          .from("event_applications")
          .select(`
          *,
          volunteer_profiles (
            id,
            user_id
          )
        `)
          .eq("event_id", id);

      if (appError) throw appError;

      // EMPTY
      if (!applications || applications.length === 0) {

        setPending([]);

        setApproved([]);

        return;
      }

      // GET PROFILE IDS
      const userIds = applications
        .map((item) => item.volunteer_profiles?.user_id)
        .filter(Boolean);

      // FETCH PROFILES
      const { data: profilesData, error: profileError } =
        await supabase
          .from("profiles")
          .select("*")
          .in("id", userIds);

      if (profileError) throw profileError;

      // MAP PROFILE
      const profileMap = {};

      profilesData.forEach((profile) => {
        profileMap[profile.id] = profile;
      });

      // FORMAT DATA
      const formattedApplications = applications.map(
        (item) => {

          const profile =
            profileMap[
            item.volunteer_profiles?.user_id
            ];

          return {
            id: item.id,
            status: item.status,
            name: profile?.full_name || "Unknown User",
            email: profile?.email || "No Email",
            phone: profile?.phone || "No Phone",
            photo: profile?.avatar_url || "",
            appliedAt: item.applied_at,
          };
        }
      );

      // FILTER
      const pendingList = formattedApplications.filter(
        (item) => item.status === "PENDING"
      );

      const approvedList = formattedApplications.filter(
        (item) => item.status === "APPROVED"
      );

      setPending(pendingList);

      setApproved(approvedList);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">

        <div className="flex flex-col items-center gap-4">

          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

          <p className="text-gray-500 font-medium">
            Loading event...
          </p>

        </div>

      </div>
    );
  }

  const percent =
    event.people_needed > 0
      ? Math.min(
        100,
        Math.round(
          (event.people_applied /
            event.people_needed) * 100
        )
      )
      : 0;
  const isCompleted = event.status === "COMPLETED";
  return (
    <div className="bg-[#F9FAFB] min-h-screen max-w-7xl mx-auto px-6 md:px-12 py-8">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Event Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your events and volunteer applications
          </p>
        </div>
        <div />
      </div>

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
      >
        <FaArrowLeft size={16} />
        Back
      </button>

      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl shadow-sm border mb-6">

        {/* EVENT HEADER */}
        <div className="px-6 py-6 border-b">

          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* LEFT LABEL */}
            {/* EVENT IMAGE + LABEL */}
            <div className="min-w-[180px]">

              {/* IMAGE */}
              <div className="w-full h-40 rounded-2xl overflow-hidden bg-gray-100 shadow-sm border">

                {event.image_url ? (

                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />

                ) : (

                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">

                    <div className="text-4xl">
                      🖼️
                    </div>

                    <p className="text-sm mt-2">
                      No Event Image
                    </p>

                  </div>
                )}

              </div>

              {/* TITLE */}
              <div className="mt-3">

                <p className="font-semibold text-gray-800 line-clamp-2">

                  {event.title}

                </p>

                <p className="text-sm text-gray-500 mt-1">

                  {event.category || "General"}

                </p>
                <div className="mt-2">

                  <span className={`
    px-3 py-1 rounded-full text-xs font-medium

    ${event.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"}
  `}>

                    {event.status}

                  </span>

                </div>

              </div>

            </div>

            {/* MAIN */}
            <div className="flex-1">

              <h2 className="text-xl font-bold text-gray-900">
                {event.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {event.description}
              </p>

              {/* INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium truncate">
                    {event.location}
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="font-medium">{event.start_date}</p>

                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Total Applied</p>
                  <p className="font-medium">{event.people_applied}</p>
                </div>
              </div>

              {/* PROGRESS */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{event.people_applied} applied</span>
                  <span>{event.people_needed} needed</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* ACTION BOX */}
            <div className="w-full md:w-60 bg-blue-600 text-white rounded-xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Quick Actions
                </h3>
                <p className="text-xs text-blue-100 mt-1">
                  Manage event quickly
                </p>
              </div>

              <div className="space-y-2 mt-4">
                <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm">
                  Edit Event
                </button>

                <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm">
                  Close Event
                </button>
              </div>
            </div>

          </div>
          <div className="mt-6">

            <ManagerAssignmentCard
              manager={selectedManager}
              onAssign={() => setOpenAssignManager(true)}
            />

          </div>
        </div>

        {/* SEARCH */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center border rounded-xl px-3 py-3 bg-white">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              placeholder="Search candidates by name..."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>


        {/* PENDING */}
        {!isCompleted && (

          <div className="px-6 py-4">

            <Section
              title={`Pending Applications (${pending.length})`}
            >

              {pending.length > 0 ? (

                pending.map((item, i) => (
                  <UserRow
                    key={i}
                    user={item}
                    type="pending"
                  />
                ))

              ) : (

                <EmptyState
                  title="No Pending Applications"
                  subtitle="No volunteers have applied yet."
                />

              )}

            </Section>

          </div>
        )}

        {/* APPROVED */}
        <div className="px-6 pb-6">

          <Section
            title={
              isCompleted
                ? `Event Volunteers (${approved.length})`
                : `Approved Volunteers (${approved.length})`
            }
          >

            {approved.length > 0 ? (

              approved.map((item, i) => (
                <UserRow
                  key={i}
                  user={item}
                  type="approved"
                />
              ))

            ) : (

              <EmptyState
                title="No Approved Volunteers"
                subtitle="No volunteers approved yet."
              />

            )}

          </Section>

        </div>

      </div>

      <AssignManagerModal
        open={openAssignManager}
        managers={managers}
        onClose={() => setOpenAssignManager(false)}
        onAssign={(id) => {
          const manager = managers.find(m => m.id === id);
          setSelectedManager(manager);
          setOpenAssignManager(false);

        }}

      />
    </div>
  );
}


function EmptyState({
  title,
  subtitle,
}) {

  return (
    <div className="py-14 flex flex-col items-center justify-center text-center">

      {/* ICON */}
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl">

        📭

      </div>

      {/* TITLE */}
      <h3 className="mt-5 text-lg font-semibold text-gray-800">

        {title}

      </h3>

      {/* SUBTITLE */}
      <p className="text-gray-500 mt-2 max-w-sm text-sm">

        {subtitle}

      </p>

    </div>
  );
}