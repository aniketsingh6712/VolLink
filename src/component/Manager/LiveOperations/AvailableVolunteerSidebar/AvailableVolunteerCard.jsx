import {
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

const AvailableVolunteerCard = ({
  volunteer,
}) => {

  return (

    <div className="border-b p-5 hover:bg-slate-50 transition cursor-pointer">

      <div className="flex gap-4">

        <img
          src={volunteer.avatar}
          alt={volunteer.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">

          <h3 className="font-semibold">

            {volunteer.name}

          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">

            <FaArrowRight className="text-xs"/>

            Released from

            <strong>

              {volunteer.releasedFrom}

            </strong>

          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">

            <FaClock/>

            {volunteer.releasedAt}

          </div>

          <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">

            {volunteer.reason}

          </span>

        </div>

      </div>

    </div>

  );

};

export default AvailableVolunteerCard;