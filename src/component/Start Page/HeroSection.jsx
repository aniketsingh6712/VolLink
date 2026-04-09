// components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center bg-[#EEF2F7]">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
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
      <div className="flex justify-center">
        <div className="w-full max-w-sm h-[320px] rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center text-white shadow-xl">
          <div className="text-5xl mb-4">🤍</div>
          <p className="text-xl font-semibold">Make a Difference</p>
        </div>
      </div>

    </section>
  );
}