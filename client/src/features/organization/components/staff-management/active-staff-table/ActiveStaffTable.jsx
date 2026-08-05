import StaffRow from "./StaffRow";

const ActiveStaffTable = ({
  staff,
  onView
}) => {

  return (

    <div className="overflow-x-auto">

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr className="text-left">

            <th className="px-6 py-4">Staff</th>

            <th className="px-6 py-4">Role</th>

            <th className="px-6 py-4">Email</th>

            <th className="px-6 py-4">Phone</th>

            <th className="px-6 py-4">Workload</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4 text-center">

              Action

            </th>

          </tr>

        </thead>

        <tbody>

          {staff.map((manager) => (

            <StaffRow
              key={manager.id}
              manager={manager}
              onView={onView}
            />

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default ActiveStaffTable;