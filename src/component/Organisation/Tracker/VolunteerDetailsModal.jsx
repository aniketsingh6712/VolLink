

export default function VolunteerDetailsModal({ volunteer, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <img src={volunteer.avatar} className="w-16 h-16 rounded-full" />

          <div className="flex-1">
            <h2 className="text-xl font-bold">{volunteer.name}</h2>

            <p className="text-sm text-gray-600">{volunteer.email}</p>
          </div>
        </div>

        <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Check-in Time:</p>
            <p className="font-semibold">{volunteer.checkin}</p>
          </div>

          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Check-out Time:</p>
            <p className="font-semibold">{volunteer.checkout || "Pending"}</p>
          </div>

          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Hours Worked:</p>
            <p className="font-semibold">{volunteer.hours} Hours</p>
          </div>

          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Check-in Location:</p>
            <p className="font-semibold">{volunteer.location}</p>
          </div>

          <div >
            <p className="text-xs text-gray-600 font-medium mb-2">Status:</p>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-blue-800 bg-blue-100">
              {volunteer.status}
            </span>
          </div>

          {volunteer.note && (
            <div className="bg-blue-50 rounded-xl p-4">{volunteer.note}</div>
          )}
        </div>

        <div className="flex gap-3">
          <button className="btn-primary flex-1 px-4 py-2 rounded-lg hover:bg-blue-700 transition">View Profile</button>

          <button onClick={onClose} className="flex-1 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
