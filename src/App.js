
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Login from './components/account/Login';
import Home from './components/Home';
import SignIn from './components/account/Signin';

import Volunteer from './components/volunteer/Volunteer';
import Volunteer_Details from './components/Creater/Volunteer_Details';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <div >
      <Router>
      <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/home" element={<Home/>}/>\
      <Route exact path="/" element={<SignIn/>}/>
      
      <Route exact path="/volunteer" element={<Volunteer/>}/>
      <Route exact path="/event" element={<Volunteer_Details/>}/>
      <Route exact path="/profile" element={<Profile/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
