import React from "react";
import "./Experience.css"; // Import the CSS file for styling

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="experience">
        <div className="experience-item">
          <h3>Perapsis InfoTech</h3>
          <p className="dates">Feb 2023 - Present</p>
          <p>Role: Software Developer</p>
        </div>
        {/* <div className="experience-item">
          <h3>Another Company</h3>
          <p className="dates">Aug 2018 - Dec 2019</p>
          <p>Role: Frontend Developer</p>
        </div> */}
        {/* Add more experience items as needed */}
      </div>
      <hr />
    </div>
  );
};

export default Experience;
