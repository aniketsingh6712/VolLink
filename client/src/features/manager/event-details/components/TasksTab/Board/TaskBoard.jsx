import TaskColumn from "../Column/TaskColumn";

const tasks = {

    todo:[
        {
            id:1,
            title:"Arrange Registration Desk",
            priority:"High"
        },
        {
            id:2,
            title:"Print Volunteer IDs",
            priority:"Medium"
        },
        {
            id:3,
            title:"Medical Kit Inspection",
            priority:"Low"
        }
    ],

    progress:[
        {
            id:4,
            title:"Food Distribution Setup",
            priority:"High"
        },
        {
            id:5,
            title:"Volunteer Briefing",
            priority:"Medium"
        }
    ],

    completed:[
        {
            id:6,
            title:"Venue Inspection",
            priority:"Low"
        },
        {
            id:7,
            title:"Sound System Setup",
            priority:"Medium"
        }
    ]

};

const TaskBoard = ()=>{

    return(

        <div>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h2 className="text-2xl font-bold">

                        Event Tasks

                    </h2>

                    <p className="text-gray-500">

                        Track and manage event tasks.

                    </p>

                </div>

                <button
                    className="bg-emerald-500 text-white px-5 py-3 rounded-xl"
                >

                    + Create Task

                </button>

            </div>

            <div className="grid xl:grid-cols-3 gap-6">

                <TaskColumn
                    title="To Do"
                    tasks={tasks.todo}
                />

                <TaskColumn
                    title="In Progress"
                    tasks={tasks.progress}
                />

                <TaskColumn
                    title="Completed"
                    tasks={tasks.completed}
                />

            </div>

        </div>

    )

}

export default TaskBoard;