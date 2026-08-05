import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import StaffStats from "./staff-stats/StaffStats";
import StaffTabs from "./staff-tabs/StaffTabs";
import ActiveStaffTable from "./active-staff-table/ActiveStaffTable";

import staffData from "./data/StaffData";
import StaffProfileDrawer from "./staff-profile-drawer/StaffProfileDrawer";
import InviteStaffModal from "./invite-staff-modal/InviteStaffModel";

import PendingApprovalTable from "./pending-approval-table/PendingApprovalTable";
import PendingInvitationTable from "./pending-invitation-table/PendingInvitationTable";
import pendingApprovalData from "./data/pendingApprovalData";
import pendingInvitationData from "./data/pendingInvitationData";
import PendingCandidateDrawer from "./pending-candidate-drawer/PendingCandidateDrawer";
import AssignEventModal from "./assign-event-modal/AssignEventModal";
import eventList from "./data/eventList";
const StaffManagementPage = () => {

    const [activeTab, setActiveTab] = useState("active");

    const [selectedManager, setSelectedManager] = useState(null);

    const [openProfile, setOpenProfile] = useState(false);
    const [openInvite, setOpenInvite] = useState(false);

    const [selectedCandidate, setSelectedCandidate] = useState(null);

    const [openCandidateDrawer, setOpenCandidateDrawer] = useState(false);
    const [openAssignEvent, setOpenAssignEvent] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

            {/* Header */}

            <div className="flex justify-between items-start">

                <div>

                    <h1 className="text-4xl font-bold">

                        Staff Management

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Invite, manage and assign event managers for your organization.

                    </p>

                </div>

                <button
                    onClick={() => setOpenInvite(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
                >
                    <FaPlus />

                    Invite Staff

                </button>

            </div>

            <StaffStats />

            <StaffTabs

                activeTab={activeTab}

                setActiveTab={setActiveTab}

            />

            {/* Table content */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

                <div className="p-6 border-b">

                    <input
                        placeholder="Search staff..."
                        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                {

                    activeTab === "active" && (

                        <ActiveStaffTable
                            staff={staffData}
                            onView={(manager) => {
                                setSelectedManager(manager);
                                setOpenProfile(true);
                            }}
                        />

                    )

                }

                {

                    activeTab === "pending" && (

                        <PendingInvitationTable
                            invitations={pendingInvitationData}
                        />

                    )

                }

                {

                    activeTab === "approval" && (

                        <PendingApprovalTable
                            staff={pendingApprovalData}
                            onView={(candidate) => {
                                setSelectedCandidate(candidate);
                                setOpenCandidateDrawer(true);
                            }}
                        />

                    )

                }

            </div>
            <StaffProfileDrawer
                open={openProfile}
                manager={selectedManager}
                onClose={() => setOpenProfile(false)}

                onAssign={() => {

                    setOpenAssignEvent(true);

                }}
            />
            <InviteStaffModal

                open={openInvite}

                onClose={() => setOpenInvite(false)}

                onInvite={(email) => {

                    console.log(email);

                    setOpenInvite(false);

                }}

            />
            <PendingCandidateDrawer

                open={openCandidateDrawer}

                candidate={selectedCandidate}

                onClose={() => setOpenCandidateDrawer(false)}

                onApprove={() => {

                    console.log("Approved");

                }}

                onReject={() => {

                    console.log("Rejected");

                }}

            />

            <AssignEventModal

                open={openAssignEvent}

                manager={selectedManager}

                events={eventList}

                onClose={() => setOpenAssignEvent(false)}

                onAssign={(eventId) => {

                    console.log(eventId);

                    setOpenAssignEvent(false);

                }}

            />
        </div>
    );

};

export default StaffManagementPage;