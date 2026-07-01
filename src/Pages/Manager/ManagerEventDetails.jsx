import { useState } from "react";


import EventHeader from "../../component/Manager/EventDetails/EventHeader"
import EventTabs from "../../component/Manager/EventDetails/EventTabs";

import OverviewTab from "../../component/Manager/EventDetails/OverviewTabs";
import VolunteerTab from "../../component/Manager/EventDetails/VolunteerTab";
import AttendanceTab from "../../component/Manager/EventDetails/AttendanceTab";
import TimelineTab from "../../component/Manager/EventDetails/TimelineTab";
import TasksTab from "../../component/Manager/EventDetails/TasksTab";

const ManagerEventDetails = () => {

    const [activeTab, setActiveTab] = useState("overview");

    const renderTab = () => {

        switch(activeTab){

            case "overview":
                return <OverviewTab/>;

            case "volunteers":
                return <VolunteerTab/>;

            case "attendance":
                return <AttendanceTab/>;

            case "timeline":
                return <TimelineTab/>;

            case "tasks":
                return <TasksTab/>;

            default:
                return <OverviewTab/>;

        }

    }

    return(

        <div className="space-y-8">

            <EventHeader/>

            <EventTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {renderTab()}

        </div>

    )

}

export default ManagerEventDetails;