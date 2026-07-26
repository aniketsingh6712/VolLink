import { FaExclamationTriangle } from "react-icons/fa";

const reasons = [
  "Area Overstaffed",
  "Task Completed",
  "Break Rotation",
  "Emergency Redeployment",
  "Other",
];

const ReleaseConfirmationModal = ({
  open,
  volunteers = [],
  area,
  onClose,
  onConfirm,
}) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 bg-black/40 z-[60]"
        onClick={onClose}
      />

      {/* Modal */}

      <div className="fixed inset-0 flex items-center justify-center z-[70] p-5">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">

          {/* Header */}

          <div className="px-8 py-6 border-b">

            <h2 className="text-2xl font-bold">

              Make Volunteers Available

            </h2>

            <p className="text-gray-500 mt-2">

              Selected volunteers will leave this operational area
              and become available for reassignment.

            </p>

          </div>

          {/* Body */}

          <div className="p-8 space-y-8">

            {/* Volunteers */}

            <div>

              <h3 className="font-semibold mb-4">

                Selected Volunteers

              </h3>

              <div className="space-y-3">

                {volunteers.map((volunteer) => (

                  <div
                    key={volunteer.id}
                    className="flex items-center gap-3 bg-slate-50 rounded-xl p-3"
                  >

                    <img
                      src={volunteer.avatar}
                      className="w-12 h-12 rounded-full"
                    />

                    <div>

                      <h4 className="font-medium">

                        {volunteer.name}

                      </h4>

                      <p className="text-sm text-gray-500">

                        Currently Working in {area.name}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Reason */}

            <div>

              <label className="font-semibold block mb-3">

                Release Reason

              </label>

              <select className="w-full border rounded-xl px-4 py-3">

                {reasons.map((reason) => (

                  <option key={reason}>

                    {reason}

                  </option>

                ))}

              </select>

            </div>

            {/* Preview */}

            <div className="bg-amber-50 rounded-2xl p-6">

              <div className="flex gap-4">

                <FaExclamationTriangle className="text-amber-600 text-xl mt-1"/>

                <div>

                  <h4 className="font-semibold">

                    Staffing Preview

                  </h4>

                  <p className="mt-2">

                    {area.name}

                  </p>

                  <h3 className="text-3xl font-bold mt-2">

                    {area.active}

                    →

                    {area.active - volunteers.length}

                  </h3>

                  <p className="text-sm text-gray-600 mt-2">

                    Volunteers will move into the Available Pool.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="border-t px-8 py-5 flex justify-end gap-4">

            <button
              onClick={onClose}
              className="px-5 py-3 border rounded-xl"
            >

              Cancel

            </button>

            <button
              onClick={onConfirm}
              className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600"
            >

              Confirm Release

            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default ReleaseConfirmationModal;