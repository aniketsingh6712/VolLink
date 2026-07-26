import Dashboard from "./dashboard/Dashboard.page";
import MyEventsPage from "./my-events/MyEvents.page";
import LiveOperationsPage from "./live-operations/LiveOperations.page";
import EventDetailsPage from "./event-details/EventDetails.page";
import EventApplications from "./event-application/EventApplication.page";
import AnnouncementPage from "./announcement/Announcement.page";
import VolunteersPage from "./volunteers/Volunteers.page";
const managerRoutes = [
  {
    path: "/organization/manager",
    element: <Dashboard />,
  },
  {
     path: "/organization/manager/myevents",
    element: <MyEventsPage />,
  },
  {
     path: "/organization/manager/eventdetails",
    element: <EventDetailsPage />,
  },
  {
     path: "/organization/manager/volunteers",
    element: <VolunteersPage />,
  },
  {
     path: "/organization/manager/liveoperations",
    element: <LiveOperationsPage />,
  },
  {
     path: "/organization/manager/announcement",
    element: <AnnouncementPage />,
  },
  {
     path: "/organization/manager/eventapplication",
    element: <EventApplications />,
  },

];

export default managerRoutes;