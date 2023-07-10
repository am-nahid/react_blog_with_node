import React, {useEffect, useState} from "react";
import { Logo, TopNavigation , LogoMobile, Footer, Login, LoginButton} from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import Store from "../../Utility/ContextStore/contextAPI";
import "../../App.css";
import TopPots from "./TopPsts";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  //  const [state] = useContext(AppData)
  // console.log(state);

const [renderName, setRenderName]= useState(false)
useEffect(() => {
  if (localStorage.getItem("id")) {
    setRenderName(true);
  } else {
    setRenderName(false); // Clear the name when the user logs out
  }
}, []);

// useEffect(()=>{
// if(localStorage.getItem("id")){
// setRenderName(true)
// }
// console.log(renderName);
// },[localStorage.getItem("token")])

// useEffect(()=>{
//   if(!localStorage.getItem("token")){
//   setRenderName(false)
//   }
//   console.log(renderName);
//   },[renderName])

  return (
    <>
    <div className='LMobile' ><LogoMobile/></div>
    {/* <div className="LoginPos"><Login/></div> */}
    <div className='LLocal' ><Logo/>
    {/* {renderName && <p className='userNameAtMidRange'><FontAwesomeIcon icon={faUser} /><span>&nbsp; {localStorage.getItem("name")}</span></p>} */}
    <div className="LoginPos"><LoginButton/></div>
      <TopNavigation/></div>
   
      {/* <Store> */}
        <Banner />
        <Latest />
        <div className="mainContainer">
          <div className="subContainer">
            <div className="homeContainer">
              <LatestArticle />

              <TopPots />
            </div>
          </div>
        </div>
      {/* </Store> */}
      {/* <Footer/> */}
    </>
  );
};

export default Home;
