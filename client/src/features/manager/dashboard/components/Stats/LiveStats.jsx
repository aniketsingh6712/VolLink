import React from "react";

import {
  FaUserCheck,
  FaUserClock,
  FaUserSlash,
  FaTasks,
  FaClock,
  FaUsers,
} from "react-icons/fa";

import StatCard from "./StatsCard";

const stats = [
  {
    title: "Checked In",
    value: 18,
    subtitle: "75% attendance",
    icon: FaUserCheck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Active Volunteers",
    value: 15,
    subtitle: "Currently working",
    icon: FaUsers,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Pending Check-ins",
    value: 3,
    subtitle: "Expected shortly",
    icon: FaUserClock,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Absent",
    value: 1,
    subtitle: "Needs follow-up",
    icon: FaUserSlash,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Tasks Completed",
    value: "18 / 25",
    subtitle: "72% completed",
    icon: FaTasks,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Hours Logged",
    value: "82h",
    subtitle: "Across all volunteers",
    icon: FaClock,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
];

const LiveStats = () => {
  return (
    <section className="mt-8">

      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Live Event Metrics
          </h2>

          <p className="text-gray-500">
            Real-time overview of your assigned event.
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}

      </div>

    </section>
  );
};

export default LiveStats;