import React from "react";
import {
  FaExclamationTriangle,
  FaUserClock,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

const alerts = [
  {
    id: 1,
    type: "critical",
    title: "2 Volunteers haven't checked in",
    description: "Registration desk is waiting for them.",
    time: "5 mins ago",
    icon: FaUserClock,
  },
  {
    id: 2,
    type: "warning",
    title: "Food Distribution Team is understaffed",
    description: "Only 3 of 5 assigned volunteers are present.",
    time: "12 mins ago",
    icon: FaExclamationTriangle,
  },
  {
    id: 3,
    type: "info",
    title: "Cleanup task starts in 45 minutes",
    description: "Prepare volunteers for the next phase.",
    time: "Just now",
    icon: FaInfoCircle,
  },
  {
    id: 4,
    type: "success",
    title: "Medical Team is fully staffed",
    description: "All volunteers have checked in.",
    time: "20 mins ago",
    icon: FaCheckCircle,
  },
];

const colors = {
  critical: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "bg-red-100 text-red-600",
    badge: "bg-red-100 text-red-700",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: "bg-yellow-100 text-yellow-600",
    badge: "bg-yellow-100 text-yellow-700",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "bg-blue-100 text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "bg-green-100 text-green-600",
    badge: "bg-green-100 text-green-700",
  },
};

const Alerts = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Manager Alerts
          </h2>

          <p className="text-gray-500">
            Operational updates that require your attention.
          </p>
        </div>

        <button className="text-sm text-emerald-600 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          const style = colors[alert.type];

          return (
            <div
              key={alert.id}
              className={`${style.bg} ${style.border} border rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.icon}`}
              >
                <Icon className="text-lg" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-slate-800">
                    {alert.title}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${style.badge}`}
                  >
                    {alert.type.toUpperCase()}
                  </span>
                </div>

                <p className="text-gray-600 mt-1">
                  {alert.description}
                </p>

                <p className="text-xs text-gray-400 mt-3">
                  {alert.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Alerts;