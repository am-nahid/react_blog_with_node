import React, { useState } from 'react'
import './logoMobile.style.css'
import Store from '../../Utility/ContextStore/contextAPI'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginButton from '../login_Button/LoginButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function LogoMobile () {
    
const [show, setShow]=useState(false)


const handleMenu=() =>{
setShow(prev=>!prev)
}



  return (
    <div className='TheLogoCon'>
    <div className='moLogoPar'>
        <div className='mLogoSub'>
    <div>
      <h1 className="TheMobileLogo">
        <span className="vertical">The</span> Siren
      </h1>
    </div>
   <div className='mvBtns'><LoginButton/></div> 
    <div onClick={()=>setShow(!show)} className='MenuBar'>
        <div className='Menu'></div>
        <div className='Menu'></div>
        <div className='Menu'></div>
   
    </div>
    
  </div>
 
  </div>
  <hr className='mobileHr'/>

  { show && (
  <div onClick={handleMenu} className='selector'>
    {(localStorage.getItem("token")) &&<p className='mbuserName'><FontAwesomeIcon icon={faUser} /><span>&nbsp; {localStorage.getItem("name")}</span></p>}
  <div  className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/"} >Home</NavLink></div>
  <div className='coms'><NavLink style={{color:'black' , textDecoration:'none'}} to={"/Bollywood"} >Bollywood</NavLink></div>
  <div  className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Technology"} >Tech</NavLink></div>
  <div className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Hollywood"} >Hollywood</NavLink></div>
  <div className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Fitness"} >Fitness</NavLink></div>
  <div  className='coms'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Food"} >Food</NavLink></div>
  </div>)
}

  </div>
  )
}

export default LogoMobile 
