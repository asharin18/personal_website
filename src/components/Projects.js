import React from "react";
import "./ProjectsPopup.css";
import chronomingle from "../images/chronomingle.png";
import chronomingle2 from "../images/chronomingle2.png";
import mcudle from "../images/mcudle.png";
import hci from "../images/hci.png";
import map3300 from "../images/3300-map.png";
import graph3300 from "../images/3300-1.png";
import collab from "../images/collab.png";

function ProjectsPopup() {
  const projects = [
    {
      title: "Vroom Vroom",
      description:
        "I collaborated with a team of three to develop a car navigation game integrated with an FRDM-KL46Z microcontroller, allowing the user to control the game through hardware interactions. By tilting the microcontroller, accelerometer data is transmitted over UART to a JavaScript server, enabling the car to move and avoid obstacles in real-time. A button press on the microcontroller activates a shield power-up, and the screen displays the player's current score. My contributions included processing input from the microcontroller, establishing its connection with the Node.js server, and managing data exchange between the client and the microcontroller. This project provided valuable experience in bridging hardware and software through embedded systems.",

      skills: ["C", "JavaScript", "Express.js"],
      video: "https://www.youtube.com/embed/cpfzfa5NebU",
      link: "https://pages.github.coecis.cornell.edu/ece3140-sp2023/ars369-lk543-ns597/",
      collaborative: true,
    },
    {
      title: "Chronomingle",
      description:
        "Collaborated in a team of four to develop a web application that generates celebrity matches based on user-provided demographic and personality preferences, desired profession, and swiping behavior. Drawing from principles in language and information retrieval, we implemented cosine similarity and Rocchio’s method to identify the closest initial matches and refine them dynamically as the user swipes.",
      skills: ["Python", "JavaScript"],
      image: chronomingle,
      image2: chronomingle2,
      link: "https://github.com/youshraj/4300-Flask-Template-JSON",
      collaborative: true,
    },
    {
      title: "MCUdle",
      description:
        "Created a Marvel themed version of Wordle as an independant project to teach myself web development basics. I designed and implemented the game interface using HTML, CSS, and JavaScript, incorporating Marvel characters and terms as the word bank. Utalized an API to determine if user guesses were dictionary words. This project increased my understanding of frontend development and DOM manipulation, expanding my overall skillset.",
      skills: ["JavaScript", "CSS"],
      image: mcudle,
      link: "https://github.com/asharin18/MCUdle",
      collaborative: false,
    },
    {
      title: "Crescendo Connect",
      description:
        "I collaborated in a team to design a high-fidelity app prototype aimed at helping musicians reconnect with their passion for music through rewards and community engagement. We conducted user research interviews and usability tests, iteratively refining designs based on feedback to ensure the prototype aligned with user needs. Ultimately, delivered an interactive Figma prototype that adheres to best practices in user-centered design.",
      skills: ["Figma", "User Research"],
      image: hci,
      link: `${process.env.PUBLIC_URL}/hci.pdf`,
      collaborative: true,
    },
    {
      title: "AI Recipe Generator",
      description: "Project in Progress",
      skills: ["Python"],
      image: "link-to-project-image5.jpg",
      collaborative: true,
    },
    {
      title: "Global Trends in Economic and Equity Indicators Over Time",
      description:
        "As part of a team for ‘CS3300: Visual Data Analytics for the Web,’ I developed an interactive D3.js web visualization to explore global trends in economic, health, and equity indicators from 1960-2016. Using data from sources like the World Bank API and US Food Prices dataset, we highlighted disparities and correlations across countries through features like an interactive map, dropdown menus, a correlation tool, and a timeline slider. Guided by user-centered design principles, we created an intuitive interface that balanced exploration with clarity. This project enhanced my skills in crafting effective visualizations and designing tools to communicate complex data.",
      skills: ["JavaScript", "Data Visualization"],
      image: map3300,
      image2: graph3300,
      link: "https://github.coecis.cornell.edu/ars369/3300-P2",
      collaborative: true,
    },
  ];

  return (
    <div className="popup-extras">
      <h2>Offense: Projects</h2>
      <p>
        In basketball, offense is about teamwork, versatility, and making the
        right plays. Similarly, my projects are designed to develop and sharpen
        various skill sets, ranging from embedded systems and artificial
        intelligence to human-computer interaction design. Many of these
        projects are collaborative, as highlighted by the collaboration icon,
        and are the result of effective communication, strategic planning, and
        teamwork to score innovative and effective results.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>
              {project.title}
              {project.collaborative && (
                <img
                  src={collab}
                  alt="Collaborative"
                  className="collab-icon"
                  style={{ width: "30px", height: "30px", marginLeft: "20px" }}
                />
              )}
            </h3>
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
