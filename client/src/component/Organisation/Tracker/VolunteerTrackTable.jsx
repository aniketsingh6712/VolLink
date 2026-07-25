import { FiEye } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
export default function VolunteerTrackerTable({ data, onView }) {
  return (
    <div className="bg-white rounded-2xl mt-8 overflow-hidden border border-gray-200 shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr >
            <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Volunteer</th>

            <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Check-in</th>

            <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Check-out</th>

            <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm" >Hours</th>

            <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Status</th>

            <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((v) => (
            <tr key={v.id} className="hover:bg-gray-50 transition">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <img src={v.avatar} className="w-10 h-10 rounded-full border-2 border-blue-400" />

                  <div>
                    <p className="font-semibold text-gray-900">{v.name}</p>

                    <p className="text-xs text-gray-500">{v.email}</p>
                  </div>
                </div>
              </td>

              <td className="py-4 px-6">
                <div >
                    <p className="font-semibold">{v.checkin}</p>
                    <p className="text-xs text-gray-500">{v.location}</p>
                </div>
                </td>

              <td className="py-4 px-6 font-semibold">{v.checkout || "Pending"}</td>

              <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                     <CiClock2 size={18} className="text-gray-500 font-bold"/>
                     {v.hours}h
                </div>
               </td>

              <td className="py-4 px-6">
                <span
                  className={` inline-flex items-center gap-1
px-3
py-1
rounded-full
text-xs font-semibold
${
  v.status === "ACTIVE"
    ? "bg-green-100 text-green-800"
    : "bg-blue-100 text-blue-800"
}
`}
                >
                  {v.status === "ACTIVE" ? "● Active" : "Checked Out"}
                </span>
              </td>

              <td className="py-4 px-6">
                <button onClick={() => onView(v)} className="p-2 hover:bg-gray-200 rounded-lg transition text-lg cursor-pointer" title="view details">
                  <FiEye/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
