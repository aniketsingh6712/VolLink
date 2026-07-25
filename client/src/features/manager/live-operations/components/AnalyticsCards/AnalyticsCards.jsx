import {
  FaUsers,
  FaUserCheck,
  FaShieldAlt,
  FaRandom,
} from "react-icons/fa";

import AnalyticsCard from "./AnalyticsCard";

const analytics = [
  {
    id: 1,
    title: "Attendance",
    value: "94%",
    subtitle: "Volunteer attendance",
    icon: FaUsers,
    color: "emerald",
  },
  {
    id: 2,
    title: "Checked In",
    value: "34 / 36",
    subtitle: "Currently available",
    icon: FaUserCheck,
    color: "blue",
  },
  {
    id: 3,
    title: "Healthy Areas",
    value: "5 / 6",
    subtitle: "Operational areas",
    icon: FaShieldAlt,
    color: "green",
  },
  {
    id: 4,
    title: "Active Deployments",
    value: "3",
    subtitle: "Temporary assignments",
    icon: FaRandom,
    color: "orange",
  },
];

const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {analytics.map((card) => (

        <AnalyticsCard
          key={card.id}
          card={card}
        />

      ))}

    </div>
  );
};

export default AnalyticsCards;