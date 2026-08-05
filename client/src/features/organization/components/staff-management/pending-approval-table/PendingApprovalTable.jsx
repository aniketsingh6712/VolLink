import { FaEye } from "react-icons/fa";

const PendingApprovalTable = ({
  staff,
  onView,
}) => {

  return (

    <div className="overflow-x-auto">

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-6 py-4 text-left">Candidate</th>

            <th className="px-6 py-4 text-left">Email</th>

            <th className="px-6 py-4 text-left">Phone</th>

            <th className="px-6 py-4 text-left">Accepted On</th>

            <th className="px-6 py-4 text-center">Action</th>

          </tr>

        </thead>

        <tbody>

          {

            staff.map(candidate => (

              <tr
                key={candidate.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={candidate.avatar}
                      className="w-12 h-12 rounded-full"
                    />

                    <div>

                      <h3 className="font-semibold">

                        {candidate.name}

                      </h3>

                      <p className="text-sm text-gray-500">

                        Pending Approval

                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">

                  {candidate.email}

                </td>

                <td className="px-6 py-5">

                  {candidate.phone}

                </td>

                <td className="px-6 py-5">

                  {candidate.joined}

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center">

                    <button
                      onClick={()=>onView(candidate)}
                      className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center"
                    >

                      <FaEye/>

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

export default PendingApprovalTable;