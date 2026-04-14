// components/VolunteerSection.jsx
import { RxPeople } from "react-icons/rx";

export default function VolunteerSection() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-6">
            For Volunteers
          </h2>

          <ul className="space-y-4 text-gray-600 text-sm md:text-base">
            <li>✔ Browse and discover volunteering opportunities</li>
            <li>✔ Apply to events that match your interests</li>
            <li>✔ Chat directly with event organizers</li>
            <li>✔ Get recognized with certificates and benefits</li>
            <li>✔ Track your volunteering journey</li>
          </ul>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium cursor-pointer">
            Get Started
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg">

            <RxPeople className="text-5xl sm:text-6xl md:text-7xl mb-4 animate-pulse" />

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-center px-4">
              Join 1000+ Volunteers
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}