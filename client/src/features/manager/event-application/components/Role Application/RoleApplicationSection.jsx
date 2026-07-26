import { useMemo, useState } from "react";

import {
    FaChevronDown,
    FaChevronUp,
    FaCheck,
    FaTimes,
    FaEye,
} from "react-icons/fa";

import VolunteerProfileDrawer from "./components/Modals/VolunteerProfileDrawer";
import ApproveVolunteerModal from "./components/Modals/ApproveVolunteerModal";
import RejectVolunteerModal from "./components/Modals/RejectVolunteerModal";

export default function RoleApplicationSection({

    role,

    selectedStatus,

}) {

    const [expanded, setExpanded] = useState(true);

    const [currentTab, setCurrentTab] = useState("Pending");

    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

    const [openProfile, setOpenProfile] = useState(false);

    const [openApprove, setOpenApprove] = useState(false);

    const [openReject, setOpenReject] = useState(false);

    const [showAll, setShowAll] = useState(false);

    const tab = selectedStatus || currentTab;

    const filteredApplications = useMemo(() => {

        return role.applications.filter(

            item =>

                item.status.toLowerCase() === tab.toLowerCase()

        );

    }, [role.applications, tab]);

    const applications =

        showAll

            ? filteredApplications

            : filteredApplications.slice(0, 4);

    const remaining =

        role.needed - role.approved;

    return (

        <div className="bg-white rounded-2xl border overflow-hidden">

            {/* HEADER */}

            <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-white">

                {/* ROLE HEADER */}

                <div className="px-6 pt-6">

                    <div className="flex items-start justify-between">

                        {/* LEFT */}

                        <div className="flex gap-4">

                            {/* ICON */}

                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl shadow-sm">

                                📋

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold text-gray-900">

                                    {role.title}

                                </h2>

                                <p className="text-gray-500 mt-1 max-w-xl">

                                    {role.description}

                                </p>

                            </div>

                        </div>

                        {/* STATUS */}

                        <div>

                            {

                                role.remaining === 0

                                    ?

                                    <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">

                                        ✓ Fully Staffed

                                    </span>

                                    :

                                    <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">

                                        Recruiting

                                    </span>

                            }

                        </div>

                    </div>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-4 gap-4 px-6 mt-6">

                    <StatCard

                        title="Need"

                        value={role.need}

                        color="blue"

                    />

                    <StatCard

                        title="Applied"

                        value={role.applied}

                        color="purple"

                    />

                    <StatCard

                        title="Approved"

                        value={role.approved}

                        color="green"

                    />

                    <StatCard

                        title="Remaining"

                        value={role.remaining}

                        color="orange"

                    />

                </div>

                

            </div>

            {

                expanded &&

                <>

                    {/* TABS */}

                    <div className="px-6 pt-5">

                        <div className="flex gap-8 border-b">

                            {

                                [

                                    "Pending",

                                    "Approved",

                                    "Rejected",

                                ].map(tabName => (

                                    <button

                                        key={tabName}

                                        onClick={() => setCurrentTab(tabName)}

                                        className={`pb-3 text-sm font-medium border-b-2 transition

                                        ${tab === tabName

                                                ?

                                                "border-blue-600 text-blue-600"

                                                :

                                                "border-transparent text-gray-500"

                                            }

                                        `}

                                    >

                                        {tabName}

                                        {" "}

                                        (

                                        {

                                            role.applications.filter(

                                                item =>

                                                    item.status === tabName

                                            ).length

                                        }

                                        )

                                    </button>

                                ))

                            }

                        </div>

                    </div>

                    {/* EMPTY */}

                    {

                        filteredApplications.length === 0

                            ?

                            <div className="py-12 text-center text-gray-500">

                                No volunteers found.

                            </div>

                            :

                            <>

                                {/* TABLE */}


                                <div className="mx-6 mt-5 mb-5 rounded-2xl border overflow-hidden">

                                    {/* TABLE HEADER */}

                                    <div className="grid grid-cols-12 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-500">

                                        <div className="col-span-4">

                                            Volunteer

                                        </div>

                                        <div className="col-span-2">

                                            Applied On

                                        </div>

                                        <div className="col-span-3">

                                            Contact

                                        </div>

                                        <div className="col-span-3 text-center">

                                            Actions

                                        </div>

                                    </div>

                                    {/* ROWS */}

                                    {

                                        applications.map(volunteer => (

                                            <div

                                                key={volunteer.id}

                                                className="grid grid-cols-12 items-center px-5 py-4 border-t hover:bg-gray-50"

                                            >

                                                {/* Volunteer */}

                                                <div className="col-span-4 flex items-center gap-3">

                                                    <img

                                                        src={volunteer.photo}

                                                        className="w-12 h-12 rounded-full object-cover"

                                                    />

                                                    <div>

                                                        <h3 className="font-semibold">

                                                            {volunteer.name}

                                                        </h3>

                                                        <p className="text-sm text-gray-500">

                                                            {volunteer.email}

                                                        </p>

                                                    </div>

                                                </div>

                                                {/* Applied */}

                                                <div className="col-span-2 text-sm text-gray-600">

                                                    {volunteer.appliedAt}

                                                </div>

                                                {/* Contact */}

                                                <div className="col-span-3">

                                                    <p className="text-sm text-gray-600">

                                                        {volunteer.phone}

                                                    </p>

                                                </div>

                                                {/* ACTIONS */}

                                                <div className="col-span-3 flex justify-center gap-3">

                                                    <ActionButton

                                                        color="blue"

                                                        onClick={() => {

                                                            setSelectedVolunteer(volunteer);

                                                            setOpenProfile(true);

                                                        }}

                                                    >

                                                        <FaEye />

                                                    </ActionButton>

                                                    {

                                                        tab === "Pending"

                                                        &&

                                                        <>

                                                            <ActionButton

                                                                color="green"

                                                                onClick={() => {

                                                                    setSelectedVolunteer(volunteer);

                                                                    setOpenApprove(true);

                                                                }}

                                                            >

                                                                <FaCheck />

                                                            </ActionButton>

                                                            <ActionButton

                                                                color="red"

                                                                onClick={() => {

                                                                    setSelectedVolunteer(volunteer);

                                                                    setOpenReject(true);

                                                                }}

                                                            >

                                                                <FaTimes />

                                                            </ActionButton>

                                                        </>

                                                    }

                                                </div>

                                            </div>

                                        ))

                                    }

                                </div>

                                {

                                    filteredApplications.length > 4

                                    &&

                                    <div className="py-4 text-center">

                                        <button

                                            onClick={() => setShowAll(!showAll)}

                                            className="text-blue-600 font-medium"

                                        >

                                            {

                                                showAll

                                                    ?

                                                    "Show Less"

                                                    :

                                                    `View ${filteredApplications.length - 4} More Applications`

                                            }

                                        </button>

                                    </div>

                                }

                            </>

                    }

                </>

            }

            {/* MODALS */}

            <VolunteerProfileDrawer
                isOpen={openProfile}
                user={selectedVolunteer}
                onClose={() => setOpenProfile(false)}
                onApprove={() => {
                    setOpenProfile(false);
                    setOpenApprove(true);
                }}
                onReject={() => {
                    setOpenProfile(false);
                    setOpenReject(true);
                }}
            />

            <ApproveVolunteerModal
                isOpen={openApprove}
                user={selectedVolunteer}
                onClose={() => setOpenApprove(false)}
                onConfirm={(message) => {
                    console.log("Approved", selectedVolunteer, message);

                    setOpenApprove(false);
                }}
            />

            <RejectVolunteerModal
                isOpen={openReject}
                user={selectedVolunteer}
                onClose={() => setOpenReject(false)}
                onConfirm={(reason) => {
                    console.log("Rejected", selectedVolunteer, reason);

                    setOpenReject(false);
                }}
            />
        </div>

    );

}

function Stat({

    label,

    value,

    color = "text-gray-900",

}) {

    return (

        <div className="bg-white rounded-xl border p-4">

            <p className="text-xs text-gray-400">

                {label}

            </p>

            <h3 className={`text-2xl font-bold mt-2 ${color}`}>

                {value}

            </h3>

        </div>

    );

}

function ActionButton({

    children,

    color,

    onClick,

}) {

    const styles = {

        blue: "border-blue-200 text-blue-600 hover:bg-blue-50",

        green: "border-green-200 text-green-600 hover:bg-green-50",

        red: "border-red-200 text-red-600 hover:bg-red-50",

    };

    return (

        <button

            onClick={onClick}

            className={`w-10 h-10 rounded-lg border transition ${styles[color]}`}

        >

            <div className="flex justify-center">

                {children}

            </div>

        </button>

    );

}

function StatCard({

    title,

    value,

    color,

}){

    const styles={

        blue:"bg-blue-50 text-blue-600",

        purple:"bg-purple-50 text-purple-600",

        green:"bg-green-50 text-green-600",

        orange:"bg-orange-50 text-orange-600",

    };

    return(

        <div className={`rounded-2xl p-5 ${styles[color]}`}>

            <p className="text-sm">

                {title}

            </p>

            <h2 className="text-3xl font-bold mt-2">

                {value}

            </h2>

        </div>

    );

}