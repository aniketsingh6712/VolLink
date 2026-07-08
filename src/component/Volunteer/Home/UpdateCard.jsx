import {
    FaExclamationTriangle,
    FaBullhorn,
    FaInfoCircle,
} from "react-icons/fa";

const styles={

    Emergency:{
        icon:FaExclamationTriangle,
        bg:"bg-red-100",
        text:"text-red-600",
    },

    Important:{
        icon:FaBullhorn,
        bg:"bg-yellow-100",
        text:"text-yellow-600",
    },

    General:{
        icon:FaInfoCircle,
        bg:"bg-blue-100",
        text:"text-blue-600",
    }

}

const UpdateCard=({

    update,

    onClick

})=>{

    const Icon=styles["General"].icon;

    return(

        <div

            onClick={onClick}

            className="min-w-[320px] border rounded-2xl p-5 cursor-pointer hover:shadow-lg transition"

        >

            <div className="flex justify-between">

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles["General"].bg}`}>

                    <Icon className={styles["General"].text}/>

                </div>

                {

                    !update.read && (

                        <span className="w-3 h-3 rounded-full bg-red-500"/>

                    )

                }

            </div>

            <h3 className="font-bold mt-5">

                {update.title}

            </h3>

            <p className="text-gray-500 mt-3 line-clamp-3">

                {update.message}

            </p>

            <div className="mt-5 flex justify-between items-center">

                <span className={`text-sm font-medium ${styles["General"].text}`}>

                    {update.type}

                </span>

                <span className="text-sm text-gray-400">

                    {update.time}

                </span>

            </div>

        </div>

    )

}

export default UpdateCard;