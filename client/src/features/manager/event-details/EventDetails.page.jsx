import { useState } from "react";


import Header from "./components/Header/Header"
import EventTabs from "./components/EventTabs/EventTabs";
import OverviewTab from "./components/OverviewTab/Overviewtab";
import VolunteerTab from "./components/VolunteerTab/VolunteerTab";
import AttendanceTab from "./components/AttendanceTab/AttendanceTab";
import TimelineTab from "./components/TimelineTab/TimelineTab";
import TasksTab from "./components/TasksTab/TasksTab"

const EventDetailsPage = () => {

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

            <Header/>

            <EventTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {renderTab()}

        </div>

    )

}

export default EventDetailsPage;