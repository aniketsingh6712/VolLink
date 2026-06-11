import React from 'react'

function StatusCard({cardTitle, cardValue,cardColor}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
        <p className="text-xs text-gray-600 font-medium mb-1">{cardTitle}</p>
        <p className={`text-2xl font-bold ${cardColor}`}>{cardValue}</p>
    </div>
  )
}

export default StatusCard