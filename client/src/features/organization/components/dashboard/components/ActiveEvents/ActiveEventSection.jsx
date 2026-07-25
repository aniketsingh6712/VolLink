import React from 'react';
import EventRow from '../../common/event row/EventRow';
import { LuEye } from "react-icons/lu";
function ActiveEventSection({events}) {
  return (
     <div className="bg-white rounded-2xl shadow-sm  overflow-hidden mb-10">
   
             {/* HEADER */}
             <div className="bg-blue-100/70 px-6 py-5 flex items-start gap-3">
   
               {/* Icon */}
               <div className="text-blue-600 mt-1">
                 <LuEye size={22} />
               </div>
   
               {/* Title + Subtitle */}
               <div>
                 <h2 className="text-xl font-bold text-gray-900">
                   Active Events
                 </h2>
                 <p className="text-sm text-gray-600 mt-1">
                   Events currently accepting volunteers
                 </p>
               </div>
             </div>
   
             {/* CONTENT */}
             <div className="divide-y">
               {events.map((event, i) => (
                 <div key={i} className="px-6 py-5">
                   <EventRow event={event} />
                 </div>
               ))}
             </div>
   
           </div>
  )
}

export default ActiveEventSection