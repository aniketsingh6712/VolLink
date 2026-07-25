import DeploymentHistoryItem from "./DeploymentHistoryItem";

const history = [
  {
    id: 1,
    volunteer: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=11",
    action: "Released",
    from: "Registration",
    to: "Available Pool",
    time: "11:05 AM",
  },
  {
    id: 2,
    volunteer: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=11",
    action: "Assigned",
    from: "Available Pool",
    to: "Food Distribution",
    time: "11:12 AM",
  },
  {
    id: 3,
    volunteer: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    action: "Returned",
    from: "Parking",
    to: "Registration",
    time: "12:45 PM",
  },
];

const DeploymentHistory = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

      <div className="px-6 py-5 border-b">

        <h2 className="text-xl font-bold">

          Deployment History

        </h2>

        <p className="text-gray-500 mt-1">

          Timeline of volunteer movements for this operational area.

        </p>

      </div>

      <div>

        {history.map((item) => (

          <DeploymentHistoryItem
            key={item.id}
            item={item}
          />

        ))}

      </div>

    </div>
  );
};

export default DeploymentHistory;