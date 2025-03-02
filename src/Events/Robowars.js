import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Robowars = () => {
  return (
    <div className="robowars-container">
      {/* Header */}
      <header className="robowars-header">
        <h1>Robowars</h1>
      </header>

      {/* Main Content Layout */}
      <div className="robowars-content">
        {/* Image on Left */}
        <div className="robowars-image-container">
          <img src="/robowars.png" alt="Robowars" className="robowars-image" />
        </div>

        {/* Event Details on Right */}
        <div className="robowars-details">
          

          <h2>⚙️ Robot Specifications & Arena</h2>
          <ul>
            <li><strong>Bot Dimensions:</strong> No restrictions</li>
            <li><strong>Arena Dimensions:</strong> 3m x 3m x 3m</li>
            <li><strong>Weight Classes:</strong> 8 kg & 15 kg (1% tolerance)</li>
            <li><strong>Participation:</strong> One bot per team per weight class</li>
          </ul>

          {/* <h2>🎟 Ticket Requirement</h2>
          <p>Each participant must purchase a <strong>GTC25 ticket</strong> to compete in the event.</p> */}

          <h2>🏆 Rounds</h2>
          <ul>
            <li><strong>Round 1 – Qualifiers:</strong> All teams will battle for points in their weight category.</li>
            <li><strong>Round 2 – Semifinals & Grand Finale:</strong> Top-performing bots move to the semifinals. Winners advance to the final showdown to crown the champions.</li>
          </ul>

          {/* <h2>📜 Rules & Regulations</h2>
          <ul>
            <li>A robot is victorious if its opponent is immobilized.</li>
            <li>A robot is considered immobilized if it cannot display a linear motion of at least five inches within 10 seconds.</li>
            <li>If both robots remain mobile at the end, judges decide the winner.</li>
            <li>If a bot is deemed unsafe by judges, it will be disqualified.</li>
            <li>Pinning or lifting is allowed for a maximum of 10 seconds per instance.</li>
            <li>If a bot gets stuck due to arena deformity, it must free itself before the immobilization countdown begins.</li>
            <li>The tournament format will be knockout-based, adjusting for odd or even team counts.</li>
          </ul> */}

          {/* <h2>📊 Marking Criteria</h2>
          <ul>
            <li><strong>Aggression:</strong> Frequency, severity, boldness, and effectiveness of attacks.</li>
            <li><strong>Control:</strong> Ability to target weaknesses and minimize incoming damage.</li>
            <li><strong>Damage:</strong> Functional impairment of the opponent due to deliberate attacks.</li>
          </ul> */}

          {/* <h2>⚠️ Penalties & Disqualification</h2>
          <ul>
            <li>Violating rules (e.g., excessive pinning/lifting) results in penalties.</li>
            <li>Robots deemed unsafe during the match may be disqualified.</li>
            <li>Failure to comply with safety and competition guidelines may lead to removal.</li>
          </ul> */}

          {/* <h2>🛡️ Safety Guidelines</h2>
          <ul>
            <li>All robots must be built with safety as a priority.</li>
            <li>Judges will assess each bot’s safety before the match.</li>
            <li>Unsafe bots will be disqualified immediately.</li>
          </ul> */}

          {/* <h2>⚖️ Appeals & Disputes</h2>
          <p>All decisions by the judges are final and cannot be challenged.</p> */}

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
  <a href="https://unstop.com/p/robo-wars-sathyabama-university-1415219?lb=HYHZmLEj&utm_medium=Share&utm_source=shortUrl" 
     target="_blank" 
     rel="noopener noreferrer">
     Register Now
  </a>
</div>


      <div class="event-organizers">
    <h3>Event Organizers</h3>
    <p>Name - Contact Number</p>
    <p>Name - Contact Number</p>
  </div>

    </div>
  );
};

export default Robowars;
