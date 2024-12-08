import React from "react";
import "./ProjectsPopup.css";
import chronomingle from "../images/chronomingle.png";
import chronomingle2 from "../images/chronomingle2.png";
import mcudle from "../images/mcudle.png";
import hci from "../images/hci.png";
import map3300 from "../images/3300-map.png";
import graph3300 from "../images/3300-1.png";

function ProjectsPopup() {
  const projects = [
    {
      title: "Vroom Vroom",
      description:
        "I collaborated with a team of three to develop a car navigation game integrated with an FRDM-KL46Z microcontroller, allowing the user to control the game through hardware interactions. By tilting the microcontroller, accelerometer data is transmitted over UART to a JavaScript server, enabling the car to move and avoid obstacles in real-time. A button press on the microcontroller activates a shield power-up, and the screen displays the player's current score. My contributions included processing input from the microcontroller, establishing its connection with the Node.js server, and managing data exchange between the client and the microcontroller. This project provided valuable experience in bridging hardware and software through embedded systems.",

      skills: ["C", "JavaScript", "Express.js"],
      video: "https://www.youtube.com/embed/cpfzfa5NebU",
      link: "https://pages.github.coecis.cornell.edu/ece3140-sp2023/ars369-lk543-ns597/",
    },
    {
      title: "Chronomingle",
      description:
        "Collaborated in a team of four to develop a web application that generates celebrity matches based on user-provided demographic and personality preferences, desired profession, and swiping behavior. Implemented cosine similarity and Rocchio’s method to identify the closest initial matches and refine them dynamically as the user swipes.",
      skills: ["Python", "JavaScript"],
      image: chronomingle,
      image2: chronomingle2,
      link: "https://github.com/youshraj/4300-Flask-Template-JSON",
    },
    {
      title: "MCUdle",
      description:
        "Created a Marvel themed version of wordle as an independant project to teach myself web development basics. I designed and implemented the game interface using HTML, CSS, and JavaScript, incorporating Marvel characters and terms as the word bank. Utalized an API to determine if user guesses were dictionary words. This project increased my understanding of frontend development and DOM manipulation.",
      skills: ["JavaScript", "CSS"],
      image: mcudle,
      link: "https://github.com/asharin18/MCUdle",
    },
    {
      title: "Crescendo Connect",
      description:
        "I collaborated in a team to design a high-fidelity app prototype aimed at helping musicians reconnect with their passion for music through rewards and community engagement. We conducted user research interviews and usability tests, iteratively refining designs based on feedback to ensure the prototype aligned with user needs. Ultimately, delivered an interactive Figma prototype that adheres to best practices in user-centered design.",
      skills: ["Figma", "User Research"],
      image: hci,
      link: `${process.env.PUBLIC_URL}/hci.pdf`,
    },
    {
      title: "AI Recipe Generator",
      description: "Project in Progress",
      skills: ["Python"],
      image: "link-to-project-image5.jpg",
    },
    {
      title:
        "Global Trends in Economic, Equity, and Health Indicators Over Time",
      description:
        "As part of a team, for ‘CS3300: Visual Data Analytics for the Web’, I created an interactive web visualization to explore global trends in economic, health, and equity indicators from 1960-2016. By integrating data from sources like the World Bank API and US Food Prices dataset, we highlighted disparities and correlations across countries. Users can select countries of interest on an interactive map, view indicator trends over time, and filter data by specific time periods. Key features include dropdown menus for selecting indicators, a correlation tool to quantify relationships (GDP vs. population in the United States as seen above), and a timeline slider for focused analysis. The design prioritizes both intuitive exploration and clear trend identification.",
      skills: ["JavaScript", "Data Visualization"],
      image: map3300,
      image2: graph3300,
      link: "https://github.coecis.cornell.edu/ars369/3300-P2",
    },
  ];

  return (
    <div className="popup">
      <h2>Offense: Projects</h2>
      <p>
        Offense helps your team rack up the points and get closer to victory.
        It’s all about showcasing your skills and working together to make
        things happen. Projects are where I’ve had the chance to build and
        sharpen my abilities, working collaboratively to create solutions, just
        like executing a perfect play to score.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>{project.title}</h3>
            {project.video ? (
              <iframe
                src={project.video}
                title={project.title}
                width="100%"
                height="200px"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            {project.image2 && (
              <img
                src={project.image2}
                alt={project.title}
                className="project-image"
              />
            )}
            <p>{project.description}</p>
            <div className="skills">
              {project.skills.map((skill, idx) => (
                <span className="skill-bubble" key={idx}>
                  {skill}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPopup;
