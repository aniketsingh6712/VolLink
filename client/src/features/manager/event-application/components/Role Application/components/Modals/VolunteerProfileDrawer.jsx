import {
    FaTimes,
    FaUserGraduate,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaShieldAlt,
    FaUniversity,
    FaFileAlt,
} from "react-icons/fa";

export default function VolunteerProfileDrawer({

    isOpen,

    onClose,

    user,

    onApprove,

    onReject,

}) {

    if (!isOpen || !user) return null;

    return (

        <>

            {/* Overlay */}

            <div

                onClick={onClose}

                className="fixed inset-0 bg-black/40 z-40"

            />

            {/* Drawer */}

            <div className="fixed right-0 top-0 h-screen w-full max-w-xl bg-white z-50 shadow-2xl flex flex-col">

                {/* HEADER */}

                <div className="border-b p-6 flex justify-between">

                    <div className="flex gap-4">

                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">

                            {

                                user.photo

                                    ?

                                    <img

                                        src={user.photo}

                                        className="w-full h-full object-cover"

                                    />

                                    :

                                    <div className="w-full h-full flex items-center justify-center">

                                        👤

                                    </div>

                            }

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold">

                                {user.name}

                            </h2>

                            <p className="text-gray-500">

                                Applied for

                            </p>

                            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs">

                                {user.position}

                            </span>

                        </div>

                    </div>

                    <button

                        onClick={onClose}

                        className="text-xl"

                    >

                        <FaTimes/>

                    </button>

                </div>

                {/* BODY */}

                <div className="flex-1 overflow-y-auto p-6 space-y-8">

                    {/* Contact */}

                    <Section title="Contact">

                        <Info

                            icon={<FaEnvelope/>}

                            text={user.email}

                        />

                        <Info

                            icon={<FaPhone/>}

                            text={user.phone}

                        />

                        <Info

                            icon={<FaMapMarkerAlt/>}

                            text={user.address}

                        />

                    </Section>

                    {/* Education */}

                    <Section title="Education">

                        <Info

                            icon={<FaUniversity/>}

                            text={user.college}

                        />

                        <Info

                            icon={<FaUserGraduate/>}

                            text={user.degree}

                        />

                    </Section>

                    {/* Documents */}

                    <Section title="Submitted Documents">

                        <DocumentCard

                            title="Government ID"

                        />

                        <DocumentCard

                            title="Photo"

                        />

                        {

                            user.collegeId &&

                            <DocumentCard

                                title="College ID"

                            />

                        }

                    </Section>

                    {/* Experience */}

                    <Section title="Volunteer Experience">

                        <div className="bg-gray-50 rounded-xl p-4">

                            {user.experience ||

                            "No previous experience"}

                        </div>

                    </Section>

                    {/* Emergency */}

                    <Section title="Emergency Contact">

                        <Info

                            icon={<FaShieldAlt/>}

                            text={user.emergencyContact}

                        />

                    </Section>

                </div>

                {/* FOOTER */}

                <div className="border-t p-5 bg-white flex gap-3">

                    <button

                        onClick={onReject}

                        className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white"

                    >

                        Reject

                    </button>

                    <button

                        onClick={onApprove}

                        className="flex-1 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white"

                    >

                        Approve

                    </button>

                </div>

            </div>

        </>

    );

}

function Section({

    title,

    children,

}){

    return(

        <div>

            <h3 className="font-semibold text-lg mb-4">

                {title}

            </h3>

            <div className="space-y-3">

                {children}

            </div>

        </div>

    );

}

function Info({

    icon,

    text,

}){

    return(

        <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">

                {icon}

            </div>

            <span className="text-gray-700">

                {text || "--"}

            </span>

        </div>

    );

}

function DocumentCard({

    title,

}){

    return(

        <div className="border rounded-xl p-4 flex justify-between items-center">

            <div className="flex gap-3 items-center">

                <FaFileAlt className="text-blue-600"/>

                <span>{title}</span>

            </div>

            <button className="text-blue-600 text-sm font-medium">

                View

            </button>

        </div>

    );

}