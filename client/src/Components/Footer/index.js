import React from "react";

import FooterLogo from "../FooterLogo";
import './Footer.style.css'

const Footer = () => {
  return (
    <div className="TheMainFooter">
      <div className="theFWidth">

<div className="FGridCont">

      <div className="FSecCon">
      <div className="fLogo">
        <div className="theFProp"><FooterLogo /></div>
      </div>
      <div className="FmiddleCon">
        <div className="FmiddleSubCon">
          <div className="FDescription">
            An All in one blog, bringing you the best of entertainment, knowledge
            and inspiration.
          </div>
          <div className="FCopywrite">
            <span>©</span>2023.The Siren. All Rights reserved
          </div>
        </div>
      </div>
      </div>
     
      <div className="Fcontact">
        <h3>Contact</h3>
        <div>
          <span className="LocEmoji">📍</span> 101, Indiranagar, Bangalore.
        </div>
        <div>
          <span className="PhoneEmoji">📞</span> +91 8080 1818
        </div>
        <div className="lastFText">
          <pre><span className="MailEmoji">✉ </span>  support@thesiren.com</pre>
        </div>
      </div>

      <div className="FRefernce">
        <h3 className="TheFReferences">References</h3>
        <div className="TheFBollywood"><a className="Flinks" href="https://www.bollywoodhungama.com/movies/top-100-movies/">Bollywood</a></div>
        <div className="TheFHollywood"><a className="Flinks" href="https://www.themoviedb.org/movie">Hollywood</a></div>
        <div className="TheFTechnology"><a className="Flinks" href="https://www.cnet.com/news/">Technology</a></div>
        <div className="TheFFitness"><a className="Flinks" href="https://www.precisionnutrition.com/blog">Fitness</a></div>
        <div className="TheFFood"><a className="Flinks" href="https://pinchofyum.com/blog">Food</a></div>
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;
