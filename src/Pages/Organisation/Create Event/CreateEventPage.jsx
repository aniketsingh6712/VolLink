import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    title: "",
    org: "",
    description: "",
    category: "",
    needed: "",
    startDate: "",
    endDate: "",
    hours: "",
    location: "",
    benefits: "",
  expectations: [],
    contact1: "",
    contact2: "",
    email: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-[#F9FAFB] min-h-screen max-w-5xl mx-auto px-6 py-8">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 mb-6"
      >
        <FaArrowLeft size={16} /> Back
      </button>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-gray-900">
        Create New Event
      </h1>
      <p className="text-gray-500 mb-6">
        Fill details to publish your event
      </p>

      {/* 🔥 STEP INDICATOR */}
      <div className="flex justify-between mb-6 text-sm">
        {["Basic Info", "Details", "Benefits", "Contact", "Review"].map(
          (label, i) => (
            <div
              key={i}
              className={`flex-1 text-center ${
                step === i + 1
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {label}
            </div>
          )
        )}
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-5">

            <h2 className="text-xl font-bold">Basic Information</h2>

            <input
              name="title"
              placeholder="Event Title"
              onChange={handleChange}
              className="input"
            />

            <input
              name="org"
              placeholder="Organization Name"
              onChange={handleChange}
              className="input"
            />

            <textarea
              name="description"
              placeholder="Event Description"
              onChange={handleChange}
              className="input h-24"
            />

            <button
              onClick={() => setStep(2)}
              className="btn-primary"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-5">

            <h2 className="text-xl font-bold">Event Details</h2>

            <div className="grid grid-cols-2 gap-4">
              <input name="category" placeholder="Category" onChange={handleChange} className="input" />
              <input name="needed" placeholder="People Needed" className="input" />
              <input type="date" name="startDate" className="input" />
              <input type="date" name="endDate" className="input" />
              <input name="hours" placeholder="Work Hours" className="input" />
              <input name="location" placeholder="Location" className="input" />
            </div>

            <NavButtons setStep={setStep} prev={1} next={3} />
          </div>
        )}

        {/* STEP 3 */}
       {step === 3 && (
  <div className="space-y-6">

    <h2 className="text-xl font-bold">Benefits & Expectations</h2>

    {/* ✅ BENEFITS */}
    <div className="bg-green-50 text-green-700 p-4 rounded-xl">
      <textarea
        name="benefits"
        placeholder="Benefits (Certificate, Food, Cash...)"
        onChange={handleChange}
        className="w-full bg-transparent outline-none"
      />
    </div>

    {/* ✅ EXPECTATIONS */}
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">
          Volunteer Expectations
        </h3>

        <button
          type="button"
          onClick={() =>
            setForm({
              ...form,
              expectations: [...(form.expectations || []), ""],
            })
          }
          className="text-blue-600 text-sm font-medium"
        >
          + Add
        </button>
      </div>

      <div className="space-y-3">

        {(form.expectations || []).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"
          >
            {/* Input */}
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const updated = [...form.expectations];
                updated[index] = e.target.value;
                setForm({ ...form, expectations: updated });
              }}
              placeholder={`Expectation ${index + 1}`}
              className="flex-1 bg-transparent outline-none text-sm"
            />

            {/* REMOVE */}
            <button
              onClick={() => {
                const updated = form.expectations.filter(
                  (_, i) => i !== index
                );
                setForm({ ...form, expectations: updated });
              }}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              ✕
            </button>
          </div>
        ))}

        {/* EMPTY STATE */}
        {(!form.expectations || form.expectations.length === 0) && (
          <p className="text-sm text-gray-400">
            No expectations added yet
          </p>
        )}
      </div>
    </div>

    <NavButtons setStep={setStep} prev={2} next={4} />
  </div>
)}
        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-5">

            <h2 className="text-xl font-bold">Contact Details</h2>

            <input name="contact1" placeholder="Contact Person 1" className="input" />
            <input name="contact2" placeholder="Contact Person 2" className="input" />
            <input name="email" placeholder="Email" className="input" />

            <NavButtons setStep={setStep} prev={3} next={5} />
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="space-y-5">

            <h2 className="text-xl font-bold">Review & Publish</h2>

            <div className="bg-gray-50 p-4 rounded-xl text-sm space-y-2">
              <p><b>{form.title}</b></p>
              <p>{form.description}</p>
              <p>📍 {form.location}</p>
              <p>📅 {form.startDate} - {form.endDate}</p>
              <p>👥 {form.needed} volunteers needed</p>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(4)} className="btn-secondary">
                Back
              </button>

              <button className="btn-primary">
                Publish Event 🚀
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* 🔹 Reusable */

function NavButtons({ setStep, prev, next }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => setStep(prev)}
        className="flex-1 border py-2 rounded-lg"
      >
        Back
      </button>

      <button
        onClick={() => setStep(next)}
        className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}