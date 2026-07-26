import StatusBadge from "./components/AttendanceStatusBadge"

const AttendanceRow = ({
    volunteer
, onOpen
}) => {
    
    return (

        <tr className="border-t hover:bg-gray-50">

            <td className="p-5 font-medium">

                {volunteer.name}

            </td>

            <td>

                <StatusBadge
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
                    onClick={() => onOpen(volunteer)}
                    className="text-emerald-600 hover:underline font-medium"
                >
                    {volunteer.status === "Checked Out"
                        ? "View"
                        : "Check Out"}
                </button>

            </td>

        </tr>

    )

}

export default AttendanceRow;