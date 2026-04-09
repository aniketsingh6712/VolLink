// components/VolunteerSection.jsx

export default function VolunteerSection() {
  return (
    <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center">

      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold mb-6">For Volunteers</h2>

        <ul className="space-y-4 text-gray-600">
          <li>✔ Browse and discover volunteering opportunities</li>
          <li>✔ Apply to events that match your interests</li>
          <li>✔ Chat directly with event organizers</li>
          <li>✔ Get recognized with certificates and benefits</li>
          <li>✔ Track your volunteering journey</li>
        </ul>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>

      {/* Right Card */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center h-80 text-xl font-semibold shadow-lg">
        Join 1000+ Volunteers
      </div>

    </section>
  );
}