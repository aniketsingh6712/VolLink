import TimelineItem from "./components/TimelineItem";

import {
    FaUserCheck,
    FaBullhorn,
    FaTasks,
    FaUsers,
    FaClipboardCheck
} from "react-icons/fa";

const timeline = [

    {
        id:1,
        type:"checkin",
        title:"John Doe checked in",
        description:"Registration Team",
        time:"09:02 AM",
        icon:FaUserCheck,
        color:"bg-green-100 text-green-600"
    },

    {
        id:2,
        type:"assignment",
        title:"Volunteer Assigned",
        description:"Sarah → Food Team",
        time:"09:15 AM",
        icon:FaUsers,
        color:"bg-yellow-100 text-yellow-600"
    },

    {
        id:3,
        type:"announcement",
        title:"Broadcast Message",
        description:"Food service starts in 15 minutes.",
        time:"09:45 AM",
        icon:FaBullhorn,
        color:"bg-blue-100 text-blue-600"
    },

    {
        id:4,
        type:"task",
        title:"Task Completed",
        description:"Venue setup completed.",
        time:"10:20 AM",
        icon:FaClipboardCheck,
        color:"bg-purple-100 text-purple-600"
    },

    {
        id:5,
        type:"task",
        title:"Food Distribution Started",
        description:"Serving counters are now open.",
        time:"11:00 AM",
        icon:FaTasks,
        color:"bg-emerald-100 text-emerald-600"
    }

];

const ActivityTimeline = () => {

    return(

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

            <div className="p-6 border-b">

                <h2 className="text-2xl font-bold">

                    Activity Timeline

                </h2>

                <p className="text-gray-500 mt-2">

                    Latest activity from this event.

                </p>

            </div>

            <div className="max-h-[650px] overflow-y-auto">

                {

                    timeline.map(item=>(

                        <TimelineItem
                            key={item.id}
                            item={item}
                        />

                    ))

                }

            </div>

        </div>

    )

}

export default ActivityTimeline;