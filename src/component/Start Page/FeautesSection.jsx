// components/Features.jsx

export default function Features() {
  const features = [
    {
      title: "Connect",
      desc: "Meet organizations and volunteers doing meaningful work",
      icon: "👥",
    },
    {
      title: "Easy Matching",
      desc: "Find opportunities that match your skills and interests",
      icon: "⚡",
    },
    {
      title: "Real Impact",
      desc: "Make a real difference in your local community",
      icon: "🌍",
    },
    {
      title: "Grow Together",
      desc: "Build experience, networks, and meaningful relationships",
      icon: "💙",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 text-center bg-white">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#0F172A]">
        Why Choose VOL-LINK?
      </h2>

      <p className="mt-3 text-gray-500 text-lg">
        The easiest way to volunteer and make an impact
      </p>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white"
          >
            <div className="text-3xl mb-4">{item.icon}</div>

            <h3 className="font-semibold text-lg text-[#0F172A]">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}