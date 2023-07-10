import React from "react";
import { Header } from "../../Components";
import { useContex, useState, useEffect } from "react";
import { AppData } from "../../Utility/index";
import { DateExt } from "../../Components";
import { useNavigate, useLocation } from "react-router-dom";
import "./home.style.css";
import "../../App.css";
import axios from "axios";
import { AllData } from "../../constants/ApiList";

const LatestArticle = () => {
  const [data,setData]=useState([])

  // const [data]= useContext(AppData)
useEffect(()=>{
  // const API="https://blog-server-oxr9.onrender.com"
  const API =AllData
axios.get(API,data)
.then(res=>setData(res.data[0]))
.catch(err=>console.log(err))
},[])

  
  const navi = useNavigate();

  const handleImage = (d) => {
    if( localStorage.getItem("token")){
      navi(`/${d.cat}/${d.id}`, { state: d });
    } else{
      alert("Please login/signup first")
    }
  };
  return (
    <div className="LatestArticlePar">
      <Header headerText={"Latest Articles"} />
      {data
        .filter((item) => item.sp === "home-latestArt")
        .map((d, index) => (
          <div key={d.id}>
            <div className="spacer">
              <hr className="commonHr" />
            </div>
            <div className="LatestArtBlock">
              <div>
                <img
                  src={d.img}
                  onClick={() => handleImage(d)}
                  alt="No Network"
                  className="latestArtImg1 hov"
                />
              </div>
              <div>
                <h2 className="TheH2"  onClick={( )=> handleImage(d)}>{d.title}</h2>
                <p className="LatestArtDetail">{d.Overview}</p>
                <p className="LatestArtDate">
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>
          </div>
        ))}

      <div className="loadMore">
        <img src="./Images/arrow.png" alt="" />
        <span className="arrowText">LOAD MORE</span>
      </div>
      {data
        .filter((item) => item.sp === "home-latestBig")
        .map((d, index) => (
          <div key={d.id} className="LatestArtImgCon">
            <img
              onClick={() => handleImage(d)}
              alt="No Network"
              className="LAIT hov"
              src={d.img}
            />
            <div className="text-overlay">
              <h2    onClick={( )=> handleImage(d)} className="LatestArtImgHead">{d.title}</h2>
              <p className="LatestArtDateImg">
                <span className="LatestArTravel">{d.cat}</span>
                <span className="LatestArTravel" />
                {`  / ${d.date} `}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LatestArticle;
