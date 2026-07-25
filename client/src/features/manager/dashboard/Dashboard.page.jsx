import React from "react";
import Header from "./components/Header/Header";
// import QuickActions from "../../component/Manager/Dashboard/QuickActions";
import CurrentEventCard from "./components/EventCard/CurrentEvent";

import { currentEvent} from "../Data/managerDashboardData"
import LiveStats from "./components/Stats/LiveStats";
import Alerts from "../common/Alerts/Alerts";

const ManagerDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            <Header />

            {/* <QuickActions actions={quickActions} /> */}
            <CurrentEventCard event={currentEvent} />

            <LiveStats />
            <Alerts />

        </div>
    );
};

export default ManagerDashboard;