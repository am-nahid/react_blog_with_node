
import React, { useState, useEffect } from "react";
import "./loginButton.style.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { LogoutApi, localhostLogout } from "../../constants/ApiList";

function LoginButton() {
  const Navi = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [showName, setShowName] = useState(false);

  const handleUserButton = () => {
    setShowName((prev) => !prev);
  };

  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    setLoggedIn(false);
    setShowName(false)

    const API = LogoutApi;
    // const API = localhostLogout
    axios
      .post(API)
      .then((res) => {
        Navi("/");
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);


  const handleLogin = () => {
    Navi("/login");
  };

  const handleSignup = () => {
    Navi("/signup");
  
  };

  return (
    <>
      <div className="btnContainer">
        {!loggedIn && (
          <button className="LoginButn btnClr" onClick={handleLogin}>
            <span>Log In</span>
          </button>
        )}
        {!loggedIn && (
          <button className="SignupButn btnClr" onClick={handleSignup}>
            <span>Sign Up</span>
          </button>
        )}
        </div>

        <div className="iconBtnContainer">

        {loggedIn && (
          <button onClick={handleUserButton} className="userButton">
            <FontAwesomeIcon icon={faUser} />
            {/* <span>&nbsp; {name}</span> */}
          </button>
        )}
        {showName && (
          <div className="userCntnr">
            <p className="username" onClick={handleLogout}>
              <span className="userText">Hii, {name}</span>
            </p>
            <button className="LogoutBtn" onClick={handleLogout}>
              <span>Log out</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default LoginButton;
