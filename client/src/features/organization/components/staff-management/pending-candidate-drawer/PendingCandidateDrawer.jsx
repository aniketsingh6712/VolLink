import {
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUserCheck,
} from "react-icons/fa";

const PendingCandidateDrawer = ({
  open,
  candidate,
  onClose,
  onApprove,
  onReject,
}) => {

  if (!open || !candidate) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 h-screen w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto">

        {/* Header */}

        <div className="border-b p-6 flex justify-between items-center">

          <div className="flex gap-4">

            <img
              src={candidate.avatar}
              className="w-16 h-16 rounded-full"
            />

            <div>

              <h2 className="text-2xl font-bold">

                {candidate.name}

              </h2>

              <p className="text-orange-600">

                Pending Approval

              </p>

            </div>

          </div>

          <button onClick={onClose}>

            <FaTimes/>

          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-8">

          {/* Contact */}

          <div>

            <h3 className="font-semibold mb-4">

              Contact Information

            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <FaEnvelope className="text-blue-600 mt-1"/>

                {candidate.email}

              </div>

              <div className="flex gap-3">

                <FaPhone className="text-blue-600 mt-1"/>

                {candidate.phone}

              </div>

            </div>

          </div>

          {/* Invitation */}

          <div>

            <h3 className="font-semibold mb-4">

              Invitation

            </h3>

            <div className="bg-blue-50 rounded-xl p-5">

              <div className="flex gap-3">

                <FaCalendarAlt className="text-blue-600 mt-1"/>

                <div>

                  <p className="text-sm text-gray-500">

                    Invitation Accepted

                  </p>

                  <h4 className="font-semibold">

                    {candidate.joined}

                  </h4>

                </div>

              </div>

            </div>

          </div>

          {/* Performance */}

          <div>

            <h3 className="font-semibold mb-4">

              Initial Summary

            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="border rounded-xl p-5">

                <h4 className="text-2xl font-bold">

                  0

                </h4>

                <p className="text-gray-500 mt-2">

                  Events Managed

                </p>

              </div>

              <div className="border rounded-xl p-5">

                <h4 className="text-2xl font-bold">

                  New

                </h4>

                <p className="text-gray-500 mt-2">

                  Staff Status

                </p>

              </div>

            </div>

          </div>

          {/* Notes */}

          <div>

            <h3 className="font-semibold mb-3">

              Organization Note

            </h3>

            <textarea
              rows={4}
              placeholder="Optional note..."
              className="w-full border rounded-xl p-4 resize-none"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 bg-white border-t p-5 flex gap-3">

          <button
            onClick={onReject}
            className="flex-1 py-3 rounded-xl border border-red-300 text-red-600 hover:bg-red-50"
          >

            Reject

          </button>

          <button
            onClick={onApprove}
            className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex justify-center items-center gap-2"
          >

            <FaUserCheck/>

            Approve & Activate

          </button>

        </div>

      </div>

    </>
  );

};

export default PendingCandidateDrawer;