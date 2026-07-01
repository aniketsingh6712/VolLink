import AttendanceRow from "./AttendanceRow";

const volunteers=[

    {
        id:1,
        name:"John Doe",
        status:"Present",
        checkIn:"09:02 AM",
        checkOut:"--"
    },

    {
        id:2,
        name:"Sarah",
        status:"Late",
        checkIn:"09:28 AM",
        checkOut:"--"
    },

    {
        id:3,
        name:"Alex",
        status:"Checked Out",
        checkIn:"08:55 AM",
        checkOut:"01:15 PM"
    }

];

const AttendanceTable=()=>{

    return(

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

                        volunteers.map(volunteer=>(

                            <AttendanceRow
                                key={volunteer.id}
                                volunteer={volunteer}
                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    )

}

export default AttendanceTable;