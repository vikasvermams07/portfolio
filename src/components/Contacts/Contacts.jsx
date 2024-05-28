import React from "react";
import "./Contacts.css"; // Import the CSS file for styling

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2>Contact Information</h2>
      <div className="contacts">
        <div className="contact-item">
          <h3>Phone Number:</h3>
          <p>+91 8104514650</p>
        </div>
        <div className="contact-item">
          <h3>Email:</h3>
          <p>vermavikkudeveloper@gmail.com</p>
        </div>
        {/* Add more contact items as needed */}
      </div>
    </div>
  );
};

export default Contacts;
