
import StatusCard from "./StatusCard";
export default function StatsSection() {

  return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <StatusCard title="Applied" count={1} color={{ bg: "bg-blue-100", text: "text-blue-500" }} />
          <StatusCard title="Accepted" count={2} color={{ bg: "bg-green-100", text: "text-green-500" }} />
          <StatusCard title="Completed" count={1} color={{ bg: "bg-purple-100", text: "text-purple-500" }} />
          <StatusCard title="Rejected" count={1} color={{ bg: "bg-red-100", text: "text-red-500" }} />
        </div>
    
  );
}