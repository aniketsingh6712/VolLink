import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
function BackButton() {
    const navigate=useNavigate();
  return (
   <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
      >
        <FaArrowLeft size={16} />
        Back
      </button>
  )
}

export default BackButton