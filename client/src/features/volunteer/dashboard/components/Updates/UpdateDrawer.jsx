import {
    FaTimes,
    FaBullhorn,
    FaClock,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const iconColor = {

    Emergency: "text-red-600 bg-red-100",

    Important: "text-yellow-600 bg-yellow-100",

    General: "text-blue-600 bg-blue-100",

};
const UpdateDrawer = ({
    open,
    updates = [],
    category,
    onClose
}) => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    if (!open || !updates) return null;

    // useEffect(() => {

    //     setSelectedMessage(null);

    // }, [category, open]);
    const filteredMessages =

        category === "All"

            ?

            updates

            :

            updates.filter(

                message => message.category === category

            );
    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/40 z-40"
            />

            <div className="fixed right-0 top-0 h-screen w-full max-w-xl bg-white z-50 shadow-2xl overflow-y-auto">
                <div className="border-b p-6 flex justify-between">
                    <div className="flex gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColor[category]}`}>

                            <FaBullhorn />

                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">

                                {category} Messages

                            </h2>
                            <p className="text-gray-500">

                                {filteredMessages.length} Messages

                            </p>
                        </div>
                    </div>
                    <button onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                {
                    selectedMessage === null ? (

                        <div className="overflow-y-auto">

                            {

                                filteredMessages.map(message => (

                                    <button

                                        key={message.id}

                                        onClick={() => setSelectedMessage(message)}

                                        className="w-full border-b px-6 py-5 hover:bg-gray-50 transition text-left"

                                    >

                                        <div className="flex justify-between">

                                            <div>

                                                <h3 className="font-semibold">

                                                    {message.title}

                                                </h3>

                                                <p className="text-sm text-gray-500 mt-2">

                                                    {message.time}

                                                </p>

                                            </div>

                                            {

                                                message.read

                                                    ?

                                                    <span className="text-green-600 font-medium">

                                                        ✓ Read

                                                    </span>

                                                    :

                                                    <input
                                                        type="checkbox"
                                                        onClick={(e) => e.stopPropagation()}
                                                    />

                                            }

                                        </div>

                                    </button>

                                ))

                            }

                        </div>

                    ) : (

                        <>

                            <div className="p-6 space-y-6 overflow-y-auto">

                                <button

                                    onClick={() => setSelectedMessage(null)}

                                    className="text-blue-600 font-medium hover:text-blue-700"

                                >

                                    ← Back to Messages

                                </button>

                                <div className="flex gap-3">

                                    <FaClock className="text-blue-600 mt-1" />

                                    <div>

                                        <p className="text-gray-500 text-sm">

                                            Received

                                        </p>

                                        <h3 className="font-semibold">

                                            {selectedMessage.time}

                                        </h3>

                                    </div>

                                </div>

                                <div>

                                    <h2 className="text-2xl font-bold">

                                        {selectedMessage.title}

                                    </h2>

                                    <p className="text-gray-500 mt-2">

                                        {selectedMessage.category}

                                    </p>

                                </div>

                                <div>

                                    <h3 className="font-semibold mb-3">

                                        Message

                                    </h3>

                                    <div className="bg-slate-50 rounded-xl p-5 leading-7">

                                        {selectedMessage.message}

                                    </div>

                                </div>

                            </div>

                            <div className="sticky bottom-0 bg-white border-t p-5">

                                {

                                    !selectedMessage.read

                                        ?

                                        <button

                                            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"

                                        >

                                            {

                                                selectedMessage.category === "Emergency"

                                                    ?

                                                    "Acknowledge"

                                                    :

                                                    "Mark as Read"

                                            }

                                        </button>

                                        :

                                        <div className="w-full py-3 rounded-xl bg-green-100 text-green-700 text-center font-semibold">

                                            ✓ Already Read

                                        </div>

                                }

                            </div>

                        </>

                    )
                }

            </div>

        </>

    )

}

export default UpdateDrawer;