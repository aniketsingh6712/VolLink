import React, { useEffect, useState } from "react";
import { getDocs, collection, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import "../../css/card.css";
import { doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import Create_Event from "./Create_Event";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
//modal form to display volunteer details
function Volunteer_Detail(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            variant="dark"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton centered>
                <Modal.Title >
                    Volunteer Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-row justify-content-evenly align-items-center">
                    <div>
                        <img src={props.data.Vol_Photo}  alt={props.data.username} style={{width:"13vw",height:"auto"}}/>
                    </div>
                    <div className="d-flex flex-column fw-semibold">
                        <h3>Name: <span className="text-secondary fw-bold">{props.data.username}</span></h3>
                        <p>Email: <span className="text-secondary fw-bold">{props.data.email}</span></p>
                        <p>Phone: <span className="text-secondary fw-bold">{props.data.Phone}</span></p>
                        <p style={{maxHeight:"fit-content"}}>Description: <span className="text-secondary fw-bold">{props.data.Desc}</span></p>
                    </div>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
function Events_Details() {
    const User = useSelector((state) => state.user);
    const eventcollectionsRef = collection(db, "events");
    const VolunteercollectionsRef = collection(db, "volunteer");
    const [ButtonText, setButtonText] = useState("Create Event");
    const [EventData, setEventData] = useState([]);
    const [volData, setVolData] = useState([]);
    const [showForm,setShowForm]=useState(false);//for event creation form
    const [AppliedShow, setAppliedVolunter] = useState(false);//to show applied volunteer details
    const [ApproveShow, setApprovedVolunter] = useState(false);//to show applied volunteer details
    const [loading,setLoading]=useState(true);//to show spinner
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
        setLoading(false);
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

        image: {
            width: "60%",
            height: "40vh",
            objectFit: "cover",
            borderRadius: "8px",
        },
    };
    const EventCard = () => {
        return (
            <>
           <h1 className="text-center text-primary  fw-bold " style={{fontFamily:"Bebas Neue"}}>Events You Have Created</h1>
                {EventData.map((event) => {
                    return (

                        <div style={styles.card}>
                            {/* Event Details */}
                            <h3 style={{ fontWeight: "700", fontSize: "2.3vw" }}>Event Details</h3>
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
                                    <h2><span className="fw-bold text-secondary">Name: </span>{event.EventName.toUpperCase()}</h2>
                                    <p><span className="fw-bold text-secondary">Description: </span>{event.Desc}</p>
                                    <p>
                                        <span className="fw-bold text-secondary">From:</span > {event.From_Date}
                                    </p>
                                    <p>
                                        <span className="fw-bold text-secondary">To:</span > {event.to_Date}
                                    </p>
                                </div>
                            </div>
                            <h4 className="text-dark">Volunteers Applied</h4>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Volunteer Name</th>
                                        <th>Phone Number</th>
                                        <th>Volunteer Details</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        volData.map((volunteer) => {
                                            if (volunteer.event_id === event.id && volunteer.status === "Pending") {
                                                return (
                                                    //-----------use table
                                                    <>
                                                    <tr>
                                                        <td>{volunteer.username}</td>
                                                        <td> <p>{volunteer.Phone}</p></td>
                                                        <td className="text-center"><button type="button" class="btn btn-primary"
                                                        onClick={()=>setAppliedVolunter(true)}>Volunteer Details</button></td>
                                                        <td>
                                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                                                <button style={{ backgroundColor: "#2CFC9B", color: "white", padding: "3px 5px", borderRadius: "3px", width: "10vw", marginRight: "7%" }}
                                                                    onClick={() => changeStatus("Approved", volunteer.id, volunteer.username)}
                                                                >Approve</button>
                                                                <button style={{ backgroundColor: "#D45252", color: "white", padding: "3px 5px", borderRadius: "3px", width: "10vw" }}
                                                                    onClick={() => changeStatus("Rejected", volunteer.id, volunteer.username)}
                                                                >Reject</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <Volunteer_Detail show={AppliedShow} onHide={()=>setAppliedVolunter(false)} data={volunteer}/>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </tbody>
                            </Table>
                            {/**--------------------------------------------for approved candidates--------------------------------------- */}

                            <h4 style={{  fontSize: "1.7vw", color: "#020F85", fontFamily: "Helvetica"}}>Approved Volunteers</h4>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Volunteer Name</th>
                                        <th>Phone Number</th>
                                        <th>Volunteer Details</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        volData.map((volunteer) => {
                                            if (volunteer.event_id === event.id && volunteer.status === "Approved") {
                                                //-------------use table
                                                return (
                                                    <>
                                                    <tr>
                                                        <td>
                                                            {volunteer.username}
                                                        </td>
                                                        <td>
                                                            {volunteer.Phone}
                                                        </td>
                                                        <td className="text-center"><button type="button" class="btn btn-primary fw-medium" onClick={()=>setApprovedVolunter(true)}>Volunteer Details</button></td>
                                                        <td className="text-center">
                                                            <button style={{ backgroundColor: "#D45252", color: "white", padding: "3px 5px", borderRadius: "3px", width: "10vw" }}
                                                                onClick={() => changeStatus("Rejected", volunteer.id, volunteer.username)}
                                                            >Reject</button>
                                                        </td>

                                                    </tr>
                                                    <Volunteer_Detail show={ApproveShow} onHide={()=>setApprovedVolunter(false)} data={volunteer}/>
                                                    </>
                                                   
                                                )
                                            }

                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                    );
                })}
            </>
        );
    };

    //updating status of volunteer
    const changeStatus = (status, id, name) => {
        const docRef = doc(db, "volunteer", id);
        updateDoc(docRef, { status: status })
            .then(() => {
                alert(`${name}:Status successfully changed to ${status}`);
            })
            .catch((error) => {
                console.error("Error deleting document: ", error);
            });
        getData();
    }

    // for showing events page and create event form
    const changeEventForm = () => {
        if (showForm) {
            setButtonText("Create Event");
            setShowForm(false);

        }
        if (!showForm) {
            setButtonText("Show Events");
            setShowForm(true);
        }
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
            <NavBar />
            <button
                onClick={changeEventForm}
                style={{

                    marginLeft: "87%",
                    backgroundColor: '#0789C9',
                    color: '#fff',
                    border: 'none',
                    fontSize: "1vw",
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: "0.8%",
                }}
            >
                {ButtonText}
            </button>
            <div style={{ margin: "2% 13%", fontFamily: "Franklin Gothic Heavy" }}>
                {showForm ? <Create_Event /> : <EventCard />}
            </div>
        </>
    )
}

export default Events_Details;
