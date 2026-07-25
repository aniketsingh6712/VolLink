import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdCalendarToday } from "react-icons/md";
import { FaCheck, FaTimes, FaEye } from "react-icons/fa";

import { IconBtn } from "./IconBtn";
import { useState } from "react";
import VolunteerProfileModal from "./Volunteer Profile/VolunteerProfileModal";
import ApproveModal from "./Action Modal/ApproveModal";
import RejectModal from "./Action Modal/RejectModal";
import InviteModal from "./Action Modal/SendInviteModal";

import { LuSend } from "react-icons/lu";
export function UserRow({ user, type }) {
  const [openProfile, setOpenProfile] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const [openInvite, setOpenInvite] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  /* 🔹 HANDLERS */

  const handleView = () => {
    setSelectedUser(user);
    setOpenProfile(true);
  };

  const handleApprove = () => {
    setSelectedUser(user);
    setOpenApprove(true);
  };

  const handleReject = () => {
    setSelectedUser(user);
    setOpenReject(true);
  };

  const handleInvite = () => {
    setSelectedUser(user);
    setOpenInvite(true);
  };

  return (
    <>
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

              <IconBtn color="blue" onClick={handleView}>
                <FaEye />
              </IconBtn>

              <IconBtn color="green" onClick={handleApprove}>
                <FaCheck />
              </IconBtn>

              <IconBtn color="red" onClick={handleReject}>
                <FaTimes />
              </IconBtn>
            </>
          ) : (
            <>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                ✓ Approved
              </span>

              <IconBtn color="blue" onClick={handleView}>
                <FaEye />
              </IconBtn>

              <IconBtn color="purple" onClick={handleInvite}>
                <LuSend />
              </IconBtn>
            </>
          )}
        </div>
      </div>

      {/* 🔥 MODALS */}

      {/* PROFILE */}
      <VolunteerProfileModal
        isOpen={openProfile}
        onClose={() => setOpenProfile(false)}
        user={selectedUser}
        onApprove={handleApprove}
        onReject={handleReject}
        onInvite={handleInvite}
      />

      {/* APPROVE */}
      <ApproveModal
        isOpen={openApprove}
        user={selectedUser}
        onClose={() => setOpenApprove(false)}
        onConfirm={(msg) => {
          console.log("Approved:", msg);
          setOpenApprove(false);
          setOpenProfile(false); // optional: close profile too
        }}
      />

      {/* REJECT */}
      <RejectModal
        isOpen={openReject}
        user={selectedUser}
        onClose={() => setOpenReject(false)}
        onConfirm={(reason) => {
          console.log("Rejected:", reason);
          setOpenReject(false);
          setOpenProfile(false);
        }}
      />

      {/* INVITE */}
      <InviteModal
        isOpen={openInvite}
        user={selectedUser}
        onClose={() => setOpenInvite(false)}
        onSend={(msg) => {
          console.log("Invite sent:", msg);
          setOpenInvite(false);
        }}
      />
    </>
  );
}