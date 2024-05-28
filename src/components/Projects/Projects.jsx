import React from "react";
import "./Projects.css"; // Import the CSS file for styling

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <h2>Projects</h2>
        <h3>DigiMarker</h3>
        <p>
          DigiMarker is a Paper Evaluation project, demonstrating proficiency in
          web development and software engineering. Leveraged API Integration to
          connect the application to external data sources, enabling real-time
          information retrieval and data enrichment. Implemented Ajax to create
          a seamless and responsive user experience, reducing page reloads and
          enhancing interactivity. Demonstrated a commitment to writing clean
          and well-organized code, ensuring maintainability and scalability of
          the project. Skillfully managed the codebase using version control
          systems like Git, enabling efficient collaboration with the
          development team.
        </p>
        <h5>
          Skills used - Codeigniter Framework,PHP,MySQL,API
          Integration,Ajax,JSON,Javascript,HTML,CSS,Bootstrap
        </h5>
        <h3>Paper Setter</h3>
        <p>
          The "Paper Setter" project facilitates clients in setting the question
          paper for their institutes prior to exams. It enables communication
          among examiners and higher authorities through an integrated chatbox
          within the project.
        </p>
        <h5>
          Skills used - Codeigniter Framework,PHP,MySQL,API
          Integration,Ajax,JSON,Javascript,HTML,CSS,Bootstrap
        </h5>
        <h3>SmartOSM</h3>
        <p>
          SmartOSM is an ongoing paper evaluation-based project currently under
          development. It employs Node.js and MySQL as the backend technologies,
          while React.js serves as the frontend framework. The project focuses
          on enhancing the efficiency of paper evaluation processes.
        </p>
        <h5>
          Skills used - Node.js, Express.js, MySQL, API Creation, Swagger,
          Postman
        </h5>
      </div>
      <hr />
    </div>
  );
};

export default Projects;
