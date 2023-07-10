import React, { useContext,useState,useEffect } from "react";
import { Header, DateExt, Advertisement } from '../../Components'
import '../../App.css'
import { AppData } from "../../Utility";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AllData } from "../../constants/ApiList";


function FitTopPost() {

  // const [data] = useContext(AppData);
  const [data,setData]=useState([])

useEffect(()=>{
  // const API="https://blog-server-oxr9.onrender.com
  const API =AllData
axios.get(API,data)
.then(res=>setData(res.data[0]))
.catch(err=>console.log(err))
},[])


  const navi = useNavigate(); 

  const handleImage=(d)=>{
    if( localStorage.getItem("token")){
      navi(`/Fitness/${d.id}`, {state: d})
    } else{
      alert("Please login/signup first")
    }
  }
  
  const Filter = data.filter(
    (item) => item.cat === "Fitness" && item.for === "TopList"
  );

    return (
      <div className='TopPostsPar'>
      
      <div className='topPostCon'>
          <div className='heading'>
          <Header headerText={"Top Posts"}/>
  
          </div>

          {data
          .filter(
            (item) => item.cat==="Fitness" && item.for === "TheTopList"
          )
          .map((d) => (
            <div className="MtopBox" key={d.id}>
              <img  onClick={( )=> handleImage(d)} alt="No Network" className="topPostImg hov" src={d.img} />
              <div className="MtoptText"><h2   onClick={( )=> handleImage(d)} className="h2Height TheH2">{d.title}</h2>
              <p className="paraHeight">
                <span className="genericDateTravel">{d.cat}</span>
                <DateExt dateExt={`  / ${d.date} `} />
              </p>
              </div>
            </div>
          ))}

{Filter.map((d) => (
  <div key={d.id}>
<div className="spacer">
              <hr className="commonHr" />
            </div>

            <div className="TopPostsSmallCon">
              <img  onClick={( )=> handleImage(d)} src={d.img} alt="No Network" className="topPostImgSmall hov" />
              <div className="h4">
                <h4   onClick={( )=> handleImage(d)} className="h3Height">{d.title}</h4>
                <p className="paraHeightSmall">
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>


</div>
          ))
          }

  
      </div>
      <div className='TopPostAd'>
      <Advertisement />
      </div>
      </div>
    )
  }
export default FitTopPost
