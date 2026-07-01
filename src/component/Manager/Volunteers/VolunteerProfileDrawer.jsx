import VolunteerInfoCard from "./volunteerProfile/VolunteerInfoCard";
import VolunteerAttendanceCard from "./volunteerProfile/VolunteerAttendanceCard";
import VolunteerSkillsCard from "./volunteerProfile/VolunteerSkillsCard";
import VolunteerAssignedTasks from "./volunteerProfile/VolunteerAssignedTasks";

const VolunteerProfileDrawer = ({
    open,
    onClose
}) => {

    return(

        <>

            {

                open && (

                    <div className="fixed inset-0 bg-black/40 z-40">

                        <div
                            className="absolute right-0 top-0 w-full max-w-lg h-full bg-white shadow-2xl overflow-y-auto"
                        >

                            <div className="sticky top-0 bg-white border-b p-6 flex justify-between">

                                <h2 className="text-2xl font-bold">

                                    Volunteer Profile

                                </h2>

                                <button
                                    onClick={onClose}
                                >

                                    ✕

                                </button>

                            </div>

                            <div className="p-6 space-y-6">

                                <VolunteerInfoCard/>

                                <VolunteerAttendanceCard/>

                                <VolunteerSkillsCard/>

                                <VolunteerAssignedTasks/>

                            </div>

                        </div>

                    </div>

                )

            }

        </>

    )

}

export default VolunteerProfileDrawer;