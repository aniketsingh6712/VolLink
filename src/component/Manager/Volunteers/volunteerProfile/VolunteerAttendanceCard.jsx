const stats = [
  {
    title: "Present",
    value: 18,
  },
  {
    title: "Late",
    value: 2,
  },
  {
    title: "Absent",
    value: 1,
  },
  {
    title: "Hours",
    value: "42h",
  },
];

const VolunteerAttendanceCard = () => {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">

      <h3 className="text-xl font-bold">

        Attendance

      </h3>

      <div className="grid grid-cols-2 gap-5 mt-6">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-gray-50 rounded-xl p-4 text-center"
          >

            <p className="text-gray-500 text-sm">

              {item.title}

            </p>

            <h2 className="text-2xl font-bold mt-2">

              {item.value}

            </h2>

          </div>

        ))}

      </div>

    </div>
  );
};

export default VolunteerAttendanceCard;