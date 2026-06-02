import { FiUsers, FiLogOut } from "react-icons/fi";

export default function TrackerTabs({ tab, setTab, volunteers }) {
  return (
    <div className="flex gap-12 mt-14 border-b">
      <button
        onClick={() => setTab("active")}
        className={`
pb-4
font-semibold
border-b-4

${tab === "active" ? "text-blue-600 border-blue-600" : "border-transparent"}
`}
      >
        <FiUsers className="inline mr-2" />
        Active Volunteers
      </button>

      <button
        onClick={() => setTab("out")}
        className={`
pb-4
font-semibold
border-b-4

${tab === "out" ? "text-blue-600 border-blue-600" : "border-transparent"}
`}
      >
        <FiLogOut className="inline mr-2" />
        Checked Out
      </button>
    </div>
  );
}
