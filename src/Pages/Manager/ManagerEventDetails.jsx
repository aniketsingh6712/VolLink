import { useState } from "react";

import EventHeader from "../../components/manager/eventDetails/EventHeader";
import EventTabs from "../../components/manager/eventDetails/EventTabs";

import OverviewTab from "../../components/manager/eventDetails/OverviewTab";
import VolunteerTab from "../../components/manager/eventDetails/VolunteerTab";
import AttendanceTab from "../../components/manager/eventDetails/AttendanceTab";
import TimelineTab from "../../components/manager/eventDetails/TimelineTab";
import TasksTab from "../../components/manager/eventDetails/TasksTab";

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