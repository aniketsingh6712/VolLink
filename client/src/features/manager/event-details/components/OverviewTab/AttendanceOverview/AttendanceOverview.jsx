import {
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
  FaSignOutAlt,
} from "react-icons/fa";

const attendance = [
  {
    title: "Present",
    value: 18,
    icon: FaUserCheck,
    color: "text-green-600",
  },
  {
    title: "Late",
    value: 2,
    icon: FaUserClock,
    color: "text-yellow-600",
  },
  {
    title: "Absent",
    value: 1,
    icon: FaUserTimes,
    color: "text-red-600",
  },
  {
    title: "Checked Out",
    value: 6,
    icon: FaSignOutAlt,
    color: "text-blue-600",
  },
];

const AttendanceOverview = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Attendance Overview
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Today's volunteer attendance.
        </p>
      </div>

      <div className="space-y-5">

        {attendance.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">

                <Icon
                  className={`${item.color} text-lg`}
                />

                <span className="font-medium">
                  {item.title}
                </span>

              </div>

              <span className="font-bold text-lg">
                {item.value}
              </span>
            </div>
          );
        })}

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm mb-2">

          <span className="font-medium">
            Attendance Rate
          </span>

          <span className="font-semibold text-emerald-600">
            90%
          </span>

        </div>

        <div className="w-full h-3 rounded-full bg-gray-200">

          <div
            className="h-3 rounded-full bg-emerald-500"
            style={{
              width: "90%",
            }}
          />

        </div>

      </div>

    </div>
  );
};

export default AttendanceOverview;