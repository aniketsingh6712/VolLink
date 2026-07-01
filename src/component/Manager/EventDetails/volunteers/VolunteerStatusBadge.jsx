const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  "Checked In": "bg-blue-100 text-blue-700",
  Absent: "bg-red-100 text-red-700",
  Assigned: "bg-purple-100 text-purple-700",
};

const VolunteerStatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default VolunteerStatusBadge;