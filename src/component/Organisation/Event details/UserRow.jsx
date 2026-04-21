import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdCalendarToday } from "react-icons/md";
import { FaCheck, FaTimes, FaEye } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { IconBtn } from "./IconBtn";
import { useState } from "react";
import VolunteerProfileModal from "../../../Pages/Organisation/Volunteer Profile/VolunteerProfileModal";
export function UserRow({ user, type }) {
  const [open, setOpen] = useState(false);
 
    const [selectedUser, setSelectedUser] = useState(null);

    const handleView = () => {
      setSelectedUser(user);
      setOpen(true);
    };
  
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center justify-between">

      {/* LEFT */}
      <div>
        <h4 className="font-semibold">{user.name}</h4>

        <div className="flex gap-4 text-sm text-gray-500 mt-1 flex-wrap">
          <span className="flex items-center gap-1">
            <MdEmail /> {user.email}
          </span>

          <span className="flex items-center gap-1">
            <FiPhone /> {user.phone}
          </span>

          <span className="flex items-center gap-1">
            <MdCalendarToday /> {user.date}
          </span>
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-2">

        {type === "pending" ? (
          <>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
              ⏳ Pending
            </span>

            <IconBtn color="blue" ><FaEye /></IconBtn>
            <IconBtn color="green"><FaCheck /></IconBtn>
            <IconBtn color="red"><FaTimes /></IconBtn>
          </>
        ) : (
          <>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
              ✓ Approved
            </span>

            <IconBtn color="blue" onClick={handleView}>
              <FaEye />
            </IconBtn>
            <IconBtn color="purple"><IoSend /></IconBtn>
          </>
        )}

      </div>

      <VolunteerProfileModal
  isOpen={open}
  onClose={() => setOpen(false)}
  user={selectedUser}
  onApprove={() => console.log("Approved")}
  onReject={() => console.log("Rejected")}
  onInvite={() => console.log("Invited")}
/>
    </div>
  );
}