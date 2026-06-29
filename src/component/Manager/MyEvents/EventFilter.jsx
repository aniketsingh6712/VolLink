import { FaSearch } from "react-icons/fa";

const EventFilter = ({
  search,
  setSearch,
  status,
  setStatus,
}) => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">

      <div className="flex flex-col md:flex-row gap-4">

        <div className="relative flex-1">

          <FaSearch className="absolute top-4 left-4 text-gray-400"/>

          <input
            className="w-full pl-12 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Search events..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

        <select
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
          className="border rounded-xl px-4"
        >
          <option>All</option>
          <option>Live</option>
          <option>Upcoming</option>
          <option>Completed</option>
        </select>

      </div>

    </div>
  );
};

export default EventFilter;