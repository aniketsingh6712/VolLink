export default function StatusCard({ title, count, color }) {
  return (
    <div className={`p-4 rounded-xl ${color.bg} flex flex-col`}>
      <span className={`text-sm  ${color.text}`}>{title}</span>
      <span className={`text-2xl font-bold mt-1 ${color.text}`}>{count}</span>
    </div>
  );
}