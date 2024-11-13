import React, { useEffect, useState } from "react";

import { getDocs, collection,updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import "../../css/card.css";
import { doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import NavBar from "../NavBar";
import Events from "../Events";

function Volunteer_Details() {
    const User = useSelector((state) => state.user);
    const eventcollectionsRef = collection(db, "events");
    const VolunteercollectionsRef = collection(db, "volunteer");
    const [ButtonText,setButtonText]=useState("Create Event");
    const [EventData, setEventData] = useState([]);
    const [volData, setVolData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const getData = async () => {
        const voldata = await getDocs(VolunteercollectionsRef);
        let volfilterData = voldata.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setVolData(volfilterData);

        //all volunteer data is here and is inserted
        const dataDb = await getDocs(eventcollectionsRef);
        let filterData = dataDb.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        filterData = filterData.filter((doc) => doc.event_cr_id == User[0][0]?.id);
        setEventData(filterData);
    };
    useEffect(() => {
        getData();
    }, []);
    const styles = {
        card: {
            display: "flex",
            flexDirection: "column",
            border: "1px solid #ddd",
            padding: "16px",
            borderRadius: "8px",
            width: "100%",
            margin: "16px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            
        },
        section: {
            marginBottom: "16px",
            display: "flex",
            flexDirection: "row",
        },
        section2: {
            marginBottom: "16px",
            display: "flex",
            flexDirection: "row",
            border:"0.2px solid black",
            margin:"1vh 16%",
            padding:"5px"
        },

        image: {
            width: "60%",
            height: "40vh",
            objectFit: "cover",
            borderRadius: "8px",
        },
        userImage: {
            marginLeft: "6%",
            
            width: "30%",
            height:"26vh",
            objectFit: "cover",
            borderRadius: "8px",
        },
        button: {
            padding: "10px 20px",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        },
    };
    const EventCard = () => {
        return (
            <>
                {EventData.map((event) => {
                    return (
                        
                            <div style={styles.card}>
                                {/* Event Details */}
                                <h3 style={{fontWeight:"700",fontSize:"3vw"}}>Event Details</h3>
                                <div style={styles.section}>
                                    <img
                                        src={event.Image_url}
                                        alt={event.EventName}
                                        style={styles.image}
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginLeft: "5%",
                                        }}
                                    >
                                        <h2>{event.EventName}</h2>
                                        <p>{event.Desc}</p>
                                        <p>
                                            <strong>From:</strong> {event.From_Date}
                                        </p>
                                        <p>
                                            <strong>To:</strong> {event.to_Date}
                                        </p>
                                    </div>
                                </div>
                                <h4 className="text-primary">Volunteers Applied</h4>
                                {
                                    volData.map((volunteer)=>{
                                        if(volunteer.event_id===event.id && volunteer.status==="Pending"){
                                        return(
                                            <div style={styles.section} >
                                            <img src={volunteer.Vol_Photo} alt={volunteer.username} style={styles.userImage} />
                                            <div style={{display:"flex",flexDirection:"column",marginLeft:"10%"}}>
                                            <h3>{volunteer.username}</h3>
                                            <p>{volunteer.email}</p>
                                            <p>{volunteer.Phone}</p>
                                            <p>{volunteer.Desc}</p>
                                            <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                                                <button style={{backgroundColor:"#2CFC9B",color:"white",padding:"3px 5px",borderRadius:"3px",width:"10vw",marginRight:"7%"}}
                                                onClick={()=>changeStatus("Approved",volunteer.id,volunteer.username)}
                                                >Approve</button>
                                                <button style={{backgroundColor:"#D45252",color:"white",padding:"3px 5px",borderRadius:"3px",width:"10vw"}}
                                                onClick={()=>changeStatus("Rejected",volunteer.id,volunteer.username)}
                                                >Reject</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        )
                                    }
                                    })
                                }
                                {/**--------------------------------------------for approved candidates--------------------------------------- */}

                                <h4 style={{textAlign:"center",fontSize:"2vw",color:"#020F85",fontFamily:"Helvetica",textDecoration:"underline"}}>Approved Volunteers</h4>
                                {
                                    volData.map((volunteer)=>{
                                        if(volunteer.event_id===event.id && volunteer.status==="Approved"){
                                        return(
                                            <div style={styles.section2} >
                                            <img src={volunteer.Vol_Photo} alt={volunteer.username} style={styles.userImage} />
                                            <div style={{display:"flex",flexDirection:"column",marginLeft:"10%"}}>
                                            <h3>{volunteer.username}</h3>
                                            <p>{volunteer.email}</p>
                                            <p>{volunteer.Phone}</p>
                                            <p style={{color:"#929CA1"}}>{volunteer.Desc}</p>
                                            <div style={{display:"flex",justifyContent:"center"}}>
                                            <button style={{backgroundColor:"#D45252",color:"white",padding:"3px 5px",borderRadius:"3px",width:"10vw"}}
                                                onClick={()=>changeStatus("Rejected",volunteer.id,volunteer.username)}
                                                >Reject</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        )
                                    }
                                    })
                                }
                            </div>
                        
                    );
                })}
            </>
        );
    };
    const changeStatus=(status,id,name)=>{
        const docRef = doc(db,"volunteer",id);
   updateDoc(docRef,{status:status})
    .then(() => {
        alert(`${name}:Status successfully changed to ${status}`);
    })
    .catch((error) => {
        console.error("Error deleting document: ", error);
    });
    getData();
    }
    const changeEventForm=()=>{
        if(showForm){
            setButtonText("Create Event");
            setShowForm(false);

        }
        if(!showForm){
            setButtonText("Show Events");
            setShowForm(true);
        }
    }

    return (
        <>
        <NavBar/>
        <button
      onClick={changeEventForm}
      style={{
       
        marginLeft:"87%",
        backgroundColor: '#0789C9',
        color: '#fff',
        border: 'none',
        fontSize:"1vw",
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop:"0.8%",
      }}
    >
      {ButtonText}
    </button>
    <div style={{ margin: "3% 13%", fontFamily: "Franklin Gothic Heavy" }}>
    {showForm?<Events/>:<EventCard/>}
    </div>
    </>
    )
}

export default Volunteer_Details;
