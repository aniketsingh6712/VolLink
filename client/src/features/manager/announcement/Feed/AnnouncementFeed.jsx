import AnnouncementCard from "./AnnouncementCard";
import AnnouncementDetailsDrawer from "./AnnouncementDetailsDrawer";
import { useState } from "react";
const announcements = [
    {
        id: 1,
        title: "Lunch Break",
        message:
            "Lunch is now available in the volunteer dining area. Please proceed in batches according to your assigned operational area.",
        audience: "All Volunteers",
        priority: "Normal",
        sentAt: "12:30 PM",
        read: 28,
        total: 34,
    },
    {
        id: 2,
        title: "Parking Full",
        message:
            "Parking area has reached capacity. Redirect incoming vehicles to Gate 3.",
        audience: "Parking Team",
        priority: "Emergency",
        sentAt: "11:45 AM",
        read: 5,
        total: 5,
    },
    {
        id: 3,
        title: "Medical Assistance Required",
        message:
            "Medical team please report immediately to the food court.",
        audience: "Medical",
        priority: "Important",
        sentAt: "10:55 AM",
        read: 2,
        total: 3,
    },
];

const AnnouncementFeed = () => {
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    return (

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

            <div className="px-6 py-5 border-b">

                <h2 className="text-xl font-bold">

                    Recent Announcements

                </h2>

                <p className="text-gray-500 mt-1">

                    Latest announcements sent during this event.

                </p>

            </div>

            <div className="max-h-[900px] overflow-y-auto">

                {

                    announcements.map((announcement) => (

                        <AnnouncementCard
                            key={announcement.id}
                            announcement={announcement}
                            onView={() => setSelectedAnnouncement(announcement)}
                        />
                    ))

                }

            </div>
            <AnnouncementDetailsDrawer
                open={selectedAnnouncement !== null}
                announcement={selectedAnnouncement}
                onClose={() => setSelectedAnnouncement(null)}
            />
        </div>

    );

};

export default AnnouncementFeed;