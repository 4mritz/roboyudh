import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import Layout
import Events from "./Events";
import Robowars from "./Events/Robowars";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/robowars" element={<Robowars />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
