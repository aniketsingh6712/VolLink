import {
    FaBullhorn,
    FaPlus
} from "react-icons/fa";

const CommunicationHeader = () => {

    return (

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <div className="flex justify-between items-center">

                <div>

                    <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                            <FaBullhorn className="text-blue-600 text-xl"/>

                        </div>

                        <div>

                            <h1 className="text-3xl font-bold text-slate-800">

                                Communication Center

                            </h1>

                            <p className="text-gray-500 mt-1">

                                Send announcements and communicate with volunteers.

                            </p>

                        </div>

                    </div>

                </div>

                <button
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                >

                    <FaPlus/>

                    New Announcement

                </button>

            </div>

        </div>

    )

}

export default CommunicationHeader;