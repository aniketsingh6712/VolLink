import AttendanceRow from "./AttendanceRow";
import AttendanceDrawer from "../../attendance/AttendanceDrawer";
import { useState } from "react";
const volunteers = [

    {
        id: 1,
        name: "John Doe",
        status: "Present",
        checkIn: "09:02 AM",
        avatar: "https://i.pravatar.cc/150?img=1",
        checkOut: "--",
        duration: "2 hrs 18 mins",
        role: "Event Coordinator"
    },

    {
        id: 2,
        name: "Sarah",
        status: "Late",
        checkIn: "09:28 AM",
        role: "Registration",
        avatar: "https://i.pravatar.cc/150?img=1",
        checkOut: "--",
        duration: "--"
    },

    {
        id: 3,
        name: "Alex",
        status: "Checked Out",
        avatar: "https://i.pravatar.cc/150?img=1",
        role: "Volunteer",
        checkIn: "08:55 AM",
        checkOut: "01:15 PM",
        duration: "4 hrs 20 mins"
    },
    {
        id: 4,
        name: "mike",
        status: "Checked Out",
        avatar: "https://i.pravatar.cc/150?img=1",
        role: "Volunteer",
        checkIn: "08:55 AM",
        checkOut: "01:15 PM",
        duration: "4 hrs 20 mins"
    }

];

const AttendanceTable = () => {
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const handleOpenDrawer = (volunteer) => {
        setSelectedVolunteer(volunteer);
    }
   
    return (

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

            <table className="w-full">

                <thead className="bg-gray-50">

                    <tr>

                        <th className="p-5 text-left">Volunteer</th>

                        <th>Status</th>

                        <th>Check In</th>

                        <th>Check Out</th>

                        <th>Action</th>
                       
                    </tr>

                </thead>

                <tbody>

                    {

                        volunteers.map(volunteer => (

                            <AttendanceRow
                                key={volunteer.id}
                                volunteer={volunteer}
                                onOpen={handleOpenDrawer}
                            />

                        ))

                    }

                </tbody>

            </table>
            <AttendanceDrawer
                open={Boolean(selectedVolunteer)}
                volunteer={selectedVolunteer}
                onClose={() => setSelectedVolunteer(null)}
            />
        </div>

    )

}

export default AttendanceTable;