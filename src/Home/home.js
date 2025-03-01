import React from "react";
import About from "../Home/about";
import Header from "../Home/header";
import Events from "../Home/event"; // Renamed to avoid conflict
import Organizers from "../Home/organizers";
import MainEvent from "../Home/maineve";
import '../App.css'; // Import your CSS for styles


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Events />  
      <Organizers />
      <MainEvent />
    </div>
  );
};

export default Home;
