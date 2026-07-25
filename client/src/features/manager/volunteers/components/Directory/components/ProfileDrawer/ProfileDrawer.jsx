import VolunteerInfoCard from "./components/VolunteerInfoCard";
import VolunteerAttendanceCard from "./components/VolunteerAttendanceCard";
import VolunteerSkillsCard from "./components/VolunteerSkillsCard";
import VolunteerAssignedTasks from "./components/VolunteerAssignedTasks";
import { FaTimes } from "react-icons/fa";
const ProfileDrawer = ({
    open,
    onClose,
    volunteer
}) => {

    return (

        <>

            {

                open && (

                    <div className="fixed inset-0 bg-black/40 z-40">

                        <div
                            className="absolute right-0 top-0 w-full max-w-lg h-full bg-white shadow-2xl overflow-y-auto"
                        >

                            <div className="sticky top-10 bg-white border-b p-6 flex justify-between">

                                <h2 className="text-2xl font-bold">

                                    Volunteer Profile

                                </h2>


                                
                                    <button onClick={onClose} className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
                                        Close
                                    </button>
                               

                            </div>

                            <div className="p-6 space-y-6">

                                <VolunteerInfoCard volunteer={volunteer} />

                                <VolunteerAttendanceCard />

                                <VolunteerSkillsCard />

                                <VolunteerAssignedTasks />

                            </div>

                        </div>

                    </div>

                )

            }

        </>

    )

}

export default ProfileDrawer;