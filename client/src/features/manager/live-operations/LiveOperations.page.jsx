import ReportHeader from "./components/ReportHeader/ReportHeader";
import AnalyticsCards from "./components/AnalyticsCards/AnalyticsCards";
import OperationalAreaGrid from "./components/OperationalGrid/OperationalAreaGrid";
import AvailableVolunteerSidebar from "./components/AvailableVolunteer/AvailableVolunteerSideBar";
import RecentHighlights from "./components/RecentHighlights/RecentHighlights";
import EventOverview from "./components/EventOverview/EventOverview";
const LiveOperationsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Header */}

        <ReportHeader />
    <EventOverview />
        {/* Analytics */}

        <AnalyticsCards />

        {/* Main Content */}

        <div className="grid grid-cols-12 gap-6 mt-8">

          {/* Left Section */}

          <div className="col-span-12 xl:col-span-8 space-y-8">

            <OperationalAreaGrid />

            <RecentHighlights />

          </div>

          {/* Right Sidebar */}

          <div className="col-span-12 xl:col-span-4">

            <div className="sticky top-6">

              <AvailableVolunteerSidebar />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LiveOperationsPage;