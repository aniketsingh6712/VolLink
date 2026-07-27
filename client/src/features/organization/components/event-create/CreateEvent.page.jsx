import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OrganizationVerificationGuard from "../../../common/verification/OrganizationVerificationGuard";
import { toast } from "react-toastify";
import { supabase } from "../../../../utils/supabase";
import VolunteerPositionsStep from "./components/PositionStep/VolunteerPositionStep";
export default function CreateEventPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    title: "",
    org: "",
    description: "",
    category: "",
    positions: [],
    startDate: "",
    endDate: "",
    hours: "",
    location: "",
    benefits: "",
    expectations: [],
    contact1: "",
    email: "",
    eventImage: null,
    eventImagePreview: "",
    monetary_benefit: "",
  });
  // HANDLE CHANGE
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageSelect = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setForm({
      ...form,
      eventImage: file,
      eventImagePreview: URL.createObjectURL(file),
    });
  };

  // CREATE EVENT
  const handleCreateEvent = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }
      let imageUrl = "";
      if (form.eventImage) {

        const fileExt = form.eventImage.name
          .split(".")
          .pop();

        const fileName =
          `${user.id}-${Date.now()}.${fileExt}`;
        console.log("fileName", fileName);
        const { error: uploadError } =
          await supabase.storage
            .from("event-images")
            .upload(fileName, form.eventImage);

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage
          .from("event-images")
          .getPublicUrl(fileName);

        imageUrl = publicUrl;
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();
      if (profileError) {
        navigate("/login");
      }
      const { data: orgProfileData, error: orgProfileError } = await supabase
        .from("organization_profiles")
        .select("id")
        .eq("user_id", profileData.id)
        .single();

      if (orgProfileError) {
        navigate("/login");
      }


      // INSERT EVENT
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .insert([
          {
            organization_id: orgProfileData.id,
            title: form.title,
            description: form.description,
            category: form.category,
            people_needed: Number(form.needed),
            start_date: form.startDate,
            end_date: form.endDate,
            work_hours: form.hours,
            location: form.location,
            benefits: form.benefits,
            contact_phone: form.contact1,
            contact_email: form.email,
            image_url: imageUrl,
            monetary_incentive: Number(form.monetary_benefit) || 0,
          },
        ])
        .select()
        .single();

      console.log("eventData", eventData.id);

      if (eventError) throw eventError;

      const { error: expectationError } = await supabase.from("events_task").insert(
        [
          {
            event_id: eventData.id,
            tasks: form.expectations,
          }
        ]
      );
      if (expectationError) throw expectationError;
      toast.success("Event created successfully 🚀");

      setTimeout(() => {
        navigate("/organization/dashboard");
      }, 1500);
    } catch (err) {
      console.error(err);

      toast.error(err.message);
    }
  };

  // STEP INDICATOR DATA
  const steps = [
    {
      title: "Event Basics",
      subtitle: "Name and description",
    },
    {
      title: "Timeline",
      subtitle: "Dates and location",
    },
    {
      title: "Volunteer Positions",
      subtitle: "Create volunteer positions",
    },
    {
      title: "Benefits",
      subtitle: "Benefits and expectations",
    },
    {
      title: "Contact",
      subtitle: "Contact and banner",
    },
    {
      title: "Review",
      subtitle: "Publish event",
    },
  ];

  // VALIDATION
  const validateStep = () => {
    // STEP 1
    if (step === 1) {

      if (
        !form.title.trim() ||
        !form.description.trim()
      ) {
        toast.error("Please fill all required fields");
        return false;
      }
    }

    // STEP 2
    if (step === 2) {

      if (
        !form.category ||
        !form.startDate ||
        !form.endDate ||
        !form.hours.trim() ||
        !form.location.trim()
      ) {
        toast.error("Please complete all event details");
        return false;
      }

      // DATE VALIDATION
      if (new Date(form.endDate) < new Date(form.startDate)) {

        toast.error("End date cannot be before start date");

        return false;
      }
    }

    // STEP 3
    if (step === 4) {

      if (
        !form.benefits.trim()
      ) {
        toast.error("Please add volunteer benefits");

        return false;
      }

      // EXPECTATIONS
      if (
        !form.expectations ||
        form.expectations.length === 0
      ) {
        toast.error("Add at least one volunteer expectation");

        return false;
      }
      // EMPTY EXPECTATION CHECK
      const hasEmptyExpectation = form.expectations.some(
        (item) => !item.trim()
      );

      if (hasEmptyExpectation) {
        toast.error("Expectation fields cannot be empty");
        return false;
      }
    }
    // STEP 4
    if (step === 5) {
      if (
        !form.contact1.trim() ||
        !form.email.trim()
      ) {
        console.log("form", form);
        toast.error("Contact phone and email are required");
        return false;
      }
      // SIMPLE EMAIL VALIDATION
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        toast.error("Enter a valid email");
        return false;
      }
    }
    return true;
  };

  //min start date for the event
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minStartDate =
    tomorrow.toISOString().split("T")[0];

  // total volunteer count
  const totalVolunteers = form.positions.reduce(
    (sum, position) => sum + Number(position.volunteersNeeded || 0),
    0
  );
  return (
    <div className="bg-[#F9FAFB] min-h-screen max-w-5xl mx-auto px-6 py-8">
      <OrganizationVerificationGuard>
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-6"
        >
          <FaArrowLeft size={16} /> Back
        </button>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
        <p className="text-gray-500 mb-6">Fill details to publish your event</p>

        {/* 🔥 STEP INDICATOR */}
        <div className="flex items-start justify-between mb-10 overflow-x-auto">

          {steps.map((item, index) => {

            const stepNumber = index + 1;

            const active = step === stepNumber;

            const completed = step > stepNumber;

            return (

              <div
                key={index}
                className="flex items-start flex-1 min-w-[140px]"
              >
                {/* LEFT */}
                <div className="flex flex-col items-start">
                  {/* CIRCLE + LINE */}
                  <div className="flex items-center w-full">
                    {/* CIRCLE */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all
              ${active
                          ? "bg-blue-600 text-white"
                          : completed
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-600"
                        }
              `}
                    >
                      {stepNumber}
                    </div>

                    {/* LINE */}
                    {index !== steps.length - 1 && (
                      <div
                        className={`h-[3px] flex-1 mx-3 rounded-full
                  
                  ${completed
                            ? "bg-green-500"
                            : "bg-gray-200"
                          }
                  
                `}
                      />
                    )}
                  </div>

                  {/* TEXT */}
                  <div className="mt-4">

                    <h3
                      className={`text-sm font-semibold
              
              ${active
                          ? "text-blue-600"
                          : "text-gray-700"
                        }
              
              `}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">

                      {item.subtitle}

                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Basic Information
                </h2>

                <p className="text-gray-500 mt-1">
                  Start by adding the main details about your event.
                </p>
              </div>

              {/* EVENT TITLE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Event Title *
                </label>

                <input
                  required
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Beach Cleanup Drive"
                  className="input mt-2"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Choose a short and clear event name
                </p>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Event Description *
                </label>

                <textarea
                  required
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the purpose, activities, and goals of your event..."
                  className="input h-32 mt-2"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Include what volunteers will do during the event
                </p>
              </div>

              <button
                onClick={() => {
                  if (!validateStep()) return;
                  setStep(2);
                }}
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

              <div className="grid grid-cols-2 gap-5">
                {/* CATEGORY */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Category *
                  </label>

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="input mt-2"
                  >
                    <option value="">🗂 Select Category</option>

                    <option value="food">🍲 Food & Hunger</option>
                    <option value="education">📚 Education</option>
                    <option value="environment">🌱 Environment</option>
                    <option value="health">💗 Health & Wellness</option>
                    <option value="community">🤝 Community</option>
                  </select>

                  <p className="text-xs text-gray-400 mt-1">
                    Select the primary focus area
                  </p>
                </div>

                {/* PEOPLE NEEDED */}
                {/* <div>
                  <label className="text-sm font-medium text-gray-700">
                    Volunteers Needed *
                  </label>

                  <input
                    type="number"
                    min={1}
                    name="needed"
                    value={form.needed}
                    onChange={handleChange}
                    placeholder="20"
                    className="input mt-2"
                  />

                  <p className="text-xs text-gray-400 mt-1">
                    Total volunteers required
                  </p>
                </div> */}

                {/* START DATE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Start Date *
                  </label>

                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="input mt-2"
                    min={minStartDate}
                  />
                </div>

                {/* END DATE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    End Date *
                  </label>

                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="input mt-2"
                    min={form.startDate || minStartDate}
                  />
                </div>

                {/* HOURS */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Work Hours *
                  </label>

                  <input
                    name="hours"
                    value={form.hours}
                    onChange={handleChange}
                    placeholder="3-4 hours per day"
                    className="input mt-2"
                  />

                  <p className="text-xs text-gray-400 mt-1">
                    Mention expected daily contribution
                  </p>
                </div>

                {/* LOCATION */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Event Location *
                  </label>

                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="MG Road, Bangalore"
                    className="input mt-2"
                  />

                  <p className="text-xs text-gray-400 mt-1">
                    Add complete event location
                  </p>
                </div>
              </div>

              <NavButtons setStep={setStep} prev={1} next={3} validateStep={validateStep} />
            </div>
          )}
          {/* STEP 3 */}
          {step === 3 && (<div className="spacey-6">
            <VolunteerPositionsStep
              form={form}
              setForm={setForm}
              setStep={setStep}
              validateStep={validateStep}
            />
            <NavButtons
              setStep={setStep}
              prev={2}
              next={4}
              validateStep={validateStep}
            />

          </div>)}
          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Benefits & Expectations</h2>

              {/* ✅ BENEFITS */}
              <div className="bg-green-50 text-green-700 p-4 rounded-xl">
                <textarea
                  name="benefits"
                  placeholder="Benefits (Certificate, Food, Cash...)"
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                  value={form.benefits}
                />
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Incentive Amount(Optional)
                </label>
                <div className="text-gray-400 mt-1 flex items-center gap-1">
                  <span className="font-bold">₹</span>
                  <input type="number" placeholder="0" min="0" className="input mt-2" onChange={handleChange}
                    value={form.monetary_benefit}
                    name="monetary_benefit"

                  />
                </div>
                <p className="text-sm text-gray-400 mt-1 ms-4">
                  Leave empty if no monetary incentive
                </p>
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
                            (_, i) => i !== index,
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

              <NavButtons setStep={setStep} prev={3} next={5} validateStep={validateStep} />
            </div>
          )}
          {/* STEP 5 */}
          {step === 5 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Contact Details</h2>

              <input
                name="contact1"
                placeholder="Contact Person "
                className="input"
                value={form.contact1}
                onChange={handleChange}
              />

              <input name="email" value={form.email} placeholder="Email" className="input" onChange={handleChange} />
              {/* EVENT IMAGE */}
              <div>

                <label className="text-sm font-medium text-gray-700">
                  Event Banner
                </label>

                <div className="mt-3">

                  <label className="group relative flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500 transition bg-gray-50">

                    {form.eventImagePreview ? (

                      <img
                        src={form.eventImagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />

                    ) : (

                      <div className="text-center px-6">

                        <div className="text-5xl mb-3">
                          🖼️
                        </div>

                        <p className="font-medium text-gray-700">
                          Upload Event Banner
                        </p>

                        <p className="text-sm text-gray-400 mt-1">
                          Recommended size: 1280 × 720
                        </p>

                      </div>
                    )}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-medium">

                      Change Image

                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageSelect}
                    />

                  </label>

                </div>
              </div>
              <NavButtons setStep={setStep} prev={4} next={6} validateStep={validateStep} />
            </div>
          )}

          {/* STEP 6 */}
          {step === 6 && (
            // <div className="space-y-5">
            //   <h2 className="text-xl font-bold">Review & Publish</h2>

            //   <div className="bg-gray-50 p-4 rounded-xl text-sm space-y-2">
            //     <p>
            //       <b>{form.title}</b>
            //     </p>
            //     <p>{form.description}</p>
            //     <p>📍 {form.location}</p>
            //     <p>
            //       📅 {form.startDate} - {form.endDate}
            //     </p>
            //     <p>👥 {form.needed} volunteers needed</p>
            //   </div>

            //   <div className="flex gap-3">
            //     <button onClick={() => setStep(5)} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
            //       Back
            //     </button>

            //     <button onClick={handleCreateEvent} className="btn-primary">
            //       Publish Event 🚀
            //     </button>
            //   </div>
            // </div>
            <div className="space-y-6">
              {/* Event Summary */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-xl font-bold">Review & Publish</h2>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Title:</strong> {form.title}
                  </p>
                  <p>
                    <strong>Description:</strong> {form.description}
                  </p>
                  <p>
                    <strong>Category:</strong> {form.category}
                  </p>
                  <p>
                    <strong>Location:</strong> {form.location}
                  </p>
                  <p>
                    <strong>Date:</strong> {form.startDate} - {form.endDate}
                  </p>
                  <p>
                    <strong>Work Hours:</strong> {form.hours}
                  </p>
                </div>
              </div>
              {/* Volunteer Positions */}
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-lg font-semibold">
                    Volunteer Positions
                  </h3>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">
                    {totalVolunteers} Volunteers
                  </span>
                </div>
                <div className="space-y-3">
                  {
                    form.positions.map(position => (
                      <div
                        key={position.id}
                        className="flex justify-between items-center bg-white rounded-xl border p-4"
                      >
                        <div>
                          <h4 className="font-semibold">
                            {position.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {position.description}
                          </p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {position.volunteersNeeded} Needed
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(5)} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
                  Back
                </button>

                <button onClick={handleCreateEvent} className="btn-primary">
                  Publish Event 🚀
                </button>
              </div>
            </div>
          )}
        </div>
      </OrganizationVerificationGuard>
    </div>
  );
}

/* 🔹 Reusable */

function NavButtons({
  setStep,
  prev,
  next,
  validateStep,
}) {

  const handleNext = () => {

    if (!validateStep()) return;

    setStep(next);
  };

  return (
    <div className="flex justify-between items-center pt-4">

      {/* BACK */}
      <button
        onClick={() => setStep(prev)}
        className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
      >
        Back
      </button>

      {/* CONTINUE */}
      <button
        onClick={handleNext}
        className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-sm"
      >
        Continue
      </button>

    </div>
  );
}