import {
  FaUserCheck,
  FaClock,
  FaSignOutAlt,
  FaHourglassHalf,
} from "react-icons/fa";

const AttendanceSummaryCard = ({ volunteer }) => {
  const statusColors = {
    Present: "bg-green-100 text-green-700",
    Late: "bg-yellow-100 text-yellow-700",
    "Checked Out": "bg-blue-100 text-blue-700",
    Absent: "bg-red-100 text-red-700",
    Assigned: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

      <h3 className="text-xl font-semibold mb-6">

        Attendance Summary

      </h3>

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <FaUserCheck className="text-emerald-500"/>

            <span>Status</span>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              statusColors[volunteer.status]
            }`}
          >
            {volunteer.status}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <FaClock className="text-blue-500"/>

            <span>Check In</span>

          </div>

          <span className="font-medium">

            {volunteer.checkIn || "--"}

          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <FaSignOutAlt className="text-orange-500"/>

            <span>Check Out</span>

          </div>

          <span className="font-medium">

            {volunteer.checkOut || "--"}

          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <FaHourglassHalf className="text-purple-500"/>

            <span>Working Duration</span>

          </div>

          <span className="font-medium">

            {volunteer.duration || "--"}

          </span>

        </div>

      </div>

    </div>
  );
};

export default AttendanceSummaryCard;

// this function can be used to calculate the duration between check-in and check-out times, and can be used in the AttendanceSummaryCard component to display the working duration of a volunteer.
const calculateDuration = (checkIn, checkOut) => {

    if (!checkIn) return "--";

    const start = new Date(`2024-01-01 ${checkIn}`);

    const end = checkOut && checkOut !== "--"
        ? new Date(`2024-01-01 ${checkOut}`)
        : new Date();

    const diff = Math.floor((end - start) / 1000 / 60);

    const hours = Math.floor(diff / 60);

    const minutes = diff % 60;

    return `${hours} hrs ${minutes} mins`;

};