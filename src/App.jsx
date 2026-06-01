import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing Page/LandingPage";
import SignupForm from "./Pages/Sign in/SigninPage";
import Navbar from "./component/Main/NavBar";
import LoginPage from "./Pages/Login/LoginPage";
import Dashboard from "./Pages/Volunteer Dashboard/VolunteerDashboard";
import MyEvents from "./Pages/Volunteer Event/VolunteerEventPage";
import VolunteerInvitesPage from "./Pages/Volunteer Invites/VolunteerInvitesPage";
import OrganizationDashboard from "./Pages/Organisation/Dashboard/Dashboard";
import EventDetails from "./Pages/Organisation/Event details/EventDetailsPage";
import CreateEvent from "./Pages/Organisation/Create Event/CreateEventPage";
import PreviousEventsPage from "./Pages/Organisation/Previous Event/PreviousEventPage";
import PreviousEventDetails from "./Pages/Organisation/Previous Event/PreviousEventDetails";
import { ToastContainer} from 'react-toastify';
import OrganizationSetup from "./Pages/Organisation/Dashboard/OrganisationSetup";
import OrganizationProfile from "./Pages/Organisation/Dashboard/OrganizationProfile";
import EditOrganizationApplication from "./Pages/Organisation/Dashboard/OrganisationApplicationEditForm";
import ActivityCenter from "./Pages/Organisation/Dashboard/Activity Centered/ActivityCenter";
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


        <Route path="/vol-dashboard" element=
          {
            <>
              <Navbar />
              <Dashboard />
            </>
          } />

        <Route path="/my-events" element=
          {
            <>
              <Navbar />
              <MyEvents />
            </>
          } />

        <Route path="/my-invites" element=
          {
            <>
              <Navbar />
              <VolunteerInvitesPage />
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
          <Route path = "/organization/activity-center" element={
            <>
              <Navbar />  
              <ActivityCenter />
            </>
           } />

<Route path="/previous-events" element={<><Navbar/><PreviousEventsPage/></>} />
<Route path="/previous-events/:id" element={<><Navbar/><PreviousEventDetails/></>} />

<Route path="/organization/setup" element={<><Navbar/><OrganizationSetup/></>} />
<Route path="/organization/profile" element={<><Navbar/><OrganizationProfile/></>} />
<Route path="/organization/edit/application" element={<><Navbar/>< EditOrganizationApplication/></>} />
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