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
              I spent two summers interning at Comcast, where I contributed to
              the internal alerts team. Through this experience, I honed my
              problem-solving abilities by tackling a wide range of tasks and
              leveraging diverse technologies, while collaborating in an agile
              environment. Presenting projects further strengthened my
              communication skills, enabling me to convey crucial information
              effectively. Below are a few highlights from my experience:
              <ul>
                <li>
                  <strong>Analyzed and Visualized Alert Data:</strong> Utilized
                  AWS Glue to analyze alert data, enriched AWS TimeStream table,
                  and translated insights into a Grafana time series dashboard,
                  enhancing data-driven decision-making
                </li>
                <li>
                  <strong>Automated 10G Network Signals:</strong> Innovated 10G
                  network signal ideas and automated their integration to a data
                  service via AWS Step Function
                </li>
                <li>
                  <strong>Strengthened API Security:</strong> Implemented new
                  scopes and queries, effectively preventing unauthorized access
                </li>
              </ul>
            </p>
          </div>
        );
      case "job2":
        return (
          <div>
            <h3>Consultant</h3>
            <p>
              I served as a consultant for the{" "}
              <strong>Object-Oriented Programming and Data Structures</strong>{" "}
              course at Cornell for four semesters, which was an incredibly
              rewarding experience. This role deepened my technical expertise on
              the subject manner and refined my ability to explain complex
              concepts in simple, digestible terms. Whether guiding students
              through debugging challenges or preparing them for exams, I
              developed strong communication and problem-solving skills.{" "}
            </p>
            <ul>
              <li>
                Conducted 250+ office hours over four semesters, assisting
                students with Java programming assignments and exam preparation.
              </li>
              <li>
                Collaborated in grading assignments and exams of over 700
                students in the course, ensuring fair and consistent
                evaluations.
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
            <div className="wicc-container">
              <p>
                I collaborated with a team of designers to update and maintain
                the React-based Women In Computing at Cornell website, focusing
                on enhancing the user experience and ensuring mobile
                responsiveness. I also helped run a workshop where we guided
                attendees through creating their own personal websites from
                scratch and developing their personal brand.{" "}
              </p>
              <img src={techComm} alt="GroupPhoto" className="wicc-img" />
            </div>
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
