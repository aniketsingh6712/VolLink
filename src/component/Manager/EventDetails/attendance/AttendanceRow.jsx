import AttendanceStatusBadge from "./AttendanceStatusBadge";

const AttendanceRow=({

    volunteer

})=>{

    return(

        <tr className="border-t hover:bg-gray-50">

            <td className="p-5 font-medium">

                {volunteer.name}

            </td>

            <td>

                <AttendanceStatusBadge
                    status={volunteer.status}
                />

            </td>

            <td>

                {volunteer.checkIn}

            </td>

            <td>

                {volunteer.checkOut}

            </td>

            <td>

                <button
                    className="text-emerald-600 font-medium hover:underline"
                >

                    {

                        volunteer.status==="Checked Out"

                        ?

                        "View"

                        :

                        "Check Out"

                    }

                </button>

            </td>

        </tr>

    )

}

export default AttendanceRow;