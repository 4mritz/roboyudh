import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import hackaiImage from './ai.png'; // Adjust the path as necessary

const Hackaithon = () => {
  return (
    <div className="robowars-container">
      

      {/* Header */}
      <header className="robowars-header">
        <h1>Hack-ai-thon</h1>
      </header>

      {/* Main Content Layout */}
      <div className="robowars-content">
        {/* Image on Left */}
        <div className="robowars-image-container">
          <img src={hackaiImage} alt="hackaithon" className="robowars-image" />
        </div>

        {/* Event Details on Right */}
        <div className="robowars-details">
          <h2>⚙ Event Structure</h2>
          <ul>
            <li><strong>Time Given:</strong> Teams will be given 2-3 hours to complete a mini project based on the assigned topic or 
            problem statement.  </li>
            <li><strong>Judgement:</strong>  Projects will be judged based on creativity, the usage of AI tools, and technical 
            implementation. </li>
          </ul>


          <h2>🔄 Rules and Regulations</h2>
          <ul>
            <li><strong> 1. </strong>Participants must bring their laptops to the event.</li>
            <li><strong> 2.</strong> Each team can consist of 1-2 members. </li>
            <li><strong> 3.</strong> Projects will be judged based on the following criteria:  </li>
            <li><strong> Creativity</strong>  The originality and innovation behind the project.   </li>
            <li><strong> Usage of AI Tools:</strong>  How effectively AI tools and resources are integrated into the 
            solution.    </li>
            <li><strong> Technical Implementation: </strong>   The complexity and functionality of the solution.    </li>
            <li><strong> 4.</strong> Participants must arrive on time by <strong>9:30 AM</strong> at the Remmibai Auditorium.   </li>
          </ul>

          <h2>📍 Venue</h2>
          <p><strong>Location:</strong>  Remibai Auditorium  </p>
        </div>
      </div>

      {/* Register Button at Bottom */}
      <div className="register-button">
  <a href="https://unstop.com/o/v0J9nS8?lb=HYHZmLEj" 
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

export default Hackaithon;