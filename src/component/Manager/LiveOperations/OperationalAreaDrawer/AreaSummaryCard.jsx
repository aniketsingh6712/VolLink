import {
  FaUsers,
  FaUserCheck,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

const statusStyle = {
  Healthy: {
    bg: "bg-green-100",
    text: "text-green-700",
    icon: "🟢",
    message: "Operating Normally",
  },

  Warning: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    icon: "🟡",
    message: "Needs Attention",
  },

  Critical: {
    bg: "bg-red-100",
    text: "text-red-700",
    icon: "🔴",
    message: "Immediate Action Required",
  },
};

const AreaSummaryCard = ({ area }) => {

  const style = statusStyle[area.status];

  return (

    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b px-6 py-5">

        <div>

          <h2 className="text-xl font-bold">

            Area Summary

          </h2>

          <p className="text-gray-500 text-sm mt-1">

            Current operational health

          </p>

        </div>

        <div
          className={`${style.bg} ${style.text} px-4 py-2 rounded-full font-medium`}
        >

          {style.icon} {area.status}

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-6 p-6">

        <div className="bg-slate-50 rounded-xl p-5">

          <FaUsers className="text-blue-500 text-xl mb-3"/>

          <p className="text-gray-500 text-sm">

            Required Volunteers

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {area.required}

          </h2>

        </div>

        <div className="bg-slate-50 rounded-xl p-5">

          <FaUserCheck className="text-green-500 text-xl mb-3"/>

          <p className="text-gray-500 text-sm">

            Currently Active

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {area.active}

          </h2>

        </div>

        <div className="bg-slate-50 rounded-xl p-5">

          <FaArrowRight className="text-orange-500 text-xl mb-3"/>

          <p className="text-gray-500 text-sm">

            Deployed Out

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {area.deployedOut || 0}

          </h2>

        </div>

        <div className="bg-slate-50 rounded-xl p-5">

          <FaExclamationTriangle className="text-red-500 text-xl mb-3"/>

          <p className="text-gray-500 text-sm">

            Available Pool

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {area.available || 0}

          </h2>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t px-6 py-5">

        <div className={`${style.bg} rounded-xl px-5 py-4`}>

          <h4 className={`font-semibold ${style.text}`}>

            {style.message}

          </h4>

          <p className="text-gray-600 text-sm mt-2">

            {area.active < area.required
              ? `This area needs ${
                  area.required - area.active
                } more volunteer(s) to meet the planned staffing level.`
              : "This area currently has sufficient volunteers to operate efficiently."}

          </p>

        </div>

      </div>

    </div>

  );

};

export default AreaSummaryCard;