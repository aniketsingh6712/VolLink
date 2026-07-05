import {
  FaArrowRight,
  FaCheckCircle,
  FaUndo,
  FaSignOutAlt,
} from "react-icons/fa";

const icons = {
  Released: FaSignOutAlt,
  Assigned: FaArrowRight,
  Returned: FaUndo,
};

const colors = {
  Released: "bg-orange-100 text-orange-600",
  Assigned: "bg-blue-100 text-blue-600",
  Returned: "bg-green-100 text-green-600",
};

const DeploymentHistoryItem = ({ item }) => {

  const Icon = icons[item.action];

  return (

    <div className="border-t px-6 py-5 hover:bg-slate-50 transition">

      <div className="flex justify-between">

        <div className="flex gap-4">

          <img
            src={item.avatar}
            alt={item.volunteer}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="font-semibold">

              {item.volunteer}

            </h3>

            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">

              <span>{item.from}</span>

              <FaArrowRight className="text-xs"/>

              <span>{item.to}</span>

            </div>

          </div>

        </div>

        <div className="text-right">

          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${colors[item.action]}`}
          >

            <Icon className="text-xs"/>

            {item.action}

          </div>

          <p className="text-sm text-gray-500 mt-3">

            {item.time}

          </p>

        </div>

      </div>

    </div>

  );

};

export default DeploymentHistoryItem;