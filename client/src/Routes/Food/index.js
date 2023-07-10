import React from 'react'
import { Logo, TopNavigation , LogoMobile, Footer, LoginButton} from '../../Components'
import FoodArticleList from './FoodArticleList'
import FoodTopPost from './FoodTopPosts'
import Store from '../../Utility/ContextStore/contextAPI'

const Food = () => {
  return (
    <>
   <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
    <div className="LoginPos"><LoginButton/></div>
      <TopNavigation/></div>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            {/* <Store> */}
    <FoodArticleList/>
    <FoodTopPost/>
    {/* </Store> */}
    </div>
    </div>
    </div>
    {/* <Footer/> */}
      
    </>
  )
}

export default Food
