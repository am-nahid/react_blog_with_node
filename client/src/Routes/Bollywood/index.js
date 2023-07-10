import React from 'react'
import { Footer, LoginButton, Logo, LogoMobile, TopNavigation } from '../../Components'
import ArticleList from './ArticleList'
import TopPost from './TopPost'
import '../../App.css'
import Store from '../../Utility/ContextStore/contextAPI'

function Bollywood() {
    
  return (
    <>
    <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
    <div className="LoginPos"><LoginButton/></div>
      <TopNavigation/></div>
      {/* <Store> */}
      <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
      <ArticleList/>
      <TopPost/>
      </div>
      </div>
      </div>

      {/* </Store> */}
      {/* <Footer/> */}


    </>
  )
}

export default Bollywood
