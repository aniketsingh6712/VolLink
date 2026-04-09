// components/OrganizationSection.jsx

export default function OrganizationSection() {
  return (
    <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center">

      {/* Left Card */}
      <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl flex items-center justify-center h-80 text-xl font-semibold shadow-lg">
        Manage 100+ Events
      </div>

      {/* Right */}
      <div>
        <h2 className="text-2xl font-bold mb-6">For Organizations</h2>

        <ul className="space-y-4 text-gray-600">
          <li>✔ Post events and specify volunteer needs</li>
          <li>✔ Manage volunteer applications and approvals</li>
          <li>✔ Communicate with volunteers in real-time</li>
          <li>✔ Offer benefits and certificates</li>
          <li>✔ Track event impact and metrics</li>
        </ul>

        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
          Create Your Event
        </button>
      </div>

    </section>
  );
}