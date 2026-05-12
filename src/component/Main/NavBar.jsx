
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { TbSnowflake } from "react-icons/tb";
import { PiBell } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import NotificationPanel from "./NotificationComponent";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function Navbar() {

  const {
    user,
    role,
    logout,
  } = useAuth();

  const isLoggedIn = !!user;

  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] =
    useState(false);

  const dropdownRef = useRef(null);

  /* 🔹 Dummy notifications */
  const [notificationsList] = useState([
    {
      id: 1,
      title: "Event Applied",
      message:
        "You have successfully applied to Food Donation Drive",
      time: "2h ago",
      type: "success",
    },
  ]);

  /* 🔹 Close notification on outside click */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* 🔹 Logout */
  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  // nav class helper for active state
  const navClass = ({ isActive }) =>
  `text-sm pb-1 transition-all duration-200 ${
    isActive
      ? "text-white border-b-2 border-blue-400"
      : "text-gray-300 hover:text-white"
  }`;
  return (
    <nav className="w-full bg-[#2c2c2c] px-6 md:px-12 py-4 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-white font-semibold text-xl">
          <TbSnowflake className="text-blue-400 text-3xl" />
          <span>VOL-LINK</span>
        </div>

        {/* CENTER NAV */}
        {isLoggedIn && (
          <div className="flex gap-8 text-gray-300 items-center">

            {/* 👤 VOLUNTEER NAV */}
            {role === "volunteer" && (
              <>
                <NavLink
                  to="/vol-dashboard"
                 className={navClass}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/my-events"
                  className={navClass}
                >
                  My Events
                </NavLink>

                <NavLink
                  to="/my-invites"
                  className={navClass}
                >
                  Invites
                </NavLink>
              </>
            )}

            {/* 🏢 ORGANIZATION NAV */}
            {role === "organization" && (
              <>
                <NavLink
                  to="/org-dashboard"
                  className={navClass}      
                >
                  Dashboard
                </NavLink>

                

                <NavLink
                  to="/event-create"
                  className={navClass}
                >
                  Create Event
                </NavLink>

                <NavLink
                  to="/sent-invites"
                  className={navClass}  
                >
                  Invites
                </NavLink>

                <NavLink
                  to="/previous-events"
                  className={navClass}
                >
                  Previous Events
                </NavLink>
              </>
            )}
          </div>
        )}

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-gray-300">

          {isLoggedIn ? (
            <>
              {/* NOTIFICATIONS */}
              <div
                className="relative"
                ref={dropdownRef}
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() =>
                    setShowNotifications(
                      !showNotifications
                    )
                  }
                >
                  <PiBell className="w-5 h-5 hover:text-white" />

                  {notificationsList.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                      {notificationsList.length}
                    </span>
                  )}
                </div>

                {showNotifications && (
                  <NotificationPanel
                    notifications={notificationsList}
                    onClose={() =>
                      setShowNotifications(false)
                    }
                  />
                )}
              </div>

              {/* PROFILE */}
              <button
                onClick={() => navigate("/profile")}
              >
                <FaRegUserCircle className="w-5 h-5 hover:text-white" />
              </button>

              {/* LOGOUT */}
              <button onClick={handleLogout}>
                <FiLogOut className="w-5 h-5 hover:text-white cursor-pointer" />
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={navClass}
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={navClass}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
// export default function Navbar() {
//   const isLoggedIn = false;

//   return (
//     <nav className="w-full bg-[#2c2c2c] px-6 md:px-12 py-4 shadow-md sticky top-0 z-50">

//       {/* 🔥 GRID LAYOUT */}
//       <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">

//         {/* LEFT: Logo */}
//         <div className="flex items-center gap-2 text-white font-semibold text-xl">
//           <TbSnowflake className="text-blue-400 text-3xl" />
//           <span>VOL-LINK</span>
//         </div>

//         {/* CENTER: Nav Links */}
//         {isLoggedIn && (
//           <div className="flex justify-center gap-8 text-gray-300">
//             <Link to="/" className="hover:text-white text-sm">
//               Home
//             </Link>
//             <Link to="/events" className="hover:text-white text-sm">
//               My Events
//             </Link>
//             <Link to="/invites" className="hover:text-white text-sm">
//               Invites
//             </Link>
//           </div>
//         )}

//         {/* RIGHT: Actions */}
//         <div className="flex justify-end items-center gap-4 text-gray-300">

//           {isLoggedIn ? (
//             <>
//               {/* Notification */}
//               <div className="relative cursor-pointer">
//                 <PiBell className="w-5 h-5 hover:text-white" />
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
//                   2
//                 </span>
//               </div>

//               {/* Profile */}
//               <FaRegUserCircle className="w-5 h-5 cursor-pointer hover:text-white" />

//               {/* Logout */}
//               <FiLogOut className="w-5 h-5 cursor-pointer hover:text-white" />
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-gray-300 hover:text-white text-sm font-medium hover:bg-stone-600 px-3 py-2 rounded-lg transition"
//               >
//                 Login
//               </Link>

//               <Link
//                 to="/register"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}

//         </div>
//       </div>
//     </nav>
//   );
// }
// import NotificationPanel from "./NotificationComponent";
// export default function Navbar() {
//   const isLoggedIn = true; // Change to true to see logged-in state
//   const [showNotifications, setShowNotifications] = useState(false);
//   const notifications = [
//     {
//       id: 1,
//       title: "Event Applied",
//       message: "You have successfully applied to Food Donation Drive",
//       time: "2h ago",
//       type: "success",
//     },
//     {
//       id: 2,
//       title: "Event Applied",
//       message: "You have successfully applied to Food Donation Drive",
//       time: "2h ago",
//       type: "success",
//     },
//     {
//       id: 3,
//       title: "Event Applied",
//       message: "You have successfully applied to Food Donation Drive",
//       time: "2h ago",
//       type: "success",
//     },
//   ];

//   const [notificationsList,setNotificationsList] = useState(notifications);
//   const dropdownRef = useRef(null);
//   useEffect(() => {
//   function handleClickOutside(event) {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target)
//     ) {
//       setShowNotifications(false);
//     }
//   }

//   document.addEventListener("mousedown", handleClickOutside);

//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, []);

//   return (
//     <nav className="w-full bg-[#2c2c2c] px-6 md:px-12 py-4 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* LEFT */}
//         <div className="flex items-center gap-2 text-white font-semibold text-xl">
//           <TbSnowflake className="text-blue-400 text-3xl" />
//           <span>VOL-LINK</span>
//         </div>

//         {/* CENTER */}
//         {isLoggedIn && (
//           <div className="flex gap-8 text-gray-300">
//             <Link to="/vol-dashboard" className="hover:text-white text-sm">
//               Home
//             </Link>
//             <Link to="/my-events" className="hover:text-white text-sm">
//               My Events
//             </Link>
//             <Link to="/my-invites" className="hover:text-white text-sm">
//               Invites
//             </Link>
//           </div>
//         )}

//         {/* RIGHT */}
//         <div className="flex items-center gap-5 text-gray-300">
//           {isLoggedIn ? (
//             <>
//               <div className="relative" ref={dropdownRef}>
//                 {/* Bell */}
//                 <div
//                   className="relative cursor-pointer"
//                   onClick={() => setShowNotifications(!showNotifications)}
//                 >
//                   <PiBell className="w-5 h-5 hover:text-white" />

//                   {/* Badge */}
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
//                     {notificationsList.length}
//                   </span>
//                 </div>

//                 {/* Dropdown */}
//                 {showNotifications && (
//                   <NotificationPanel
//                     notifications={notificationsList}
//                     onClose={() => setShowNotifications(false)}
//                   />
//                 )}
//               </div>
//               <FaRegUserCircle className="w-5 h-5 hover:text-white" />
//               <FiLogOut className="w-5 h-5 hover:text-white cursor-pointer" />
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-white text-sm">
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-blue-600 px-4 py-2 rounded-lg text-sm text-white"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
