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
const VolunteerDirectory = () => {
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  return (
    <div className="space-y-5">
      {volunteers.map((volunteer) => (
        <VolunteerCard
          key={volunteer.id}
          volunteer={volunteer}
          onViewProfile={() => setSelectedVolunteer(volunteer)}
        />
      ))}

      <VolunteerProfileDrawer
  open={!!selectedVolunteer}
  volunteer={selectedVolunteer}
  onClose={() => setSelectedVolunteer(null)}
/>
    </div>
  );
};

export default VolunteerDirectory;