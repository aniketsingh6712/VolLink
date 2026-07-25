import {
    FaUserTie,
    FaUserPlus,
    FaExchangeAlt,
} from "react-icons/fa";

const ManagerAssignmentCard = ({
    manager,
    onAssign,
}) => {

    return (

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

            <div className="border-b px-6 py-5">

                <h2 className="text-xl font-bold flex items-center gap-3">

                    <FaUserTie className="text-blue-600"/>

                    Event Manager

                </h2>

                <p className="text-gray-500 mt-2">

                    Assign a manager responsible for this event.

                </p>

            </div>

            <div className="p-6">

                {

                    !manager

                    ?

                    <div className="flex flex-col items-center py-10">

                        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

                            <FaUserTie className="text-4xl text-red-500"/>

                        </div>

                        <h3 className="font-bold text-xl mt-5">

                            No Manager Assigned

                        </h3>

                        <p className="text-gray-500 mt-2 text-center max-w-md">

                            Assign an event manager before the event begins.

                        </p>

                        <button
                            onClick={onAssign}
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
                        >

                            <FaUserPlus/>

                            Assign Manager

                        </button>

                    </div>

                    :

                    <div className="flex justify-between items-center">

                        <div className="flex gap-5">

                            <img
                                src={manager.avatar}
                                alt={manager.name}
                                className="w-16 h-16 rounded-full"
                            />

                            <div>

                                <h3 className="text-xl font-semibold">

                                    {manager.name}

                                </h3>

                                <p className="text-gray-500 mt-1">

                                    Currently Assigned

                                </p>

                                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">

                                    Active

                                </span>

                            </div>

                        </div>

                        <button
                            onClick={onAssign}
                            className="border px-6 py-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
                        >

                            <FaExchangeAlt/>

                            Change Manager

                        </button>

                    </div>

                }

            </div>

        </div>

    );

};

export default ManagerAssignmentCard;