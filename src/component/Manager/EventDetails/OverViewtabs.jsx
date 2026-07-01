import EventHealth from "./EventHealth";
import AttendanceOverview from "./AttendanceOverview";
import TeamDistribution from "./TeamDistribution";
import RecentActivity from "./RecentActivity";

import ManagerAlerts from "../dashboard/ManagerAlerts";

const OverviewTab = () => {

    return (

        <div className="space-y-6">

            <EventHealth />

            <div className="grid lg:grid-cols-2 gap-6">

                <TeamDistribution />

                <AttendanceOverview />

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <RecentActivity />

                <ManagerAlerts />

            </div>

        </div>

    )

}

export default OverviewTab;