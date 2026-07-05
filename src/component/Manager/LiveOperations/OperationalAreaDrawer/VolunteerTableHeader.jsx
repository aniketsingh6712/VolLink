import { FaSearch } from "react-icons/fa";

const VolunteerTableHeader = ({
  active,
  checkedOut,
}) => {

  return (

    <div className="border-b p-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">

            Workforce Management

          </h2>

          <p className="text-gray-500 mt-1">

            Manage volunteers assigned to this operational area.

          </p>

        </div>

        <button
          disabled
          className="px-5 py-3 bg-emerald-500 text-white rounded-xl opacity-50 cursor-not-allowed"
        >
          Deploy Selected
        </button>

      </div>

      <div className="flex flex-wrap gap-6 mt-6">

        <div>

          <span className="text-gray-500 text-sm">

            Active

          </span>

          <h3 className="font-bold text-xl">

            {active}

          </h3>

        </div>

        <div>

          <span className="text-gray-500 text-sm">

            Checked Out

          </span>

          <h3 className="font-bold text-xl">

            {checkedOut}

          </h3>

        </div>

      </div>

      <div className="relative mt-6">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

        <input
          placeholder="Search volunteer..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

    </div>

  );

};

export default VolunteerTableHeader;