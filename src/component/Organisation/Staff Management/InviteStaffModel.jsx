import { useState } from "react";
import {
  FaEnvelope,
  FaTimes,
  FaUserPlus,
} from "react-icons/fa";

const InviteStaffModal = ({
  open,
  onClose,
  onInvite,
}) => {

  const [email, setEmail] = useState("");

  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-50"
      />

      {/* Modal */}

      <div className="fixed inset-0 flex items-center justify-center p-6 z-[60]">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden">

          {/* Header */}

          <div className="border-b px-8 py-6 flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Invite Staff Member

              </h2>

              <p className="text-gray-500 mt-2">

                Send an invitation to join your organization.

              </p>

            </div>

            <button onClick={onClose}>

              <FaTimes />

            </button>

          </div>

          {/* Body */}

          <div className="p-8 space-y-8">

            <div>

              <label className="block font-semibold mb-3">

                Email Address

              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="manager@example.com"
                  className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* Preview */}

            <div className="bg-blue-50 rounded-2xl p-6">

              <div className="flex gap-4">

                <FaUserPlus className="text-blue-600 mt-1" />

                <div>

                  <h3 className="font-semibold">

                    Invitation Preview

                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">

                    The invited staff member will receive an email
                    invitation to join your organization.

                    <br /><br />

                    Once they accept the invitation, you can
                    assign them to manage your events.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="border-t px-8 py-5 flex justify-end gap-3">

            <button
              onClick={onClose}
              className="px-6 py-3 border rounded-xl hover:bg-gray-50"
            >

              Cancel

            </button>

            <button
              onClick={() => onInvite(email)}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
            >

              Send Invitation

            </button>

          </div>

        </div>

      </div>

    </>
  );

};

export default InviteStaffModal;