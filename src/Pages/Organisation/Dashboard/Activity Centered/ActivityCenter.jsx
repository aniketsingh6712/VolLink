import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CompletedEventCard from "../../../../component/Organisation/ActivityCenter/CompletedEventCard";

export default function ActivityCenter() {
    const [activeTab, setActiveTab] = useState("completed");

    const completedEvents = [
        {
            id: 1,
            title: "Food Donation Drive",
            category: "food",
            image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200",
            startDate: "10/31/2024",
            endDate: "10/31/2024",
            selectedVolunteers: 12,
            totalVolunteers: 15,

            volunteers: [
                {
                    id: 1,
                    name: "Sarah Johnson",
                    avatar: "https://i.pravatar.cc/150?img=1",
                    role: "Organization, Communication",
                    rating: "Excellent",
                },
                {
                    id: 2,
                    name: "Mike Chen",
                    avatar: "https://i.pravatar.cc/150?img=2",
                    role: "Logistics",
                    rating: "Good",
                },
                {
                    id: 3,
                    name: "Emma Davis",
                    avatar: "https://i.pravatar.cc/150?img=3",
                    role: "Leadership, Planning",
                    rating: "Excellent",
                },
                {
                    id: 4,
                    name: "David Wilson",
                    avatar: "https://i.pravatar.cc/150?img=4",
                    role: "Volunteer Support",
                    rating: "Good",
                },
            ],
        },

        {
            id: 2,
            title: "Blood Donation Camp",
            category: "health",
            image:
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200",
            startDate: "11/15/2024",
            endDate: "11/15/2024",
            selectedVolunteers: 7,
            totalVolunteers: 8,

            volunteers: [
                {
                    id: 1,
                    name: "Dr. Lisa Wang",
                    avatar: "https://i.pravatar.cc/150?img=5",
                    role: "Medical Coordinator",
                    rating: "Excellent",
                },
                {
                    id: 2,
                    name: "James Patterson",
                    avatar: "https://i.pravatar.cc/150?img=6",
                    role: "Nursing",
                    rating: "Good",
                },
            ],
        },

        {
            id: 3,
            title: "Beach Cleanup",
            category: "environment",
            image:
                "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1200",
            startDate: "11/20/2024",
            endDate: "11/20/2024",
            selectedVolunteers: 18,
            totalVolunteers: 25,

            volunteers: [
                {
                    id: 1,
                    name: "Green Team Leader",
                    avatar: "https://i.pravatar.cc/150?img=7",
                    role: "Environmental Leadership",
                    rating: "Excellent",
                },
            ],
        },

        {
            id: 4,
            title: "Community Education Workshop",
            category: "education",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
            startDate: "12/05/2024",
            endDate: "12/06/2024",
            selectedVolunteers: 22,
            totalVolunteers: 30,

            volunteers: [
                {
                    id: 1,
                    name: "Ananya Sharma",
                    avatar: "https://i.pravatar.cc/150?img=8",
                    role: "Workshop Instructor",
                    rating: "Excellent",
                },
                {
                    id: 2,
                    name: "Rahul Verma",
                    avatar: "https://i.pravatar.cc/150?img=9",
                    role: "Student Mentor",
                    rating: "Excellent",
                },
                {
                    id: 3,
                    name: "Priya Nair",
                    avatar: "https://i.pravatar.cc/150?img=10",
                    role: "Registration Desk",
                    rating: "Good",
                },
                {
                    id: 4,
                    name: "Arjun Singh",
                    avatar: "https://i.pravatar.cc/150?img=11",
                    role: "Technical Support",
                    rating: "Good",
                },
                {
                    id: 5,
                    name: "Neha Kapoor",
                    avatar: "https://i.pravatar.cc/150?img=12",
                    role: "Content Coordinator",
                    rating: "Excellent",
                },
            ],
        },
    ];

    const upcomingEvents = [
        {
            id: 101,
            title: "Winter Food Distribution",
            category: "food",
            date: "12/20/2024",
            location: "Bangalore Central",
        },

        {
            id: 102,
            title: "Community Health Awareness Camp",
            category: "health",
            date: "01/05/2025",
            location: "Indiranagar",
        },

        {
            id: 103,
            title: "Tree Plantation Drive",
            category: "environment",
            date: "01/12/2025",
            location: "Lalbagh Botanical Garden",
        },

        {
            id: 104,
            title: "Digital Literacy Workshop",
            category: "education",
            date: "01/18/2025",
            location: "Whitefield Community Center",
        },

        {
            id: 105,
            title: "Blood Donation Mega Camp",
            category: "health",
            date: "02/01/2025",
            location: "Apollo Hospital Campus",
        },

        {
            id: 106,
            title: "Youth Leadership Summit",
            category: "community",
            date: "02/15/2025",
            location: "Town Hall Auditorium",
        },
    ];

    const [category, setCategory] = useState("");
    const filteredEvents = completedEvents.filter((event) => {
        if (!category) return true;

        return event.category === category;
    });
    return (
        <div className="bg-[#F9FAFB] min-h-screen max-w-7xl  px-6 md:px-12 py-8">

            {/* HEADER */}
            <div>
                <h1 className="text-5xl font-bold text-[#0F172A]">
                    Organization Activity Center
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                    Manage completed events, volunteer participation,
                    and outreach campaigns
                </p>
            </div>

            {/* TABS */}
            <div className="flex gap-10 mt-10 border-gray-300 border-b">

                <button
                    onClick={() => setActiveTab("completed")}
                    className={`flex items-center gap-2 pb-4 text-lg font-medium border-b-4 transition px-4
          ${activeTab === "completed"
                            ? "border-blue-500 text-blue-500"
                            : "border-transparent text-gray-500"
                        }`}
                >
                    <IoMdCheckmarkCircleOutline className="text-xl font-semibold" />
                    Completed Events
                </button>

                <button
                    onClick={() => setActiveTab("outreach")}
                    className={`flex items-center gap-2 pb-4 text-lg font-medium border-b-4 transition px-4
          ${activeTab === "outreach"
                            ? "border-blue-500 text-blue-500"
                            : "border-transparent text-gray-500"
                        }`}
                >
                    <IoPaperPlaneOutline className="text-xl font-semibold" />
                    Invitations & Outreach
                </button>

            </div>



            {/* TAB CONTENT */}
            {activeTab === "completed" && (

                <div className="mt-3">
                    {/* FILTERS */}
                    <div className="flex flex-col md:flex-row gap-4 mt-8">

                        <div className="flex-1 relative">
                            <FiSearch
                                className="absolute left-4 top-3/7 -translate-y-1/2 text-gray-400"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="Search events..."
                                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-400 bg-white outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div className="w-full md:w-64 relative">

                            <FiFilter
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10"
                                size={18}
                            />

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="
      w-full
      appearance-none
      bg-white
      border border-gray-300
      rounded-2xl
      py-3
      pl-12
      pr-10
      text-gray-700
      font-semibold
      outline-none
      focus:ring-2
      focus:ring-blue-500
      cursor-pointer
    "
                            >
                                <option value="">All Categories</option>
                                <option value="food">🍲 Food & Hunger</option>
                                <option value="education">📚 Education</option>
                                <option value="environment">🌱 Environment</option>
                                <option value="health">💗 Health & Wellness</option>
                                <option value="community">🤝 Community</option>
                            </select>

                            {/* Custom Arrow */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                ▼
                            </div>

                        </div>

                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">

                        {filteredEvents.map((event) => (
                            <CompletedEventCard
                                key={event.id}
                                event={event}
                                availableEvents={upcomingEvents}
                            />
                        ))}


                    </div>
                </div>
            )}

            {activeTab === "outreach" && (
                <div className="mt-8">

                    <div className="bg-white rounded-3xl border p-12 text-center">

                        <div className="text-6xl mb-4">
                            📨
                        </div>

                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            Invitations & Outreach
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Invitation analytics, sent invites,
                            accepted invites, and volunteer outreach
                            history will appear here.
                        </p>

                    </div>

                </div>
            )}
        </div>
    );
}