import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import ENSOBasics from "./sections/WhatIsENSO";
import ClimateConnections from "./sections/ClimateConnections";
import TeamContact from "./sections/TeamContact";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Timeline from "./sections/Timeline";
export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enso-basics" element={<ENSOBasics />} />
          <Route path="/climate-connections" element={<ClimateConnections />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/team" element={<TeamContact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}