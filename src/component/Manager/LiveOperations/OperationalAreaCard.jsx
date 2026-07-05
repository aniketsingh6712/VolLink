import {
  FaArrowRight,
  FaUsers,
  FaClipboardCheck,
  FaClock,
} from "react-icons/fa";

const statusStyle = {
  Healthy: {
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-500",
    text: "Operating Normally",
  },

  Warning: {
    badge: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-500",
    text: "Needs Attention",
  },

  Critical: {
    badge: "bg-red-100 text-red-700",
    dot: "bg-red-500",
    text: "Immediate Action Required",
  },
};

const OperationalAreaCard = ({ area , onOpen}) => {

  const style = statusStyle[area.status];

  return (

    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="p-6 border-b">

        <div className="flex justify-between items-start">

          <div>

            <h3 className="text-xl font-semibold">

              {area.name}

            </h3>

            <p className="text-gray-500 mt-2">

              {style.text}

            </p>

          </div>

          <span
            className={`${style.badge} px-3 py-1 rounded-full text-sm font-medium`}
          >
            {area.status}
          </span>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 text-center">

        <div className="py-5">

          <FaUsers className="mx-auto text-blue-500 mb-3"/>

          <p className="text-2xl font-bold">

            {area.active}/{area.required}

          </p>

          <p className="text-xs text-gray-500">

            Active

          </p>

        </div>

        <div className="py-5 border-l border-r">

          <FaClipboardCheck className="mx-auto text-emerald-500 mb-3"/>

          <p className="text-2xl font-bold">

            {area.completedTasks}

          </p>

          <p className="text-xs text-gray-500">

            Tasks

          </p>

        </div>

        <div className="py-5">

          <FaClock className="mx-auto text-orange-500 mb-3"/>

          <p className="text-sm font-semibold">

            {area.lastUpdated}

          </p>

          <p className="text-xs text-gray-500">

            Updated

          </p>

        </div>

      </div>

      {/* Footer */}

      <button
      onClick={() => onOpen(area)}
        className="w-full border-t px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition"
      >

        <span className="font-medium">

          View Live Operations

        </span>

        <FaArrowRight/>

      </button>

    </div>

  );

};

export default OperationalAreaCard;