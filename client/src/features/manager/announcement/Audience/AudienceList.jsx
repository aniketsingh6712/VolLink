import { useState } from "react";

import AudienceCard from "./AudienceCard";

const audienceData = [

  {
    id: 1,
    name: "All Volunteers",
    volunteers: 34,
    status: "Active",
    unread: 0,
  },

  {
    id: 2,
    name: "Registration",
    volunteers: 6,
    status: "Active",
    unread: 1,
  },

  {
    id: 3,
    name: "Food Distribution",
    volunteers: 8,
    status: "Busy",
    unread: 3,
  },

  {
    id: 4,
    name: "Parking",
    volunteers: 5,
    status: "Busy",
    unread: 0,
  },

  {
    id: 5,
    name: "Medical",
    volunteers: 3,
    status: "Active",
    unread: 0,
  },

  {
    id: 6,
    name: "Security",
    volunteers: 4,
    status: "Active",
    unread: 2,
  },

  {
    id: 7,
    name: "Photography",
    volunteers: 2,
    status: "Offline",
    unread: 0,
  },

  {
    id: 8,
    name: "Cleaning",
    volunteers: 3,
    status: "Active",
    unread: 0,
  },

  {
    id: 9,
    name: "Available Pool",
    volunteers: 4,
    status: "Active",
    unread: 0,
  },

];

const AudienceList = () => {

  const [selectedAudience, setSelectedAudience] = useState(1);

  return (

    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

      <div className="px-6 py-5 border-b">

        <h2 className="text-xl font-bold">

          Audience

        </h2>

        <p className="text-gray-500 mt-1">

          Choose who should receive the announcement.

        </p>

      </div>

      <div className="p-4 space-y-4 max-h-[760px] overflow-y-auto">

        {

          audienceData.map((audience)=>(

            <AudienceCard

              key={audience.id}

              audience={audience}

              selected={selectedAudience===audience.id}

              onSelect={setSelectedAudience}

            />

          ))

        }

      </div>

    </div>

  );

};

export default AudienceList;