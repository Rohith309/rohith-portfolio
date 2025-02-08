import { useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">[PROJECTS:://]</h1>
        
        <div className="projects-grid">
          {[
            {
              name: "CAMPUS.LIFE",
              description: "A COMPREHENSIVE DIGITAL ENGAGEMENT APP FOR CAMPUSES, ENHANCING STUDENT INTERACTION AND CAMPUS CONNECTIVITY",
              tags: ["#ANDROID STUDIO", "#DJANGO", "#JAVA", "#PYTHON", "#REST API"]
            },
            {
              name: "LINE & LAUGH",
              description: "A FUN, INTERACTIVE DRAWING APP WHERE USERS DRAW, AND OTHERS GUESS. FOSTERING CREATIVITY AND COLLABORATION.",
              tags: ["#PYTHON", "#JAVA", "#ANDROID STUDIO", "#DJANGO"]
            },
            {
              name: "CRAVINGS KILLER",
              description: "AN INTUITIVE FOOD-ORDERING WEBSITE WITH USER-FRIENDLY INTERFACE AND DYNAMIC FEATURES",
              tags: ["#REACT", "#BOOTSTRAP", "#JAVASCRIPT"]
            },
            {
              name: "TASK MANAGER",
              description: "A MODERN TASK MANAGEMENT APPLICATION WITH USER AUTHENTICATION, PRIORITY LEVELS, AND REAL-TIME UPDATES",
              tags: ["#REACT", "#DJANGO", "#MYSQL", "#REST API", "#AXIOS"]
            },
            {
              name: "STUDENT CRUD",
              description: "A ROBUST CRUD APPLICATION FOR MANAGING STUDENT DATA WITH SEAMLESS DATABASE OPERATIONS AND RESPONSIVE UI",
              tags: ["#DJANGO", "#SQLITE", "#BOOTSTRAP", "#PYTHON"]
            }
          ].map((project, index) => (
            <div 
              className="project-card" 
              key={project.name}
              style={{"--card-index": index}}
            >
              <div className="project-content">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 