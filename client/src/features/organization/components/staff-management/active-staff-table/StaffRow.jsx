import {
  FaEye,
  FaCalendarAlt,
} from "react-icons/fa";

const StaffRow = ({ manager, onView }) => {

  return (

    <tr className="border-b hover:bg-slate-50 transition">

      {/* Staff */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          <img
            src={manager.avatar}
            alt={manager.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="font-semibold text-gray-900">

              {manager.name}

            </h3>

            <p className="text-sm text-gray-500 mt-1">

              Joined {manager.joined}

            </p>

          </div>

        </div>

      </td>

      {/* Role */}

      <td className="px-6 py-5">

        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">

          {manager.role}

        </span>

      </td>

      {/* Email */}

      <td className="px-6 py-5 text-gray-600">

        {manager.email}

      </td>

      {/* Phone */}

      <td className="px-6 py-5 text-gray-600">

        {manager.phone}

      </td>

      {/* Assigned Event */}
      <td className="px-6 py-5">

        {

          manager.workload.active > 0

            ?

            <div>

              <p className="font-semibold">

                {manager.workload.active}

                {" "}

                Active Event

                {manager.workload.active > 1 && "s"}

              </p>

              <p className="text-sm text-gray-500">

                Click View for Details

              </p>

            </div>

            :

            <span className="text-gray-400">

              No Active Event

            </span>

        }

      </td>

      {/* Status */}

      <td className="px-6 py-5">

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium

          ${manager.status === "Available"

              ? "bg-emerald-100 text-emerald-700"

              : "bg-orange-100 text-orange-700"
            }`}
        >

          {manager.status}

        </span>

      </td>

      {/* Action */}

      <td className="px-6 py-5">

        <div className="flex justify-center">

          <button
            onClick={() => onView(manager)}
            className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition"
          >

            <FaEye />

          </button>

        </div>

      </td>

    </tr>

  );

};

export default StaffRow;