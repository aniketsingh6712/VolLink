export default function VolunteerDetailsModal({ volunteer, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-3xl w-[450px] p-8">
        <div className="flex gap-5">
          <img src={volunteer.avatar} className="w-20 h-20 rounded-full" />

          <div>
            <h2 className="text-3xl font-bold">{volunteer.name}</h2>

            <p>{volunteer.email}</p>
          </div>
        </div>

        <div className="space-y-5 mt-8">
          <p>
            Check-in:
            <b>{volunteer.checkin}</b>
          </p>

          <p>
            Check-out:
            <b>{volunteer.checkout || "Pending"}</b>
          </p>

          <p>
            Hours:
            <b>{volunteer.hours}</b>
          </p>

          <p>
            Location:
            <b>{volunteer.location}</b>
          </p>

          <div>
            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700">
              {volunteer.status}
            </span>
          </div>

          {volunteer.note && (
            <div className="bg-blue-50 rounded-xl p-4">{volunteer.note}</div>
          )}
        </div>

        <div className="mt-8 flex gap-3">
          <button className="btn-primary flex-1">View Profile</button>

          <button onClick={onClose} className="flex-1 border rounded-xl">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
