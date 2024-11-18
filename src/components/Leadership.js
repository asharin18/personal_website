import React, { useState } from "react";
import "./ExperiencePopup.css"; // Ensure the CSS is correctly linked

function LeadershipPopup() {
  const [activeTab, setActiveTab] = useState("job1");

  // Content rendering based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "job1":
        return (
          <div>
            <h3>Battery Omega Subteam Lead</h3>
            <p>TODO</p>
          </div>
        );
      case "job2":
        return (
          <div>
            <h3>Mentor</h3>
            <p>TODO</p>
          </div>
        );

      default:
        return <p>Select a job to view more information.</p>;
    }
  };

  return (
    <div className="popup">
      <h2>Coach: Leadership</h2>
      <p>
        A basketball team can't be successful without a great coach to inspire
        the team and lead by example. For me, leadership has been all about
        stepping up, supporting others, and working together to achieve our
        goals.{" "}
      </p>

      {/* Clickable divs for selecting the job */}
      <div className="experience-tabs">
        <div
          onClick={() => setActiveTab("job1")}
          className={`experience-tab ${activeTab === "job1" ? "active" : ""}`}
        >
          ChemE Car
        </div>
        <div
          onClick={() => setActiveTab("job2")}
          className={`experience-tab ${activeTab === "job2" ? "active" : ""}`}
        >
          WICC Mentorship
        </div>
      </div>

      {/* Dynamic content that changes based on the selected div */}
      <div className="experience-content">{renderContent()}</div>
    </div>
  );
}

export default LeadershipPopup;
