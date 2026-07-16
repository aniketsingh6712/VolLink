import { useState } from "react";
import Modal from "../../../ui/Modal";
import {
    FaCheckCircle,
    FaUserCheck,
} from "react-icons/fa";

export default function ApproveVolunteerModal({

    isOpen,

    onClose,

    user,

    onConfirm,

}) {

    const [message, setMessage] = useState("");

    if (!user) return null;

    return (

        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >

            {/* Header */}

            <div className="bg-green-600 text-white px-6 py-5 rounded-t-xl">

                <div className="flex items-center gap-3">

                    <FaUserCheck size={22}/>

                    <div>

                        <h2 className="text-xl font-semibold">

                            Approve Volunteer

                        </h2>

                        <p className="text-green-100 text-sm">

                            Confirm volunteer selection

                        </p>

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="p-6">

                <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4">

                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">

                        {

                            user.photo

                            ?

                            <img

                                src={user.photo}

                                className="w-full h-full object-cover"

                            />

                            :

                            null

                        }

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            {user.name}

                        </h3>

                        <p className="text-sm text-gray-500">

                            {user.position}

                        </p>

                    </div>

                </div>

                <div className="mt-6">

                    <label className="font-medium">

                        Welcome Message (Optional)

                    </label>

                    <textarea

                        value={message}

                        onChange={(e)=>setMessage(e.target.value)}

                        className="w-full mt-3 border rounded-xl p-4"

                        rows={5}

                        placeholder="Welcome to the team..."

                    />

                </div>

                <div className="mt-6 bg-blue-50 rounded-xl p-4 text-sm text-blue-700">

                    The volunteer will receive a notification that their application has been approved.

                </div>

            </div>

            {/* Footer */}

            <div className="border-t p-5 flex gap-3">

                <button

                    onClick={onClose}

                    className="flex-1 border rounded-xl py-3"

                >

                    Cancel

                </button>

                <button

                    onClick={()=>onConfirm(message)}

                    className="flex-1 rounded-xl py-3 bg-green-600 hover:bg-green-700 text-white"

                >

                    Approve Volunteer

                </button>

            </div>

        </Modal>

    );

}