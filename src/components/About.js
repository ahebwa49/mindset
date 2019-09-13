import React from "react";
import { Responsive } from "semantic-ui-react";
import AboutMission from "./AboutMission";
import AboutBanner from "./AboutBanner";
import AboutTeam from "./AboutTeam";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <AboutBanner />
      <AboutMission />
      <AboutTeam />

      <Footer />
    </>
  );
};

export default About;
