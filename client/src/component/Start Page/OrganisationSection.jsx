// components/OrganizationSection.jsx
import { IoTicketOutline } from "react-icons/io5";

export default function OrganizationSection() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CARD */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 md:h-96 
                          bg-gradient-to-br from-green-300 to-green-500 
                          rounded-2xl flex flex-col items-center justify-center 
                          text-white shadow-lg 
                          hover:scale-105 transition duration-300">

            <IoTicketOutline className="text-5xl sm:text-6xl md:text-7xl mb-4 animate-pulse" />

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-center px-4">
              Manage 100+ Events
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            For Organizations
          </h2>

          <ul className="space-y-4 text-gray-600 text-sm md:text-base">
            <li>✔ Post events and specify volunteer needs</li>
            <li>✔ Manage volunteer applications and approvals</li>
            <li>✔ Communicate with volunteers in real-time</li>
            <li>✔ Offer benefits and certificates</li>
            <li>✔ Track event impact and metrics</li>
          </ul>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium cursor-pointer">
            Create Your Event
          </button>
        </div>

      </div>
    </section>
  );
}