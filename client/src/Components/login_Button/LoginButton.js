import React, { useState, useEffect } from 'react'
import './loginButton.style.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { LogoutApi, localhostLogout } from '../../constants/ApiList'



function LoginButton() {
  const Navi=useNavigate()
const [loginBut,setLoginBut]=useState(false)



const handleLogout=()=>{
  const API = LogoutApi
  // const API = localhostLogout
  axios.post(API)
  .then(res=>{
    // console.log("logout",res.data);
    Navi('/')
    setLoginBut(false)
    localStorage.clear()

    // window.location.reload();
  })
  .catch(err=>console.log(err))

}

useEffect(()=>{
  if( localStorage.getItem("token")){
    // console.log( localStorage.getItem("token"));
    setLoginBut(true)
  }
  // else{
  //   setLoginBut(false)
  // }
},[loginBut])

// useEffect(()=>{
//    console.log(loginBut);
// },[loginBut])

const handleLogin=()=>{
    Navi('/login')
}
// console.log(loginBut);

const handleSignup=()=>{
    Navi('/signup')
}



  return (
    <>
    <div className='btnContainer'>
      
  {(!loginBut) && <button className="LoginButn btnClr" onClick={handleLogin} ><span>Log In</span></button>   }   
{(!loginBut) && <button className="SignupButn btnClr" onClick={handleSignup} ><span>Sign Up</span></button>}



{(loginBut) &&<p className='userName'><FontAwesomeIcon icon={faUser} /><span>&nbsp; {localStorage.getItem("name")}</span></p>}
{(loginBut) && <button className="LogoutBtn" onClick={handleLogout} ><span>Log out</span></button>   }   


    </div>
    </>
  )
}

export default LoginButton