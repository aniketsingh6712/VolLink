import React, { useState ,useEffect} from "react";

import "../css/Events.css";
import { storage } from "../firebase/firebase-config";
import { getDownloadURL, ref,uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { useSelector } from "react-redux";
import { IoIosOptions } from "react-icons/io";
function Events() {
  const User=useSelector((state)=>state.user);
    const nav=useNavigate();
   
  const [Data, setData] = useState({
    
    eventname: "",
    desc: "",
    from_Date: "",
    to_Date: "",
    image_url:"",
    eventType:"",
    
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    // Update the disabled state of the submit button
    useEffect(() => {
        const allFieldsFilled = Object.values(Data).every((field) => field.trim() !== '');
        setIsSubmitDisabled(!allFieldsFilled);
    }, [Data]);
  const currentDate = new Date();
  const curr_time=currentDate.toISOString();
  const [image,SetImage]=useState(null);

  const UploadImage=()=>{
    if(image==null) return;
    const imageref=ref(storage,`events/${image.name+v4()}`);
    uploadBytes(imageref,image).then((snaphsot)=>{
        getDownloadURL(snaphsot.ref).then((url)=>{
            alert("Image is uploaded");
            setData((prev)=>({...prev,image_url:url}));
        });

    });

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const Submit = () => {
    
    Details();
    
    nav("/home");

  };


  const usercollectionsRef=collection(db,"events");

  const Details=async()=>{
    try{
    //const data=await getDocs(usercollectionsRef);
    await addDoc(usercollectionsRef,{username:User[0][0].username,Phone:User[0][0].Phone,email:User[0][0].email,EventName:Data.eventname,Desc:Data.desc,
        From_Date:Data.from_Date,to_Date:Data.to_Date,Image_url:Data.image_url,curr_time:curr_time,event_cr_id:User[0][0].id,EventType:Data.eventType
    })
  }
    catch(err){
      console.error(err);
    }
  };
  
  return (
    <>
    
      <div className="form">
        <div className="header">
          <h1 style={{ color: "#2368B2", fontSize: "43px", fontWeight: "600" }}>
            Event Page
          </h1>
          <h3>Create your Event</h3>
        </div>
        

        <div className="mb-3" style={{ width: "80%", marginLeft: "7%" }}>
          <input
            type="text"
            name="eventname"
            value={Data.eventname}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleChange}
            placeholder="&#xf27a;   Event Name"
            required
          />
        </div>
        <div className="mb-3" style={{ width: "80%", marginLeft: "7%" }}>
        <select style={{width:"100%",backgroundColor:"rgb(210, 237, 245)",height:"5vh",borderRadius:"3px"}}
        id="eventType"
        name="eventType" // Name should match the state key
        value={Data.eventType}
        onChange={handleChange}
      >
        <option value=""><IoIosOptions/>  Select an event type</option>
        <option value="healthcare">Healthcare</option>
        <option value="social">Social</option>
        <option value="educational">Educational</option>
        <option value="cultural">Cultural</option>
        <option value="tech">Tech</option>
        <option value="seminar">Seminar</option>
      </select>
        </div>

        <div className="mb-3" style={{ width: "80%", marginLeft: "7%" }}>
          <textarea
            name="desc"
            value={Data.desc}
            className="form-control"
            onChange={handleChange}
            placeholder="&#xf27a;   Event Description"
            rows="4"
            required
          />
        </div>

        <div
          className="mb-3"
          style={{
            width: "80%",
            marginLeft: "7%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

          }}
        >
          <div
            className="date"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label
              htmlFor="fromDate"
              style={{ marginBottom: "2px", fontWeight: "600" }}
            >
              From Date
            </label>
            <input
              type="date"
              name="from_Date"
              value={Data.from_Date}
              className="form-control"
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              placeholder="From Date"
              required
            />
          </div>

          <div
            className="date"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label
              htmlFor="fromDate"
              style={{ marginBottom: "2px", fontWeight: "600", color: "" }}
            >
              To Date
            </label>
            <input
              type="date"
              name="to_Date"
              value={Data.to_Date}
              className="form-control"
              onChange={handleChange}
              min={Data.from_Date}
              placeholder="to Date"
              required
            />
          </div>
        </div>

        <div className="mb-3" style={{ width: "80%", marginLeft: "7%" }}>
        <label htmlFor="imageInput" style={{width:"100%",fontWeight:"600"}}>Event Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="form-control-file"
            placeholder="Event image"
            onChange={(event)=>{SetImage(event.target.files[0]);
                
            }}
            required
          />
          <button onClick={UploadImage} style={{backgroundColor:"Black",fontWeight:"500",color:"white"}}>Upload</button>
        </div>

        <button
        type="submit"
          className="btn btn-primary"
          style={{
            width: "80%",
            margin: "3% 3% 3% 7%",
            fontSize: "20px",
            fontWeight: "600",
          }}
          onClick={Submit}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Events;
