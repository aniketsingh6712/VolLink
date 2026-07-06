import {
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const statusStyles = {
  Active: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  Busy: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  Offline: {
    bg: "bg-gray-100",
    text: "text-gray-700",
  },
};

const AudienceCard = ({
  audience,
  selected,
  onSelect,
}) => {

  const style = statusStyles[audience.status];

  return (

    <button
      onClick={() => onSelect(audience.id)}
      className={`
        w-full
        text-left
        rounded-2xl
        border
        p-5
        transition
        ${
          selected
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 hover:border-blue-300 hover:bg-slate-50"
        }
      `}
    >

      <div className="flex justify-between">

        <div className="flex gap-3">

          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">

            <FaUsers className="text-blue-600"/>

          </div>

          <div>

            <h3 className="font-semibold text-slate-800">

              {audience.name}

            </h3>

            <p className="text-sm text-gray-500 mt-1">

              {audience.volunteers} Volunteers

            </p>

          </div>

        </div>

        {selected && (

          <FaCheckCircle className="text-blue-600 text-xl"/>

        )}

      </div>

      <div className="mt-5 flex justify-between items-center">

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            ${style.bg}
            ${style.text}
          `}
        >

          {audience.status}

        </span>

        <span className="text-sm text-gray-500">

          {audience.unread} unread

        </span>

      </div>

    </button>

  );

};

export default AudienceCard;