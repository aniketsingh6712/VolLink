import { FiUsers, FiLogOut } from "react-icons/fi";

export default function TrackerTabs({ tab, setTab, volunteers }) {
  return (
    <div className="flex gap-12 mt-14 border-b border-gray-200 text-md font-semibold">
      <button
        onClick={() => setTab("active")}
        className={`
pb-3
font-semibold
border-b-4
px-6
cursor-pointer
${tab === "active" ? "text-blue-500 border-blue-500" : "border-transparent"}
`}
      >
        <FiUsers className="inline mr-2" />
        Active Volunteers
      </button>

      <button
        onClick={() => setTab("out")}
        className={`
pb-3
font-semibold
border-b-4
px-6
cursor-pointer
${tab === "out" ? "text-blue-500 border-blue-500" : "border-transparent"}
`}
      >
        <FiLogOut className="inline mr-2" />
        Checked Out
      </button>
    </div>
  );
}
