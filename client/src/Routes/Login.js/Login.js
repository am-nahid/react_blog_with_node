import React, { useState, useEffect } from "react";
import "./login.style.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { LoginApi, localhostLogin } from "../../constants/ApiList";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  // const [formdata, setFormdata] = useState({
  //   email: "",
  //   password: "",
  // });
  const [store, setStore] = useState(null);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormdata((prevformdata) => ({
  //     ...prevformdata,
  //     [name]: value,
  //   }));
    // console.log(formdata);
  // };

  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }

  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }

  const handleButton = (e) => {
    e.preventDefault();
    const API = LoginApi
    // const API = localhostLogin

    if (email && password) {

      axios
        .post(API,{email,password})
        .then((res) => {
          if(res.data.email){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name",res.data.name)
            localStorage.setItem("id",res.data._id)
            navigate("/",{replace:true});
            setStore(res.data);

          }else{
            setError("Invalid password/email");
            setEmail("")
            setPassword("")
          }         
        })
        .catch((err) => console.log(err));
    } else {
      setError("Please enter email and password.");
    }
  };



  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="LoginParent">
      <button onClick={handleBackBtn} className="backButtn">
        Back
      </button>
      <div className="loginText">Login here</div>
      <div className="loginContainer">
        <div className="LoginCard">
          <div className="logComCon">
            <img
              className="lockImg"
              src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
              alt="Locked"
            />
            <div className="Logcont1">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="lLoginInp"
                type="email"
                name="email"
                // onChange={handleChange}
                onChange={handleEmail}
                value={email}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="Logcont2">
              {/* <label htmlFor="password">Password:</label> */}
              <input
                className="lLoginInp"
                type="password"
                name="password"
                value={password}
                // onChange={handleChange}
                onChange={handlePassword}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <span className="loginErr">{error}</span>}
            <button className="Sbutn" onClick={handleButton}>
              Login
            </button>
            <div className="signupRoute">
              {" "}
              <NavLink to="/signup"> Don't have an acoount? signup</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
