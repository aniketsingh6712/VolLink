import {
  FaUsers,
  FaUserCheck,
  FaClock,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Staff",
    value: 18,
    icon: <FaUsers />,
    color: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-blue-200",
  },
  {
    title: "Active Managers",
    value: 15,
    icon: <FaUserCheck />,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    border: "border-emerald-200",
  },
  {
    title: "Pending Invitations",
    value: 3,
    icon: <FaClock />,
    color: "text-orange-600",
    bg: "bg-orange-100",
    border: "border-orange-200",
  },
];

const StaffStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className={`bg-white rounded-2xl border ${item.border} p-6 flex justify-between items-center`}
        >
          <div>

            <p className="text-gray-500 text-sm">

              {item.title}

            </p>

            <h2 className="text-3xl font-bold mt-2">

              {item.value}

            </h2>

          </div>

          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl ${item.bg} ${item.color}`}
          >
            {item.icon}
          </div>

        </div>

      ))}

    </div>
  );
};

export default StaffStats;