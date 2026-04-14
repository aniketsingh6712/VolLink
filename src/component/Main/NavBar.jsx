import { Link } from "react-router-dom";
import { TbSnowflake } from "react-icons/tb";
import { PiBell } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

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

export default function Navbar() {
  const isLoggedIn = false; // Change to true to see logged-in state

  return (
    <nav className="w-full bg-[#2c2c2c] px-6 md:px-12 py-4 shadow-md sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LEFT */}
        <div className="flex items-center gap-2 text-white font-semibold text-xl">
          <TbSnowflake className="text-blue-400 text-3xl" />
          <span>VOL-LINK</span>
        </div>

        {/* CENTER */}
        {isLoggedIn && (
          <div className="flex gap-8 text-gray-300">
            <Link to="/" className="hover:text-white text-sm">Home</Link>
            <Link to="/events" className="hover:text-white text-sm">My Events</Link>
            <Link to="/invites" className="hover:text-white text-sm">Invites</Link>
          </div>
        )}

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-gray-300">
          {isLoggedIn ? (
            <>
              <PiBell className="w-5 h-5 hover:text-white" />
              <FaRegUserCircle className="w-5 h-5 hover:text-white" />
              <FiLogOut className="w-5 h-5 hover:text-white cursor-pointer" />
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-white text-sm">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 px-4 py-2 rounded-lg text-sm text-white">
                Sign Up
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}