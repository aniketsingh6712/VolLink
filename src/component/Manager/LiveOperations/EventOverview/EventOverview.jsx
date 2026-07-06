import {
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import ProgressBar from "./ProgressBar";

const EventOverview = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 mt-8">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left */}

        <div className="lg:col-span-2">

          <div className="flex justify-between items-start">

            <div>

              <h2 className="text-2xl font-bold text-slate-800">

                Event Overview

              </h2>

              <p className="text-gray-500 mt-2">

                Live operational summary of the current event.

              </p>

            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

              92% Healthy

            </div>

          </div>

          {/* Event Progress */}

          <div className="mt-8">

            <div className="flex justify-between mb-3">

              <h4 className="font-semibold">

                Event Progress

              </h4>

              <span className="font-bold">

                68%

              </span>

            </div>

            <ProgressBar
              value={68}
              color="bg-blue-500"
            />

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <div className="bg-slate-50 rounded-xl p-5">

              <div className="flex items-center gap-3">

                <FaUsers className="text-blue-600"/>

                <span className="font-medium">

                  Checked In

                </span>

              </div>

              <h3 className="text-3xl font-bold mt-4">

                34 / 36

              </h3>

            </div>

            <div className="bg-slate-50 rounded-xl p-5">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600"/>

                <span className="font-medium">

                  Healthy Areas

                </span>

              </div>

              <h3 className="text-3xl font-bold mt-4">

                5 / 6

              </h3>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="bg-slate-50 rounded-2xl p-6">

          <h3 className="font-bold text-lg">

            Event Information

          </h3>

          <div className="space-y-5 mt-6">

            <div className="flex gap-4">

              <FaCalendarAlt className="text-blue-600 mt-1"/>

              <div>

                <p className="text-gray-500 text-sm">

                  Date

                </p>

                <h4 className="font-semibold">

                  31 Oct 2026

                </h4>

              </div>

            </div>

            <div className="flex gap-4">

              <FaClock className="text-orange-600 mt-1"/>

              <div>

                <p className="text-gray-500 text-sm">

                  Time Remaining

                </p>

                <h4 className="font-semibold">

                  2h 18m

                </h4>

              </div>

            </div>

            <div className="flex gap-4">

              <FaMapMarkerAlt className="text-red-600 mt-1"/>

              <div>

                <p className="text-gray-500 text-sm">

                  Venue

                </p>

                <h4 className="font-semibold">

                  Community Center

                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EventOverview;