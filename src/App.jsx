import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing Page/LandingPage";
import SignupForm from "./Pages/Sign in/SigninPage";
import Navbar from "./component/Main/NavBar";
import LoginPage from "./Pages/Login/LoginPage";
import Dashboard from "./Pages/Volunteer Dashboard/VolunteerDashboard";
import MyEvents from "./Pages/Volunteer Event/VolunteerEventPage";
import VolunteerInvitesPage from "./Pages/Volunteer Invites/VolunteerInvitesPage";
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

        
      <Route path="/volunteer" element=
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

        



      </Routes>
    </BrowserRouter>
  );
}

export default App;