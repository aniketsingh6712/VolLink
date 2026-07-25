import React from 'react'
import { FiSearch } from 'react-icons/fi'
function VolunteerSearchBar() {
    return (
        <div className="px-6 py-4 border-b">
            <div className="flex items-center border rounded-xl px-3 py-3 bg-white">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                    placeholder="Search candidates by name..."
                    className="w-full outline-none text-sm"
                />
            </div>
        </div>
    )
}

export default VolunteerSearchBar