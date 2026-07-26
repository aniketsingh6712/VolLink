import {
    FaEllipsisVertical
} from "react-icons/fa6";

import VolunteerStatusBadge from "../../../../../../../common/StatusBadge/VolunteerStatusBadge";

const VolunteerTableRow = ({
    volunteer
}) => {

    return(

        <tr className="border-t hover:bg-gray-50">

            <td className="p-5">

                <div>

                    <h3 className="font-semibold">

                        {volunteer.name}

                    </h3>

                    <p className="text-sm text-gray-500">

                        {volunteer.email}

                    </p>

                </div>

            </td>

            <td>

                {volunteer.role}

            </td>

            <td>

                <VolunteerStatusBadge
                    status={volunteer.status}
                />

            </td>

            <td>

                {volunteer.checkIn}

            </td>

            <td>

                <button>

                    <FaEllipsisVertical/>

                </button>

            </td>

        </tr>

    )

}

export default VolunteerTableRow;