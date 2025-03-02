import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import raceImage from './rc.png'; // Adjust the path as necessary

const Formularc = () => {
  return (
    <div className="robowars-container">
      

      {/* Header */}
      <header className="robowars-header">
        <h1>Formula Rc</h1>
      </header>

      {/* Main Content Layout */}
      <div className="robowars-content">
        {/* Image on Left */}
        <div className="robowars-image-container">
          <img src={raceImage} alt="formularc" className="robowars-image" />
        </div>

        {/* Event Details on Right */}
        <div className="robowars-details">
          <h2>⚙ Robot Specifications & Arena</h2>
          <ul>
            <li><strong>Type:</strong> Only electric RC cars are allowed.  </li>
            <li><strong>Control:</strong> Vehicles must be operated using a wireless remote-control system. </li>
            <li><strong>Design Constraints: </strong>  no weapons allowed </li>
            <li><strong>Arena Specifications : </strong> Minimum track width around 50cm  </li>
            <li><strong>Participation:</strong> One bot per team </li>
          </ul>

          <h2>🏆 Rounds</h2>
          <ul>
            <li><strong>Round 1 – Drag Racing:</strong>  Straight-line race for maximum speed.  </li>
            <li><strong>Round 2 – Time Attack: </strong>  Completing laps in the shortest time. </li>
            <li><strong>Round 3 – Autocross:</strong>  test of precision and obstacle navigation.  </li>
            <li><strong>Round 3 – Head-on Battle:</strong>  1v1 elimination-style racing.   </li>
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
  <a href="https://unstop.com/o/WRUCaAf?lb=HYHZmLEj" 
     target="_blank" 
     rel="noopener noreferrer">
     Register Now
  </a>
</div>


      <div className="event-organizers">
        <h3>Event Organizers</h3>
        <p>Name - Contact Number</p>
        <p>Name - Contact Nu mber</p>
      </div>
    </div>
  );
};

export default Formularc;