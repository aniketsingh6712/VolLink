import { FaUsers } from "react-icons/fa";

const AvailableVolunteerHeader = ({ total,
  selected,
  allSelected,
  onToggleAll }) => {

  return (

    <div className="border-b p-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">

            Available Volunteers

          </h2>

          <p className="text-gray-500 mt-1">

            Ready for reassignment

          </p>

        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">

          <FaUsers className="text-blue-600 text-xl" />

        </div>

      </div>

      <div className="mt-6 bg-slate-50 rounded-xl p-4">

        <p className="text-gray-500 text-sm">

          Ready For Assignment

        </p>

        <h2 className="text-3xl font-bold mt-2">

          {total}

        </h2>

      </div>

      <div className="mt-5 flex items-center justify-between">

        <label className="flex items-center gap-3 cursor-pointer">

          <input

            type="checkbox"

            checked={allSelected}

            onChange={onToggleAll}

            className="w-4 h-4"

          />

          <span>

            Select All

          </span>

        </label>

        {

          selected > 0 && (

            <span className="text-blue-600 font-medium">

              {selected} Selected

            </span>

          )

        }

      </div>

    </div>

  );

};

export default AvailableVolunteerHeader;