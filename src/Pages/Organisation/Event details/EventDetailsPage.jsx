import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";


import { UserRow } from "../../../component/Organisation/Event details/UserRow";
import { Section } from "../../../component/Organisation/Event details/Section";

export default function EventDetails() {
  const navigate = useNavigate();

  const pending = [
    {
      name: "Sarah Smith",
      email: "sarah@example.com",
      phone: "555-0102",
      date: "22/10/2024",
    },
    {
      name: "Emma Wilson",
      email: "emma@example.com",
      phone: "555-0104",
      date: "21/10/2024",
    },
  ];

  const approved = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "555-0101",
      date: "20/10/2024",
    },
    {
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "555-0103",
      date: "18/10/2024",
    },
  ];

  return (
   <div className="bg-[#F9FAFB] min-h-screen max-w-7xl mx-auto px-6 md:px-12 py-8">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Event Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your events and volunteer applications
          </p>
        </div>
        <div />
      </div>

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
      >
        <FaArrowLeft size={16} />
        Back
      </button>

      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl shadow-sm border mb-6">

        {/* EVENT HEADER */}
        <div className="px-6 py-6 border-b">

          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* LEFT LABEL */}
            <div className="text-sm text-gray-500 min-w-[140px]">
              Food Donation Drive
            </div>

            {/* MAIN */}
            <div className="flex-1">

              <h2 className="text-xl font-bold text-gray-900">
                Food Donation Drive
              </h2>

              <p className="text-gray-500 mt-1">
                Help us distribute food to people in need.
              </p>

              {/* INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium truncate">
                    Downtown Community Center
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="font-medium">31/10/2024</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-400 text-sm">Total Applied</p>
                  <p className="font-medium">4</p>
                </div>
              </div>

              {/* PROGRESS */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>4 applied</span>
                  <span>15 needed</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div className="bg-blue-600 h-2 rounded-full w-[30%]" />
                </div>
              </div>
            </div>

            {/* ACTION BOX */}
            <div className="w-full md:w-60 bg-blue-600 text-white rounded-xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Quick Actions
                </h3>
                <p className="text-xs text-blue-100 mt-1">
                  Manage event quickly
                </p>
              </div>

              <div className="space-y-2 mt-4">
                <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm">
                  Edit Event
                </button>

                <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm">
                  Close Event
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* SEARCH */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center border rounded-xl px-3 py-3 bg-white">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              placeholder="Search candidates by name..."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* PENDING */}
        <div className="px-6 py-4">
          <Section title="Pending Applications (2)">
            {pending.map((item, i) => (
              <UserRow key={i} user={item} type="pending" />
            ))}
          </Section>
        </div>

        {/* APPROVED */}
        <div className="px-6 pb-6">
          <Section title="Approved Volunteers (2)">
            {approved.map((item, i) => (
              <UserRow key={i} user={item} type="approved" />
            ))}
          </Section>
        </div>

      </div>
    </div>
  );
}