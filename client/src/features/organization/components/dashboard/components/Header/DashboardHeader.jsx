import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function DashboardHeader() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-[#0F172A]">
                    Organization Dashboard
                </h1>
                <p className="text-gray-500">
                    Manage your events and volunteers
                </p>
            </div>

            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl"
                onClick={() => navigate("/event-create")}
            >
                <FaPlus size={18} className="text-white" />
                Create New Event
            </button>
        </div>
    )
}

export default DashboardHeader