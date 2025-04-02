import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import "../../css/Register.css";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const nav = useNavigate();
  const [Data, setData] = useState({
    email: "",
    password: "",
    number: "",
    username: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, Data.email, Data.password);
    } catch (err) {
      console.error(err);
    }
  };

  const Submit = () => {
    Details();
    signIn();
    setData({ email: "", number: "", username: "", password: "" });
    nav("/");
  };

  //database
  const usercollectionsRef = collection(db, "user");

  const Details = async () => {
    try {
      //const data=await getDocs(usercollectionsRef);
      await addDoc(usercollectionsRef, {
        username: Data.username,
        Phone: Data.number,
        email: Data.email,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mainfr">
      <div className="userform">
        <div className="header">
          <h1 style={{ color: "#2368B2", fontSize: "43px", fontWeight: "600" }}>
            Sign Up
          </h1>
          <h3>Create your account</h3>
        </div>
        <div className="mb-3" style={{ width: "80%", marginLeft: "7%" }}>
          <input
            type="text"
            name="username"
            value={Data.username}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleChange}
            placeholder="&#xf007;   UserName"
            required
          />
        </div>
        <div className="mb-3 input" style={{ width: "80%", marginLeft: "7%" }}>
          <input
            type="email"
            name="email"
            value={Data.email}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleChange}
            placeholder="&#xf0e0;   Email"
            required
          />
        </div>
        <div className="mb-3 input" style={{ width: "80%", marginLeft: "7%" }}>
          <input
            type="tel"
            name="number"
            value={Data.number}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleChange}
            placeholder="&#xf095;   Phone"
            required
          />
        </div>
        <div className="mb-3 input" style={{ width: "80%", marginLeft: "7%" }}>
          <input
            type="password"
            name="password"
            value={Data.password}
            className="form-control"
            onChange={handleChange}
            placeholder="&#xf023;   Password"
            required
          />
        </div>

        <button
          className="btn btn-primary"
          style={{
            width: "80%",
            margin: "3% 3% 3% 7%",
            fontSize: "20px",
            fontWeight: "600",
          }}
          onClick={Submit}
        >
          Sign Up
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            fontSize: "20px",
            marginLeft: "9%",
          }}
        >
          <h4>Already a user?</h4>{" "}
          <NavLink
            to="/"
            style={{ textDecoration: "none", marginLeft: "14px" }}
          >
            Sign In
          </NavLink>
        </div>
      </div>
      <div className="img" style={{ width: "40vw" }}>
        <img
          src="/assets/register.jpg"
          height="100%"
          width="100%"
          style={{ borderRadius: "8px" }}
        ></img>
      </div>
    </div>
  );
}
