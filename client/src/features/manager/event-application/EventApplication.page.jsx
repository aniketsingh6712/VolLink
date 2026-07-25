import { useState } from "react";

import Header from "./components/Header/EventHeader";
import SearchToolbar from "./components/Search/SearchToolbar";
import RoleApplicationSection from "./components/Role Section/RoleApplicationSection";

import { roleApplications } from "../Data/managerDummyData";

export default function EventApplications() {

    const [search, setSearch] = useState("");

    const [selectedRole, setSelectedRole] = useState("All");

    const [selectedStatus, setSelectedStatus] = useState("Pending");

    return (

        <div className="bg-[#F9FAFB] min-h-screen">

            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

                <EventHeader

                    event={{

                        image:
                            "https://images.unsplash.com/photo-1593113598332-cd288d649433",

                        title: "Food Donation Drive",

                        description:
                            "Collecting and distributing food items to support underprivileged communities in the city.",

                        date: "20 Nov 2024",

                        location: "Community Center, Bangalore",

                        time: "09:00 AM - 04:00 PM",

                    }}

                    stats={{

                        applied: 42,

                        approved: 18,

                        pending: 24,

                        rejected: 4,

                    }}

                />

                <SearchToolbar

                    search={search}
                    setSearch={setSearch}

                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}

                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}

                />

                {

                    roleApplications.map(role => (

                        <RoleApplicationSection

                            key={role.id}

                            role={role}

                            selectedStatus={selectedStatus}

                        />

                    ))

                }

            </div>

        </div>

    );

}