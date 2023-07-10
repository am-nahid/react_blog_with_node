import React, { useState, useEffect } from 'react'
import { Logo, TopNavigation,LogoMobile, Footer, LoginButton } from '../../Components'
import TechArticleList from './TechArticleList'
import TechTopPost from './TechTopPost'
import Store from '../../Utility/ContextStore/contextAPI'
import axios from 'axios'


const Technology = () => {

  return (
    <>
   <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
    <div className="LoginPos"><LoginButton/></div>
      <TopNavigation/></div>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
         <Store>
    <TechArticleList/>
       <TechTopPost/> 
    </Store>
   

    </div>
    </div>
    </div>
      {/* <Footer/> */}
    </>
  )
}

export default Technology
