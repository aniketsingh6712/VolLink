import AvailableVolunteerHeader from "./AvailableVolunteerHeader";
import AvailableVolunteerList from "./AvailableVolunteerList";

const volunteers = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=20",
    releasedFrom: "Registration",
    releasedAt: "2 mins ago",
    reason: "Area Overstaffed",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=21",
    releasedFrom: "Parking",
    releasedAt: "5 mins ago",
    reason: "Traffic Cleared",
  },
  {
    id: 3,
    name: "Alex Joseph",
    avatar: "https://i.pravatar.cc/150?img=22",
    releasedFrom: "Packing",
    releasedAt: "Just Now",
    reason: "Packing Completed",
  },
];
import { useState } from "react";

import AssignToAreaModal from "./AssignToAreaModal";
const AvailableVolunteerSidebar = () => {
  const [openAssign, setOpenAssign] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <AvailableVolunteerHeader total={volunteers.length} />

      <AvailableVolunteerList volunteers={volunteers} />
      <div className="px-6 py-4 border-t flex justify-center font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
      <button onClick={() => setOpenAssign(true)}>Assign</button>
        </div>
      <AssignToAreaModal
        open={openAssign}
        volunteers={volunteers}
        onClose={() => setOpenAssign(false)}
        onConfirm={() => {
          console.log("Assigned");
        }}
      />
    </div>
  );
};

export default AvailableVolunteerSidebar;
