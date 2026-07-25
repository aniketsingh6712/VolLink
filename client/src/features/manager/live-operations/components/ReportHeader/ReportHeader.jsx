import {
  FaCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaSyncAlt,
} from "react-icons/fa";

const ReportHeader = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Left */}

        <div>
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-4xl font-bold text-slate-900">
              Live Operations
            </h1>

            <span className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              <FaCircle className="text-[10px]" />
              LIVE
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Food Donation Drive
          </h2>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mt-2 text-sm font-medium">
            Volunteer Check-In Open
          </div>

          <div className="flex flex-wrap gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />

              <span>31 Oct 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <FaClock />

              <span>09:00 AM - 05:00 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />

              <span>Community Center, Bangalore</span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-500 mb-4">Last updated</span>

          <h3 className="text-2xl font-semibold mb-6">10:24 AM</h3>

          <button className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
            <FaSyncAlt />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
