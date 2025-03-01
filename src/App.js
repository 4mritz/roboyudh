import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Home/navbar";
import Footer from "./Home/footer";
import Header from "./Home/header";
import About from "./Home/about";
import Events from "./Home/event"; // Renamed to avoid conflict
import Organizers from "./Home/organizers";
import MainEvent from "./Home/maineve";
import EventsList from "./Events";
import Robowars from "./Events/Robowars";
import RoboSoccer from "./Events/Robosoccer";
import Dronederby from "./Events/Dronederby";
import Formularc from "./Events/Formularc";
import Mazedash from "./Events/Mazedash";
import Hackaithon from "./Events/Hackaithon";

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
                <Header className="home-header" /> {/* ✅ Only Home Page Header */}
                <About />
                <Events />
                <Organizers />
                <MainEvent />
              </>
            }
          />
          <Route path="/Events" element={<EventsList />} />
          <Route path="/Robowars" element={<Robowars />} />
          <Route path="/Robosoccer" element={<RoboSoccer />} />
          <Route path="/Dronederby" element={<Dronederby />} />
          <Route path="/Mazedash" element={<Mazedash />} />
          <Route path="/Formularc" element={<Formularc />} />
          <Route path="/Hackaithon" element={<Hackaithon />} />

        </Routes>
        <Footer /> {/* ✅ Footer is always visible */}
      </div>
    </Router>
  );
};

export default App;
