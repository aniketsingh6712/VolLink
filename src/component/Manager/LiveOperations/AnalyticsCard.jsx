const colors = {
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-100",
  },

  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-100",
  },

  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    border: "border-green-100",
  },

  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    border: "border-orange-100",
  },
};

const AnalyticsCard = ({ card }) => {
  const Icon = card.icon;

  const style = colors[card.color];

  return (
    <div
      className={`bg-white rounded-2xl border ${style.border} shadow-sm p-6 hover:shadow-md transition`}
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-500 text-sm">

            {card.title}

          </p>

          <h2 className="text-4xl font-bold mt-3">

            {card.value}

          </h2>

          <p className="text-gray-500 text-sm mt-2">

            {card.subtitle}

          </p>

        </div>

        <div
          className={`${style.bg} ${style.icon} w-14 h-14 rounded-2xl flex items-center justify-center`}
        >
          <Icon className="text-2xl" />
        </div>

      </div>
    </div>
  );
};

export default AnalyticsCard;