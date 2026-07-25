import {
    FiLogIn,
    FiLogOut,
    FiUsers,
    FiTrendingUp
} from "react-icons/fi";

export default function TrackerStats({
    volunteers
}) {

    const checked =
        volunteers.filter(
            v => v.status === "ACTIVE"
        );

    const done =
        volunteers.filter(
            v => v.status === "CHECKED_OUT"
        );

    const total =
        volunteers.reduce(
            (a, b) => a + b.hours,
            0
        );

    const cards = [

        {
            title: "Checked In",
            value: volunteers.length,
            desc: "Total volunteers",
            icon: <FiLogIn />
        },

        {
            title: "Currently Active",
            value: checked.length,
            desc: "On duty now",
            icon: <FiUsers />
        },

        {
            title: "Checked Out",
            value: done.length,
            desc: "Completed shift",
            icon: <FiLogOut />
        },

        {
            title: "Total Hours",
            value: total.toFixed(1),
            desc: `Avg: ${(total / volunteers.length).toFixed(1)}/volunteer`,
            icon: <FiTrendingUp />
        }

    ];

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-8">

            {cards.map((c) => (

                <div
                    key={c.title}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >

                    <div className="flex justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                {c.title}
                            </p>

                            <h2 className="text-3xl font-bold font-bold">
                                {c.value}
                            </h2>

                            <p className="mt-3 text-xs text-gray-500">
                                {c.desc}
                            </p>

                        </div>

                        <div className="text-2xl text-blue-600">

                            {c.icon}

                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}