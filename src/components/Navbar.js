// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import github from "../images/github.png";
import email from "../images/email.png";
import linkedIn from "../images/linkedin.png";

function Navbar({ navigateTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="hamburger-menu" onClick={toggleMenu}>
          ☰
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
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : "close"}`}>
        <li>
          <a href="#projects" onClick={(e) => navigateTo("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => navigateTo("experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => navigateTo("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#leadership" onClick={(e) => navigateTo("leadership")}>
            Leadership
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
    </nav>
  );
}

export default Navbar;
