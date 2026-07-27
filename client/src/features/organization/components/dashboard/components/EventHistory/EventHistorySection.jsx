import React from 'react'
import EventRow from '../../common/event row/EventRow'
import { PiClockCounterClockwise } from 'react-icons/pi'
function EventHistorySection({events}) {
  return (
     <div className="bg-white rounded-2xl shadow-sm border overflow-hidden mb-10">

          {/* HEADER */}
          <div className="bg-purple-100/70 px-6 py-5 flex items-start gap-3">

            {/* Icon */}
            <div className="text-purple-600 mt-1">
              <PiClockCounterClockwise size={22} />
            </div>

            {/* Title + Subtitle */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Event History
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Previously conducted events
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="divide-y">
            {events.map((event, i) => (
              <div key={i} className="px-6 py-5">
                <EventRow event={event} history />
              </div>
            ))}
          </div>

        </div>
  )
}

export default EventHistorySection