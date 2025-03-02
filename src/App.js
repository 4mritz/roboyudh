import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Home/navbar";
import Footer from "./Home/footer";
import Header from "./Home/header";
import About from "./Home/about";
import Events from "./Home/event";
import Organizers from "./Home/organizers";
import MainEvent from "./Home/maineve";
import EventsList from "./Events";
import Robowars from "./Events/Robowars";
// import LoadingScreen from "./Loading/LoadingScreen.js"; // Import the new loading screen

import "./App.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="layout">
        <Navbar /> {/* ✅ Navbar is always visible */}
        <Routes>
          {/* ✅ Home page directly in App.js */}
          <Route
            path="/"
            element={
              <>
                <Header className="home-header" />
                <About />
                <Events />
                <Organizers />
                <MainEvent />
              </>
            }
          />
          <Route path="/events" element={<EventsList />} />
          <Route path="/robowars" element={<Robowars />} />
        </Routes>
        <Footer /> {/* ✅ Footer is always visible */}
      </div>
    </Router>
  );
};

export default App;
