import {
  FaArrowRight,
  FaUndo,
} from "react-icons/fa";

const ActiveDeploymentCard = ({ deployment }) => {
  return (

    <div className="border-t px-6 py-5 hover:bg-slate-50 transition">

      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <img
            src={deployment.avatar}
            alt={deployment.volunteer}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>

            <h3 className="font-semibold text-slate-800">

              {deployment.volunteer}

            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">

              <span>{deployment.from}</span>

              <FaArrowRight className="text-xs"/>

              <span className="font-medium text-blue-600">

                {deployment.to}

              </span>

            </div>

            <p className="text-sm text-gray-500 mt-2">

              {deployment.reason}

            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="text-sm text-gray-500">

            Deployed

          </p>

          <h4 className="font-semibold mt-1">

            {deployment.time}

          </h4>

          <button
            className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >

            <FaUndo />

            Return

          </button>

        </div>

      </div>

    </div>

  );
};

export default ActiveDeploymentCard;