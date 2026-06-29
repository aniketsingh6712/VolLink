import { FaCalendarTimes } from "react-icons/fa";

const EmptyEvents = () => {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-16 text-center">

      <FaCalendarTimes
        className="mx-auto text-5xl text-gray-300"
      />

      <h2 className="text-2xl font-semibold mt-5">

        No Events Found

      </h2>

      <p className="text-gray-500 mt-2">

        No events match your current search or filter.

      </p>

    </div>
  );
};

export default EmptyEvents;