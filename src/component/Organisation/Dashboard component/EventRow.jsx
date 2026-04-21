import { useNavigate } from "react-router-dom";

export default function EventRow({ event, history }) {
  const percent = Math.min(
    100,
    Math.round((event.applied / event.needed) * 100)
  );
  
  const navigate=useNavigate();
  const navigateToDetailsPage=()=>{
    navigate("/event-details");
  }

  return (
    <div className="p-6 bg-white  flex gap-6">

      {/* IMAGE (fixed space even if empty) */}
      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row justify-between gap-6">

        {/* LEFT SIDE */}
        <div className="flex-1">

          <h3 className="text-lg font-semibold text-gray-900">
            {event.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {event.description}
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
            <div>
              <p className="text-gray-400">Date</p>
              <p className="font-medium">{event.date}</p>
            </div>

            <div>
              <p className="text-gray-400">Location</p>
              <p className="font-medium truncate">{event.location}</p>
            </div>

            <div>
              <p className="text-gray-400">Category</p>
              <p className="font-medium">{event.category}</p>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-4 text-sm">
            <div className="flex gap-6 text-gray-600">
              <span>
                Total Applications <b>{event.applied}</b>
              </span>
              <span>
                Needed <b>{event.needed}</b>
              </span>
              <span className="text-blue-600">
                Remaining <b>{event.needed - event.applied}</b>
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              {percent}% filled
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div
                className={`h-2 rounded-full ${
                  history ? "bg-purple-600" : "bg-blue-600"
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mt-4 bg-green-50 text-green-700 text-sm px-3 py-2 rounded-lg">
            <span className="font-medium">Benefits:</span> {event.benefit}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end justify-between min-w-[150px]">

          {history && (
            <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
              ✓ Completed
            </span>
          )}

          <button
            className={`px-5 py-2 rounded-lg text-white font-medium ${
              history
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={navigateToDetailsPage}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}