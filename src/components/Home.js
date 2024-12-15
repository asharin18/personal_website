// src/components/Home.js
import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import ProjectsPopup from "./Projects";
import ExperiencePopup from "./Experience";
import AboutPopup from "./About";
import LeadershipPopup from "./Leadership";
import "./popup.css";
import icon from "../images/basketball-player.png";
import coach from "../images/coach.png";
import scoreboard from "../images/scoreboard.png";
import Navbar from "./Navbar";

function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showLeadership, setShowLeadership] = useState(false);
  const [hoveredSection, setHoveredSection] = useState("");
  const [rulesText, setRulesText] = useState(
    "Hover over different elements of the home page to discover various sections. Click on each component to learn more!"
  );

  useEffect(() => {
    const updateRulesText = () => {
      if (window.innerWidth <= 768) {
        setRulesText(
          "Tap on different elements of the home page to discover various sections! Tap the top half of the court to learn more about my projects, tap the bottom half of the court to learn more about my experience, tap the coach to learn more about my leadership experience, and tap the player to learn more about me! Also, you can tap the scoreboard to view my resume."
        );
      } else {
        setRulesText(
          "Hover over different elements of the home page to discover various sections. Click on each component to learn more!"
        );
      }
    };

    // Call on initial load
    updateRulesText();

    // Add event listener for window resize
    window.addEventListener("resize", updateRulesText);

    // Clean up the event listener
    return () => window.removeEventListener("resize", updateRulesText);
  }, []);

  const navigateTo = (section) => {
    if (section === "projects") {
      setShowProjects(true);
      setShowExperience(false);
      setShowAbout(false);
      setShowLeadership(false);
    } else if (section === "experience") {
      setShowProjects(false);
      setShowExperience(true);
      setShowAbout(false);
      setShowLeadership(false);
    } else if (section === "about") {
      setShowProjects(false);
      setShowExperience(false);
      setShowAbout(true);
      setShowLeadership(false);
    } else if (section === "leadership") {
      setShowProjects(false);
      setShowExperience(false);
      setShowAbout(false);
      setShowLeadership(true);
    }
  };

  const closePopup = () => {
    setShowProjects(false);
    setShowExperience(false);
    setShowAbout(false);
    setShowLeadership(false);
  };

  return (
    <section id="home" className="home">
      {/* Pass navigateTo function to Navbar so can have same functionality */}
      <Navbar navigateTo={navigateTo} />
      <div className="court-container">
        <img
          src={coach}
          alt="Player Icon"
          onClick={() => navigateTo("leadership")}
          onMouseEnter={() => setHoveredSection("Leadership")}
          onMouseLeave={() => setHoveredSection("")}
          className="player-icon"
        />
        <svg viewBox="0 0 200 300" className="basketball-court">
          <rect
            x="10"
            y="10"
            width="180"
            height="280"
            fill="tan"
            stroke="#333"
            strokeWidth="4"
          />

          <line
            x1="10"
            y1="150"
            x2="190"
            y2="150"
            stroke="#333"
            strokeWidth="2"
          />

          <circle
            cx="100"
            cy="150"
            r="28"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <path
            d="M 30 10 A 70 70 0 0 0 170 10"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <path
            d="M 30 290 A 70 70 0 0 1 170 290"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <circle
            cx="100"
            cy="60"
            r="20"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <circle
            cx="100"
            cy="240"
            r="20"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />
          <rect
            x="80"
            y="10"
            width="40"
            height="55"
            fill="#d05757"
            stroke="#333"
            strokeWidth="2"
          />

          <rect
            x="80"
            y="235"
            width="40"
            height="55"
            fill="#d05757"
            stroke="#333"
            strokeWidth="2"
          />

          <rect
            x="10"
            y="10"
            width="180"
            height="140"
            fill="transparent"
            onClick={() => navigateTo("projects")}
            onMouseEnter={() => setHoveredSection("Projects")}
            onMouseLeave={() => setHoveredSection("")}
            className="court-zone"
          />

          <rect
            x="10"
            y="150"
            width="180"
            height="140"
            fill="transparent"
            onClick={() => navigateTo("experience")}
            onMouseEnter={() => setHoveredSection("Experience")}
            onMouseLeave={() => setHoveredSection("")}
            className="court-zone"
          />

          {/* player icon */}
          <image
            href={icon}
            x="45"
            y="90"
            width="30"
            height="30"
            onClick={() => navigateTo("about")}
            onMouseEnter={() => setHoveredSection("About Me")}
            onMouseLeave={() => setHoveredSection("")}
            // className="player-icon"
            style={{ cursor: "pointer" }}
          />
        </svg>

        {showProjects && (
          <div className="popup">
            <button onClick={closePopup}>Close</button>
            <ProjectsPopup />
          </div>
        )}
        {showExperience && (
          <div className="popup">
            <button onClick={closePopup}>Close</button>
            <ExperiencePopup />
          </div>
        )}
        {showAbout && (
          <div className="popup">
            <button onClick={closePopup}>Close</button>
            <AboutPopup />
          </div>
        )}
        {showLeadership && (
          <div className="popup">
            <button onClick={closePopup}>Close</button>
            <LeadershipPopup />
          </div>
        )}
        {hoveredSection && <div className="hover-label">{hoveredSection}</div>}
        <div>
          <div className="rules-section">
            <h2>Rules</h2>
            <p>{rulesText}</p>
          </div>
          <a
            href={`${process.env.PUBLIC_URL}/Amy_Sharin_Resume_site.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredSection("Resume")}
            onMouseLeave={() => setHoveredSection("")}
          >
            <div className="scoreboard">
              <img src={scoreboard} alt="Scoreboard" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
