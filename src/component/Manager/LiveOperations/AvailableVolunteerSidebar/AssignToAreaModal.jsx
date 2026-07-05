import { useState } from "react";
import {
  FaUsers,
  FaArrowRight,
  FaClipboardCheck,
} from "react-icons/fa";

const operationalAreas = [
  "Registration",
  "Food Distribution",
  "Medical",
  "Parking",
  "Security",
];

const AssignToAreaModal = ({
  open,
  volunteers = [],
  onClose,
  onConfirm,
}) => {

  const [selectedArea, setSelectedArea] = useState("");

  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-[60]"
      />

      {/* Modal */}

      <div className="fixed inset-0 flex justify-center items-center z-[70] p-6">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden">

          {/* Header */}

          <div className="border-b px-8 py-6">

            <h2 className="text-2xl font-bold">

              Assign Volunteers

            </h2>

            <p className="text-gray-500 mt-2">

              Deploy available volunteers to an operational area.

            </p>

          </div>

          {/* Body */}

          <div className="p-8 space-y-8">

            {/* Selected Volunteers */}

            <div>

              <h3 className="font-semibold mb-4">

                Selected Volunteers

              </h3>

              <div className="space-y-3">

                {volunteers.map((volunteer) => (

                  <div
                    key={volunteer.id}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-50"
                  >

                    <img
                      src={volunteer.avatar}
                      alt={volunteer.name}
                      className="w-12 h-12 rounded-full"
                    />

                    <div>

                      <h4 className="font-medium">

                        {volunteer.name}

                      </h4>

                      <p className="text-sm text-gray-500">

                        Released From {volunteer.releasedFrom}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Destination */}

            <div>

              <label className="font-semibold block mb-3">

                Operational Area

              </label>

              <select
                value={selectedArea}
                onChange={(e)=>setSelectedArea(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              >

                <option value="">

                  Select Area

                </option>

                {operationalAreas.map((area)=>(

                  <option key={area}>

                    {area}

                  </option>

                ))}

              </select>

            </div>

            {/* Preview */}

            <div className="rounded-2xl bg-blue-50 p-6">

              <div className="flex gap-3">

                <FaClipboardCheck className="text-blue-600 mt-1"/>

                <div>

                  <h4 className="font-semibold">

                    Assignment Preview

                  </h4>

                  <p className="text-sm text-gray-600 mt-2">

                    {volunteers.length} volunteer(s)
                    will be assigned to

                    <strong>

                      {" "}

                      {selectedArea || "Selected Area"}

                    </strong>

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="border-t px-8 py-5 flex justify-end gap-3">

            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border"
            >

              Cancel

            </button>

            <button
              onClick={onConfirm}
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white"
            >

              Confirm Assignment

            </button>

          </div>

        </div>

      </div>

    </>
  );

};

export default AssignToAreaModal;