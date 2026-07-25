
// import { useNavigate } from "react-router-dom";
// export default function PreviousEventsPage() {
//   const navigate = useNavigate();

//   const events = [
//     {
//       id: 1,
//       title: "Beach Cleanup",
//       date: "20/11/2024",
//       location: "Sandy Beach",
//       volunteers: 12,
//     },
//     {
//       id: 2,
//       title: "Education Workshop",
//       date: "10/12/2024",
//       location: "City School",
//       volunteers: 8,
//     },
//   ];

//   return (
//     <div className="bg-[#F9FAFB] min-h-screen max-w-6xl mx-auto px-6 py-8">

//       {/* 🔥 HEADER CARD */}
//       <div className="bg-indigo-100/70 px-6 py-5 rounded-2xl mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">
//           Previous Events
//         </h1>
//         <p className="text-sm text-gray-600 mt-1">
//           Review past events and re-invite volunteers
//         </p>
//       </div>

//       {/* EVENTS LIST */}
//       <div className="space-y-4">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             onClick={() => navigate(`/previous-events/${event.id}`)}
//             className="bg-white p-5 rounded-2xl border hover:shadow-md transition cursor-pointer flex justify-between items-center"
//           >
//             <div>
//               <h3 className="font-semibold text-lg text-gray-900">
//                 {event.title}
//               </h3>

//               <p className="text-sm text-gray-500 mt-1">
//                 📍 {event.location} • 📅 {event.date}
//               </p>

//               <p className="text-sm text-indigo-600 mt-2 font-medium">
//                 {event.volunteers} volunteers participated
//               </p>
//             </div>

//             {/* RIGHT TAG */}
//             <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs">
//               Completed
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import { MdOutlinePeopleOutline } from "react-icons/md";
import OrganizationVerificationGuard from "../verification/OrganizationVerificationGuard";
export default function PreviousEventsPage() {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Beach Cleanup",
      date: "20/11/2024",
      location: "Sandy Beach",
      volunteers: 12,
    },
    {
      id: 2,
      title: "Education Workshop",
      date: "10/12/2024",
      location: "City School",
      volunteers: 8,
    },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen max-w-7xl mx-auto px-6 md:px-10 py-8">
      <OrganizationVerificationGuard>
      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl px-6 py-6 mb-8 border">
        <h1 className="text-3xl font-bold text-gray-900">
          Previous Events
        </h1>

        <p className="text-gray-600 mt-2">
          Review completed events and reconnect with volunteers
        </p>
      </div>

      {/* LIST */}
      <div className="space-y-5">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => navigate(`/previous-events/${event.id}`)}
            className="bg-white rounded-3xl border p-6 cursor-pointer hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              {/* LEFT */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h2>

                  <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                    Completed
                  </span>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mt-5 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-gray-400 flex flex-row gap-2"><span className="text-blue-400 text-xl"><PiMapPinAreaBold className=""/></span>Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-gray-400 flex flex-row gap-2"><span className="text-blue-400 text-xl"><MdOutlineCalendarMonth/> </span>Date</p>
                    <p className="font-medium">{event.date}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-gray-400 flex flex-row gap-2"><span className="text-blue-400 text-xl"><MdOutlinePeopleOutline/></span>Volunteers</p>
                    <p className="font-medium">
                      {event.volunteers} Joined
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      </OrganizationVerificationGuard>
    </div>
  );
}