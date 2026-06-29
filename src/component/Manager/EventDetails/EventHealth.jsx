import {
    FaUsers,
    FaTasks,
    FaClock,
    FaChartLine
} from "react-icons/fa";

const stats = [

    {
        title:"Volunteers",
        value:"18 / 20",
        icon:FaUsers,
        color:"bg-emerald-100 text-emerald-600"
    },

    {
        title:"Tasks",
        value:"15 / 20",
        icon:FaTasks,
        color:"bg-blue-100 text-blue-600"
    },

    {
        title:"Time Left",
        value:"3h 15m",
        icon:FaClock,
        color:"bg-orange-100 text-orange-600"
    },

    {
        title:"Completion",
        value:"72%",
        icon:FaChartLine,
        color:"bg-purple-100 text-purple-600"
    }

];

const EventHealth = () => {

    return(

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

            {

                stats.map(stat=>{

                    const Icon=stat.icon;

                    return(

                        <div
                            key={stat.title}
                            className="bg-white rounded-2xl border p-6 shadow-sm"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <p className="text-gray-500">

                                        {stat.title}

                                    </p>

                                    <h2 className="text-3xl font-bold mt-3">

                                        {stat.value}

                                    </h2>

                                </div>

                                <div className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center`}>

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

export default EventHealth;