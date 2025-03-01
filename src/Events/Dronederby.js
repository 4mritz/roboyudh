import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import droneImage from './drone.png'; // Adjust the path as necessary

const Dronederby = () => {
  return (
    <div className="robowars-container">
      {/* Back Button */}
      <div className="back-button">
        <Link to="/">← Back</Link>
      </div>

      {/* Header */}
      <header className="robowars-header">
        <h1>Drone Derby</h1>
      </header>

      {/* Main Content Layout */}
      <div className="robowars-content">
        {/* Image on Left */}
        <div className="robowars-image-container">
          <img src={droneImage} alt="dronederby" className="robowars-image" />
        </div>

        {/* Event Details on Right */}
        <div className="robowars-details">
          <h2>⚙ Robot Specifications & Arena</h2>
          <ul>
            <li><strong>Max Weight:</strong> 2kg </li>
            <li><strong>Power:</strong>  Electric-powered drones only  </li>
            <li><strong>Control:</strong>  Manually controlled (remote or FPV) </li>
            <li><strong>Arena Specifications : </strong> Loops of varying heights, zig-zagging poles, free-flight section, and 
            landing pad.   </li>
            <li><strong>Sensors:</strong> GPS and stabilization sensors allowed (no full autonomy)  </li>
          </ul>

          <h2>🏆 Rounds</h2>
          <ul>
            <li><strong>Round 1 – Qualifying Round: </strong>  A simplified version of the course. The top performers will advance to the final round.   </li>
            <li><strong>Round 2 – Final Round:  </strong>  A full obstacle course. The fastest completion time with the least penalties wins.
            Each team gets a maximum of two chances to complete the course.  </li>
          </ul>

          <h2>🔄 Phases</h2>
          <ul>
            <li><strong>Phase 1 – Video Submission:</strong> Participants must submit a video showcasing their bot’s capabilities. Only shortlisted teams will advance.</li>
            <li><strong>Phase 2 – Physical Round:</strong> Shortlisted teams must purchase an <strong>Event Passport</strong> to compete in live challenges. Winners will be determined based on cumulative performance.</li>
          </ul>

          <h2>📍 Venue</h2>
          <p><strong>Location:</strong>   Cricket Ground </p>
        </div>
      </div>

      {/* Register Button at Bottom */}
      <div className="register-button">
        <Link to="/register">Register Now</Link>
      </div>

      <div className="event-organizers">
        <h3>Event Organizers</h3>
        <p>Name - Contact Number</p>
        <p>Name - Contact Nu mber</p>
      </div>
    </div>
  );
};

export default Dronederby;