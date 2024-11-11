// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

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
    </nav>
  );
}

export default Navbar;
