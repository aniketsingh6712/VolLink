import React from "react";
import {
  FaPlus,
  FaUsers,
  FaBullhorn,
  FaChartBar,
} from "react-icons/fa";

const icons = {
  Plus: FaPlus,
  Users: FaUsers,
  Megaphone: FaBullhorn,
  BarChart3: FaChartBar,
};

const QuickActions = ({ actions }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
      {actions.map((action) => {
        const Icon = icons[action.icon];

        return (
          <button
            key={action.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div
              className={`${action.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="text-2xl" />
            </div>

            <h3 className="font-semibold text-slate-800">
              {action.title}
            </h3>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;