import React from 'react'
import NavBar from '../../components/NavBar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getDocs, collection, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { useEffect } from 'react';
import { doc } from 'firebase/firestore';
import { MdDelete } from 'react-icons/md';
function Profile() {
    const User = useSelector((state) => state.user);
    const nav = useNavigate();

    const NotShow = () => {
        return (
            <div style={{ height: '54vh', textAlign: 'center', color: "#DDEBF0" }}>
                <div style={{ marginTop: "30vh", fontWeight: "700" }}>
                    <h1 style={{ fontSize: "4vw" }}>You Have Not Loged In</h1>
                    <h2 style={{ fontSize: "2vw" }}>Please Login ... <button class="btn btn-secondary" type="button" onClick={() => {
                        nav("/");
                    }}>Login</button></h2>
                </div>
            </div>
        )
    }
    const Profiler = () => {
        return (

            <>
                <h2 className='text-start ms-5 mt-3 text-secondary'>Your Events</h2>
                {EventData.map((event) => {

                    return (
                        <div style={styles.card}>
                            {/* Event Details */}
                            <h3 style={{ fontWeight: "800", fontSize: "2vw" }}>Event Details</h3>
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
                                    <h2><span className='text-secondary fw-bold'>Event Name: </span>{event.EventName.toUpperCase()}</h2>
                                    <p><span className='text-secondary fw-bold fs-medium'>Event Description: </span>{event.Desc}</p>
                                    <p>
                                        <span className='text-secondary fw-bold'>From:</span> {event.From_Date}
                                    </p>
                                    <p>
                                        <span className='text-secondary fw-bold'>To:</span> {event.to_Date}
                                    </p>


                                    <p><b>Total Number of Volunteer: </b><span style={{ color: "blue" }}>{volData.filter((volunteer) => volunteer.event_id === event.id && volunteer.status === "Approved").length}</span></p>
                                    <button style={styles.button} onClick={() => onDelete(event.id)}>
                                        <MdDelete /> Delete
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </>

        )
    }

    const [EventData, setEventData] = useState([]);
    const [volData, setVolData] = useState([]);
    const eventcollectionsRef = collection(db, "events");
    const VolunteercollectionsRef = collection(db, "volunteer");
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
            padding: "1.5rem",
            borderRadius: "8px",
            width: "70vw",
            margin: "1vh 4vw",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",

        },
        section: {
            marginBottom: "16px",
            display: "flex",
            flexDirection: "row",
        },

        image: {
            width: "40%",
            maxHeight: '40vh',
            objectFit: 'cover',
            borderRadius: '8px',
        },

        button: {
            padding: "10px 20px",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width:"30%"
        },
    };
    //delete
    const onDelete = (Id) => {
        const docRef = doc(db, "events", Id);
        deleteDoc(docRef)
            .then(() => {
                volData.map((volunteer) => {
                    if (volunteer.event_id === Id) {
                        const volRef = doc(db, "volunteer", volunteer.id);
                        deleteDoc(volRef);
                    }
                })
                console.log("Document successfully deleted!");
            })
            .catch((error) => {
                console.error("Error deleting document: ", error);
            });
        getData();
    }
    return (
        <>
            <NavBar />
            {User.length && <h1 className='text-center mt-1 fw-bold' style={{ color: "#3EACCF" }}>Welcome {User[0][0].username}</h1>}

            {User.length > 0 ? <Profiler /> : <NotShow />}

        </>
    )
}

export default Profile;