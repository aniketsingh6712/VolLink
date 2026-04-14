// components/StatusCard.jsx

export default function StatusCard({ title, count, color }) {
  return (
    <div className={`p-4 rounded-xl ${color} flex flex-col`}>
      <span className="text-sm text-gray-600">{title}</span>
      <span className="text-2xl font-bold mt-1">{count}</span>
    </div>
  );
}