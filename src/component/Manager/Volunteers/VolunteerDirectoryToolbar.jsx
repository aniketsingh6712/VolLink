import { FaSearch } from "react-icons/fa";

const VolunteerDirectoryToolbar = () => {

    return(

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

            <div className="flex flex-wrap gap-4">

                <div className="relative flex-1 min-w-[280px]">

                    <FaSearch className="absolute top-4 left-4 text-gray-400"/>

                    <input
                        placeholder="Search volunteers..."
                        className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    />

                </div>

                <select className="border rounded-xl px-4">

                    <option>All Events</option>

                </select>

                <select className="border rounded-xl px-4">

                    <option>All Roles</option>

                </select>

                <select className="border rounded-xl px-4">

                    <option>All Status</option>

                </select>

                <button className="bg-emerald-500 text-white px-6 rounded-xl">

                    Export

                </button>

            </div>

        </div>

    )

}

export default VolunteerDirectoryToolbar;