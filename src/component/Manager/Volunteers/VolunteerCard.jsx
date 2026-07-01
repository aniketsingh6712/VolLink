import {
  FaClock,
  FaEllipsisVertical,
} from "react-icons/fa6";

import {
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";

import VolunteerStatusBadge from "../EventDetails/volunteers/VolunteerStatusBadge";
import VolunteerRoleBadge from "./VolunteerRoleBadge";
import VolunteerActionMenu from "./VolunteerActionMenu";
const VolunteerCard = ({ volunteer, onViewProfile }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">

      <div className="flex justify-between items-start">

        <div className="flex gap-5">

          <img
            src={volunteer.avatar}
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>

            <h2 className="text-xl font-semibold">

              {volunteer.name}

            </h2>

            <div className="flex items-center gap-2 mt-2 text-gray-500">

              <FaEnvelope />

              {volunteer.email}

            </div>

          </div>

        </div>

        <VolunteerActionMenu onViewProfile={onViewProfile} />
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-6">

        <div>

          <p className="text-gray-400 text-sm">

            Role

          </p>

          <VolunteerRoleBadge
            role={volunteer.role}
          />

        </div>

        <div>

          <p className="text-gray-400 text-sm">

            Assigned Event

          </p>

          <div className="flex gap-2 items-center mt-2">

            <FaCalendarAlt className="text-emerald-500"/>

            {volunteer.event}

          </div>

        </div>

        <div>

          <p className="text-gray-400 text-sm">

            Hours

          </p>

          <div className="flex gap-2 items-center mt-2">

            <FaClock className="text-blue-500"/>

            {volunteer.hours} hrs

          </div>

        </div>

        <div>

          <p className="text-gray-400 text-sm">

            Status

          </p>

          <div className="mt-2">

            <VolunteerStatusBadge
              status={volunteer.status}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default VolunteerCard;