import {
  FaTimes,
  FaUserCheck,
  FaUserClock,
  FaSignOutAlt,
} from "react-icons/fa";

import AttendanceSummaryCard from "./AttendanceSummaryCard";
import AttendanceActivityTimeline from "./AtttendanceActivityTimeline";
import AttendanceFooter from "./AttendanceFooter";

const AttendanceDrawer = ({
  open,
  volunteer,
  onClose,
}) => {

  if (!open || !volunteer) return null;

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 h-screen w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto">

        {/* Header */}

        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">

              Attendance Details

            </h2>

            <p className="text-gray-500">

              Volunteer attendance information

            </p>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-gray-100"
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-6">

          <div className="flex items-center gap-4">

            <img
              src={volunteer.avatar}
              alt={volunteer.name}
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>

              <h3 className="text-2xl font-semibold">

                {volunteer.name}

              </h3>

              <p className="text-gray-500">

                {volunteer.role}

              </p>

            </div>

          </div>

          <AttendanceSummaryCard volunteer={volunteer}/>

          <AttendanceActivityTimeline volunteer={volunteer}/>

        </div>

       <AttendanceFooter
    volunteer={volunteer}
    onClose={onClose}
    onCheckOut={(volunteer) => {
        console.log("Checkout", volunteer);
    }}
/>
      </div>

    </>
  );

};

export default AttendanceDrawer;