import React, { useState } from "react";
import "./ExperiencePopup.css"; // Ensure the CSS is correctly linked

function ExperiencePopup() {
  const [activeTab, setActiveTab] = useState("job1");

  // Content rendering based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "job1":
        return (
          <div>
            <h3>title A</h3>
            <p>text A</p>
          </div>
        );
      case "job2":
        return (
          <div>
            <h3>title B</h3>
            <p>text B</p>
          </div>
        );
      case "job3":
        return (
          <div>
            <h3>Developer</h3>
            <p>text C</p>
          </div>
        );
      default:
        return <p>Select a job to view more information.</p>;
    }
  };

  return (
    <div className="popup">
      <h2>Defense: Problem Solving</h2>
      <p></p>

      {/* Clickable divs for selecting the job */}
      <div className="experience-tabs">
        <div
          onClick={() => setActiveTab("job1")}
          className={`experience-tab ${activeTab === "job1" ? "active" : ""}`}
        >
          Comcast
        </div>
        <div
          onClick={() => setActiveTab("job2")}
          className={`experience-tab ${activeTab === "job2" ? "active" : ""}`}
        >
          CS 2110 TA
        </div>
        <div
          onClick={() => setActiveTab("job3")}
          className={`experience-tab ${activeTab === "job3" ? "active" : ""}`}
        >
          WICC Technical Committee
        </div>
      </div>

      {/* Dynamic content that changes based on the selected div */}
      <div className="experience-content">{renderContent()}</div>
    </div>
  );
}

export default ExperiencePopup;
