import {
    FaUser,
    FaPhone,
    FaEnvelope,
    FaUserTag,
    FaCheckCircle,
    FaFileAlt,
} from "react-icons/fa";
import { useState } from "react";

const ReviewStep = ({
    event,
    selectedPosition,
    role,
    form,
    onBack,
    onSubmit,
}) => {

    const [agree, setAgree] = useState(false);

    const uploadedFiles = [

        {
            label: "Profile Photo",
            value: form.photo,
        },

        {
            label: "Government ID",
            value: form.id,
        },

        ...(role === "student"

            ? [

                {
                    label: "College ID",
                    value: form.collegeId,
                },

            ]

            : []),

    ];

    return (

        <div className="max-h-[75vh] overflow-y-auto pr-2 space-y-8">

            {/* Heading */}

            <div>

                <h2 className="text-2xl font-bold">

                    Review Your Application

                </h2>

                <p className="text-gray-500 mt-2">

                    Please review everything before submitting.

                </p>

            </div>

            {/* Event */}

            <div className="rounded-2xl border p-6">

                <h3 className="font-semibold text-lg mb-5">

                    Event

                </h3>

                <div className="space-y-2">

                    <h4 className="text-xl font-bold">

                        {event.title}

                    </h4>

                    <p className="text-gray-500">

                        {event.date}

                    </p>

                    <p className="text-gray-500">

                        {event.location}

                    </p>

                </div>

            </div>

            {/* Position */}

            <div className="rounded-2xl border p-6">

                <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                        <FaUserTag className="text-blue-600"/>

                    </div>

                    <div>

                        <p className="text-sm text-gray-500">

                            Applying For

                        </p>

                        <h3 className="font-semibold text-xl">

                            {selectedPosition.title}

                        </h3>

                    </div>

                </div>

            </div>

            {/* Personal */}

            <div className="rounded-2xl border p-6">

                <h3 className="font-semibold text-lg mb-5">

                    Personal Details

                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                    <div className="flex gap-3">

                        <FaUser className="text-blue-600 mt-1"/>

                        <div>

                            <p className="text-sm text-gray-500">

                                Name

                            </p>

                            <h4 className="font-semibold">

                                {form.name}

                            </h4>

                        </div>

                    </div>

                    <div className="flex gap-3">

                        <FaEnvelope className="text-blue-600 mt-1"/>

                        <div>

                            <p className="text-sm text-gray-500">

                                Email

                            </p>

                            <h4 className="font-semibold">

                                {form.email}

                            </h4>

                        </div>

                    </div>

                    <div className="flex gap-3">

                        <FaPhone className="text-blue-600 mt-1"/>

                        <div>

                            <p className="text-sm text-gray-500">

                                Phone

                            </p>

                            <h4 className="font-semibold">

                                {form.phone}

                            </h4>

                        </div>

                    </div>

                    {

                        role === "student"

                        &&

                        <div>

                            <p className="text-sm text-gray-500">

                                College

                            </p>

                            <h4 className="font-semibold">

                                {form.college}

                            </h4>

                        </div>

                    }

                </div>

            </div>

            {/* Documents */}

            <div className="rounded-2xl border p-6">

                <h3 className="font-semibold text-lg mb-5">

                    Uploaded Documents

                </h3>

                <div className="space-y-3">

                    {

                        uploadedFiles.map(doc=>(

                            <div
                                key={doc.label}
                                className="flex justify-between items-center bg-gray-50 rounded-xl px-5 py-4"
                            >

                                <div className="flex gap-3">

                                    <FaFileAlt className="text-blue-600 mt-1"/>

                                    <span>

                                        {doc.label}

                                    </span>

                                </div>

                                {

                                    doc.value

                                    ?

                                    <div className="flex gap-2 items-center text-green-600">

                                        <FaCheckCircle/>

                                        Uploaded

                                    </div>

                                    :

                                    <span className="text-red-500">

                                        Missing

                                    </span>

                                }

                            </div>

                        ))

                    }

                </div>

            </div>

            {/* Declaration */}

            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">

                <label className="flex gap-3 cursor-pointer">

                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e)=>setAgree(e.target.checked)}
                    />

                    <span>

                        I confirm that all information provided is accurate and I understand that false information may result in rejection of my application.

                    </span>

                </label>

            </div>

            {/* Footer */}

            <div className="flex justify-between">

                <button

                    onClick={onBack}

                    className="px-8 py-3 rounded-xl border"

                >

                    Back

                </button>

                <button

                    disabled={!agree}

                    onClick={onSubmit}

                    className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white"

                >

                    Submit Application

                </button>

            </div>

        </div>

    );

};

export default ReviewStep;