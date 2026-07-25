import AvailableVolunteerHeader from "../../../../features/manager/live-operations/components/AvailableVolunteer/components/VolunteerHeader/AvailableVolunteerHeader";
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

import AssignToAreaModal from "../../../../features/manager/live-operations/components/AvailableVolunteer/components/AssignArea/AssignToAreaModal";
const AvailableVolunteerSidebar = () => {
  const [openAssign, setOpenAssign] = useState(false);
  const [selectedVolunteers, setSelectedVolunteers] = useState([]);
  const toggleVolunteer = (id) => {

    setSelectedVolunteers((prev) => {

      if (prev.includes(id)) {

        return prev.filter(v => v !== id);

      }

      return [...prev, id];

    });

  };

  const toggleAll = () => {

    if (selectedVolunteers.length === volunteers.length) {

      setSelectedVolunteers([]);

    } else {

      setSelectedVolunteers(

        volunteers.map(v => v.id)

      );

    }

  };
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <AvailableVolunteerHeader total={volunteers.length}
        total={volunteers.length}
        selected={selectedVolunteers.length}
        allSelected={selectedVolunteers.length === volunteers.length}
        onToggleAll={toggleAll}

      />

      <AvailableVolunteerList volunteers={volunteers}

        selectedVolunteers={selectedVolunteers}

        onToggle={toggleVolunteer} />
      <div className="px-6 py-4 border-t flex justify-center font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
        <button

          disabled={selectedVolunteers.length === 0}

          onClick={() => setOpenAssign(true)}

          className={`

        w-full

        py-3

        rounded-xl

        font-semibold

        transition

        ${selectedVolunteers.length === 0

              ?

              "bg-gray-200 text-gray-500 cursor-not-allowed"

              :

              "bg-emerald-500 hover:bg-emerald-600 text-white"

            }

    `}

        >

          Assign Selected

          {

            selectedVolunteers.length > 0

            &&

            ` (${selectedVolunteers.length})`

          }

        </button>
      </div>
      <AssignToAreaModal
        open={openAssign}

        volunteers={

          volunteers.filter(v =>

            selectedVolunteers.includes(v.id)

          )

        }
        onClose={() => setOpenAssign(false)}
        onConfirm={() => {
          console.log("Assigned");
        }}
      />
    </div>
  );
};

export default AvailableVolunteerSidebar;
