import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function InvitationTabs({ tab, setTab }) {
  const tabs = [
    ["pending", "Pending", FiClock],

    ["accepted", "Accepted", FiCheckCircle],

    ["rejected", "Rejected", FiXCircle],
  ];

  return (
    <div className="flex gap-4 border-b mb-6 border-gray-200">
      {tabs.map(([key, label, Icon]) => (
        <button
          key={key}
          onClick={() => setTab(key)}
          className={`flex items-center gap-2 pb-4 border-b-4 px-6 font-semibold

${
  tab === key
    ? "text-blue-500 border-blue-500"
    : "text-gray-500 border-transparent"
}
`}
        >
          <Icon />

          {label}
        </button>
      ))}
    </div>
  );
}
