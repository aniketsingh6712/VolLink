import VolunteerCard from "./VolunteerCard";

const volunteers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Registration",
    event: "Food Donation Drive",
    hours: 18,
    status: "Present",
    checkIn: "09:05 AM",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sarah Lee",
    email: "sarah@gmail.com",
    role: "Food",
    event: "Blood Donation Camp",
    hours: 12,
    status: "Pending",
    checkIn: "--",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Alex Kumar",
    email: "alex@gmail.com",
    role: "Medical",
    event: "Tree Plantation",
    hours: 26,
    status: "Present",
    checkIn: "08:55 AM",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];
import { useState } from "react";
import VolunteerProfileDrawer from "./VolunteerProfileDrawer";
import ChangeRoleModal from "./changeRoleModal";
const VolunteerDirectory = () => {
const [profileVolunteer, setProfileVolunteer] = useState(null);

const [roleVolunteer, setRoleVolunteer] = useState(null);
  
  const [changeRoleOpen, setChangeRoleOpen] = useState(false);

  const [role, setRole] = useState("");

  const [reason, setReason] = useState("");


  const handleChangeRole = (volunteer) => {
    console.log("Change Role clicked for:", volunteer);
    setRoleVolunteer(volunteer);

    setRole(volunteer.role);

    setReason("");

    setChangeRoleOpen(true);

  };
  return (
    <div className="space-y-5">
      {volunteers.map((volunteer) => (
        <VolunteerCard
          key={volunteer.id}
          volunteer={volunteer}
          onViewProfile={() => setProfileVolunteer(volunteer)}
          onChangeRole={handleChangeRole}
        />
      ))}

      <VolunteerProfileDrawer
        open={!!profileVolunteer}
        volunteer={profileVolunteer}
        onClose={() => setProfileVolunteer(null)}
      />

      <ChangeRoleModal
    open={changeRoleOpen}
    volunteer={roleVolunteer}
    role={role}
    setRole={setRole}
    reason={reason}
    setReason={setReason}
    onClose={() => setChangeRoleOpen(false)}
    onSave={() => {

        console.log(role);

        console.log(reason);

        setChangeRoleOpen(false);

    }}
/>
    </div>
  );
};

export default VolunteerDirectory;