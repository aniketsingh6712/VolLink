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
        <Dashboard/>
          </>
        } />

 <Route path="/my-events" element=
        {
          <>
        <Navbar />  
        <MyEvents/>
          </>
        } />

<Route path="/my-invites" element=
        {
          <>
        <Navbar />  
        <VolunteerInvitesPage/>
          </>
        } />

        

 <Route path="/org-dashboard" element=
        {
          <>
        <Navbar />  
        <OrganizationDashboard/>
          </>
        } />

        <Route path="/event-details" element=
        {
          <>
        <Navbar />  
        <EventDetails/>
          </>
        } />


         <Route path="/event-create" element=
        {
          <>
        <Navbar />  
        <CreateEvent/>
          </>
        } />


      </Routes>
    </BrowserRouter>
  );
}

export default App;