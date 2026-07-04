import AttendanceTimelineItem from "./AttendanceTimelineItem";

import {
    FaUserCheck,
    FaSignOutAlt,
    FaCircle,
} from "react-icons/fa";

const AttendanceActivityTimeline = ({ volunteer }) => {

    const timeline = [];

    if (volunteer.checkIn) {
        timeline.push({
            id: 1,
            title: "Checked In",
            time: volunteer.checkIn,
            icon: FaUserCheck,
            color: "bg-green-100 text-green-600",
        });
    }

    if (volunteer.checkOut && volunteer.checkOut !== "--") {
        timeline.push({
            id: 2,
            title: "Checked Out",
            time: volunteer.checkOut,
            icon: FaSignOutAlt,
            color: "bg-blue-100 text-blue-600",
        });
    } else {
        timeline.push({
            id: 3,
            title: "Currently Working",
            time: "Now",
            icon: FaCircle,
            color: "bg-emerald-100 text-emerald-600",
        });
    }

    return (
        <div className="bg-white border rounded-2xl shadow-sm p-6">

            <h3 className="text-xl font-semibold mb-6">

                Attendance Activity

            </h3>

            <div>

                {timeline.map((item,index) => (

                    <AttendanceTimelineItem
                        key={item.id}
                        item={item}
                        isLast={index === timeline.length - 1}
                    />

                ))}

            </div>

        </div>
    );
};

export default AttendanceActivityTimeline;