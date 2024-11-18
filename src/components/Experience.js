import React, { useState } from "react";
import "./ExperiencePopup.css"; // Ensure the CSS is correctly linked
import techComm from "../images/techcomm.JPG";

function ExperiencePopup() {
  const [activeTab, setActiveTab] = useState("job1");

  // Content rendering based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "job1":
        return (
          <div>
            <h3>Software Engineering Intern</h3>
            <div className="skills">
              {["Python", "AWS", "CI/CD", "Terraform", "Jira"].map(
                (skill, index) => (
                  <span key={index} className="skill-bubble">
                    {skill}
                  </span>
                )
              )}
            </div>
            <p>
              I spent two summers interning at Comcast, where I worked on the
              internal alerts team for the 10G network in an agile development
              environment. For the summer of 2024, I had the opportunity to
              innovate ideas for various network signals and automate their
              integration into a data service using AWS Step Functions. I also
              contributed by building Java GraphQL resolvers and schemas to
              deliver device status updates. I also enhanced API security by
              introducing new scopes and queries, which helped prevent
              unauthorized access. During the summer of 2023, I utilized AWS
              Glue to analyze alert data and populate an AWS TimeStream table. I
              then created a Grafana time series dashboard to help improve
              data-driven decision-making. Additionally, I developed a
              Python-based Lambda for Slack messaging to handle rate limits, and
              optimized the CI/CD pipeline, resulting in time savings of up to
              30% per deployment.
            </p>
          </div>
        );
      case "job2":
        return (
          <div>
            <h3>Consultant</h3>
            <p>Object Oriented Programming and Data Structures</p>
            <ul>
              <li>
                Conducted 250+ office hours over four semesters, assisting
                students with Java programming assignments and exam preparation.
              </li>
              <li>
                Collaborated in grading assignments and exams of over 700
                students in the course.
              </li>
            </ul>
          </div>
        );
      case "job3":
        return (
          <div>
            <h3>Developer</h3>
            <div className="skills">
              {["React", "CSS"].map((skill, index) => (
                <span key={index} className="skill-bubble">
                  {skill}
                </span>
              ))}
            </div>
            <p>
              I collaborated with a team of designers to update and maintain the
              React-based Women In Computing at Cornell website, focusing on
              enhancing the user experience and ensuring mobile responsiveness.
              I also helped run a workshop where we guided others through
              creating their own personal websites and developing their personal
              branding.{" "}
            </p>
            <img src={techComm} alt="GroupPhoto" className="wicc-img" />
          </div>
        );
      default:
        return <p>Select a job to view more information.</p>;
    }
  };

  return (
    <div className="popup">
      <h2>Defense: Problem Solving</h2>
      <p>
        Defense is about anticipation, resiliance, and working together. It’s
        like problem-solving: spotting challenges early, staying focused, and
        finding quick solutions. Just as a strong defender can change the course
        of a game, my experiences have equipped me to navigate obstacles and
        develop creative solutions.
      </p>

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
