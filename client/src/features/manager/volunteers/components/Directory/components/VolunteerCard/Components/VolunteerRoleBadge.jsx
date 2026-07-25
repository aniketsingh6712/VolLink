const colors = {
  Registration: "bg-blue-100 text-blue-700",
  Food: "bg-orange-100 text-orange-700",
  Medical: "bg-red-100 text-red-700",
  Security: "bg-purple-100 text-purple-700",
};

const VolunteerRoleBadge = ({ role }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        colors[role] || "bg-gray-100 text-gray-700"
      }`}
    >
      {role}
    </span>
  );
};

export default VolunteerRoleBadge;