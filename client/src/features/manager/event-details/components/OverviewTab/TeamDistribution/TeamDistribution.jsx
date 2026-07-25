const teams = [
  {
    name: "Registration",
    volunteers: 6,
  },
  {
    name: "Food",
    volunteers: 4,
  },
  {
    name: "Security",
    volunteers: 5,
  },
  {
    name: "Medical",
    volunteers: 3,
  },
  {
    name: "Photography",
    volunteers: 2,
  },
];

const max = Math.max(...teams.map((t) => t.volunteers));

const TeamDistribution = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Team Distribution
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Volunteers assigned across teams.
        </p>

      </div>

      <div className="space-y-5">

        {teams.map((team) => (

          <div key={team.name}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">

                {team.name}

              </span>

              <span>

                {team.volunteers}

              </span>

            </div>

            <div className="bg-gray-200 rounded-full h-2">

              <div
                className="bg-emerald-500 h-2 rounded-full"
                style={{
                  width: `${(team.volunteers / max) * 100}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TeamDistribution;