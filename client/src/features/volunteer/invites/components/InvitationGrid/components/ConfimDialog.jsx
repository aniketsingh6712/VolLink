// // ConfirmDialog.jsx
import { useState } from "react";

import Modal from "../ui/Modal";

import { FiCheckCircle } from "react-icons/fi";

import { RxCrossCircled } from "react-icons/rx";

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,

  user,

  title = "Confirm",

  message = "",

  confirmText = "Confirm",

  cancelText = "Cancel",

  type = "success",
}) {
  const [comment, setComment] = useState("");

  const isReject = type === "danger";

  const reset = () => {
    setComment("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={reset}>
      {/* HEADER */}
      <div
        className={`
          text-white
          px-6
          py-4

          rounded-t-xl

          flex
          justify-between
          items-center

          ${isReject ? "bg-red-500" : "bg-green-600"}
        `}
      >
        <h2 className="font-semibold">{title}</h2>
      </div>

      {/* BODY */}
      <div
        className="
          p-6

          text-center

          space-y-4
        "
      >
        {/* ICON */}
        <div
          className="
            flex
            justify-center
          "
        >
          <div
            className={`
              text-6xl

              ${isReject ? "text-red-500" : "text-green-500"}
            `}
          >
            {isReject ? <RxCrossCircled /> : <FiCheckCircle />}
          </div>
        </div>

        {/* USER */}
        {user?.name && (
          <h3
            className="
                font-semibold
                text-lg
              "
          >
            {user.name}
          </h3>
        )}

        {/* MESSAGE */}
        <p
          className="
            text-gray-600
            text-sm
          "
        >
          {message || isReject
            ? "Are you sure you want to reject this invitation?"
            : "Are you sure you want to approve this invitation?"}
        </p>

        {/* REJECTION ONLY */}
        {isReject && (
          <div
            className="
                text-left
              "
          >
            <p
              className="
                  text-sm
                  mb-1
                "
            >
              Rejection Reason (Optional)
            </p>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={200}
              placeholder="
Explain why you're rejecting...
"
              className="
                  w-full

                  border

                  rounded-lg

                  p-3

                  outline-none

                  focus:ring-2

                  focus:ring-red-300

                  resize-none
                "
            />

            <p
              className="
                  text-xs

                  text-gray-400

                  mt-1
                "
            >
              {comment.length}/200 characters
            </p>

            <div
              className="
                  mt-4

                  bg-red-50

                  border

                  border-red-200

                  rounded-lg

                  p-3

                  text-sm

                  text-red-700
                "
            >
              This will notify the volunteer.
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div
        className="
          flex

          gap-3

          p-6

          border-t
        "
      >
        <button
          onClick={reset}
          className="
            flex-1

            border

            py-2

            rounded-lg

            hover:bg-gray-50
          "
        >
          {cancelText}
        </button>

        <button
          onClick={() => {
            onConfirm(isReject ? comment : null);

            reset();
          }}
          className={`
            flex-1

            py-2

            rounded-lg

            text-white

            ${
              isReject
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-600 hover:bg-green-700"
            }
          `}
        >
          {confirmText}
        </button>
      </div>
    </Modal>
  );
}
// import { FaTimes, FaCheck, FaExclamationTriangle } from "react-icons/fa";
// import Modal from "../ui/Modal";

// export default function ConfirmDialog({
//   isOpen,
//   onClose,
//   onConfirm,
//   title = "Confirm Action",
//   message = "Are you sure you want to continue?",
//   confirmText = "Confirm",
//   cancelText = "Cancel",
//   type = "success", // success | danger
// }) {
//   const styles = {
//     success: {
//       header: "from-green-600 to-emerald-500",
//       btn: "bg-green-600 hover:bg-green-700",
//       iconBg: "bg-green-100",
//       iconColor: "text-green-600",
//     },
//     danger: {
//       header: "from-red-500 to-rose-500",
//       btn: "bg-red-500 hover:bg-red-600",
//       iconBg: "bg-red-100",
//       iconColor: "text-red-600",
//     },
//   };

//   const current = styles[type];

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       {/* HEADER */}
//       <div
//         className={`bg-gradient-to-r ${current.header} text-white px-6 py-4 rounded-t-xl flex justify-between items-center`}
//       >
//         <h2 className="font-semibold">{title}</h2>

//       </div>

//       {/* BODY */}
//       <div className="p-6 text-center">

//         <div
//           className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${current.iconBg}`}
//         >
//           <FaExclamationTriangle
//             className={`${current.iconColor}`}
//             size={22}
//           />
//         </div>

//         <p className="mt-4 text-gray-700 leading-6">
//           {message}
//         </p>
//       </div>

//       {/* FOOTER */}
//       <div className="flex gap-3 p-6 pt-0">
//         <button
//           onClick={onClose}
//           className="flex-1 h-10 rounded-lg border text-sm font-semibold hover:bg-gray-50"
//         >
//           {cancelText}
//         </button>

//         <button
//           onClick={() => {
//             onConfirm();
//             onClose();
//           }}
//           className={`flex-1 h-10 rounded-lg text-white text-sm font-semibold ${current.btn} flex items-center justify-center gap-2`}
//         >
//           <FaCheck size={12} />
//           {confirmText}
//         </button>
//       </div>
//     </Modal>
//   );
// }
