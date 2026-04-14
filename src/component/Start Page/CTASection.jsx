// components/CTASection.jsx

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6">
      <h2 className="text-3xl font-bold">
        Ready to Make an Impact?
      </h2>

      <p className="mt-4 text-lg text-blue-100">
        Join thousands of students and organizations making a real difference
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium font-semibold hover:bg-blue-100 transition duration-300 cursor-pointer">
          Start Volunteering
        </button>

        <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer">
          Create Event
        </button>
      </div>
    </section>
  );
}