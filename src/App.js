
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import Home from "./Pages/Home/Home";
import Volunteer from './Pages/Volunteer/Volunteer';
import Events_Details from './Pages/Event/Event_Details';
import Profile from './Pages/Profile/Profile';
function App() {
  return (
    <div >
      <Router>
      <Routes>
      <Route exact path="/signup" element={<Signup/>}/>
      
      <Route exact path="/" element={<Signin/>}/>

      <Route exact path="/home" element={<Home/>}/>
      
      <Route exact path="/volunteer" element={<Volunteer/>}/>
      <Route exact path="/event" element={<Events_Details/>}/>
      <Route exact path="/profile" element={<Profile/>}/>

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
