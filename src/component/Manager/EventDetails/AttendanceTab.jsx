import AttendanceStats from "./attendance/AttendanceStats";
import AttendanceToolbar from "./attendance/AttendanceToolbar";
import AttendanceTable from "./attendance/AttendanceTable";

const AttendanceTab = () => {

    return (

        <div className="space-y-6">

            <AttendanceStats/>

            <AttendanceToolbar/>

            <AttendanceTable/>

        </div>

    );

}

export default AttendanceTab;