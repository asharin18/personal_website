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
          I’m Amy Sharin, a senior studying Computer Science at Cornell
          University. I'm originally from Long Island, New York. Throughout my
          education, I have strived to be an all-around player in computer
          science, exploring various disciplines, from software engineering to
          machine learning, data visualization, and web development. My diverse,
          all-around skill set allows me to approach problems from different
          angles and create innovative solutions. <br /> <br />
          Just as basketball is a team sport that thrives on collaboration, I
          excel in team environments where shared ideas and different
          perspectives lead to the best results. Whether it’s working on group
          projects at Cornell or contributing to my team during my Comcast
          internship, I bring a collaborative spirit that helps deliver winning
          results. <br /> <br /> Outside of coding, my interests include
          watching and playing sports, as well as baking!
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
