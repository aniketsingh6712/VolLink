const BasicDetailsStep = ({
    form,
    setForm,
    role,
    setRole,
    selectedPosition,
    onBack,
    onContinue,
}) => {

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    return (

        <div className="space-y-8">

            {/* Position */}

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">

                <p className="text-sm text-gray-500">

                    Applying For

                </p>

                <h2 className="text-2xl font-bold text-blue-700 mt-1">

                    {selectedPosition.title}

                </h2>

                <p className="text-sm text-gray-600 mt-2">

                    {selectedPosition.description}

                </p>

            </div>

            {/* Heading */}

            <div>

                <h2 className="text-2xl font-bold">

                    Basic Details

                </h2>

                <p className="text-gray-500 mt-2">

                    Tell us a little about yourself.

                </p>

            </div>

            {/* Form */}

            <div className="grid md:grid-cols-2 gap-5">

                <div>

                    <label className="text-sm font-medium">

                        Full Name *

                    </label>

                    <input

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                        placeholder="Enter your full name"

                        className="input mt-2"

                    />

                </div>

                <div>

                    <label className="text-sm font-medium">

                        Email *

                    </label>

                    <input

                        name="email"

                        value={form.email}

                        onChange={handleChange}

                        placeholder="Enter your email"

                        className="input mt-2"

                    />

                </div>

                <div>

                    <label className="text-sm font-medium">

                        Phone Number *

                    </label>

                    <input

                        name="phone"

                        value={form.phone}

                        onChange={handleChange}

                        placeholder="Enter phone number"

                        className="input mt-2"

                    />

                </div>

                <div>

                    <label className="text-sm font-medium">

                        Emergency Contact *

                    </label>

                    <input

                        name="emergencyContact"

                        value={form.emergencyContact}

                        onChange={handleChange}

                        placeholder="Emergency Contact"

                        className="input mt-2"

                    />

                </div>

            </div>

            {/* Applicant Type */}

            <div>

                <h3 className="font-semibold mb-4">

                    Are you applying as?

                </h3>

                <div className="grid grid-cols-2 gap-4">

                    <button

                        type="button"

                        onClick={() => setRole("student")}

                        className={`rounded-xl border p-4 transition

                        ${role==="student"

                            ? "border-blue-600 bg-blue-50"

                            : "hover:bg-gray-50"

                        }

                        `}

                    >

                        🎓 Student

                    </button>

                    <button

                        type="button"

                        onClick={() => setRole("working")}

                        className={`rounded-xl border p-4 transition

                        ${role==="working"

                            ? "border-blue-600 bg-blue-50"

                            : "hover:bg-gray-50"

                        }

                        `}

                    >

                        💼 Working Professional

                    </button>

                </div>

            </div>

            {/* Student */}

            {

                role==="student" &&

                <div className="grid md:grid-cols-2 gap-5">

                    <div>

                        <label className="text-sm font-medium">

                            College / University

                        </label>

                        <input

                            name="college"

                            value={form.college}

                            onChange={handleChange}

                            placeholder="College Name"

                            className="input mt-2"

                        />

                    </div>

                    <div>

                        <label className="text-sm font-medium">

                            Course / Year

                        </label>

                        <input

                            name="course"

                            value={form.course}

                            onChange={handleChange}

                            placeholder="B.E CSE - 3rd Year"

                            className="input mt-2"

                        />

                    </div>

                </div>

            }

            {/* Footer */}

            <div className="flex justify-between">

                <button

                    onClick={onBack}

                    className="px-8 py-3 rounded-xl border"

                >

                    Back

                </button>

                <button

                    onClick={onContinue}

                    className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"

                >

                    Continue

                </button>

            </div>

        </div>

    );

};

export default BasicDetailsStep;