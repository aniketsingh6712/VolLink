import {
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const ReleaseToolbar = ({
  selectedCount,
  areaName,
  onRelease,
  onClear,
}) => {

  if (selectedCount === 0) return null;

  return (

    <div className="sticky top-0 z-20 bg-amber-50 border-b border-amber-200 px-6 py-4 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">

          <FaUsers className="text-amber-600"/>

        </div>

        <div>

          <h3 className="font-semibold text-slate-800">

            {selectedCount} Volunteer(s) Selected

          </h3>

          <p className="text-sm text-gray-600">

            Move selected volunteers from

            <strong> {areaName}</strong>

            to the Available Volunteer Pool.

          </p>

        </div>

      </div>

      <div className="flex gap-3">

        <button
          onClick={onClear}
          className="px-5 py-3 rounded-xl border hover:bg-white transition"
        >
          Clear
        </button>

        <button
          onClick={onRelease}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition"
        >

          <FaArrowRight/>

          Make Available

        </button>

      </div>

    </div>

  );

};

export default ReleaseToolbar;