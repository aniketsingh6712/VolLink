import React from 'react'
import EventImageCard from './components/EventImageCard'
import {EventInfoCard,EventTitle} from "./components/EventInfoCard";
import ManagerAssignmentCard from '../Manager/ManagerAssignmentCard';

function EventOverviewSection({ event , manager}) {
    return (
        <>
            <div className="px-6 py-6 border-b">

                <div className="flex flex-col md:flex-row gap-6 items-start">

                    {/* LEFT LABEL */}
                    {/* EVENT IMAGE + LABEL */}
                    <div className="min-w-[180px]">

                        {/* IMAGE */}
                        <EventImageCard event={event} />

                        {/* TITLE */}
                        <EventTitle event={event} />

                    </div>

                    {/* MAIN */}
                   <EventInfoCard event={event}/>

                    {/* ACTION BOX */}
                    <div className="w-full md:w-60 bg-blue-600 text-white rounded-xl p-5 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">
                                Quick Actions
                            </h3>
                            <p className="text-xs text-blue-100 mt-1">
                                Manage event quickly
                            </p>
                        </div>

                        <div className="space-y-2 mt-4">
                            <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm">
                                Edit Event
                            </button>

                            <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm">
                                Close Event
                            </button>
                        </div>
                    </div>

                </div>
                <div className="mt-6">

                    <ManagerAssignmentCard
                        manager={manager}
                        onAssign={() => managerHandler(true)}
                    />

                </div>
            </div>
        </>
    )
}

export default EventOverviewSection;