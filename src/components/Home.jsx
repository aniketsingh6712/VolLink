import React from 'react'
import NavBar from './NavBar';
import { auth } from '../firebase/firebase-config';
import AllEvents from './main body/AllEvents';
function Home() {
  
  return (
    <>
    <NavBar/>
    <AllEvents/>
    </>
  )
}

export default Home;