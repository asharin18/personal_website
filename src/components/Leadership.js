import React, { useState } from "react";
import "./ExperiencePopup.css"; // Ensure the CSS is correctly linked
import chemGroup from "../images/chemegroup.jpg";
import chemLab from "../images/chemelab.png";
import wiccLogo from "../images/wicclogo.png";

function LeadershipPopup() {
  const [activeTab, setActiveTab] = useState("job1");

  // Content rendering based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "job1":
        return (
          <div>
            <h3>Battery Omega Subteam Lead</h3>
            <div className="job-container">
              <div className="job-text">
                <p>
                  I led a subteam in designing and building an Aluminum-Air
                  battery, featuring an aluminum anode and an oxygen cathode, to
                  power a small car for competition. I managed lab work,
                  assigned tasks, and worked closely with the team to address
                  corrosion challenges and optimize battery performance. This
                  experience strengthened my problem-solving skills and ability
                  to make informed scientific decisions. Pictured on the right
                  is our entire team photo, and our team measuring the battery
                  voltage in lab.
                </p>
              </div>
              <div className="job-photos">
                <div className="photo-item">
                  <img src={chemGroup} alt="Group Photo" />
                </div>
                <div className="photo-item">
                  <img src={chemLab} alt="Battery Photo" />
                </div>
              </div>
            </div>
          </div>
        );
      case "job2":
        return (
          <div>
            <h3>Mentor</h3>

            <p>
              As a mentor with the Women in Computing at Cornell (WICC)
              organization, I guided four first-year Computer Science students
              through their transition to college, offering personalized advice
              on course selection, career development, and maximizing their
              Cornell experience. This leadership role reinforced my commitment
              to promoting representation and inclusion in computing, which I
              deeply value. Having participated in the program as a mentee
              during my freshman year, I experienced firsthand the program's
              impact and was grateful for the opportunity to give back and
              support others as a mentor.
            </p>

            <div className="logo-item">
              <img src={wiccLogo} alt="logo" />
            </div>
          </div>
        );

      default:
        return <p>Select a job to view more information.</p>;
    }
  };

  return (
    <div>
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
