import {
  FiCalendar,
  FiMapPin,
  FiEye,
} from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";
import { StatusBox } from "./StatusBox";
export default function CurrentEventCard({
  event,
  onView,
  onPass,
}) {


  return (
    <>


      <div
        className="
        bg-white
        rounded-3xl
        shadow-xl
        overflow-hidden border border-gray-200
        p-6 md:p-8
        "
      >

        {/* TOP */}

        <div className="flex justify-between mb-3">

          <div>

            <p
              className="uppercase text-gray-600 text-xs font-bold"
            >
              Current Assignment
            </p>

            <h1
              className="
              text-4xl md:text-5xl
              font-black
              mt-2
              mb-2
              text-gray-900
              "
            >
              {event.title}
            </h1>

            <div
              className="
              flex flex-col md:flex-row md:items-center gap-2 text-gray-600 text-sm
              "
            >

              <div className="flex items-center gap-1">
                <FiCalendar className="text-blue-500" />

                {event.date}
              </div>

              <div className="flex items-center gap-1">
                <FiMapPin className="text-blue-500" />

                {event.location}
              </div>

            </div>

          </div>

          <div>

            <div
              className="
              px-3
              py-1
              rounded-full text-xs bg-green-100 text-green-800 font-bold whitespace-nowrap
              "
            >
              Going on
            </div>

          </div>

        </div>

        {/* STATUS */}

        <div
          className="grid grid-cols-3 gap-3 mb-6"
        >

          <StatusBox
            title="Check In"
            value={event.checkIn}
            bg="blue"
          />

          <StatusBox
            title="Check Out"
            value={event.checkOut}
            bg="green"
          />

          <StatusBox
            title="Hours"
            value={`${event.hours} hrs`}
            bg="purple"
          />

        </div>

        {/* ACTIONS */}

        <div
          className="
          grid

          md:grid-cols-2

          gap-3

          mt-6
          mb-4
          "
        >

          <button
            onClick={onView}
            className="
            border
            border-gray-300
            px-6
            rounded-lg
            py-3
            font-bold
            hover:bg-gray-200
            flex flex-row gap-2 align-middle justify-center
            "
          >
            <span><FiEye /></span> View details
          </button>

          <button
            onClick={onPass}
            className="
            bg-blue-500
            px-6
            text-white
            hover:bg-blue-700
            rounded-lg

            py-3

            font-bold
            "
          >
            🎫 View boarding pass
          </button>

        </div>

      </div>

    </>
  );
}