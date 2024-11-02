// src/components/Home.js
import React from "react";
import "./Home.css";

function Home() {
  const navigateTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home">
      <h2>Welcome to My Game Plan</h2>
      <p>Click on different parts of the court to explore my portfolio!</p>

      <div className="court-container">
        <svg viewBox="0 0 300 600" className="basketball-court">
          {/* Main Court Rectangle */}
          <rect
            x="10"
            y="10"
            width="280"
            height="580"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Half Court Line */}
          <line
            x1="10"
            y1="300"
            x2="290"
            y2="300"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Center Circle */}
          <circle
            cx="150"
            cy="300"
            r="30"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Top Three-Point Arc (Curving towards center circle) */}
          <path
            d="M 50 100 A 140 140 0 0 0 250 100"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Bottom Three-Point Arc (Curving towards center circle) */}
          <path
            d="M 50 500 A 140 140 0 0 1 250 500"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Top Paint Rectangle */}
          <rect
            x="100"
            y="10"
            width="100"
            height="120"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Bottom Paint Rectangle */}
          <rect
            x="100"
            y="410"
            width="100"
            height="180"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Top Key Circle */}
          <circle
            cx="150"
            cy="190"
            r="30"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Bottom Key Circle */}
          <circle
            cx="150"
            cy="410"
            r="30"
            fill="none"
            stroke="#333"
            strokeWidth="4"
          />

          {/* Clickable Zones */}
          <rect
            x="10"
            y="10"
            width="280"
            height="300"
            fill="transparent"
            onClick={() => navigateTo("projects")}
            className="court-zone"
          />
          <rect
            x="10"
            y="300"
            width="280"
            height="300"
            fill="transparent"
            onClick={() => navigateTo("skills")}
            className="court-zone"
          />
        </svg>
      </div>
    </section>
  );
}

export default Home;
