import {
    FaCloudUploadAlt,
    FaCheckCircle,
} from "react-icons/fa";

const VerificationStep = ({
    role,
    form,
    setForm,
    onBack,
    onContinue,
}) => {

    const handleFile = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.files[0],

        });

    };

    const uploadCard = (title, field) => (

        <label className="block cursor-pointer">

            <div className="border-2 border-dashed rounded-2xl p-6 hover:border-blue-500 transition">

                <div className="flex flex-col items-center text-center">

                    {

                        form[field]

                        ?

                        <FaCheckCircle
                            size={45}
                            className="text-green-500"
                        />

                        :

                        <FaCloudUploadAlt
                            size={45}
                            className="text-blue-500"
                        />

                    }

                    <h3 className="font-semibold mt-4">

                        {title}

                    </h3>

                    {

                        form[field]

                        ?

                        <p className="text-sm text-green-600 mt-2">

                            {form[field].name}

                        </p>

                        :

                        <>

                            <p className="text-gray-500 text-sm mt-2">

                                Click to upload

                            </p>

                            <p className="text-xs text-gray-400 mt-1">

                                JPG • PNG • PDF

                            </p>

                        </>

                    }

                </div>

                <input
                    hidden
                    type="file"
                    name={field}
                    onChange={handleFile}
                />

            </div>

        </label>

    );

    return (

        <div className="max-h-[75vh] overflow-y-auto pr-2 space-y-8">

            <div>

                <h2 className="text-2xl font-bold">

                    Identity Verification

                </h2>

                <p className="text-gray-500 mt-2">

                    Upload the required documents for verification.

                </p>

            </div>

            <div className="bg-blue-50 rounded-xl p-5">

                <h3 className="font-semibold text-blue-700">

                    Required Documents

                </h3>

                <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">

                    <li>Recent passport-size photograph</li>

                    <li>Government-issued ID proof</li>

                    {

                        role === "student" &&

                        <li>Valid College ID Card</li>

                    }

                </ul>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

                {uploadCard("Profile Photo", "photo")}

                {uploadCard("Government ID", "id")}

                {

                    role === "student"

                    &&

                    uploadCard("College ID", "collegeId")

                }

            </div>

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

export default VerificationStep;