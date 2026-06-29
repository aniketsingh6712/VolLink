const colors = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  "Checked In": "bg-blue-100 text-blue-700",
  Absent: "bg-red-100 text-red-700",
};

const VolunteerStatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        colors[status]
      }`}
    >
      {status}
    </span>
  );
};

export default VolunteerStatusBadge;