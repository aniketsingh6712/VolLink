import ActivityCenterPage from "./components/activity-center/ActvityCenter.page";
import OrganizationDashboard from "./components/dashboard/Dashboard.page";
import CreateEventPage from "./components/event-create/CreateEvent.page";
import EventDetailsPage from "./components/event-details/EventDetails.page";
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
  }
  
];

export default organizationRoutes;