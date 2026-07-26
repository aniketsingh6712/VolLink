import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";


import { UserRow } from "../../../component/Organisation/Event details/UserRow";
import { Section } from "../../../component/Organisation/Event details/Section";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import ManagerAssignmentCard from "./components/Manager/ManagerAssignmentCard"
import AssignManagerModal from "./components/Manager/AssignmentModal";
import managers from "./data/managerData";
import EventDetailsHeader from "./components/Header/EventDetailsHeader";
import BackButton from "./components/Header/BackButton";
import EventOverviewSection from "./components/EventOverview/EventOverviewSection";
import VolunteerSearchBar from "./components/VolunteerSearch/VolunteerSearchBar";
import EmptyState from "./components/Shared/EmptyState";
import PendingApplicationSection from "./components/Volunteers/PendingApplicationSection";
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
            <EventDetailsHeader />

            {/* BACK */}
            <BackButton />

            {/* MAIN CARD */}
            <div className="bg-white rounded-2xl shadow-sm border mb-6">

                {/* EVENT HEADER */}
                <EventOverviewSection event={event} manager={selectedManager} managerHandler={setSelectedManager} />

                {/* SEARCH */}
                <VolunteerSearchBar />


                {/* PENDING */}
                {!isCompleted && (

                   
                    <PendingApplicationSection pending={pending}/>
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
