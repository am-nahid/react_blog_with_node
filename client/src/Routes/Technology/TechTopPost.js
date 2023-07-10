import React, { useContext,useState,useEffect } from "react";
import { Header, DateExt, Advertisement } from '../../Components'
import '../../App.css'
import { AppData } from "../../Utility";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AllData } from "../../constants/ApiList";



function TechTopPost() {
  // const [data] = useContext(AppData);
  const [data,setData]=useState([])

  // const [data]= useContext(AppData)
useEffect(()=>{
  // const API="http://localhost:4040"
  const API =AllData
axios.get(API,data)
.then(res=>setData(res.data[0]))
.catch(err=>console.log(err))
},[])


  const navi = useNavigate(); 

  const handleImage = (d) => {
    if( localStorage.getItem("token")){
      navi(`/Technology/${d.id}`, {state: d})
    } else{
      alert("Please login/signup first")
    }
  };

  const Filter = data.filter(
    (item) => item.cat === "Technology" && item.for === "TopList"
  );

    return (
      <div className='TopPostsPar'>
      
      <div className='topPostCon'>
          <div className='heading'>
          <Header headerText={"Top Posts"}/>
  
          </div>

          {data
          .filter(
            (item) => item.cat==="Technology" && item.for === "TheTopList"
          )
          .map((d) => (
            <div className="MtopBox"  key={d.id}>
              <img alt="No Network"  onClick={( )=> handleImage(d)} className="topPostImg hov" src={d.img} />
              <div className="MtoptText"><h2   onClick={( )=> handleImage(d)} className=" TheH2">{d.title}</h2>
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
export default TechTopPost
