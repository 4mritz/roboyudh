import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import mazedashImage from './maze.png'; // Adjust the path as necessary

const Mazedash = () => {
  return (
    <div className="robowars-container">
      

      {/* Header */}
      <header className="robowars-header">
        <h1>Maze Dash</h1>
      </header>

      {/* Main Content Layout */}
      <div className="robowars-content">
        {/* Image on Left */}
        <div className="robowars-image-container">
          <img src={mazedashImage} alt="mazesolver" className="robowars-image" />
        </div>

        {/* Event Details on Right */}
        <div className="robowars-details">
          <h2>⚙ Robot Specifications & Arena</h2>
          <ul>
            <li><strong>Bot Dimensions:</strong> 25cm x 25cm x 25cm </li>
            <li><strong>Arena Dimensions:</strong> 250cm x 250cm</li>
            <li><strong>Weight Limit:</strong> Must not exceed 5kg</li>
            <li><strong>Participation:</strong> One bot per team </li>
          </ul>

          <h2>🏆 Rounds</h2>
          <ul>
            <li><strong>Round 1 – Initial Round:</strong>  Each robot will get one attempt to navigate the maze. The best time will 
        be recorded. </li>
            <li><strong>Round 2 – Elimination Round:</strong> Teams that do not complete the maze within the time limit or fail to 
            follow the path correctly will be eliminated. </li>
            <li><strong>Round 3 – Final Round:</strong> The top robots from the elimination round will compete for the best time to 
            solve the maze.  </li>
          </ul>

          <h2>🔄 Phases</h2>
          <ul>
            <li><strong>Phase 1 – Video Submission:</strong> Participants must submit a video showcasing their bot’s capabilities. Only shortlisted teams will advance.</li>
            <li><strong>Phase 2 – Physical Round:</strong> Shortlisted teams must purchase an <strong>Event Passport</strong> to compete in live challenges. Winners will be determined based on cumulative performance.</li>
          </ul>

          <h2>📍 Venue</h2>
          <p><strong>Location:</strong>  Sathyabama Indoor Stadium </p>
        </div>
      </div>

      {/* Register Button at Bottom */}
      <div className="register-button">
  <a href="https://unstop.com/o/Mu2BTFd?lb=HYHZmLEj" 
     target="_blank" 
     rel="noopener noreferrer">
     Register Now
  </a>
</div>


      <div className="event-organizers">
        <h3>Event Organizers</h3>
        <p>Name - Contact Number</p>
        <p>Name - Contact Number</p>
      </div>
    </div>
  );
};

export default Mazedash;