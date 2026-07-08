import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing Page/LandingPage";
import SignupForm from "./Pages/Sign in/SigninPage";
import Navbar from "./component/Main/NavBar";
import LoginPage from "./Pages/Login/LoginPage";

import MyEvents from "./Pages/Volunteer Event/VolunteerEventPage";
import VolunteerInvitesPage from "./Pages/Volunteer Invites/VolunteerInvitesPage";
import OrganizationDashboard from "./Pages/Organisation/Dashboard/Dashboard";
import EventDetails from "./Pages/Organisation/Event details/EventDetailsPage";
import CreateEvent from "./Pages/Organisation/Create Event/CreateEventPage";
import PreviousEventsPage from "./Pages/Organisation/Previous Event/PreviousEventPage";
import PreviousEventDetails from "./Pages/Organisation/Previous Event/PreviousEventDetails";
import { ToastContainer } from 'react-toastify';
import OrganizationSetup from "./Pages/Organisation/Dashboard/OrganisationSetup";
import OrganizationProfile from "./Pages/Organisation/Dashboard/OrganizationProfile";
import EditOrganizationApplication from "./Pages/Organisation/Dashboard/OrganisationApplicationEditForm";
import ActivityCenter from "./Pages/Organisation/Dashboard/Activity Centered/ActivityCenter";
import Tracker from "./Pages/Organisation/Tracking/Tracker";
import VolunteerInvitations from "./Pages/Volunteer Invites/VolunteerInvitations";
import EventStatus from "./Pages/Events Status/EventStatus";
import VolunteerHome from "./Pages/Volunteer/Home/volunteerHome.page";
import ManagerDashboard from "./Pages/Manager/ManagerDashboard";
import ManagerMyEvents from "./Pages/Manager/ManagerMyEvent";
import ManagerEventDetails from "./Pages/Manager/ManagerEventDetails";
import ManagerVolunteers from "./Pages/Manager/Manager_Volunteer";
import ManagerLiveOperations from "./Pages/Manager/ManagerLiveOperations";
import ManagerCommunicationPage from "./Pages/Manager/ManagerCommunicationPage";
import VolunteerEventsPage from "./Pages/Volunteer Dashboard/VolunteerEventsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element=
          {
            <>
              <Navbar />
              <SignupForm />
            </>
          } />

        <Route path="/login" element=
          {
            <>
              <Navbar />
              <LoginPage />
            </>
          } />

        <Route path="/volunteer/dashboard" element=
          {
            <>
              <Navbar />
              <VolunteerHome />
            </>
          } />
        <Route path="/volunteer/events" element=
          {
            <>
              <Navbar />
              <VolunteerEventsPage />
            </>
          } />

        <Route path="/volunteer/my-events" element=
          {
            <>
              <Navbar />
              <MyEvents />
            </>
          } />

        <Route path="/volunteer/invites" element=
          {
            <>
              <Navbar />
              <VolunteerInvitesPage />
            </>
          } />
        <Route path="/volunteer/invitations" element=
          {
            <>
              <Navbar />
              <VolunteerInvitations />
            </>
          } />

        <Route path="/volunteer/status" element={
          <>
            <Navbar />
            <EventStatus />
          </>
        } />

        <Route path="/organization/dashboard" element=
          {
            <>
              <Navbar />
              <OrganizationDashboard />
            </>
          } />

        <Route path="/organization/event-details/:id" element=
          {
            <>
              <Navbar />
              <EventDetails />
            </>
          } />


        <Route path="/event-create" element=
          {
            <>
              <Navbar />
              <CreateEvent />
            </>
          } />
        <Route path="/organization/activity-center" element={
          <>
            <Navbar />
            <ActivityCenter />
          </>
        } />

        <Route path="/previous-events" element={<><Navbar /><PreviousEventsPage /></>} />
        <Route path="/previous-events/:id" element={<><Navbar /><PreviousEventDetails /></>} />

        <Route path="/organization/setup" element={<><Navbar /><OrganizationSetup /></>} />
        <Route path="/organization/profile" element={<><Navbar /><OrganizationProfile /></>} />
        <Route path="/organization/edit/application" element={<><Navbar />< EditOrganizationApplication /></>} />
        <Route path="/organization/tracker" element={<><Navbar /><Tracker /></>} />

        <Route path="/organization/manager" element={<><Navbar /><ManagerDashboard /></>} />
        <Route path="/organization/manager/myevents" element={<><Navbar /><ManagerMyEvents /></>} />
        <Route path="/organization/manager/eventdetails" element={<><Navbar /><ManagerEventDetails /></>} />
        <Route path="/organization/manager/volunteers" element={<><Navbar /><ManagerVolunteers /></>} />
        <Route path="/organization/manager/liveoperations" element={<><Navbar /><ManagerLiveOperations /></>} />
        <Route path="/organization/manager/announcement" element={<><Navbar /><ManagerCommunicationPage /></>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;