import {
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUserTie,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";

const StaffProfileDrawer = ({
  open,
  manager,
  onClose,
  onAssign
}) => {

  if (!open || !manager) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 h-screen w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto">

        {/* Header */}

        <div className="p-6 border-b flex justify-between items-center">

          <div className="flex items-center gap-4">

            <img
              src={manager.avatar}
              alt={manager.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>

              <h2 className="text-2xl font-bold">

                {manager.name}

              </h2>

              <p className="text-gray-500">

                {manager.role}

              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="text-xl"
          >

            <FaTimes />

          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-8">

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-lg mb-4">

              Contact Information

            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-blue-600" />

                <span>{manager.email}</span>

              </div>

              <div className="flex items-center gap-4">

                <FaPhone className="text-blue-600" />

                <span>{manager.phone}</span>

              </div>

            </div>

          </div>

          {/* Current Assignment */}

          <div>

            <h3 className="font-semibold text-lg mb-4">

              Current Workload

            </h3>

            {

              manager.workload.active === 0

                ?

                <div className="bg-green-50 rounded-xl p-5">

                  <h4 className="font-semibold text-green-700">

                    Available

                  </h4>

                  <p className="text-sm text-gray-600 mt-2">

                    No active event assignment.

                  </p>

                </div>

                :

                <div className="space-y-4">

                  {

                    manager.workload.events.map(event => (

                      <div
                        key={event}
                        className="border rounded-xl p-4 flex justify-between items-center"
                      >

                        <div>

                          {/* <h4 className="font-semibold">

                            {event}

                          </h4> */}
                          <button

    className="font-semibold text-blue-600 hover:text-blue-800"

    onClick={() => {

        console.log(event);

    }}

>

    {event}

</button>

                          <p className="text-sm text-gray-500">

                            Active Assignment

                          </p>

                        </div>

                      </div>

                    ))

                  }

                </div>

            }

          </div>

          {/* Statistics */}

          <div>

            <h3 className="font-semibold text-lg mb-4">

              Performance

            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="border rounded-xl p-4">

                <FaClipboardList className="text-blue-600 text-xl" />

                <h4 className="text-2xl font-bold mt-3">

                  12

                </h4>

                <p className="text-sm text-gray-500">

                  Events Managed

                </p>

              </div>

              <div className="border rounded-xl p-4">

                <FaCheckCircle className="text-emerald-600 text-xl" />

                <h4 className="text-2xl font-bold mt-3">

                  96%

                </h4>

                <p className="text-sm text-gray-500">

                  Success Rate

                </p>

              </div>

            </div>

          </div>

          {/* Status */}

          <div>

            <h3 className="font-semibold text-lg mb-4">

              Status

            </h3>

            <span
              className={`px-4 py-2 rounded-full font-medium

              ${manager.status === "Available"

                  ? "bg-green-100 text-green-700"

                  : "bg-orange-100 text-orange-700"

                }`}
            >

              {manager.status}

            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 bg-white border-t p-5 flex gap-3">

          <button
            onClick={onAssign}
            className="flex-1 py-3 rounded-xl border hover:bg-gray-50"
          >

            Assign Event

          </button>

          <button className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white">

            Deactivate

          </button>

        </div>

      </div>

    </>
  );

};

export default StaffProfileDrawer;