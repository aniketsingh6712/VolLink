import QRCode from "react-qr-code";
import { FiCalendar, FiMapPin, FiDownload, FiClock } from "react-icons/fi";
import { CiCircleAlert, CiCircleCheck } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
export default function BoardingPass({
  volunteer,
  role,
  passId,
  date,
  location,
  event,
  status = "confirmed",
  checkIn,
  checkOut,
  hoursWorked,
  onClose,
  onDownload,
}) {
  const completed = status === "completed";

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-h-[90vh] overflow-y-auto">
      {/* HEADER */}
      <div className="bg-blue-600 text-white px-6 py-5 flex justify-around">
        <button className="text-xl font-bold" onClick={onClose}><IoMdClose/></button>
        <div>
        <h2 className="text-xl font-bold text-center">Event Boarding Pass</h2>

        <p className="text-xs opacity-90 text-center">{event}</p>
        </div>
        <button className="text-xl font-bold"><IoShareSocial/></button>
      </div>

      <div className="p-6 space-y-4">
        {/* DATE */}
        <InfoBox icon={<FiCalendar />} label="EVENT DATE" value={date} />

        {/* LOCATION */}
        <InfoBox icon={<FiMapPin />} label="LOCATION" value={location} />

        {/* STATUS */}
        <div
          className={`
          rounded-xl
          p-4
          border

          ${
            completed
              ? "bg-blue-50 border-blue-200"
              : "bg-blue-50 border-blue-200"
          }
        `}
        >
          <div className="text-xs mb-2 text-gray-600 font-medium">STATUS</div>

          <div className="flex gap-2 items-center font-semibold">
            {completed ? (
              <>
                <IoMdCheckmarkCircleOutline className="text-green-600 font-bold" size={23} />
                Event Completed
              </>
            ) : (
              <>
                <FiClock className="text-yellow-600 font-semibold"/>
                <span className="text-yellow-800">Confirmed - Awaiting Event Day</span>
              </>
            )}
          </div>
        </div>

        {/* COMPLETED ONLY */}
        {completed && (
          <>
            <StatusBox
              title="CHECK IN STATUS"
              color="green"
              value={checkIn}
              subtitle="You checked in successfully"
              icon={<IoMdCheckmarkCircleOutline className="text-green-800" size={25} />}
            />

            <StatusBox
              title="CHECK OUT STATUS"
              color="blue"
              value={checkOut}
              subtitle="You checked out successfully"
              icon={<IoMdCheckmarkCircleOutline className="text-blue-800" size={25} />}
            />

            <StatusBox
              title="TOTAL HOURS CONTRIBUTED"
              color="purple"
              value={hoursWorked}
              subtitle="hours"
            />
          </>
        )}

        {/* QR */}
        <div className="border rounded-2xl p-8 flex flex-col items-center">
          <div className="text-xs mb-5">QR CODE</div>

          <QRCode
            size={160}
            value={JSON.stringify({
              passId,
            })}
          />

          <div className="mt-5 border rounded-xl px-5 py-3">
            <div className="text-xs text-center">Pass ID</div>

            <div className="font-bold">{passId}</div>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
          <h3 className="font-semibold mb-3 text-yellow-800 flex items-center gap-2">
           <CiCircleAlert className="font-bold text-yellow-900 text-xl"/> {completed ? "Instructions" : "Before You Arrive"}
          </h3>

          <ol className="text-sm space-y-2 text-yellow-700">
            <li>1. Show pass at event</li>

            <li>2. Check-in on arrival</li>

            <li>3. Follow organizer instructions</li>

            <li>4. Check-out after completion</li>
          </ol>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t p-5 flex gap-3">
        <button
          onClick={onDownload}
          className="
          flex-1
          bg-blue-600
          text-white
          rounded-xl
          py-3
          flex
          justify-center
          items-center
          gap-2
        "
        >
          <FiDownload />
          Download Pass
        </button>
        <button onClick={onClose} className="px-8 border rounded-xl bg-gray-200">
          Close
        </button>
      </div>
    </div>
  );
}
/* COMPONENTS */

function InfoBox({ icon, label, value }) {
  return (
    <div className="border rounded-2xl p-4">
      <div className="flex gap-2 text-blue-600 text-xs mb-1">
        {icon}
        {label}
      </div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function StatusBox({ title, value, subtitle, color ,icon }) {
  const styles = {
    green: "bg-green-50 border-green-200 text-green-800",

    blue: "bg-blue-50 border-blue-200 text-blue-800",

    purple: "bg-purple-50 border-purple-200 text-purple-800",

  };

  return (
    <div
      className={`
        rounded-xl
        border
        p-4
        ${styles[color]}
      `}
    >
      <div className="text-xs mb-2">{title}</div>
      <div className="flex items-center gap-2">
        {icon && <div>{icon}</div>}
        <div>
      <div className="font-bold text-xl">{value}</div>
      <div className="text-sm">{subtitle}</div>
      </div>
      </div>
    </div>
  );
}

// import QRCode from "react-qr-code";
// import {
//   FiCalendar,
//   FiMapPin,
//   FiDownload,
// } from "react-icons/fi";
// import { CiCircleAlert } from "react-icons/ci";

// export default function BoardingPass({
//   volunteer,
//   event,
//   role,
//   passId,
//   date,
//   location,
//   onClose,
//   onDownload,
// }) {
//   return (
//     <div className="bg-white rounded-3xl overflow-hidden max-h-90vh overflow-y-auto shadow-lg">

//       {/* HEADER */}
//       <div className="bg-blue-500 text-white px-6 py-5">
//         <h2 className="text-xl font-bold text-center">
//           Event Boarding Pass
//         </h2>

//         <p className="text-sm opacity-80 text-center mt-1">
//           {volunteer} • {role}
//         </p>
//       </div>

//       <div className="p-6 space-y-5">

//         {/* DATE */}
//         <div className="border rounded-2xl p-4">
//           <div className="flex items-center gap-2 text-blue-600 text-xs mb-1">
//             <FiCalendar />
//             EVENT DATE
//           </div>

//           <div className="font-semibold">
//             {date}
//           </div>
//         </div>

//         {/* LOCATION */}
//         <div className="border rounded-2xl p-4">
//           <div className="flex items-center gap-2 text-blue-600 text-xs mb-1">
//             <FiMapPin />
//             LOCATION
//           </div>

//           <div className="font-semibold">
//             {location}
//           </div>
//         </div>

//         {/* STATUS */}
//         <div className="rounded-2xl p-5 border border-blue-200 bg-blue-50">

//           <div className="text-xs mb-1">
//             STATUS
//           </div>

//           <div className="flex items-center gap-2 text-orange-700 font-semibold">
//             <CiCircleAlert />
//             Confirmed - Awaiting Event Day
//           </div>

//         </div>

//         {/* QR */}
//         <div className="border rounded-2xl p-8 flex flex-col items-center">

//           <div className="text-xs mb-5">
//             QR CODE
//           </div>

//           <QRCode
//             size={170}
//             value={JSON.stringify({
//               passId,
//             })}
//           />

//           <div className="mt-5 border rounded-xl px-6 py-4">

//             <div className="text-xs text-center">
//               Pass ID
//             </div>

//             <div className="font-bold">
//               {passId}
//             </div>

//           </div>

//         </div>

//         {/* INSTRUCTIONS */}
//         <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-5">

//           <h3 className="font-semibold text-orange-800 mb-3">
//             Before You Arrive
//           </h3>

//           <ol className="space-y-2 text-sm text-orange-700 list-decimal ml-5">

//             <li>
//               Show this pass upon arrival
//             </li>

//             <li>
//               Check-in using your boarding pass ID
//             </li>

//             <li>
//               Follow organizer instructions
//             </li>

//             <li>
//               Check-out after volunteer hours
//             </li>

//           </ol>

//         </div>

//       </div>

//       {/* FOOTER */}
//       <div className="border-t p-5 flex gap-3">

//         <button
//           onClick={onDownload}
//           className="flex-1 bg-blue-600 text-white rounded-xl py-3 flex justify-center items-center gap-2"
//         >
//           <FiDownload />
//           Download Pass
//         </button>

//         <button
//           onClick={onClose}
//           className="px-8 border rounded-xl"
//         >
//           Close
//         </button>

//       </div>

//     </div>
//   );
// }
