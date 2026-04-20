export function IconBtn({ children, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <button
      className={`p-2 rounded-lg ${colors[color]} hover:opacity-80`}
    >
      {children}
    </button>
  );
}