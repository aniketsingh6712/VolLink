// // components/modals/ApplyModal.jsx

// import { useState } from "react";
// import Modal from "../ui/Modal";
// import { IoCheckmark } from "react-icons/io5";

// export default function ApplyModal({ isOpen, onClose, event }) {
//   const [role, setRole] = useState("student");

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     skills: "",
//     emergencyContact: "",
//     college: "",
//     linkedin: "",
//     instagram: "",
//     photo: null,
//     id: null,
//     collegeId: null,
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleFile = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.files[0] });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
      
//       {/* 🔥 EVENT PREVIEW */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold text-[#0F172A]">
//           Apply for {event.title}
//         </h2>
//         <p className="text-sm text-gray-500">{event.location}</p>

//         {/* Benefits */}
//         <div className="mt-4 bg-green-50 p-3 rounded-lg text-sm text-green-700">
//           <strong>Benefits:</strong> {event.benefit}
//         </div>

//         {/* Work Details */}
//         <div className="mt-4">
//           <p className="text-sm font-medium text-gray-700 mb-2">
//             What you'll do:
//           </p>

//           <div className="space-y-2">
//             {event.work?.map((task, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-2 text-sm text-gray-600"
//               >
//                 <IoCheckmark className="text-green-500" />
//                 {task}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Basic Info */}
//         <div className="grid grid-cols-2 gap-3">
//           <input
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handleChange}
//             className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Role Selection */}
//         <div className="flex gap-3">
//           <button
//             type="button"
//             onClick={() => setRole("student")}
//             className={`flex-1 py-2 rounded-lg ${
//               role === "student"
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100"
//             }`}
//           >
//             Student
//           </button>

//           <button
//             type="button"
//             onClick={() => setRole("working")}
//             className={`flex-1 py-2 rounded-lg ${
//               role === "working"
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100"
//             }`}
//           >
//             Working
//           </button>
//         </div>

//         {/* Conditional Fields */}
//         {role === "student" && (
//           <div className="space-y-3">
//             <input
//               name="college"
//               placeholder="College Name"
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg"
//             />

//             <div>
//               <label className="text-xs text-gray-500">
//                 Upload College ID
//               </label>
//               <input
//                 type="file"
//                 name="collegeId"
//                 onChange={handleFile}
//                 className="w-full mt-1"
//               />
//             </div>
//           </div>
//         )}

//         {/* Skills */}
//         <textarea
//           name="skills"
//           placeholder="Skills / Experience"
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-lg"
//         />

//         {/* Upload Section */}
//         <div className="grid grid-cols-2 gap-3">
          
//           {/* Photo */}
//           <div className="border-2 border-dashed rounded-lg p-3 text-center">
//             <p className="text-xs text-gray-500">Upload Photo</p>
//             <input type="file" name="photo" onChange={handleFile} />
//           </div>

//           {/* ID */}
//           <div className="border-2 border-dashed rounded-lg p-3 text-center">
//             <p className="text-xs text-gray-500">Upload ID Proof</p>
//             <input type="file" name="id" onChange={handleFile} required />
//           </div>
//         </div>

//         {/* Emergency Contact */}
//         <input
//           name="emergencyContact"
//           placeholder="Emergency Contact Number"
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-lg"
//           required
//         />

//         {/* Social Links */}
//         <div className="grid grid-cols-2 gap-3">
//           <input
//             name="linkedin"
//             placeholder="LinkedIn (optional)"
//             onChange={handleChange}
//             className="px-3 py-2 border rounded-lg"
//           />
//           <input
//             name="instagram"
//             placeholder="Instagram (optional)"
//             onChange={handleChange}
//             className="px-3 py-2 border rounded-lg"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3 pt-2">
//           <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg">
//             Submit Application
//           </button>

//           <button
//             type="button"
//             onClick={onClose}
//             className="flex-1 border py-2.5 rounded-lg"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// }

// components/modals/ApplyModal.jsx

import { useState } from "react";
import Modal from "../ui/Modal";
import { IoCheckmark } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
export default function ApplyModal({ isOpen, onClose, event }) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("student");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    college: "",
    collegeId: null,
    photo: null,
    id: null,
  });
const [previewFile, setPreviewFile] = useState(null);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) =>
    setForm({ ...form, [e.target.name]: e.target.files[0] });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        
      {/* 🔥 Progress Indicator */}
      <div className="flex items-center justify-between mb-6 text-sm">
        {["Event Details","Basic Details", "Verification", "Review"].map((label, i) => (
          <div
            key={i}
            className={`flex-1 text-center ${
              step === i + 1 ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
{/* STEP 1 → EVENT DETAILS */}
{step === 1 && (
  <div className="space-y-5">

    {/* Title */}
    <div>
      <h2 className="text-xl font-bold text-[#0F172A]">
        {event.title}
      </h2>

      <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
        {event.category}
      </span>
    </div>

    {/* Info */}
    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
      <span>📅 {event.date}</span>
      <span>📍 {event.location}</span>
      <span>⏱ {event.hours} hours</span>
    </div>

    {/* Benefit */}
    <div className="bg-green-50 text-green-700 text-sm px-4 py-3 rounded-xl">
      🎁 <b>Benefits:</b> {event.benefit}
    </div>

    {/* Work Section */}
    <div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        What you’ll do:
      </h3>

      <div className="space-y-2">
        {event.work?.map((task, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <span className="mt-[2px] text-green-500">✔</span>
            {task}
          </div>
        ))}
      </div>
    </div>

    {/* Continue */}
    <button
      onClick={() => setStep(2)}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium"
    >
      Continue to Apply
    </button>
  </div>
)}
      {/* STEP 1 */}
{step === 2 && (
  <div className="space-y-4">

    <h2 className="text-lg font-bold">Basic Details</h2>

    {/* Name */}
    <input
      name="name"
      placeholder="Full Name"
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      required
    />

    {/* Email + Phone */}
    <div className="grid grid-cols-2 gap-3">
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={handleChange}
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    {/* Emergency Contact */}
    <div>
      <input
        name="emergencyContact"
        placeholder="Emergency Contact Number"
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />
      <p className="text-xs text-gray-400 mt-1">
        Used only in case of emergency during the event
      </p>
    </div>

    {/* Role Selection */}
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => setRole("student")}
        className={`flex-1 py-2 rounded-lg ${
          role === "student"
            ? "bg-blue-600 text-white"
            : "bg-gray-100"
        }`}
      >
        Student
      </button>

      <button
        type="button"
        onClick={() => setRole("working")}
        className={`flex-1 py-2 rounded-lg ${
          role === "working"
            ? "bg-blue-600 text-white"
            : "bg-gray-100"
        }`}
      >
        Working
      </button>
    </div>

    {/* Student Fields */}
    {role === "student" && (
      <div className="space-y-3">
        <input
          name="college"
          placeholder="College Name"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />

       
      </div>
    )}

    {/* Continue */}
    <button
      onClick={() => setStep(2)}
      className="w-full bg-blue-600 text-white py-2.5 rounded-lg"
    >
      Continue
    </button>
  </div>
)}
      
     {/* STEP 2 */}
{step === 3 && (
  <div className="space-y-4">

    <h2 className="text-lg font-bold">Verification</h2>

    <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm">
      {role === "student"
        ? "Upload your photo, college ID and a valid government ID"
        : "Upload your photo and a valid government ID"}
    </div>

    {/* Upload Card Component */}
    {[
      { label: "Your Photo", name: "photo" },
      { label: "Government ID", name: "id" },
      ...(role === "student"
        ? [{ label: "College ID", name: "collegeId" }]
        : []),
    ].map((item) => (
      <div
        key={item.name}
        className="border-2 border-dashed rounded-xl p-4 text-center bg-gray-50"
      >
        <p className="text-sm text-gray-600">{item.label}</p>

        <input
          type="file"
          name={item.name}
          onChange={handleFile}
          className="mt-2 text-sm"
        />

        {/* Preview */}
        {form[item.name] && (
          <div className="mt-2 text-xs text-green-600">
            ✅ {form[item.name].name}
          </div>
        )}
      </div>
    ))}

    {/* Buttons */}
    <div className="flex gap-3">
      <button
        onClick={() => setStep(1)}
        className="flex-1 border py-2 rounded-lg"
      >
        Back
      </button>

      <button
        onClick={() => setStep(3)}
        className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  </div>
)}
      {/* STEP 3 */}
      {/* STEP 3 */}
{step === 4 && (
  <div className="space-y-4">

    <h2 className="text-lg font-bold">Review & Submit</h2>

    {/* Basic Info */}
    <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
      <p><b>Name:</b> {form.name}</p>
      <p><b>Phone:</b> {form.phone}</p>
      <p><b>Role:</b> {role}</p>
      {role === "student" && (
        <p><b>College:</b> {form.college}</p>
      )}
    </div>

    {/* File Preview Section */}
    <div className="space-y-2">

      {[
        { label: "Photo", file: form.photo },
        { label: "Government ID", file: form.id },
        ...(role === "student"
          ? [{ label: "College ID", file: form.collegeId }]
          : []),
      ].map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-white border rounded-lg px-3 py-2"
        >
          <span className="text-sm text-gray-600">
            {item.label}
          </span>

          {item.file && (
            <button
              onClick={() =>
                setPreviewFile(URL.createObjectURL(item.file))
              }
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEye />
            </button>
          )}
        </div>
      ))}
    </div>

    {/* Confirm */}
    <div className="text-green-600 text-sm">
      ✅ All details verified
    </div>

    {/* Buttons */}
    <div className="flex gap-3">
      <button
        onClick={() => setStep(2)}
        className="flex-1 border py-2 rounded-lg"
      >
        Back
      </button>

      <button
        onClick={() => {
          console.log(form);
          onClose();
        }}
        className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
      >
        Submit Application
      </button>
    </div>
  </div>
)}

{previewFile && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70">
    <div className="bg-white p-4 rounded-xl max-w-md w-full relative">

      <button
        onClick={() => setPreviewFile(null)}
        className="absolute top-2 right-2 text-gray-500"
      >
        ✕
      </button>

      <img
        src={previewFile}
        alt="preview"
        className="w-full rounded-lg"
      />
    </div>
  </div>
)}
    </Modal>
    
  );
}