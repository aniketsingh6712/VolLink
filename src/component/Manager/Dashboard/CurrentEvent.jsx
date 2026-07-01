import React from "react";

import { IoCalendarOutline } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CurrentEventCard = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      <div className="relative h-72">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

        <div className="absolute inset-0 p-8 flex flex-col justify-between">

          <div className="flex justify-between">

            <div>

              <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                ● {event.status}
              </span>

            </div>

            <div className="text-white text-right">

              <h2 className="text-4xl font-bold">

                {event.title}

              </h2>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 text-white">

            <div className="space-y-3">

              <div className="flex items-center gap-2">
                <IoCalendarOutline size={18}/>
                {event.date}
              </div>

              <div className="flex items-center gap-2">
                <IoMdPin size={18}/>
                {event.location}
              </div>

              <div className="flex items-center gap-2">
                <LuUsersRound size={18}/>
                {event.volunteersCheckedIn} / {event.volunteersAssigned}
                Volunteers Checked In
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Event Progress</span>

                <span>{event.progress}%</span>

              </div>

              <div className="bg-white/20 rounded-full h-3">

                <div
                  className="bg-emerald-400 h-3 rounded-full"
                  style={{ width: `${event.progress}%` }}
                />

              </div>

              <div className="mt-8 flex gap-3">

                <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold">
                  Manage Event
                </button>

                <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                  Attendance
                </button>

                <button className="bg-white/20 border border-white px-6 py-3 rounded-xl">
                  Analytics
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CurrentEventCard;