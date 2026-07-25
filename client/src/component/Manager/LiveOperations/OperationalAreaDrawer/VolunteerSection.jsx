import VolunteerRow from "./VolunteerRow";

const VolunteerSection = ({
  title,
  volunteers,
  type,
  selectedVolunteers,
  onToggle,
}) => {
  return (
    <div className="border-t">
      {/* Section Header */}

      <div className="flex justify-between items-center px-6 py-5 bg-slate-50">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>

          <p className="text-sm text-gray-500 mt-1">
            {volunteers.length} Volunteer(s)
          </p>
        </div>

        {type === "active" && (
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" className="w-4 h-4 rounded" />
            Select All
          </label>
        )}
      </div>

      {/* Volunteers */}

      <div>
        {volunteers.map((volunteer) => (
          <VolunteerRow
            key={volunteer.id}
            volunteer={volunteer}
            type={type}
            checked={selectedVolunteers.includes(volunteer.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default VolunteerSection;
