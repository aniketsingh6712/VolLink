import VolunteerTableHeader from "./components/VolunteerTableHeader";
import VolunteerSection from "./components/VolunteerSection";
import { useState } from "react";
import ReleaseToolbar from "./components/ReleaseToolBar";
const activeVolunteers = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    checkIn: "09:02 AM",
    duration: "2h 18m",
    status: "Checked In",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=2",
    checkIn: "09:10 AM",
    duration: "2h 10m",
    status: "Checked In",
  },
  {
    id: 3,
    name: "Alex Joseph",
    avatar: "https://i.pravatar.cc/150?img=3",
    checkIn: "09:18 AM",
    duration: "2h 02m",
    status: "Checked In",
  },
];

const checkedOutVolunteers = [
  {
    id: 4,
    name: "Sarah Wilson",
    avatar: "https://i.pravatar.cc/150?img=4",
    checkIn: "09:01 AM",
    checkOut: "01:15 PM",
    duration: "4h 14m",
    status: "Checked Out",
  },
];

import ReleaseConfirmationModal from "./components/ReleasedConfirmationModal";
const VolunteerTable = () => {
  const [selectedVolunteers, setSelectedVolunteers] = useState([]);
  const [releaseOpen, setReleaseOpen] = useState(false);
  const toggleVolunteer = (id) => {
    setSelectedVolunteers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((v) => v !== id);
      }

      return [...prev, id];
    });
  };
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <VolunteerTableHeader
        active={activeVolunteers.length}
        checkedOut={checkedOutVolunteers.length}
      />
      <ReleaseToolbar
        selectedCount={selectedVolunteers.length}
        areaName="Registration"
        onRelease={() => setReleaseOpen(true)}
        onClear={() => setSelectedVolunteers([])}
      />
      <VolunteerSection
        title="Currently Working"
        volunteers={activeVolunteers}
        type="active"
        selectedVolunteers={selectedVolunteers}
        onToggle={toggleVolunteer}
      />

      <VolunteerSection
        title="Checked Out"
        volunteers={checkedOutVolunteers}
        type="checkedOut"
        selectedVolunteers={selectedVolunteers}
        onToggle={toggleVolunteer}
      />

      <ReleaseConfirmationModal
        open={releaseOpen}
        area={{
          name: "Registration",

          active: 6,
        }}
        volunteers={activeVolunteers.filter((v) =>
          selectedVolunteers.includes(v.id),
        )}
        onClose={() => setReleaseOpen(false)}
        onConfirm={() => {
          console.log("Release Confirmed");
        }}
      />
    </div>
  );
};

export default VolunteerTable;
