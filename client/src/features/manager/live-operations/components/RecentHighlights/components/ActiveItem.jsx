import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

const styles = {
  success: {
    icon: FaCheckCircle,
    bg: "bg-green-100",
    text: "text-green-600",
  },

  warning: {
    icon: FaExclamationTriangle,
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },

  info: {
    icon: FaInfoCircle,
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
};

const ActivityItem = ({ activity }) => {

  const style = styles[activity.type];
  const Icon = style.icon;

  return (

    <div className="border-t px-6 py-5 hover:bg-slate-50 transition">

      <div className="flex gap-4">

        <div
          className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center`}
        >
          <Icon className={`${style.text} text-lg`} />
        </div>

        <div className="flex-1">

          <div className="flex justify-between items-start">

            <h3 className="font-semibold text-slate-800">

              {activity.title}

            </h3>

            <span className="text-sm text-gray-500">

              {activity.time}

            </span>

          </div>

          <p className="text-gray-500 mt-2">

            {activity.description}

          </p>

        </div>

      </div>

    </div>

  );
};

export default ActivityItem;