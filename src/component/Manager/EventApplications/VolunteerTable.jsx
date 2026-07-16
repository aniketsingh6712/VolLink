import VolunteerRow from "./VolunteerRow";

export default function VolunteerTable({
    volunteers = [],
    type,
}) {

    return (

        <div className="mt-5 rounded-2xl border border-gray-200 overflow-hidden">

            {/* HEADER */}

            <div className="grid grid-cols-12 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-600">

                <div className="col-span-4">
                    Volunteer
                </div>

                <div className="col-span-2">
                    Applied On
                </div>

                <div className="col-span-3">
                    Contact
                </div>

                <div className="col-span-3 text-center">
                    Actions
                </div>

            </div>

            {/* BODY */}

            <div>

                {volunteers.map(user => (

                    <VolunteerRow

                        key={user.id}

                        user={user}

                        type={type}

                    />

                ))}

            </div>

        </div>

    );

}