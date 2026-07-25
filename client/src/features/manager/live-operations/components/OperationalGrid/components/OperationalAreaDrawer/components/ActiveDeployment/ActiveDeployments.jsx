import ActiveDeploymentCard from "./ActiveDeploymentCard";

const deployments = [
  {
    id: 1,
    volunteer: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=11",
    from: "Registration",
    to: "Food Distribution",
    time: "11:20 AM",
    reason: "Crowd Surge",
  },
  {
    id: 2,
    volunteer: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    from: "Registration",
    to: "Parking",
    time: "11:42 AM",
    reason: "Traffic Control",
  },
];

const ActiveDeployments = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

      <div className="px-6 py-5 border-b">

        <h2 className="text-xl font-bold">

          Active Deployments

        </h2>

        <p className="text-gray-500 mt-1">

          Volunteers currently deployed from this operational area.

        </p>

      </div>

      <div>

        {deployments.map((deployment) => (

          <ActiveDeploymentCard
            key={deployment.id}
            deployment={deployment}
          />

        ))}

      </div>

    </div>
  );
};

export default ActiveDeployments;