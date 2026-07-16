import {
    FaEye,
    FaCheck,
    FaTimes
} from "react-icons/fa";

import {
    FiPhone
} from "react-icons/fi";

import { useState } from "react";

import VolunteerProfileModal from "./Modals/VolunteerProfileModal";
import ApproveVolunteerModal from "./Modals/ApproveVolunteerModal";
import RejectVolunteerModal from "./Modals/RejectVolunteerModal";

export default function VolunteerRow({

    user,

    type,

}) {

    const [

        openProfile,

        setOpenProfile,

    ] = useState(false);

    const [

        openApprove,

        setOpenApprove,

    ] = useState(false);

    const [

        openReject,

        setOpenReject,

    ] = useState(false);

    return (

        <>

            <div className="grid grid-cols-12 items-center px-6 py-4 border-t hover:bg-gray-50 transition">

                {/* Volunteer */}

                <div className="col-span-4 flex items-center gap-3">

                    <img

                        src={user.photo}

                        className="w-12 h-12 rounded-full object-cover"

                        alt=""

                    />

                    <div>

                        <h3 className="font-semibold text-gray-800">

                            {user.name}

                        </h3>

                        <p className="text-sm text-gray-500">

                            {user.email}

                        </p>

                    </div>

                </div>

                {/* Applied */}

                <div className="col-span-2 text-gray-600 text-sm">

                    {user.appliedAt}

                </div>

                {/* Contact */}

                <div className="col-span-3">

                    <div className="flex items-center gap-2 text-sm text-gray-600">

                        <FiPhone />

                        {user.phone}

                    </div>

                </div>

                {/* ACTIONS */}

                <div className="col-span-3 flex justify-center gap-3">

                    <button

                        onClick={() => setOpenProfile(true)}

                        className="w-11 h-11 rounded-xl border border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center"

                    >

                        <FaEye />

                    </button>

                    {

                        type === "pending" &&

                        <>

                            <button

                                onClick={() => setOpenApprove(true)}

                                className="w-11 h-11 rounded-xl border border-green-300 bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center"

                            >

                                <FaCheck />

                            </button>

                            <button

                                onClick={() => setOpenReject(true)}

                                className="w-11 h-11 rounded-xl border border-red-300 bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center"

                            >

                                <FaTimes />

                            </button>

                        </>

                    }

                </div>

            </div>

            <VolunteerProfileModal

                isOpen={openProfile}

                onClose={() => setOpenProfile(false)}

                user={user}

                onApprove={() => {

                    setOpenProfile(false);

                    setOpenApprove(true);

                }}

                onReject={() => {

                    setOpenProfile(false);

                    setOpenReject(true);

                }}

            />

            <ApproveVolunteerModal

                isOpen={openApprove}

                user={user}

                onClose={() => setOpenApprove(false)}

                onConfirm={() => {

                    console.log("approved");

                    setOpenApprove(false);

                }}

            />

            <RejectVolunteerModal

                isOpen={openReject}

                user={user}

                onClose={() => setOpenReject(false)}

                onConfirm={() => {

                    console.log("rejected");

                    setOpenReject(false);

                }}

            />

        </>

    );

}