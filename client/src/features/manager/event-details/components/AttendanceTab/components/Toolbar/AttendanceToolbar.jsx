import { FaSearch } from "react-icons/fa";

const AttendanceToolbar=()=>{

    return(

        <div className="bg-white rounded-2xl border shadow-sm p-5">

            <div className="flex flex-col lg:flex-row gap-4">

                <div className="relative flex-1">

                    <FaSearch
                        className="absolute left-4 top-4 text-gray-400"
                    />

                    <input
                        className="w-full pl-12 py-3 border rounded-xl"
                        placeholder="Search volunteer..."
                    />

                </div>

                <select
                    className="border rounded-xl px-5"
                >

                    <option>All Status</option>

                    <option>Present</option>

                    <option>Late</option>

                    <option>Absent</option>

                    <option>Checked Out</option>

                </select>

            </div>

        </div>

    )

}

export default AttendanceToolbar;