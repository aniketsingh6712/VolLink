import { FaUserCheck, FaUserClock } from "react-icons/fa";

const VolunteerRow = ({
  volunteer,

  type,

  checked,

  onToggle,
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-5 border-t hover:bg-slate-50 transition">
      {/* Left */}

      <div className="flex items-center gap-4">
        {type === "active" && (
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onToggle(volunteer.id)}
            className="w-4 h-4"
          />
        )}

        <img
          src={volunteer.avatar}
          alt={volunteer.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">{volunteer.name}</h4>

          <p className="text-sm text-gray-500">
            Check In : {volunteer.checkIn}
          </p>
        </div>
      </div>

      {/* Center */}

      <div className="hidden lg:block text-center">
        {type === "active" ? (
          <>
            <p className="text-sm text-gray-500">Working</p>

            <h4 className="font-semibold">{volunteer.duration}</h4>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500">Check Out</p>

            <h4 className="font-semibold">{volunteer.checkOut}</h4>
          </>
        )}
      </div>

      {/* Right */}

      <div>
        {type === "active" ? (
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm flex items-center gap-2">
            <FaUserCheck />
            Checked In
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm flex items-center gap-2">
            <FaUserClock />
            Checked Out
          </span>
        )}
      </div>
    </div>
  );
};

export default VolunteerRow;
