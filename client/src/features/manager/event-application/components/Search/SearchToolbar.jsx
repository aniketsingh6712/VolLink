import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";

export default function SearchToolbar({

    search,

    setSearch,

    selectedRole,

    setSelectedRole,

    selectedStatus,

    setSelectedStatus,

    roles = [],

    onRefresh,

}) {

    return (

        <div className="bg-white rounded-2xl border shadow-sm p-5 mb-6">

            <div className="grid lg:grid-cols-4 gap-4">

                {/* SEARCH */}

                <div className="relative">

                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

                    <input

                        value={search}

                        onChange={(e)=>setSearch(e.target.value)}

                        placeholder="Search volunteer..."

                        className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"

                    />

                </div>

                {/* ROLE */}

                <div className="relative">

                    <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

                    <select

                        value={selectedRole}

                        onChange={(e)=>setSelectedRole(e.target.value)}

                        className="w-full pl-11 pr-4 py-3 border rounded-xl appearance-none outline-none"

                    >

                        <option value="">

                            All Roles

                        </option>

                        {

                            roles.map(role=>(

                                <option

                                    key={role.id}

                                    value={role.id}

                                >

                                    {role.title}

                                </option>

                            ))

                        }

                    </select>

                </div>

                {/* STATUS */}

                <div className="relative">

                    <MdOutlinePendingActions className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

                    <select

                        value={selectedStatus}

                        onChange={(e)=>setSelectedStatus(e.target.value)}

                        className="w-full pl-11 pr-4 py-3 border rounded-xl appearance-none outline-none"

                    >

                        <option value="">

                            All Status

                        </option>

                        <option value="Pending">

                            Pending

                        </option>

                        <option value="Approved">

                            Approved

                        </option>

                        <option value="Rejected">

                            Rejected

                        </option>

                    </select>

                </div>

                {/* REFRESH */}

                <button

                    onClick={onRefresh}

                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium"

                >

                    <FiRefreshCw/>

                    Refresh

                </button>

            </div>

        </div>

    );

}