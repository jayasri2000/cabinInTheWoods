import React from "react";
import AboutHero from "../components/About/AboutHero";
import Facilities from "../components/About/Facilities";

const About = () => {
  return (
    <div style={{ backgroundColor: "#01363c", height: "100%" }}>
      <AboutHero />
      <Facilities />
    </div>
  );
};

export default About;
