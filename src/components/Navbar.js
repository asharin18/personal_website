import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Experience</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
