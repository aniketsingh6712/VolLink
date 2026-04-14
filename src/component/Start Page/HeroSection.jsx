// components/HeroSection.jsx
import { LuHeart } from "react-icons/lu";
export default function HeroSection() {
  return (
    <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-8 items-center  md:h-screen bg-gradient-to-br from-blue-50 to-blue-100 sm:py-12 sm:h-auto">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Volunteer for Impact
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-lg">
          Connect with meaningful opportunities that matter. Whether you're
          a student looking to give back or an organization seeking passionate
          volunteers, VOL-LINK brings you together.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            Join as Volunteer →
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium">
            Create Event
          </button>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="hidden md:flex justify-center">
        <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
          <div className="text-center text-white flex flex-col items-center">
            <LuHeart className="text-6xl mb-4 animate-pulse" />
<p className="text-2xl font-bold ">Make a Difference</p>
          </div>
          
        </div>
      </div>
    
    </section>
  );
}