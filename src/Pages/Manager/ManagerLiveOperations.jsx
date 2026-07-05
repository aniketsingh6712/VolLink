import ReportHeader from "../../component/Manager/LiveOperations/ReportHeader";
import AnalyticsCards from "../../component/Manager/LiveOperations/AnalyticsCards";
import OperationalAreaGrid from "../../component/Manager/LiveOperations/OperationalAreaGrid";
import AvailableVolunteerSidebar from "../../component/Manager/LiveOperations/AvailableVolunteerSidebar/AvailableVolunteerSidebar";
import RecentHighlights from "../../component/Manager/LiveOperations/RecentHighlights.jsx/RecentHighlights";

const ManagerLiveOperations = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Header */}

        <ReportHeader />

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

export default ManagerLiveOperations;