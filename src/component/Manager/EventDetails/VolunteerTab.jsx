import VolunteerToolbar from "./volunteers/VolunteerToolbar";
import VolunteerTable from "./volunteers/VolunteerTable";

const VolunteerTab = () => {

    return (

        <div className="space-y-6">

            <VolunteerToolbar />

            <VolunteerTable />

        </div>

    );

}

export default VolunteerTab;