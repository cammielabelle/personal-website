import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Personal Portfolio Website",
            description: "Website detailing my professional portfolio",
            tech: "React, CSS, React Router",
            link: "to be added"
        },
        {
            name: "Blog Editor",
            description: "SENG 265 Project",
            tech: "Python, PyQt6",
            link: "to be added"
        }
    ];

    return (
        <div className="projects-container">
            <div className="projects-content">
                {projects.map((project,index) =>(
                    <div key={index} className="project-card">
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p className="tech"><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects