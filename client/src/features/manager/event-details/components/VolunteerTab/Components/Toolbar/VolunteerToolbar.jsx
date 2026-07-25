import { FaSearch } from "react-icons/fa";

const VolunteerToolbar = () => {

    return (

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

            <div className="flex flex-col lg:flex-row gap-4 justify-between">

                <div className="relative flex-1">

                    <FaSearch
                        className="absolute left-4 top-4 text-gray-400"
                    />

                    <input
                        className="w-full pl-12 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Search volunteer..."
                    />

                </div>

                <select className="border rounded-xl px-4">

                    <option>All Roles</option>

                    <option>Registration</option>

                    <option>Food</option>

                    <option>Medical</option>

                    <option>Security</option>

                </select>

                <select className="border rounded-xl px-4">

                    <option>All Status</option>

                    <option>Active</option>

                    <option>Pending</option>

                    <option>Absent</option>

                </select>

                <button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 rounded-xl"
                >

                    Assign Volunteer

                </button>

            </div>

        </div>

    );

}

export default VolunteerToolbar;