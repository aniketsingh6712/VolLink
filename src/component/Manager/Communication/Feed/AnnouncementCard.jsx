import {
  FaBullhorn,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const priorityStyle = {

  Normal:
    "bg-green-100 text-green-700",

  Important:
    "bg-yellow-100 text-yellow-700",

  Emergency:
    "bg-red-100 text-red-700",

};

const AnnouncementCard = ({
  announcement, onView ,
}) => {

  return (

    <div className="border-b p-6 hover:bg-slate-50 transition">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

            <FaBullhorn className="text-blue-600"/>

          </div>

          <div>

            <h3 className="font-bold text-lg">

              {announcement.title}

            </h3>

            <div className="flex items-center gap-3 mt-2 flex-wrap">

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${priorityStyle[announcement.priority]}`}
              >

                {announcement.priority}

              </span>

              <span className="flex items-center gap-2 text-sm text-gray-500">

                <FaUsers/>

                {announcement.audience}

              </span>

              <span className="flex items-center gap-2 text-sm text-gray-500">

                <FaClock/>

                {announcement.sentAt}

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Message */}

      <p className="text-gray-600 mt-5 leading-7">

        {announcement.message}

      </p>

      {/* Read Progress */}

      <div className="mt-6">

        <div className="flex justify-between mb-2">

          <span className="text-sm text-gray-500">

            Read Progress

          </span>

          <span className="text-sm font-medium">

            {announcement.read}/{announcement.total}

          </span>

        </div>

        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">

          <div
            className="h-full bg-blue-500"
            style={{
              width: `${(announcement.read / announcement.total) * 100}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-6">

        <div className="flex items-center gap-2 text-green-600 text-sm">

          <FaCheckCircle/>

          Delivered Successfully

        </div>

        <div className="flex gap-2">

          <button onClick={onView} className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center">

            <FaEye/>

          </button>

          <button className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center">

            <FaEdit/>

          </button>

          <button className="w-10 h-10 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center">

            <FaTrash/>

          </button>

        </div>

      </div>

    </div>

  );

};

export default AnnouncementCard;