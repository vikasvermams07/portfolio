import React from "react";
import "./Skills.css"; // Import the CSS file for styling
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  // Define an array of skills with their corresponding icons
  const skills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "CodeIgniter", icon: "fas fa-fire" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "AWS", icon: "fab fa-aws" },

    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={`${skill.icon} icon`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Skills;
