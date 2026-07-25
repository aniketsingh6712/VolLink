import TaskCard from "../Card/TaskCard";

const TaskColumn = ({
    title,
    tasks
})=>{

    return(

        <div className="bg-gray-100 rounded-2xl p-5">

            <div className="flex justify-between mb-5">

                <h3 className="font-bold">

                    {title}

                </h3>

                <span>

                    {tasks.length}

                </span>

            </div>

            <div className="space-y-4">

                {

                    tasks.map(task=>(

                        <TaskCard
                            key={task.id}
                            task={task}
                        />

                    ))

                }

            </div>

        </div>

    )

}

export default TaskColumn;