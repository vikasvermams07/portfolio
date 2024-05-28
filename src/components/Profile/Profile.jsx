import React from "react";
import "./Profile.css"; // Import the CSS file for styling
import "@fortawesome/fontawesome-free/css/all.min.css";

const Profile = () => {
  const downloadResume = () => {
    const baseUrl = window.location.origin;
    const file = "/assets/doc/vikas_verma_developer.pdf";
    const url = baseUrl + file;
    window.open(url, "_blank");
  };

  return (
    <div className="profile-container">
      <button className="resume" onClick={downloadResume}>
        <i class="fas fa-download" style={{ marginRight: "5px" }}></i>
        Resume
      </button>

      <div className="img-container">
        <img
          src="./assets/img/vk.jpg"
          alt="Profile"
          className="profile-photo"
        />
      </div>
      <div className="profile-info">
        <h1>Vikas Verma</h1>
        <p>Designation: Software Developer</p>
        <p>Location: Turbhe, Navi Mumbai, India</p>
        <p>Qualification: Bsc CS (Computer Science)</p>
        <p>Experience: 1 Year and 4 Months</p>
      </div>
    </div>
  );
};

export default Profile;
