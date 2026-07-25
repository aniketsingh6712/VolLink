import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CompletedEventCard from "../../../../component/Organisation/ActivityCenter/CompletedEventCard";
import { LuSend } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { FaRegClock } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { BsChatLeft } from "react-icons/bs";
import SendMessageModal from "../../../../component/Organisation/ActivityCenter/MessageModal";
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

  const volunteerInvitations = [
    {
      id: 1,
      volunteerName: "Sarah Johnson",
      volunteerAvatar: "https://i.pravatar.cc/150?img=1",
      eventTitle: "Winter Food Distribution",
      role: "Food Packager",
      status: "Accepted",
      responseTime: "2 hours ago",
    },
    {
      id: 2,

      volunteerName: "Mike Chen",
      volunteerAvatar: "https://i.pravatar.cc/150?img=2",
      eventTitle: "Community Health Awareness Camp",
      role: "Medical Assistant",
      status: "Pending",
      responseTime: "5 hours ago",
    },
    {
      id: 3,
      volunteerName: "Emma Davis",
      volunteerAvatar: "https://i.pravatar.cc/150?img=3",
      eventTitle: "Tree Plantation Drive",
      role: "Team Leader",
      status: "Accepted",
      responseTime: "1 day ago",
    },
    {
      id: 4,
      volunteerName: "David Wilson",
      volunteerAvatar: "https://i.pravatar.cc/150?img=4",
      eventTitle: "Digital Literacy Workshop",
      role: "Technical Support",
      status: "Pending",
      responseTime: "3 hours ago",
    },
  ];

  const [category, setCategory] = useState("");
  const filteredEvents = completedEvents.filter((event) => {
    if (!category) return true;

    return event.category === category;
  });

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const ShowMessageHandler = (invite) => {
    setSelectedVolunteer({
      avatar: invite.volunteerAvatar,
      name: invite.volunteerName,
      email: invite.volunteerEmail || "",
    });

    setShowMessageModal(true);
  };
  return (
    <div className="bg-[#F9FAFB] min-h-screen max-w-7xl  px-6 mx-auto md:px-12 py-8 md:py-12">
      {/* HEADER */}
      <div className="mt-4">
        <h1 className="text-5xl font-bold text-[#0F172A]">
          Organization Activity Center
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Manage completed events, volunteer participation, and outreach
          campaigns
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-10 mt-10 border-gray-300 border-b mb-8">
        <button
          onClick={() => setActiveTab("completed")}
          className={`flex items-center gap-2 pb-4 text-lg font-medium border-b-4 transition px-4
          ${
            activeTab === "completed"
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
          ${
            activeTab === "outreach"
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
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-start gap-1">
              <div className="bg-blue-100 w-max p-2 rounded-lg mb-3">
                <LuSend className="text-2xl text-blue-500" />
              </div>
              <h2 className="text-sm font-medium  mb-1 text-gray-500">
                Total Invites
              </h2>
              <p className="text-3xl font-bold mt-2">128</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-start gap-1">
              <div className="bg-green-100 w-max p-2 rounded-lg mb-3">
                <SiTicktick className="text-2xl text-green-700" />
              </div>
              <h2 className="text-sm font-medium  mb-1 text-gray-500">
                Accepted
              </h2>
              <p className="text-3xl font-bold  mt-2">96</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-start gap-1">
              <div className="bg-yellow-100 w-max p-2 rounded-lg mb-3">
                <FaRegClock className="text-2xl text-yellow-700" />
              </div>
              <h2 className="text-sm font-medium  mb-1 text-gray-500">
                Pending
              </h2>
              <p className="text-3xl font-bold mt-2">20</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-start gap-1">
              <div className="bg-violet-100 w-max p-2 rounded-lg mb-3">
                <FaArrowTrendUp className="text-2xl text-violet-700" />
              </div>
              <h2 className="text-sm font-medium  mb-1 text-gray-500">
                Acceptance Rate
              </h2>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex  justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span>
                  <LuChartColumnIncreasing className="inline text-3xl text-blue-500" />
                </span>
                Invitation Activity
              </h2>

              <div>
                <div className="flex-1 relative w-64">
                  <FiSearch
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm transition"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b  border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Volunteer
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Event
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Role
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Response Time
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerInvitations.map((invite) => (
                    <tr
                      key={invite.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={invite.volunteerAvatar}
                            alt={invite.volunteerName}
                            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                          />
                          <span className="text-sm font-medium text-gray-900">
                            {invite.volunteerName}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-900 font-medium">
                          {invite.eventTitle}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                          {invite.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {invite.status === "Accepted" ? (
                            <FaCheckCircle className="text-green-500" />
                          ) : (
                            <FaCheckCircle className="text-gray-400" />
                          )}
                          <span
                            className={`text-sm font-medium ${invite.status === "Accepted" ? "text-green-700" : "text-gray-500"}`}
                          >
                            {invite.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-600">
                          {invite.responseTime}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-4">
                          {invite.status === "Pending" && (
                            <button
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer"
                              onClick={() => ShowMessageHandler(invite)}
                            >
                              <LuSend className="inline text-lg" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* MESSAGE MODAL */}
      {showMessageModal && (
        <SendMessageModal
          onClose={() => setShowMessageModal(false)}
          volunteer={selectedVolunteer}
          onSend={(message) => {
            console.log(
              "Message sent to",
              selectedVolunteer?.name,
              ":",
              message,
            );

            setShowMessageModal(false);
          }}
        />
      )}
    </div>
  );
}
