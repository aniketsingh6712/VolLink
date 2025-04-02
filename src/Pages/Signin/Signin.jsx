import React from "react";
import { auth } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { AddUser } from "../../redux/userslicer";
import { getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import "../../css/Register.css";
export default function Signin() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const usercollectionsRef = collection(db, "user");
  const [message, setMessage] = useState("");
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const Submit = async () => {
    try {
      await signInWithEmailAndPassword(auth, Data.email, Data.password);
      const dataDb = await getDocs(usercollectionsRef);

      let filterData = dataDb.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const ReqData = filterData.filter((doc) => {
        if (doc.email === auth.currentUser.email) {
          return doc;
        }
        return false;
      });
      dispatch(AddUser(ReqData));

      nav("/home");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setMessage("Invalid email format");
      } else if (err.code === "auth/user-not-found") {
        setMessage("No user found with this email");
      } else {
        setMessage("An unexpected error occurred");
      }
    }
  };
  return (
    <div className="mainfr " style={{ minHeight: "80vh" }}>
      <div className="userform">
        <div className="header">
          <h1 style={{ color: "#2368B2", fontSize: "43px", fontWeight: "600" }}>
            Sign In
          </h1>
          <h3>Enter Your Creadentials to login</h3>
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
          />
        </div>

        <button
          className="btn btn-primary"
          style={{
            width: "80%",
            margin: "2% 3% 3% 7%",
            fontSize: "20px",
            fontWeight: "600",
          }}
          onClick={Submit}
        >
          Sign In
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            fontSize: "18px",
            marginLeft: "9%",
          }}
        >
          <h5>Don't have an account?</h5>{" "}
          <NavLink
            to="/signup"
            style={{ textDecoration: "none", marginLeft: "14px" }}
          >
            Signup
          </NavLink>
        </div>
        {message && (
          <h4 className="text-danger mt-2 text-center ">{message}</h4>
        )}
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
