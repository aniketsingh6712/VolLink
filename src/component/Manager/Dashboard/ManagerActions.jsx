import React from "react";
import {
  FaUsers,
  FaClipboardCheck,
  FaBullhorn,
  FaFileAlt,
} from "react-icons/fa";

const actions = [
  {
    id: 1,
    title: "Assign Volunteers",
    subtitle: "Assign roles and responsibilities",
    icon: FaUsers,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 2,
    title: "Attendance",
    subtitle: "Manage volunteer check-in/out",
    icon: FaClipboardCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Broadcast",
    subtitle: "Send updates to volunteers",
    icon: FaBullhorn,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    title: "Reports",
    subtitle: "View attendance and hours",
    icon: FaFileAlt,
    color: "bg-purple-100 text-purple-600",
  },
];

const ManagerActions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Event Operations
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Frequently used management actions.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="group border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all duration-300 text-left"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${action.color}`}
              >
                <Icon className="text-xl" />
              </div>

              <h3 className="mt-4 font-semibold text-slate-800 group-hover:text-emerald-600">
                {action.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                {action.subtitle}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ManagerActions;