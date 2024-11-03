// src/components/Home.js
import React from "react";
import "./Home.css";
import { useState } from "react";
import ProjectsPopup from "./Projects";
import ExperiencePopup from "./Experience";
import "./popup.css";

function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const navigateTo = (section) => {
    if (section === "projects") {
      setShowProjects(true);
      setShowExperience(false);
    } else if (section === "experience") {
      setShowProjects(false);
      setShowExperience(true);
    }
  };

  const closePopup = () => {
    setShowProjects(false);
    setShowExperience(false);
  };

  return (
    <section id="home" className="home">
      <div className="court-container">
        <svg viewBox="0 0 200 300" className="basketball-court">
          <rect
            x="10"
            y="10"
            width="180"
            height="280"
            fill="none"
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

          <rect
            x="70"
            y="10"
            width="60"
            height="55"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <rect
            x="70"
            y="235"
            width="60"
            height="55"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <circle
            cx="100"
            cy="65"
            r="15"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <circle
            cx="100"
            cy="235"
            r="15"
            fill="none"
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
            className="court-zone"
          />

          <rect
            x="10"
            y="150"
            width="180"
            height="140"
            fill="transparent"
            onClick={() => navigateTo("experience")}
            className="court-zone"
          />
        </svg>
        {/* Conditionally render the popups based on the state */}
        {showProjects && <ProjectsPopup />}
        {showExperience && <ExperiencePopup />}

        {/* Close button for popups */}
        {(showProjects || showExperience) && (
          <button onClick={closePopup}>Close</button>
        )}
      </div>
    </section>
  );
}

export default Home;
