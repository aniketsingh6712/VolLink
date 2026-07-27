
import { PiClockCounterClockwise } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../utils/supabase";
import { useEffect, useState } from "react";
// import OrganizationVerificationGuard from "../verification/OrganizationVerificationGuard";
import DashboardHeader from "./components/Header/DashboardHeader";
import StatsSection from "./components/Stats/StatsSection";
import ActiveEventSection from "./components/ActiveEvents/ActiveEventSection";
import EventHistorySection from "./components/EventHistory/EventHistorySection";
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
      {/* <OrganizationVerificationGuard> */}
        {/* HEADER */}
      <DashboardHeader/>

        {/* STATS */}
        <StatsSection stats={stats}/>

        {/* ACTIVE EVENTS */}
        <ActiveEventSection events={activeEvents}/>

        {/* HISTORY */}
        <EventHistorySection events={historyEvents}/>
      {/* </OrganizationVerificationGuard> */}
    </div>

  );
}