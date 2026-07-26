import { useState } from "react";

import Modal from "../../../../../../common/Modal/Modal";

import {

    FaUserTimes,

} from "react-icons/fa";

export default function RejectVolunteerModal({

    isOpen,

    onClose,

    user,

    onConfirm,

}) {

    const [reason,setReason]=useState("");

    if(!user) return null;

    return(

        <Modal

            isOpen={isOpen}

            onClose={onClose}

        >

            {/* Header */}

            <div className="bg-red-500 text-white px-6 py-5 rounded-t-xl">

                <div className="flex items-center gap-3">

                    <FaUserTimes size={22}/>

                    <div>

                        <h2 className="text-xl font-semibold">

                            Reject Volunteer

                        </h2>

                        <p className="text-red-100 text-sm">

                            Reject this application

                        </p>

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="p-6">

                <div className="bg-red-50 rounded-xl p-4 flex gap-4">

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

                        <p className="text-gray-500 text-sm">

                            {user.position}

                        </p>

                    </div>

                </div>

                <div className="mt-6">

                    <label className="font-medium">

                        Rejection Reason

                    </label>

                    <textarea

                        rows={5}

                        value={reason}

                        onChange={(e)=>setReason(e.target.value)}

                        className="w-full mt-3 border rounded-xl p-4"

                        placeholder="Provide feedback..."

                    />

                </div>

                <div className="mt-6 bg-red-50 rounded-xl p-4 text-red-700 text-sm">

                    This volunteer will receive a rejection notification.

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

                    onClick={()=>onConfirm(reason)}

                    className="flex-1 rounded-xl py-3 bg-red-500 hover:bg-red-600 text-white"

                >

                    Reject Volunteer

                </button>

            </div>

        </Modal>

    );

}