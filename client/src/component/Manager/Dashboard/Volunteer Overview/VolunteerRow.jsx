import {
  FaEye,
  FaCommentDots,
  FaUserEdit,
} from "react-icons/fa";

import VolunteerStatusBadge from "./VolunteerStatusBadge";

const VolunteerRow = ({ volunteer }) => {
  return (
    <tr className="hover:bg-gray-50 transition">

      <td className="py-4">

        <div className="flex items-center gap-3">

          <img
            src={volunteer.avatar}
            alt=""
            className="w-11 h-11 rounded-full"
          />

          <div>

            <h4 className="font-semibold">

              {volunteer.name}

            </h4>

            <p className="text-sm text-gray-500">

              {volunteer.email}

            </p>

          </div>

        </div>

      </td>

      <td>

        {volunteer.role}

      </td>

      <td>

        <VolunteerStatusBadge
          status={volunteer.status}
        />

      </td>

      <td>

        {volunteer.checkIn || "--"}

      </td>

      <td>

        <div className="flex gap-3">

          <button className="text-slate-500 hover:text-emerald-600">
            <FaEye />
          </button>

          <button className="text-slate-500 hover:text-blue-600">
            <FaCommentDots />
          </button>

          <button className="text-slate-500 hover:text-orange-600">
            <FaUserEdit />
          </button>

        </div>

      </td>

    </tr>
  );
};

export default VolunteerRow;