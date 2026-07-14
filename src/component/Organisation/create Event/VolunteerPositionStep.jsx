import {
    FaPlus,
    FaTrash,
    FaUsers,
} from "react-icons/fa";

const VolunteerPositionsStep = ({
   form,
    setForm,
    setStep,
    validateStep,
}) => {

    const addPosition = () => {

        setForm({

            ...form,

            positions: [

                ...form.positions,

                {

                    id: Date.now(),

                    title: "",

                    description: "",

                    volunteersNeeded: "",

                }

            ]

        });

    };

    const updatePosition = (

        id,

        field,

        value

    ) => {

        setForm({

            ...form,

            positions: form.positions.map(position =>

                position.id === id

                    ?

                    {

                        ...position,

                        [field]: value,

                    }

                    :

                    position

            )

        });

    };

    const removePosition = (id) => {

        setForm({

            ...form,

            positions: form.positions.filter(

                position => position.id !== id

            )

        });

    };

    const totalVolunteers = form.positions.reduce(

        (

            total,

            position

        ) =>

            total +

            Number(

                position.volunteersNeeded || 0

            ),

        0

    );

    return (

        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-center justify-between">
                <div className="flex flex-row gap-1">

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                        <FaUsers className="text-blue-600 text-2xl" />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold text-gray-800">

                            Volunteer Positions

                        </h2>

                        <p className="text-gray-500 mt-1">

                            Create positions volunteers can apply for.

                        </p>

                    </div>
                </div>





                <div className="bg-blue-600 text-white rounded-2xl shadow-lg px-8 py-5 min-w-[170px]">

                    <p className="text-blue-100 text-sm">

                        Total Volunteers

                    </p>

                    <h3 className="text-4xl font-bold mt-1">

                        {totalVolunteers}

                    </h3>

                    <p className="text-blue-100 text-sm mt-1">

                        Across {form.positions.length} Position(s)

                    </p>

                </div>

            </div>

            {/* Empty */}

            {

                form.positions.length === 0 && (

                    <div className="border-2 border-dashed rounded-2xl p-16 text-center">

                        <FaUsers
                            size={40}
                            className="mx-auto text-gray-400"
                        />

                        <h3 className="font-semibold text-lg mt-5">

                            No Positions Added

                        </h3>

                        <p className="text-gray-500 mt-2">

                            Add volunteer positions that people can apply for.

                        </p>

                    </div>

                )

            }

            {/* Cards */}

            <div className="space-y-5">

                {

                    form.positions.map((position, index) => (

                        <div
                            key={position.id}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6"
                        >

                            <div className="flex justify-between items-center mb-6">

                                <div>

                                    <h3 className="font-bold text-lg text-gray-800">

                                        Position #{index + 1}

                                    </h3>

                                    <p className="text-sm text-gray-500">

                                        Volunteer Assignment

                                    </p>

                                </div>

                                <button
                                    onClick={() => removePosition(position.id)}
                                    className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 transition flex items-center justify-center"
                                >

                                    <FaTrash />

                                </button>

                            </div>

                            <div className="grid md:grid-cols-2 gap-6">

                                {/* Position */}

                                <div>

                                    <label className="font-medium">

                                        Position Name

                                    </label>

                                    <input

                                        value={position.title}

                                        onChange={(e) =>

                                            updatePosition(

                                                position.id,

                                                "title",

                                                e.target.value

                                            )

                                        }

                                        placeholder="Registration Volunteer"

                                        className="input mt-2"

                                    />

                                </div>

                                {/* Needed */}

                                <div>

                                    <label className="font-medium">

                                        Volunteers Needed

                                    </label>

                                    <input

                                        type="number"

                                        min={1}

                                        value={position.volunteersNeeded}

                                        onChange={(e) =>

                                            updatePosition(

                                                position.id,

                                                "volunteersNeeded",

                                                e.target.value

                                            )

                                        }

                                      className="input mt-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"

                                    />

                                </div>

                            </div>

                            {/* Description */}

                            <div className="mt-6">

                                <label className="font-medium">

                                    Description

                                </label>

                                <textarea

                                    rows={4}

                                    value={position.description}

                                    onChange={(e) =>

                                        updatePosition(

                                            position.id,

                                            "description",

                                            e.target.value

                                        )

                                    }

                                    placeholder="Explain what volunteers in this position will do."

                                    className="input mt-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"

                                />

                            </div>

                        </div>

                    ))

                }

            </div>

            {/* Add */}

            <button

                onClick={addPosition}

               className="w-full border-2 border-dashed border-blue-300 rounded-2xl py-5 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center gap-3 text-blue-600 font-semibold"

            >

                <FaPlus />

                Add Position

            </button>

        </div >


    );

};

export default VolunteerPositionsStep;