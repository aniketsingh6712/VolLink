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
    <section className="py-20 md:py-32 text-center bg-white">

    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Why Choose VOL-LINK?
      </h2>
      

      <p className="text-xl text-gray-600 ">
        The easiest way to volunteer and make an impact
      </p>
      </div>

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
</div>
    </section>
  );
}