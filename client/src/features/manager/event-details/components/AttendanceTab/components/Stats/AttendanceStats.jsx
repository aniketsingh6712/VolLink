import {
    FaUserCheck,
    FaUserClock,
    FaUserTimes,
    FaSignOutAlt
} from "react-icons/fa";

const cards=[

    {
        title:"Present",
        value:18,
        icon:FaUserCheck,
        color:"bg-green-100 text-green-600"
    },

    {
        title:"Late",
        value:2,
        icon:FaUserClock,
        color:"bg-yellow-100 text-yellow-600"
    },

    {
        title:"Absent",
        value:1,
        icon:FaUserTimes,
        color:"bg-red-100 text-red-600"
    },

    {
        title:"Checked Out",
        value:6,
        icon:FaSignOutAlt,
        color:"bg-blue-100 text-blue-600"
    }

];

const AttendanceStats=()=>{

    return(

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

            {

                cards.map(card=>{

                    const Icon=card.icon;

                    return(

                        <div
                            key={card.title}
                            className="bg-white rounded-2xl border shadow-sm p-6"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <p className="text-gray-500">

                                        {card.title}

                                    </p>

                                    <h2 className="text-3xl font-bold mt-3">

                                        {card.value}

                                    </h2>

                                </div>

                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.color}`}
                                >

                                    <Icon/>

                                </div>

                            </div>

                        </div>

                    )

                })

            }

        </div>

    )

}

export default AttendanceStats;