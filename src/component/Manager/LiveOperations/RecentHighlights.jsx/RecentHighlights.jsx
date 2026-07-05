import ActivityItem from "./ActiveItem";

const activities = [
  {
    id: 1,
    type: "success",
    title: "Food Distribution operating normally",
    description: "Crowd has stabilized after volunteer reassignment.",
    time: "11:42 AM",
  },
  {
    id: 2,
    type: "warning",
    title: "Registration below required staffing",
    description: "Currently 6 of 7 volunteers available.",
    time: "11:35 AM",
  },
  {
    id: 3,
    type: "info",
    title: "Rahul Sharma assigned",
    description: "Moved from Available Pool to Food Distribution.",
    time: "11:20 AM",
  },
  {
    id: 4,
    type: "success",
    title: "Volunteer Check-in Completed",
    description: "34 volunteers are currently checked in.",
    time: "10:58 AM",
  },
];

const RecentHighlights = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

      <div className="px-6 py-5 border-b">

        <h2 className="text-xl font-bold">

          Event Activity

        </h2>

        <p className="text-gray-500 mt-1">

          Latest operational updates during the event.

        </p>

      </div>

      <div>

        {activities.map((activity) => (

          <ActivityItem
            key={activity.id}
            activity={activity}
          />

        ))}

      </div>

    </div>
  );
};

export default RecentHighlights;