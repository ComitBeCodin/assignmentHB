import React from 'react';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src= "https://via.placeholder.com/150" alt="HowBee Logo" />
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><i className="fas fa-tachometer-alt"></i> Dashboard</li>
          <li><i className="fas fa-running"></i> Posture Routine</li>
          <li><i className="fas fa-chalkboard-teacher"></i> Classroom</li>
          <li><i className="fas fa-calendar-alt"></i> Calendar</li>
          <li><i className="fas fa-music"></i> Music</li>
          <li><i className="fas fa-microphone-alt"></i> Recordings</li>
          <li><i className="fas fa-wallet"></i> Earnings</li>
          <li><i className="fas fa-cog"></i> Settings</li>
        </ul>
      </div>
      <div>
        <div className="footer-menu">
          <i className="fas fa-question-circle"></i> Help and Support
        </div>
        <div className="footer-menu">
          <i className="fas fa-sign-out-alt"></i> Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
