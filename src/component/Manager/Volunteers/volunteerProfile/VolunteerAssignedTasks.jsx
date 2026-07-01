import {
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";

const tasks = [
  {
    title: "Registration Desk",
    completed: true,
  },
  {
    title: "ID Verification",
    completed: true,
  },
  {
    title: "Lunch Distribution",
    completed: false,
  },
  {
    title: "Feedback Collection",
    completed: false,
  },
];

const VolunteerAssignedTasks = () => {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">

      <h3 className="text-xl font-bold">

        Assigned Tasks

      </h3>

      <div className="space-y-4 mt-6">

        {tasks.map((task) => (

          <div
            key={task.title}
            className="flex items-center gap-4"
          >

            {task.completed ? (
              <FaCheckCircle className="text-green-500"/>
            ) : (
              <FaRegCircle className="text-gray-400"/>
            )}

            <span>{task.title}</span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default VolunteerAssignedTasks;