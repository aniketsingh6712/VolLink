import { useState } from "react";
import VolunteerRow from "./VolunteerRow";

const volunteers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Registration",
    status: "Active",
    checkIn: "09:05 AM",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Sarah Lee",
    email: "sarah@gmail.com",
    role: "Food",
    status: "Pending",
    checkIn: "",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Alex Kumar",
    email: "alex@gmail.com",
    role: "Medical",
    status: "Checked In",
    checkIn: "08:58 AM",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@gmail.com",
    role: "Security",
    status: "Absent",
    checkIn: "",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

const VolunteerOverview = () => {
  const [search, setSearch] = useState("");

  const filtered = volunteers.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white mt-8 rounded-2xl border border-gray-200 shadow-sm">

      <div className="p-6 border-b">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">

              Volunteer Overview

            </h2>

            <p className="text-gray-500">

              Manage volunteers assigned to this event.

            </p>

          </div>

          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
            Export
          </button>

        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search volunteer..."
          className="mt-5 w-full md:w-80 border rounded-lg px-4 py-2"
        />

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b bg-gray-50">

              <th className="p-4">Volunteer</th>

              <th>Role</th>

              <th>Status</th>

              <th>Check In</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((volunteer) => (
              <VolunteerRow
                key={volunteer.id}
                volunteer={volunteer}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default VolunteerOverview;