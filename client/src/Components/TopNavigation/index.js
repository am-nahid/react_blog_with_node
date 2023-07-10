import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'


function TopNavigation() {

  
  return (
    <>
            <div className="flexProperty">
            <div className="navTag">
            <Link to={'/'} style={{textDecoration:"none"}}> <div  className="home" >Home</div></Link>
            <Link to={'/Bollywood'} style={{textDecoration:"none"}}> <div className="home" >Bollywood</div></Link>
            <Link to={'/Technology'} style={{textDecoration:"none"}}><div className="home" >Technology</div></Link>
            <Link to={'/Hollywood'} style={{textDecoration:"none"}}> <div className="home" >Hollywood</div></Link>
            <Link to={'/Fitness'} style={{textDecoration:"none"}}><div className="home" >Fitness</div></Link>
               <Link to={'/Food'} style={{textDecoration:"none"}}> <div className="home" >Food</div></Link>
                </div>
            </div>

           <div className="flexProperty">  <hr className='firstHr'/> </div> 
    </>
  )
}

export default TopNavigation
