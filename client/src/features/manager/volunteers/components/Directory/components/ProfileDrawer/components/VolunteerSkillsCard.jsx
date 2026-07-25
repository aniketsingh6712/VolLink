const skills = [
  "Registration",
  "Public Speaking",
  "First Aid",
  "Crowd Management",
  "Communication",
];

const VolunteerSkillsCard = () => {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">

      <h3 className="text-xl font-bold">

        Skills

      </h3>

      <div className="flex flex-wrap gap-3 mt-6">

        {skills.map((skill) => (

          <span
            key={skill}
            className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm"
          >

            {skill}

          </span>

        ))}

      </div>

    </div>
  );
};

export default VolunteerSkillsCard;