import React from "react";
import "./AboutPopup.css";
import headshot from "../images/headshot.JPG";
import carouselImg1 from "../images/carousel1.jpg";
import carouselImg2 from "../images/carousel2.jpg";
import carouselImg3 from "../images/carousel3.jpg";
import carouselImg4 from "../images/carousel4.jpg";

function AboutPopup() {
  return (
    <div className="popup">
      <h2>About Me!</h2>
      <div className="about-content">
        <p>
          I’m Amy Sharin, a senior studying computer science at Cornell
          University, originally from Long Island, New York. I’m interested in
          developing impactful software that work to make a positive impact to
          improve people’s lives. Outside of work, my interests include watching
          and playing sports, and baking!
        </p>
        <div className="about-media">
          <img src={headshot} alt="Headshot" className="headshot" />
          <div className="image-grid">
            <img src={carouselImg1} alt="1" className="stack-image" />
            <img src={carouselImg2} alt="2" className="stack-image" />
            <img src={carouselImg3} alt="3" className="stack-image" />
            <img src={carouselImg4} alt="4" className="stack-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPopup;
