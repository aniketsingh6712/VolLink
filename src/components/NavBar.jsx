import React, { useState } from 'react'
import '../css/navBar.css';

import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/firebase-config';
import { signOut} from 'firebase/auth';
import { FaSnowflake } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {RemoveUser} from '../redux/userslicer';
export default function NavBar() {

  const User=useSelector((state)=>state.user);//[[{}]] like this values is there
  const nav=useNavigate();
  const dispatch=useDispatch();

  const logout=async ()=>{
    try{
      await signOut(auth);
      dispatch(RemoveUser(User));
      nav('/')
    }
    catch(err){
      console.error(err);
    }
  }
  const [top,setTop]=useState("navbar")
  function myFunction() { 
    
    if (top === "navbar") {
      setTop("navbar responsive");
      console.log(top)
    } else {
      setTop("navbar")
      console.log(top);
    }
  }


  return (
    <div className={top}>
            <div className="work">
            <NavLink className="navbar-brand fw-600 logo" to="/home"><FaSnowflake/> VOL-LINK</NavLink>
       
        <a href="#" className="btn btn-outline-dark" style={{textDecoration:"none",border:'none'}}><span className="icon" style={{fontSize:"24px",cursor:"pointer",marginRight: '20px',color:"white",padding:'2px'}} onClick={myFunction}>&#9776;</span></a>
            </div>
        <div className="sub-navbar">
           
            <ul >
        <li className="nav-item">
          <NavLink className="nav-link active"  role="button" data-bs-toggle="button" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" role="button" data-bs-toggle="button" to="/event">Events</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link"  role="button" data-bs-toggle="button" aria-pressed="true" to="/volunteer">Volunteer</NavLink>
        </li>
        
      </ul>
      <div className='btn'>
      
      <NavLink to="/profile" className="btn btn-dark " ><i class="fa fa-solid fa-user"></i>&nbsp; Profile</NavLink>
      {!auth?.currentUser && <NavLink to="/" className="btn btn-dark"  data-bs-toggle="button" ><i className="fa fa-sign-in me-1"></i>Login</NavLink>}
      {auth?.currentUser &&<button to="#" className="btn btn-dark ms-2" onClick={logout}><i class="fa fa-solid fa-right-from-bracket"></i>Logout</button>}
      
      </div>
        </div>
    </div>
  )
}
