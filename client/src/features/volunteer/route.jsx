import Dashboard from "./dashboard/Dashboard";
import EventStatusPage from "./event-status/EventStatus.page";
import VolunteerEventsPage from "./events/EventsPage";
import InvitationPage from "./invites/InvitationPage";
import MyEvents from "./my-events/MyEventsPage";
const volunteerRoutes = [
  {
    path: "/volunteer/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/volunteer/eventstatus",
    element: <EventStatusPage />,
  },
  {
    path: "/volunteer/events",
    element: <VolunteerEventsPage />,
  },
  {
    path:"/volunteer/invitations",
    element:<InvitationPage/>,
  },
  {
    path:"/volunteer/myevents",
    element:<MyEvents/>,
  }
 
];

export default volunteerRoutes;