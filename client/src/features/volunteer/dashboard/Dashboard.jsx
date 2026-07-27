import { useState } from "react";
import EventDetailsModal from "./components/Modals/EventDetailsModal";
import CurrentEventCard from "./components/CurrentEvent/currentEventCard";
import UpcomingEventCard from "./components/UpcomingEvents/upcomingEventCard";
import ScanPassModal from "./components/Modals/scanPassModel";
import BoardingPass from "../../common/EventPass/BoadingPass";
import HeroSection from "./components/HeroSection/HeroSection"
import EventUpdates from "./components/Updates/EventUpdates";
import EntryToolsSection from "./components/EntryTools/EntryToolsSection";
import UpcomingEventsSection from "./components/UpcomingEvents/UpcomingEventsSection";
export default function Dashboard() {
    const [scannerOpen, setScannerOpen] = useState(false);
    const [modal, setModal] = useState(null);
    // "pass" | "details" | null
    const [selectedEvent, setSelectedEvent] = useState(null);
    const volunteerRole = "ENTRY_VOLUNTEER";
    const volunteer = { name: "authors-view", };

    const currentEvent = {
        id: 1,
        title: "Food Donation Drive",
        category: "Food & Community",
        organization: "Helping Hands NGO",
        organizationEmail: "contact@helpinghands.org",
        organizationPhone: "+91 9876543210",
        manager: {
            name: "Ananya Sharma",
            email: "ananya@helpinghands.org",
            phone: "+91 9988776655",
        },
        totalVolunteers: 42,
        date: "31 Oct 2026",
        time: "08:30 AM",
        location: "Downtown Community Center",
        description: "Help distribute food packages and coordinate volunteer check-ins for underprivileged communities.",
        tasks: [
            "Handle volunteer entry",
            "Scan volunteer passes",
            "Guide volunteers",
            "Manage check-in & checkout",
            "Coordinate with event manager",
        ],
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
        status: "completed",
        checkIn: "08:30 AM",
        checkOut: "04:45 PM",
        hours: "8.25",
        role: "Entry Volunteer",
        passId: "BP-001-2026",
        passType: "Assigned Pass",
    };
    const upcomingEvents = [
        {
            id: 2,
            title: "Tree Plantation Drive",
            category: "Environment",
            organization: "Green Earth Foundation",
            organizationEmail: "hello@greenearth.org",
            organizationPhone: "+91 9123456780",
            manager: {
                name: "Rohan Gupta",
                email: "rohan@greenearth.org",
                phone: "+91 9011111111"
            },

            totalVolunteers: 120,
            date: "10 Nov 2026",
            time: "08:30 AM",
            location: "Cubbon Park, Bengaluru",
            passType: "Free Entry",
            status: "confirmed",
            description: "Join volunteers to plant trees and restore green spaces across the city.",
            tasks: [
                "Plant trees",
                "Guide visitors",
                "Manage registrations",
                "Support cleanup"
            ],
            image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
        },
        {
            id: 3,
            title: "Community Health Camp",
            category: "Healthcare",
            organization: "CarePlus NGO",
            organizationEmail: "support@careplus.org",

            organizationPhone:
                "+91 9000002222",

            manager: {
                name:
                    "Sneha Reddy",

                email:
                    "sneha@careplus.org",

                phone:
                    "+91 9988772211"
            },

            totalVolunteers:
                65,

            date:
                "18 Nov 2026",

            time:
                "09:00 AM",

            location:
                "Whitefield, Bengaluru",

            passType:
                "Registration Required",

            status:
                "confirmed",

            description:
                "Provide free medical consultation and awareness programs.",

            tasks: [
                "Registration desk",
                "Queue management",
                "Volunteer support",
                "Patient assistance"
            ],

            image:
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
        },

        {
            id: 4,

            title:
                "Youth Leadership Summit",

            category:
                "Leadership",

            organization:
                "Future Leaders Hub",

            organizationEmail:
                "team@futureleaders.com",

            organizationPhone:
                "+91 9888776655",

            manager: {
                name:
                    "Vikram Jain",

                email:
                    "vikram@futureleaders.com",

                phone:
                    "+91 9911223344"
            },

            totalVolunteers:
                80,

            date:
                "22 Nov 2026",

            time:
                "06:00 PM",

            location:
                "Koramangala, Bengaluru",

            passType:
                "VIP + General",

            status:
                "confirmed",

            description:
                "Leadership sessions, networking, and startup collaboration.",

            tasks: [
                "Manage entry",
                "Seat allocation",
                "Speaker support",
                "Registration desk"
            ],

            image:
                "https://images.unsplash.com/photo-1511578314322-379afb476865",
        }
    ];
    const openPass = (event) => {
        setSelectedEvent(event);
        setModal("pass");
    };

    const openDetails = (event) => {
        setSelectedEvent(event);
        setModal("details");
    };

    const closeModal = () => {
        setSelectedEvent(null);
        setModal(null);
    };
    return (
        <div className="bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <HeroSection user={volunteer} />

                <CurrentEventCard
                    event={currentEvent}
                    onView={() =>
                        openDetails(currentEvent)
                    }
                    onPass={() =>
                        openPass(currentEvent)
                    }
                />

                <EventUpdates />

                <EntryToolsSection
                    role={volunteerRole}
                    onOpenScanner={() => setScannerOpen(true)}
                />
                <UpcomingEventsSection
                    events={upcomingEvents}
                    onView={openDetails}
                    onPass={openPass}
                />
            </div>

            <ScanPassModal
                isOpen={scannerOpen}
                onClose={() => setScannerOpen(false)}
            />
            {
                modal === "pass" &&
                selectedEvent && (

                    <div
                        className="
                            fixed
                            inset-0
                            z-50
                            bg-black/50
                            flex
                            justify-center
                            p-4
                            overflow-y-auto
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
                                role={
                                    selectedEvent.role ||
                                    "Volunteer"
                                }
                                event={
                                    selectedEvent.title
                                }
                                status={
                                    selectedEvent.status ||
                                    "confirmed"
                                }
                                passId={
                                    selectedEvent.passId ||
                                    `BP-${selectedEvent.id}`
                                }
                                date={
                                    selectedEvent.date
                                }
                                location={
                                    selectedEvent.location
                                }
                                checkIn={
                                    selectedEvent.checkIn
                                }
                                checkOut={
                                    selectedEvent.checkOut
                                }
                                hoursWorked={
                                    selectedEvent.hours
                                }
                                onClose={
                                    closeModal
                                }
                                onDownload={() =>
                                    console.log(
                                        "download"
                                    )
                                }
                            />

                        </div>
                    </div>
                )}

            <EventDetailsModal
                isOpen={modal === "details"}
                onClose={closeModal}
                event={selectedEvent}
            />
        </div>
    );
}
