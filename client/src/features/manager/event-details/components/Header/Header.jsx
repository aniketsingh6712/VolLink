import {
    FaArrowLeft,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaUsers
} from "react-icons/fa";

const Header = () => {

    return(

        <div className="bg-white rounded-2xl border shadow-sm p-8">

            <button className="flex items-center gap-2 text-emerald-600 mb-6">

                <FaArrowLeft/>

                Back to Events

            </button>

            <div className="flex justify-between items-start">

                <div>

                    <h1 className="text-4xl font-bold">

                        Food Donation Drive

                    </h1>

                    <div className="flex gap-6 mt-5 text-gray-600">

                        <span className="flex items-center gap-2">

                            <FaCalendarAlt/>

                            31 Oct 2026

                        </span>

                        <span className="flex items-center gap-2">

                            <FaMapMarkerAlt/>

                            Community Center

                        </span>

                        <span className="flex items-center gap-2">

                            <FaUsers/>

                            18 / 20 Volunteers

                        </span>

                    </div>

                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">

                    LIVE

                </span>

            </div>

            <div className="mt-8">

                <div className="flex justify-between mb-2">

                    <span>Overall Progress</span>

                    <span>72%</span>

                </div>

                <div className="h-3 rounded-full bg-gray-200">

                    <div
                        className="bg-emerald-500 h-3 rounded-full"
                        style={{
                            width:"72%"
                        }}
                    />

                </div>

            </div>

        </div>

    )

}

export default Header;