import {
    FaRegClock,
    FaUserCircle
} from "react-icons/fa";

const colors={

    High:"bg-red-100 text-red-700",

    Medium:"bg-yellow-100 text-yellow-700",

    Low:"bg-green-100 text-green-700"

}

const TaskCard=({

    task

})=>{

    return(

        <div className="bg-white rounded-xl shadow-sm border p-5 cursor-pointer hover:shadow-lg transition">

            <h4 className="font-semibold">

                {task.title}

            </h4>

            <div className="flex justify-between mt-5">

                <span
                    className={`px-3 py-1 rounded-full text-xs ${colors[task.priority]}`}
                >

                    {task.priority}

                </span>

                <div className="flex gap-3">

                    <FaRegClock
                        className="text-gray-400"
                    />

                    <FaUserCircle
                        className="text-gray-400"
                    />

                </div>

            </div>

        </div>

    )

}

export default TaskCard;