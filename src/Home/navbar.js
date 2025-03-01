import React from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ React Router for navigation
import { Link as ScrollLink } from "react-scroll"; // ✅ React-Scroll for smooth scrolling
import "../App.css"; // Import your styles

const Navbar = () => {
  const location = useLocation(); // ✅ Detects current page

  return (
    <nav className="navbar">
      <img src="/logo.png" className="logo" alt="Logo" />
      <ul>
        {/* ✅ Navigates to Home Page */}
        <li><Link to="/">HOME</Link></li>

        {/* ✅ If on Home Page, smooth scroll to "about". Else, go to home first */}
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="about" smooth={true} duration={500}>Overview</ScrollLink>
          ) : (
            <Link to="/">Overview</Link>
          )}
        </li>

        {/* ✅ Goes to Events Page */}
        <li><Link to="../Events">LIST OF EVENTS</Link></li>

        {/* ✅ Dummy Links for Organizers & Sponsors (Replace with actual pages if needed) */}
        <li><a href="#">ORGANIZERS</a></li>
        <li><a href="#">SPONSORS</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
