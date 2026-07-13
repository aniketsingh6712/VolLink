import {
  FaRedo,
  FaTrash,
} from "react-icons/fa";

const PendingInvitationTable = ({
  invitations,
}) => {

  return (

    <div className="overflow-x-auto">

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-6 py-4 text-left">

              Email

            </th>

            <th className="px-6 py-4 text-left">

              Invited On

            </th>

            <th className="px-6 py-4 text-left">

              Expires In

            </th>

            <th className="px-6 py-4 text-left">

              Status

            </th>

            <th className="px-6 py-4 text-center">

              Actions

            </th>

          </tr>

        </thead>

        <tbody>

          {

            invitations.map((invite)=>(

              <tr
                key={invite.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  {invite.email}

                </td>

                <td className="px-6 py-5">

                  {invite.invitedOn}

                </td>

                <td className="px-6 py-5">

                  {invite.expires}

                </td>

                <td className="px-6 py-5">

                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">

                    {invite.status}

                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center"
                    >

                      <FaRedo/>

                    </button>

                    <button
                      className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center"
                    >

                      <FaTrash/>

                    </button>

                  </div>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

};

export default PendingInvitationTable;