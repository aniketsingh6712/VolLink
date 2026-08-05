const tabs = [
  {
    id: "active",
    label: "Active Staff",
  },
  {
    id: "pending",
    label: "Pending Invitations",
  },
  {
    id: "approval",
    label: "Pending Approval",
  },
];

const StaffTabs = ({
  activeTab,
  setActiveTab,
}) => {

  return (

    <div className="bg-white rounded-2xl border border-gray-200 p-2 flex gap-2">

      {tabs.map((tab) => (

        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-5 py-3 rounded-xl font-medium transition

          ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >

          {tab.label}

        </button>

      ))}

    </div>

  );
};

export default StaffTabs;