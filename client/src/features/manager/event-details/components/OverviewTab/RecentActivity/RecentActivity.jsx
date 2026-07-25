import {
  FaUserCheck,
  FaBullhorn,
  FaUserPlus,
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "John checked in",
    time: "09:05 AM",
    icon: FaUserCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Sarah assigned to Food Team",
    time: "09:18 AM",
    icon: FaUserPlus,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Broadcast message sent",
    time: "09:45 AM",
    icon: FaBullhorn,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 4,
    title: "Medical team fully staffed",
    time: "10:10 AM",
    icon: FaCheckCircle,
    color: "bg-emerald-100 text-emerald-600",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Recent Activity
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Latest updates from this event.
        </p>

      </div>

      <div className="space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}
                >
                  <Icon />
                </div>

                <span className="font-medium">
                  {activity.title}
                </span>

              </div>

              <span className="text-sm text-gray-500">
                {activity.time}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default RecentActivity;