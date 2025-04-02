import React, { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import "../../css/card.css";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase-config";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import Spinner from "react-bootstrap/Spinner";
function AllEvents() {
  const usercollectionsRef = collection(db, "events");
  const [Data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const dataDb = await getDocs(usercollectionsRef);
    let filterData = dataDb.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(filterData);
    setCopyData(filterData);
    setLoading(false);
  };
  ///              When No Event Present
  const NotShow = () => {
    return (
      <div style={{ height: "54vh", textAlign: "center", color: "#DDEBF0" }}>
        <div style={{ marginTop: "13vh", fontWeight: "700" }}>
          <h1 style={{ fontSize: "4vw" }}>No Event Present</h1>
        </div>
      </div>
    );
  };
  const filterByLatest = () => {
    const sortedItems = [...Data].sort(
      (a, b) => new Date(b.curr_time) - new Date(a.curr_time)
    );
    setData(sortedItems);
  };
  const [selectedEventType, setSelectedEventType] = useState("");
  //using copy data for our work;
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedEventType(selectedValue);
    console.log(selectedEventType);

    if (selectedValue) {
      setData(copyData.filter((item) => item.EventType === selectedValue));
    } else {
      setData(copyData); // Show all if no category is selected
    }
  };
  useEffect(() => {
    getData();
  }, []);
  /* ------------------------------------------------------- for each card ---------------- */
  const Show = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            margin: "auto 18% auto 4%",
            fontSize: "1.3vw",
          }}
        >
          <div>
            Filter By:
            <span />
            <button
              type="button"
              className="btn btn-outline-primary ms-2"
              onClick={filterByLatest}
            >
              Latest
            </button>
          </div>
          <div>
            Search By:
            <select
              name="eventType"
              className="text-primary bg-black-50 ms-1 ps-1 border border-primary border-opacity-25 rounded"
              value={selectedEventType}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="healthcare">Healthcare</option>
              <option value="social">Social</option>
              <option value="educational">Educational</option>
              <option value="cultural">Cultural</option>
              <option value="tech">Tech</option>
              <option value="seminar">Seminar</option>
            </select>
          </div>
        </div>
        {Data.length > 0 ? (
          Data.map((product) => {
            return (
              <div>
                <div className="card">
                  <img
                    src={product.Image_url}
                    alt={`${product.EventName}'s profile`}
                    className="card-image"
                  />
                  <hr />
                  <div className="card-content">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "10px",
                      }}
                    >
                      <p className="card-username">
                        <b>Created By</b>:{product.username}
                      </p>
                      <p className="card-username">
                        <b>Event Name</b>:{product.EventName}
                      </p>
                      <p className="card-username">
                        <b>Description</b>:{product.Desc}
                      </p>
                      <p className="card-description">
                        <b>Event Period </b>:{product.From_Date} to{" "}
                        {product.to_Date}
                      </p>
                    </div>
                    <h5 style={{ marginTop: "5px", marginBottom: "5px" }}>
                      Contact Details:-
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="card-username">
                        <b>Phone</b>:{product.Phone}
                      </p>
                      <p className="card-username">
                        <b>Email:</b>
                        {product.email}
                      </p>
                    </div>
                    <button
                      className="btn btn-primary "
                      style={{
                        width: "50%",
                        margin: "3% 23%",
                        fontSize: "1.2em",
                        fontWeight: "600",
                      }}
                      onClick={() => handleFormToggle(product.id)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NotShow />
        )}
      </>
    );
  };
  //pop up form

  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    desc: "",
    url: "",
  });
  const [eventid, setEventid] = useState("");
  // Toggle form visibility
  const handleFormToggle = (id) => {
    if (!showForm) {
      setEventid(id);
    } else if (showForm) {
      setEventid("");
    }
    setShowForm(!showForm);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [image, SetImage] = useState(null);

  useEffect(() => {
    if (!image) return; // Prevents running on initial render

    const uploadImage = async () => {
      const imageRef = ref(storage, `volunteer/${image.name + v4()}`);
      try {
        const snapshot = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        alert("Image uploaded successfully");
        setUserData((prev) => ({ ...prev, url }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    uploadImage();
  }, [image, storage]); // Runs whenever `image` changes

  //--------------------------------------current time
  const currentDate = new Date();
  const curr_time = currentDate.toISOString();

  //=================user_id
  const User = useSelector((state) => state.user);

  // Handle form submission
  const VolunteercollectionsRef = collection(db, "volunteer");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendVolunteerDetails();
    console.log(userData);
    setShowForm(false);
  };
  const sendVolunteerDetails = async () => {
    try {
      //const data=await getDocs(usercollectionsRef);
      await addDoc(VolunteercollectionsRef, {
        username: User[0][0].username,
        Phone: User[0][0].Phone,
        email: User[0][0].email,
        Desc: userData.desc,
        Vol_Photo: userData.url,
        curr_time: curr_time,
        user_id: User[0][0].id,
        event_id: eventid,
        status: "Pending",
      });
    } catch (err) {
      console.error(err);
    }
  };

  /*-----------------------------------keep submit button disabled----------------------------------*/
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Update the disabled state of the submit button
  useEffect(() => {
    const allFieldsFilled = Object.values(userData).every(
      (field) => field.trim() !== ""
    );
    setIsSubmitDisabled(!allFieldsFilled);
  }, [userData]);

  //spinner
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div style={{ margin: "3% 23%", fontFamily: "Franklin Gothic Heavy" }}>
      <Show />
      {/* Popup Form */}
      {showForm && (
        <div className="form-modal">
          <div className="form-content">
            <div className="header">
              <h1
                style={{
                  color: "#2368B2",
                  fontSize: "43px",
                  fontWeight: "600",
                  fontFamily: "Algerian",
                }}
              >
                Volunteer Form
              </h1>
              <h4 className="text-primary">Enter Your Details</h4>
            </div>
            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <label
                  htmlFor="imageInput"
                  style={{
                    width: "fit-content",
                    fontWeight: "600",
                    marginLeft: "7%",
                    fontSize: "15px",
                  }}
                >
                  <CgProfile className="text-primary fs-4" />
                  <span className="text-secondary fw-600">Your Image </span>
                </label>
                <div
                  className="mb-3"
                  style={{
                    width: "62%",
                    marginLeft: "2px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control-file"
                    placeholder="Your Photo"
                    onChange={(event) => {
                      SetImage(event.target.files[0]);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="mb-3" style={{ width: "80%", marginLeft: "7%" }}>
                <textarea
                  name="desc"
                  value={userData.desc}
                  className="form-control"
                  onChange={handleInputChange}
                  placeholder="&#xf27a;    Describe Your Self"
                  rows="4"
                  required
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "auto 5%",
                }}
              >
                <button
                  type="submit"
                  className="form-button"
                  style={{ backgroundColor: "#3657DB" }}
                  disabled={isSubmitDisabled}
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="form-button cancel"
                  onClick={handleFormToggle}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllEvents;