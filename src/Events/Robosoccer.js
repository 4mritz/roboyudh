import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import roboSoccerImage from './robosoc.png'; // Adjust the path as necessary

const Robosoccer = () => {
  return (
    <div className="robowars-container">
     

      {/* Header */}
      <header className="robowars-header">
        <h1>RoboSoccer</h1>
      </header>

      {/* Main Content Layout */}
      <div className="robowars-content">
        {/* Image on Left */}
        <div className="robowars-image-container">
          <img src={roboSoccerImage} alt="Robowars" className="robowars-image" />
        </div>

        {/* Event Details on Right */}
        <div className="robowars-details">
          <h2>⚙ Robot Specifications & Arena</h2>
          <ul>
            <li><strong>Bot Dimensions:</strong> 300mm x 300mm x 300mm</li>
            <li><strong>Arena Dimensions:</strong> 180cm x 360cm</li>
            <li><strong>Weight Classes:</strong> 5 kg  (with a tolerance of ±5%) </li>
            <li><strong>Participation:</strong> One bot per team </li>
          </ul>

          <h2>🏆 Rounds</h2>
          <ul>
            <li><strong>Round  – :</strong> 3 minutes per round .</li>
            <li><strong>Match Format – :</strong>Teams compete one-on-one. The robot that scores the highest number 
            of goals within the time limit wins the round and advances to the next round. </li>
          </ul>

          <h2>🔄 Phases</h2>
          <ul>
            <li><strong>Phase 1 – Video Submission:</strong> Participants must submit a video showcasing their bot’s capabilities. Only shortlisted teams will advance.</li>
            <li><strong>Phase 2 – Physical Round:</strong> Shortlisted teams must purchase an <strong>Event Passport</strong> to compete in live challenges. Winners will be determined based on cumulative performance.</li>
          </ul>

          <h2>📍 Venue</h2>
          <p><strong>Location:</strong> Open Air Theatre</p>
        </div>
      </div>

      {/* Register Button at Bottom */}
      <div className="register-button">
  <a href="https://unstop.com/o/kYQH4cI?lb=HYHZmLEj&utm_medium=Share&utm_source=shortUrl" 
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

export default Robosoccer;