import { useState } from "react";


import CurrentEventCard from "../../../component/Volunteer/Home/currentEventCard";

import UpcomingEventCard from "../../../component/Volunteer/Home/upcomingEventCard";

import ScanPassModal from "../../../component/Volunteer/Home/scanPassModel";
import BoardingPass from "../../../component/Event Status/EventPass";
import VolunteerHeroSection from "../../../component/Volunteer/Home/heroSection";
export default function VolunteerHome() {
    const [scannerOpen, setScannerOpen] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const volunteerRole = "ENTRY_VOLUNTEER";
 const volunteer = {
    name: "authors-view",
  };

    const currentEvent = {
        id: 1,

        title: "Food Donation Drive",

        date: "31 Oct 2024",

        location: "Community Center",

        status: "Going on", // confirmed | completed

        checkIn: "08:30 AM",

        checkOut: "04:45 PM",

        hours: "8.25",

        role: "Entry Volunteer",

        passId: "BP-001-2024",
    };
   const upcomingEvents = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    organizer: "Green Earth Foundation",
    date: "10 Nov 2026",
    time: "08:30 AM",
    location: "Cubbon Park, Bengaluru",
    passType: "Free Entry",
    description:
      "Join volunteers to plant trees, spread awareness, and make the city greener together.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b",
  },

  {
    id: 2,
    title: "Community Health Camp",
    organizer: "CarePlus NGO",
    date: "18 Nov 2026",
    time: "09:00 AM",
    location: "Whitefield, Bengaluru",
    passType: "Registration Required",
    description:
      "Free health checkups, doctor consultations, awareness sessions, and community support.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },

  {
    id: 3,
    title: "Youth Leadership Summit",
    organizer: "Future Leaders Hub",
    date: "22 Nov 2026",
    time: "06:00 PM",
    location: "Koramangala, Bengaluru",
    passType: "VIP + General",
    description:
      "Interactive talks, networking opportunities, startup sessions, and leadership workshops.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
];
    return (
        <div className="bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <VolunteerHeroSection user={volunteer} />

               <CurrentEventCard
    event={currentEvent}

    onView={() => {
        console.log("view details");
    }}

    onPass={() => {
        setShowPass(true);
    }}
/>
             

                {volunteerRole === "ENTRY_VOLUNTEER" && (
                    <div
                        className="
mt-6
bg-white
rounded-lg
border
border-gray-100
shadow-md
p-4
"
                    >
                        <div
                            className="
flex
justify-between
items-center
"
                        >
                            <div>
                                <h2
                                    className="
font-bold
text-xl
"
                                >
                                    Entry Tools
                                </h2>

                                <p
                                    className="
text-gray-500
"
                                >
                                    Scan volunteer passes
                                </p>
                            </div>

                            <button
                                onClick={() => setScannerOpen(true)}
                                className="
bg-blue-600

text-white

rounded-xl

px-6

py-3
"
                            >
                                Open Scanner
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-10">
                    <h2
                        className="
text-xl
font-bold
text-gray-700
mb-5
uppercase
"
                    >
                        Upcoming Events
                    </h2>

                   <div
  className="
  grid
  gap-6
  md:grid-cols-2
  lg:grid-cols-3
  "
>
  {upcomingEvents.map((event) => (
    <UpcomingEventCard
      key={event.id}
      event={event}
    />
  ))}
</div>
                </div>
            </div>

            <ScanPassModal
                isOpen={scannerOpen}
                onClose={() => setScannerOpen(false)}
            />
            {
                showPass && (
                    <div
                        className="
fixed
inset-0
z-50
bg-black/50
overflow-y-auto
flex
justify-center
p-4
"
                    >

                        <div
                            className="
w-full
max-w-[520px]
my-auto
"
                        >

                            <BoardingPass
                                volunteer="John Doe"

                                role={currentEvent.role}

                                event={currentEvent.title}

                                status={currentEvent.status}

                                passId={currentEvent.passId}

                                date={currentEvent.date}

                                location={currentEvent.location}

                                checkIn={currentEvent.checkIn}

                                checkOut={currentEvent.checkOut}

                                hoursWorked={currentEvent.hours}

                                onClose={() => setShowPass(false)}

                                onDownload={() => {
                                    console.log("download pass");
                                }}
                            />

                        </div>

                    </div>
                )
            }
        </div>
    );
}
