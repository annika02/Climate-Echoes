import React from "react";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import ENSO from "./sections/ENSO";
// import Timeline from "./sections/Timeline";
// import MapSection from "./sections/MapSection";
// import Impact from "./sections/Impact";
// import DataTech from "./sections/DataTech";
import TeamContact from "./sections/TeamContact";
import About from "./sections/About";
import Footer from "./sections/Footer";
export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main className="scroll-smooth">
        <section id="home"><Home /></section>
        <section id="enso"><ENSO /></section>
        {/* <section id="timeline"><Timeline /></section>
        <section id="map"><MapSection /></section>
        <section id="impact"><Impact /></section>
        <section id="datatech"><DataTech /></section> */}
        <section id="team"><TeamContact /></section>
        <section id="about"><About /></section>
        <section id="footer"><Footer /></section>

      </main>
    </div>
  );
}
