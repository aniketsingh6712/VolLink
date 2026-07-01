import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const VolunteerInfoCard = ({ volunteer }) => {
 
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">

      <div className="flex items-center gap-4">

        <img
          src={volunteer.avatar}
          className="w-20 h-20 rounded-full object-cover"
        />

        <div>

          <h2 className="text-2xl font-bold">

            {volunteer.name}

          </h2>

          <p className="text-gray-500">

            {volunteer.role}

          </p>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">

          <FaEnvelope className="text-emerald-500"/>

          <span>{volunteer.email}</span>

        </div>

        <div className="flex items-center gap-3">

          <FaPhone className="text-emerald-500"/>

          <span>+91 9876543210</span>

        </div>

        <div className="flex items-center gap-3">

          <FaCalendarAlt className="text-emerald-500"/>

          <span>Joined : Jan 2026</span>

        </div>

        <div className="flex items-center gap-3">

          <FaMapMarkerAlt className="text-emerald-500"/>

          <span>Bangalore</span>

        </div>

      </div>

    </div>
  );
};

export default VolunteerInfoCard;