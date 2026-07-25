import StatsCard from "../../../features/organization/components/dashboard/components/Stats/StatsCard";
import EventRow from "../../../features/organization/components/dashboard/common/event row/EventRow";
import { FaPlus } from "react-icons/fa6";
import { PiClockCounterClockwise } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabase";
import { useEffect, useState } from "react";
import OrganizationVerificationGuard from "../verification/OrganizationVerificationGuard";
export default function OrganizationDashboard() {

  const [activeEvents, setActiveEvents] = useState([]);
  const [historyEvents, setHistoryEvents] = useState([]);
  const [stats, setStats] = useState([]);


  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {

    try {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      // GET ORGANIZATION PROFILE
      const {
        data: orgProfile,
        error: orgError,
      } = await supabase
        .from("organization_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (orgError || !orgProfile) {

        navigate("/organization/setup");

        return;
      }

      // FETCH EVENTS
      const {
        data: events,
        error: eventsError,
      } = await supabase
        .from("events")
        .select(`
        *,
        events_task (
          tasks
        )
      `)
        .eq("organization_id", orgProfile.id)
        .order("created_at", {
          ascending: false,
        });

      if (eventsError) throw eventsError;

      // FORMAT EVENTS
      const formattedEvents = events.map((event) => ({

        id: event.id,

        title: event.title,

        description: event.description,

        date: `${event.start_date} - ${event.end_date}`,

        location: event.location,

        category: event.category,

        applied: event.people_applied,
        selected: event.people_selected,
        needed: event.people_needed,

        benefit: event.benefits,
        image: event.image_url,
        completed:
          event.status === "COMPLETED",

        tasks:
          event.events_task?.[0]?.tasks || [],
      }));

      // ACTIVE EVENTS
      const active = formattedEvents.filter(
        (item) => !item.completed
      );

      // HISTORY EVENTS
      const history = formattedEvents.filter(
        (item) => item.completed
      );

      setActiveEvents(active);

      setHistoryEvents(history);

      // STATS
      setStats([
        {
          label: "Active Events",
          value: active.length,
          color: "blue",
        },
        {
          label: "Total Volunteers",
          value: formattedEvents.reduce(
            (acc, item) => acc + item.applied,
            0
          ),
          color: "green",
        },
        {
          label: "Pending Apps",
          value: 0,
          color: "yellow",
        },
        {
          label: "Approved",
          value: formattedEvents.reduce(
            (acc, item) => acc + item.applied,
            0
          ),
          color: "purple",
        },
        {
          label: "Events Done",
          value: history.length,
          color: "orange",
        },
      ]);

    } catch (err) {

      console.error(err);
    }
  };





  const navigate = useNavigate();
  return (

    <div className="bg-[#F9FAFB] min-h-screen px-6 md:px-12 py-8 max-w-7xl mx-auto">
      <OrganizationVerificationGuard>
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">
              Organization Dashboard
            </h1>
            <p className="text-gray-500">
              Manage your events and volunteers
            </p>
          </div>

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl"
            onClick={() => navigate("/event-create")}
          >
            <FaPlus size={18} className="text-white" />
            Create New Event
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {stats.map((item, i) => (
            <StatsCard key={i} {...item} />
          ))}
        </div>

        {/* ACTIVE EVENTS */}
        <div className="bg-white rounded-2xl shadow-sm  overflow-hidden mb-10">

          {/* HEADER */}
          <div className="bg-blue-100/70 px-6 py-5 flex items-start gap-3">

            {/* Icon */}
            <div className="text-blue-600 mt-1">
              <LuEye size={22} />
            </div>

            {/* Title + Subtitle */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Active Events
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Events currently accepting volunteers
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="divide-y">
            {activeEvents.map((event, i) => (
              <div key={i} className="px-6 py-5">
                <EventRow event={event} />
              </div>
            ))}
          </div>

        </div>

        {/* HISTORY */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden mb-10">

          {/* HEADER */}
          <div className="bg-purple-100/70 px-6 py-5 flex items-start gap-3">

            {/* Icon */}
            <div className="text-purple-600 mt-1">
              <PiClockCounterClockwise size={22} />
            </div>

            {/* Title + Subtitle */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Event History
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Previously conducted events
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="divide-y">
            {historyEvents.map((event, i) => (
              <div key={i} className="px-6 py-5">
                <EventRow event={event} history />
              </div>
            ))}
          </div>

        </div>
      </OrganizationVerificationGuard>
    </div>

  );
}