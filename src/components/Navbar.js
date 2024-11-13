// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import github from "../images/github.png";
import email from "../images/email.png";
import linkedIn from "../images/linkedin.png";

function Navbar({ navigateTo }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigateTo("projects"); // Trigger the Projects popup
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigateTo("projects"); // Trigger the Projects popup
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigateTo("experience"); // Trigger the Experience popup
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigateTo("about"); // Trigger the About popup
            }}
          >
            About
          </a>
        </li>
      </ul>
      <div className="intro">
        <h3>Hi! I'm Amy Sharin</h3>
        <p>
          I'm a senior studying Computer Science at{" "}
          <span className="highlight">Cornell</span> University.
        </p>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/amy-sharin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" className="icon-image" />
        </a>
        <a
          href="https://github.com/asharin18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" className="icon-image" />
        </a>
        <a
          href="mailto:ars369@cornell.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} alt="Email" className="icon-image" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
