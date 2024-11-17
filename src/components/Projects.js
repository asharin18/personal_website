import React from "react";
import "./ProjectsPopup.css";
import chronomingle from "../images/chronomingle.png";

function ProjectsPopup() {
  const projects = [
    {
      title: "Vroom Vroom",
      description: "hereeeeee",
      skills: ["C", "JavaScript", "Express.js"],
      video: "https://www.youtube.com/embed/cpfzfa5NebU",
      link: "https://pages.github.coecis.cornell.edu/ece3140-sp2023/ars369-lk543-ns597/",
    },
    {
      title: "Chronomingle",
      description: "Description of Project 3",
      skills: ["Python", "JavaScript"],
      image: chronomingle,
      link: "https://github.com/youshraj/4300-Flask-Template-JSON",
    },
    {
      title: "MCUdle",
      description:
        "long description test long description testlong description testlong description testlong description testlong description testlong description testlong description testlong description testlong description testlong description testv",
      skills: ["JavaScript", "CSS"],
      image: "link-to-project-image1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Vinyl Collection App",
      description: "Description of Project 4",
      skills: ["Python", "SQLAlchemy", "Flask", "Google Cloud"],
      image: "link-to-project-image4.jpg",
      link: "https://github.com/asharin18/vinyl_collection",
    },
    {
      title: "AI Recipe Generator",
      description: "Description of Project 5",
      skills: ["Python"],
      image: "link-to-project-image5.jpg",
      link: "https://example.com/project5",
    },
    {
      title: "Food Insecurity Data Visualization",
      description: "Description of Project 6",
      skills: ["JavaScript"],
      image: "link-to-project-image6.jpg",
      link: "https://example.com/project6",
    },
  ];

  return (
    <div className="popup">
      <h2>Projects</h2>
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
            <p>{project.description}</p>
            <div className="skills">
              {project.skills.map((skill, idx) => (
                <span className="skill-bubble" key={idx}>
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPopup;
