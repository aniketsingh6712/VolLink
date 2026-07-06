import {
  FaBullhorn,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaHourglassHalf,
  FaEdit,
  FaCopy,
  FaTrash,
} from "react-icons/fa";

const readVolunteers = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "Read",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "Read",
  },
  {
    id: 3,
    name: "Sarah Wilson",
    avatar: "https://i.pravatar.cc/150?img=13",
    status: "Pending",
  },
  {
    id: 4,
    name: "Alex Joseph",
    avatar: "https://i.pravatar.cc/150?img=14",
    status: "Pending",
  },
];

const AnnouncementDetailsDrawer = ({
  open,
  announcement,
  onClose,
}) => {

  if (!open || !announcement) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 z-40"
      />

      {/* Drawer */}

      <div className="fixed top-0 right-0 h-screen w-full max-w-xl bg-white shadow-2xl z-50 overflow-y-auto">

        {/* Header */}

        <div className="border-b p-6 flex justify-between items-start">

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                <FaBullhorn className="text-blue-600"/>

              </div>

              <div>

                <h2 className="text-2xl font-bold">

                  {announcement.title}

                </h2>

                <p className="text-gray-500">

                  Announcement Details

                </p>

              </div>

            </div>

          </div>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>

        {/* Content */}

        <div className="p-6 space-y-8">

          {/* Meta */}

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-50 rounded-xl p-4">

              <div className="flex gap-3">

                <FaUsers className="text-blue-600 mt-1"/>

                <div>

                  <p className="text-gray-500 text-sm">

                    Audience

                  </p>

                  <h4 className="font-semibold">

                    {announcement.audience}

                  </h4>

                </div>

              </div>

            </div>

            <div className="bg-slate-50 rounded-xl p-4">

              <div className="flex gap-3">

                <FaClock className="text-orange-600 mt-1"/>

                <div>

                  <p className="text-gray-500 text-sm">

                    Sent At

                  </p>

                  <h4 className="font-semibold">

                    {announcement.sentAt}

                  </h4>

                </div>

              </div>

            </div>

          </div>

          {/* Message */}

          <div>

            <h3 className="font-semibold mb-3">

              Message

            </h3>

            <div className="bg-slate-50 rounded-xl p-5 leading-7">

              {announcement.message}

            </div>

          </div>

          {/* Read Progress */}

          <div>

            <div className="flex justify-between mb-3">

              <h3 className="font-semibold">

                Read Progress

              </h3>

              <span>

                {announcement.read}/{announcement.total}

              </span>

            </div>

            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">

              <div
                className="bg-blue-500 h-full"
                style={{
                  width: `${announcement.read/announcement.total*100}%`,
                }}
              />

            </div>

          </div>

          {/* Volunteer List */}

          <div>

            <h3 className="font-semibold mb-4">

              Delivery Status

            </h3>

            <div className="space-y-3">

              {readVolunteers.map((volunteer)=>(

                <div
                  key={volunteer.id}
                  className="flex justify-between items-center bg-slate-50 rounded-xl p-3"
                >

                  <div className="flex gap-3 items-center">

                    <img
                      src={volunteer.avatar}
                      className="w-10 h-10 rounded-full"
                    />

                    <h4 className="font-medium">

                      {volunteer.name}

                    </h4>

                  </div>

                  {

                    volunteer.status==="Read"

                    ?

                    <span className="flex items-center gap-2 text-green-600">

                      <FaCheckCircle/>

                      Read

                    </span>

                    :

                    <span className="flex items-center gap-2 text-orange-500">

                      <FaHourglassHalf/>

                      Pending

                    </span>

                  }

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 bg-white border-t p-5">

          <div className="grid grid-cols-3 gap-3">

            <button className="py-3 rounded-xl border hover:bg-gray-50 flex justify-center items-center gap-2">

              <FaEdit/>

              Edit

            </button>

            <button className="py-3 rounded-xl border hover:bg-gray-50 flex justify-center items-center gap-2">

              <FaCopy/>

              Duplicate

            </button>

            <button className="py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 flex justify-center items-center gap-2">

              <FaTrash/>

              Delete

            </button>

          </div>

        </div>

      </div>

    </>
  );

};

export default AnnouncementDetailsDrawer;