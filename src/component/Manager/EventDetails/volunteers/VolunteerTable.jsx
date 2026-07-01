import VolunteerTableRow from "./VolunteerTableRow";

const volunteers = [

    {
        id:1,
        name:"John Doe",
        email:"john@gmail.com",
        role:"Registration",
        status:"Active",
        checkIn:"09:10 AM"
    },

    {
        id:2,
        name:"Sarah",
        email:"sarah@gmail.com",
        role:"Food",
        status:"Pending",
        checkIn:"--"
    }

];

const VolunteerTable = () => {

    return(

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

            <table className="w-full">

                <thead className="bg-gray-50">

                    <tr>

                        <th className="text-left p-5">

                            Volunteer

                        </th>

                        <th>

                            Role

                        </th>

                        <th>

                            Status

                        </th>

                        <th>

                            Check In

                        </th>

                        <th>

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        volunteers.map(volunteer=>(

                            <VolunteerTableRow
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

export default VolunteerTable;