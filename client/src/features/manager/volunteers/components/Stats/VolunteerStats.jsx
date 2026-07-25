import {
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Total Volunteers",
    value: 42,
    subtitle: "Across all assigned events",
    icon: FaUsers,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Checked In",
    value: 35,
    subtitle: "Currently present",
    icon: FaUserCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Pending",
    value: 5,
    subtitle: "Awaiting check-in",
    icon: FaUserClock,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "Absent",
    value: 2,
    subtitle: "Need follow-up",
    icon: FaUserTimes,
    color: "bg-red-100 text-red-600",
  },
];

const VolunteerStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-2">
                  {stat.value}
                </h2>

                <p className="text-sm text-slate-400 mt-3">
                  {stat.subtitle}
                </p>
              </div>

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}
              >
                <Icon className="text-xl" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VolunteerStats;