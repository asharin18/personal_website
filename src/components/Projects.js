import React from "react";
import "./ProjectsPopup.css"; // Make sure to create a separate CSS file for styling

function ProjectsPopup() {
  const projects = [
    {
      title: "Project 1",
      description:
        "long description test long description testlong description testlong description testlong description testlong description testlong description testlong description testlong description testlong description testlong description testv",
      skills: ["React", "JavaScript", "CSS"],
      image: "link-to-project-image1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      skills: ["Python", "Django", "SQL"],
      image: "link-to-project-image2.jpg",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      skills: ["Java", "Spring Boot", "MySQL"],
      image: "link-to-project-image3.jpg",
      link: "https://example.com/project3",
    },
    {
      title: "Project 4",
      description: "Description of Project 4",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "link-to-project-image4.jpg",
      link: "https://example.com/project4",
    },
    {
      title: "Project 5",
      description: "Description of Project 5",
      skills: ["Node.js", "Express", "MongoDB"],
      image: "link-to-project-image5.jpg",
      link: "https://example.com/project5",
    },
    {
      title: "Project 6",
      description: "Description of Project 6",
      skills: ["Flutter", "Dart", "Firebase"],
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
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
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
