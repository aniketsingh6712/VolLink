import { FaList, FaPaperPlane, FaCheckCircle, FaClipboardCheck, FaTimesCircle } from "react-icons/fa";

export default function EventTabs({ active, setActive }) {
  const tabs = [
    { name: "All", icon: <FaList /> },
    { name: "Applied", icon: <FaPaperPlane /> },
    { name: "Accepted", icon: <FaCheckCircle /> },
    { name: "Completed", icon: <FaClipboardCheck /> },
    { name: "Rejected", icon: <FaTimesCircle /> },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => {
        const isActive = active === tab.name;

        return (
          <button
            key={tab.name}
            onClick={() => setActive(tab.name)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
              }
            `}
          >
            <span className="text-sm">{tab.icon}</span>
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}