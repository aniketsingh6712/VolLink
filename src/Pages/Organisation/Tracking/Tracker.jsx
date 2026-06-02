import { useMemo, useState } from "react";

import TrackerStats from "../../../component/Organisation/Tracker/TrackerStats";
import TrackerTabs from "../../../component/Organisation/Tracker/TrackerTabs";
import VolunteerTrackerTable from "../../../component/Organisation/Tracker/VolunteerTrackTable";
import VolunteerDetailsModal from "../../../component/Organisation/Tracker/VolunteerDetailsModal";

export default function Tracker() {

    const [tab, setTab] = useState("active");

    const [selected, setSelected] = useState(null);

    const volunteers = [

        {
            id: 1,
            name: "Emma Davis",
            email: "emma@example.com",
            avatar: "https://i.pravatar.cc/150?img=13",
            checkin: "09:00 AM",
            checkout: null,
            hours: 7.5,
            location: "Main Entrance",
            status: "ACTIVE",
            note: "Currently working at distribution station"
        },

        {
            id: 2,
            name: "Alex Rodriguez",
            email: "alex@example.com",
            avatar: "https://i.pravatar.cc/150?img=12",
            checkin: "09:15 AM",
            checkout: null,
            hours: 7.25,
            location: "Main Entrance",
            status: "ACTIVE"
        },

        {
            id: 3,
            name: "Sarah Johnson",
            email: "sarah@example.com",
            avatar: "https://i.pravatar.cc/150?img=1",
            checkin: "08:30 AM",
            checkout: "04:45 PM",
            hours: 8.25,
            location: "Main Entrance",
            status: "CHECKED_OUT"
        },

        {
            id: 4,
            name: "Mike Chen",
            email: "mike@example.com",
            avatar: "https://i.pravatar.cc/150?img=2",
            checkin: "08:45 AM",
            checkout: "05:00 PM",
            hours: 8.25,
            location: "Main Entrance",
            status: "CHECKED_OUT"
        }

    ];

    const filtered = useMemo(() => {

        if (tab === "active") {
            return volunteers.filter(
                v => v.status === "ACTIVE"
            );
        }

        return volunteers.filter(
            v => v.status === "CHECKED_OUT"
        );

    }, [tab]);

    return (

        <div className="bg-[#F8FAFC] min-h-screen">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-5xl font-bold text-[#0F172A]">
                    Volunteer Check-in Management
                </h1>

                <p className="mt-2 text-gray-500">
                    Track volunteer attendance, hours worked and event participation
                </p>

                <TrackerStats volunteers={volunteers} />

                <TrackerTabs
                    tab={tab}
                    setTab={setTab}
                    volunteers={volunteers}
                />

                <VolunteerTrackerTable
                    data={filtered}
                    onView={setSelected}
                />

            </div>

            {selected && (
                <VolunteerDetailsModal
                    volunteer={selected}
                    onClose={() => setSelected(null)}
                />
            )}

        </div>

    );

}

