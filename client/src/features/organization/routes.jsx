import ActivityCenterPage from "./components/activity-center/ActvityCenter.page";
import OrganizationDashboard from "./components/dashboard/Dashboard.page";
import EditOrganizationApplication from "./components/edit-organization-application/OrganizatioEditApplication.page";
import CreateEventPage from "./components/event-create/CreateEvent.page";
import EventDetailsPage from "./components/event-details/EventDetails.page";
import OrganizationProfile from "./components/organization-profile/OrganizationProfile.page";
import OrganizationSetup from "./components/organization-setup/OrganizationSetup.page";
import PreviousEventDetails from "./components/previous-event-details/PreviousEventDetails.page";
import PreviousEventsPage from "./components/previous-event/PreviousEvent.page";
import StaffManagementPage from "./components/staff-management/StaffManagement.page";
import TrackerPage from "./components/tracker/Tracker.page";
const organizationRoutes = [
  {
    path: "/organization/activity-center",
    element: <ActivityCenterPage />,
  },
  {
    path:"/organization/dashboard",
    element:<OrganizationDashboard/>,
  },
  {
    path:"/organization/create-event",
    element:<CreateEventPage/>,
  },
  {
    path:"/organization/event-details/:id",
    element:<EventDetailsPage/>,
  },
  //remove this page
  {
    path:"/organization/previous-event",
    element:<PreviousEventsPage/>
  },
  //this also
  {
    path:"/organization/previous-events/:id",
    element:<PreviousEventDetails/>
  },
  {
    path:"/organization/setup",
    element:<OrganizationSetup/>
  },
  {
    path:"/organization/profile",
    element:<OrganizationProfile/>
  },
  {
    path:"/organization/edit/application",
    element:<EditOrganizationApplication/>
  },
  {
    path:"/organization/tracker",
    element:<TrackerPage/>
  },
  {
    path:"/organization/staff",
    element:<StaffManagementPage/>
  }
  
];

export default organizationRoutes;