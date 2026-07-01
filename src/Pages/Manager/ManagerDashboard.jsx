import React from "react";
import WelcomeHeader from "../../component/Manager/Dashboard/welcomeHeader";
// import QuickActions from "../../component/Manager/Dashboard/QuickActions";
import CurrentEventCard from "../../component/Manager/Dashboard/CurrentEvent";

import { currentEvent, quickActions } from "./Data/ManagerDashboardData";
import LiveStats from "../../component/Manager/Dashboard/LiveStats";
import ManagerAlerts from "../../component/Manager/Dashboard/ManagerAlerts";

const ManagerDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            <WelcomeHeader />

            {/* <QuickActions actions={quickActions} /> */}
            <CurrentEventCard event={currentEvent} />

            <LiveStats />
            <ManagerAlerts />

        </div>
    );
};

export default ManagerDashboard;