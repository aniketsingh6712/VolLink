export default function StatsCard({ label, value, color }) {
  const colors = {
    blue: "border-blue-300 text-blue-600 bg-blue-50",
    green: "border-green-300 text-green-600 bg-green-50",
    yellow: "border-yellow-300 text-yellow-600 bg-yellow-50",
    purple: "border-purple-300 text-purple-600 bg-purple-50",
    orange: "border-orange-300 text-orange-600 bg-orange-50",
  };

  return (
    <div
      className={` border rounded-xl p-4 shadow-sm ${colors[color]} min-h-29 flex align-items-center justify-center flex-col`}
    >
      <p className="text-sm">{label}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
}