
import Modal from "../../../../common/Modal/Modal";

import {
  FiCamera,
  FiPlay,
  FiX,
} from "react-icons/fi";

export default function ScanPassModal({
  isOpen,
  onClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div
        className="
        bg-white
        rounded-3xl
        p-7
        w-full
        max-w-3xl
        "
      >

        {/* HEADER */}
        <div
          className="
          flex
          justify-between
          items-center
          mb-6
          "
        >

          <h2
            className="
            text-3xl
            font-bold
            text-[#0F172A]
            "
          >
            Scan Volunteer Pass
          </h2>

          <button
            onClick={onClose}
            className="
            p-2
            rounded-xl
            hover:bg-gray-100
            "
          >
            <FiX size={22} />
          </button>

        </div>

        {/* SCANNER */}
        <div
          className="
          border-2
          border-dashed
          border-blue-400
          rounded-3xl

          bg-blue-50

          h-[380px]

          flex
          items-center
          justify-center

          cursor-pointer

          hover:bg-blue-100

          transition
          "
        >

          <div className="text-center">

            <div
              className="
              flex
              justify-center
              mb-6
              "
            >
              <div
                className="
                w-24
                h-24

                rounded-full

                bg-blue-100

                flex

                items-center

                justify-center
                "
              >
                <FiCamera
                  size={44}
                  className="text-blue-600"
                />
              </div>
            </div>

            <h3
              className="
              text-3xl
              font-semibold
              text-[#0F172A]
              "
            >
              Open Camera
            </h3>

            <p
              className="
              text-gray-500
              mt-2
              "
            >
              Click to start scanning QR codes
            </p>

          </div>

        </div>

        {/* DEMO SECTION */}
        <div
          className="
          mt-6

          rounded-2xl

          border

          border-yellow-300

          bg-yellow-50

          p-5
          "
        >

          <p
            className="
            text-orange-700
            font-medium
            mb-4
            "
          >
            Demo Mode · Simulate Scans
          </p>

          <button
            className="
            w-full

            rounded-xl

            bg-yellow-100

            hover:bg-yellow-200

            py-3

            text-left

            px-4

            transition
            "
          >
            Simulate Scan: v1
          </button>

        </div>

        {/* FOOTER */}
        <div
          className="
          mt-6

          flex

          gap-4
          "
        >

          <button
            onClick={onClose}
            className="
            flex-1

            border

            rounded-xl

            py-4

            font-medium

            hover:bg-gray-50
            "
          >
            Close
          </button>

          <button
            className="
            flex-1

            bg-blue-600

            hover:bg-blue-700

            text-white

            rounded-xl

            py-4

            flex

            justify-center

            items-center

            gap-2
            "
          >
            <FiPlay />

            Start Scan
          </button>

        </div>

      </div>
    </Modal>
  );
}