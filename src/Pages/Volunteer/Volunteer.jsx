import React, { useEffect, useState } from "react";
import { getDocs, collection} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import "../../css/card.css";
import { deleteDoc,doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import Spinner from 'react-bootstrap/Spinner';
import { MdDelete } from "react-icons/md";
function Volunteer() {
    const User=useSelector((state)=>state.user);
    const eventcollectionsRef = collection(db, "events");
    const VolunteercollectionsRef=collection(db,"volunteer");

  
  const [EventData,setEventData]=useState([]);
  const [volData,setVolData]=useState([]);
  const [loading,setLoading]=useState(true);

  const getData = async () => {
    
    const voldata=await getDocs(VolunteercollectionsRef);
    let volfilterData=voldata.docs.map((doc)=>({...doc.data(),id:doc.id}));
    volfilterData=volfilterData.filter((doc)=>doc.user_id===User[0][0].id)
    setVolData(volfilterData);

    //all volunteer data is here and is inserted
    const dataDb = await getDocs(eventcollectionsRef);

    let filterData = dataDb.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
   setEventData(filterData);
   
   setLoading(false);
    
  };
  useEffect(() => {
    getData();
    
  }, []);

  
  
 // card
 const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    width: '100%',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxHeight:"fit-content"
    
  },
  section: {
    marginBottom: '16px',
    display:"flex",
    flexDirection:"row",
   
    

  },
 
  image: {
    maxWidth: '30%',
    maxHeight: 'auto',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  userImage: {
    marginLeft:"6%",
    width: '40%',
    height: '110px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width:"50%",
    margin:'0 auto'
  }
};
 const EventCard=()=>{
  return(
    <>
    {
      volData.map((volunteer)=>(
        EventData.map((event)=>{
          if(volunteer.event_id===event.id){
            return(
              <div style={styles.card}>
      {/* Event Details */}
      <h3>Event details</h3>
      <div style={styles.section}>
        <img src={event.Image_url} alt={event.EventName} style={styles.image} className="border"/>
        <div style={{display:"flex",flexDirection:"column",marginLeft:"2vw",lineHeight:"2vh"}}>
        <h2><span className="text-secondary fw-bold">Event Name: </span>{event.EventName.toUpperCase()}</h2>
        <p style={{height:"fit-content",width:"fit-content"}}><span className="text-secondary fw-bold">Description: </span>{event.Desc}</p>
        <p><span className="text-secondary fw-bold">From:</span> {event.From_Date}</p>
        <p><span className="text-secondary fw-bold">To:</span> {event.to_Date}</p>
        </div>
      </div>

      {/* User Details */}
      <h4>Your details</h4>
      <div style={styles.section} >
        <img src={volunteer.Vol_Photo} alt={volunteer.username} style={styles.userImage} className="border"/>
        <div style={{display:"flex",flexDirection:"column",marginLeft:"10%",lineHeight:"1vh"}}>
        <h3>{volunteer.username}</h3>
        <p>{volunteer.email}</p>
        <p>{volunteer.Phone}</p>
        <p>{volunteer.Desc}</p>
        <h4>Status:<span style={{backgroundColor:`${volunteer.status==="Approved"?"#14A131":"#0094D4"}`,color:"white",padding:"3px 5px",borderRadius:"3px",marginLeft:"1vw"}}>{volunteer.status}</span></h4>
        </div>
        
      </div>

      {/* Delete Button */}
      <button style={styles.button} onClick={(e)=>onDelete(volunteer.id)}>
      <MdDelete />
        Delete
      </button>
    </div>
            )
          }
        })
      ))
}
    </>
  )
 }
 const onDelete=(Id)=>{
  const docRef = doc(db,"volunteer",Id);
  deleteDoc(docRef)
  .then(() => {
    console.log("Document successfully deleted!");
  })
  .catch((error) => {
    console.error("Error deleting document: ", error);
  });
  getData();
 }
 const NotShow=()=>{
  return(
      <div style={{height:'54vh',textAlign:'center',color:"#DDEBF0"}}>
          <h1>You Have Not Applied For Any Event</h1>
      </div>
  )
}
//spinner
if(loading){
  return(
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
  )
}
        
   return (
    <>
    <NavBar/>
    <h1 className="text-center text-primary  mt-2 fw-bold " style={{fontFamily:"Bebas Neue"}}>Events You Have Applied</h1>
   <div style={{ margin: "3% 30%", fontFamily: "Franklin Gothic Heavy" }}>
   {volData.length>0?<EventCard />:<NotShow/>}
   
   </div>
   </>
  );
}

export default Volunteer;