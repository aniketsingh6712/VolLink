import { useState } from "react";

import UpdateCard from "./UpdateCard";
import UpdateDrawer from "./UpdateDrawer";
const updates = [
    {
        id: 1,
        title: "Emergency Crowd Control",
        category: "Emergency",
        message:
            "Additional volunteers are required immediately near Gate 2 to manage heavy crowd movement.",
        time: "2 mins ago",
        read: true,
    },
    {
        id: 2,
        title: "Lunch Break",
        category: "General",
        message:
            "Lunch is now available in the volunteer dining area. Please proceed according to your shift.",
        time: "18 mins ago",
        read: true,
    },
    {
        id: 3,
        title: "Registration Shift Updated",
        category: "Important",
        message:
            "Registration volunteers have been reassigned to Counter B until further notice.",
        time: "1 hour ago",
        read: false,
    },
    {
        id: 4,
        title: "Medical Team Required",
        category: "Emergency",
        message:
            "Medical volunteers report to First Aid Station immediately.",
        time: "45 mins ago",
        read: false,
    },
    {
        id: 5,
        title: "Parking Open",
        category: "General",
        message:
            "Parking Area B is now available.",
        time: "2 hours ago",
        read: false,
    },
];


const EventUpdates = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = [
        {
            title: "Emergency",
            icon: "🚨",
            color: "bg-red-100 text-red-600",
        },
        {
            title: "Important",
            icon: "📢",
            color: "bg-yellow-100 text-yellow-600",
        },
        {
            title: "General",
            icon: "ℹ️",
            color: "bg-blue-100 text-blue-600",
        },
    ];


    return (
        <>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm my-2">
                <div className="px-6 py-5 border-b flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">
                            Event Updates
                        </h2>
                        <p className="text-gray-500 mt-1">
                            Latest announcements from your manager.
                        </p>
                    </div>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        2 New
                    </span>
                </div>

                {/* <div className="flex gap-5 overflow-x-auto p-6">
                    {
                        updates.map(update => (
                            <UpdateCard
                                key={update.id}
                                update={update}
                                onClick={() => setSelectedUpdate(update)}
                            />
                        ))
                    }
                </div> */}
                <div className="grid grid-cols-3 gap-4 px-6 pt-6">

                    {categories.map((category) => {

                        const total = updates.filter(
                            (item) => item.category === category.title
                        ).length;

                        const unread = updates.filter(
                            (item) =>
                                item.category === category.title &&
                                !item.read
                        ).length;

                        return (

                            <button
                                key={category.title}
                                onClick={() => {
                                    setSelectedCategory(category.title);
                                    setDrawerOpen(true);
                                }}
                                className="relative border rounded-2xl p-5 hover:shadow-md transition text-center"
                            >

                                {/* Badge */}

                                {unread > 0 && (

                                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">

                                        {unread}

                                    </span>

                                )}

                                <div className={`w-14 h-14 rounded-xl mx-auto flex items-center justify-center text-2xl ${category.color}`}>

                                    {category.icon}

                                </div>

                                <h3 className="font-semibold mt-4">

                                    {category.title}

                                </h3>

                                <p className="text-gray-500 text-sm mt-2">

                                    {total} Messages

                                </p>

                            </button>

                        );

                    })}

                </div>

                <div className="px-6 pt-8">

                    <div className="flex justify-between items-center mb-5">

                        <h2 className="font-bold text-lg">

                            Latest Updates

                        </h2>

                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setDrawerOpen(true);
                            }}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                        >

                            View All →

                        </button>

                    </div>

                </div>

            </div>

            <UpdateDrawer

                open={drawerOpen}

                updates={updates}

                category={selectedCategory}

                onClose={() => setDrawerOpen(false)}

            />

        </>

    )

}

export default EventUpdates;