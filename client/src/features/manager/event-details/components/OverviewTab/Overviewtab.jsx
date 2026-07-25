import EventHealth from "./EventHealth/EventHealth";
import AttendanceOverview from "./AttendanceOverview/AttendanceOverview";
import TeamDistribution from "./TeamDistribution/TeamDistribution";
import RecentActivity from "./RecentActivity/RecentActivity";

import Alerts from "../../../common/Alerts/Alerts";

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

                <Alerts />

            </div>

        </div>

    )

}

export default OverviewTab;