import Stats from "./components/Stats/AttendanceStats";
import AttendanceToolbar from "./components/Toolbar/AttendanceToolbar";
import AttendanceTable from "./components/Table/Attendancetable";

const AttendanceTab = () => {

    return (

        <div className="space-y-6">

            <Stats/>

            <AttendanceToolbar/>

            <AttendanceTable/>

        </div>

    );

}

export default AttendanceTab;