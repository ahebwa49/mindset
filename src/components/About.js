import React from "react";
import { Responsive } from "semantic-ui-react";
import AboutMission from "./AboutMission";
import AboutBanner from "./AboutBanner";
import AboutTeam from "./AboutTeam";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Responsive {...Responsive.onlyComputer}>
        <AboutBanner />
        <AboutMission />
        <AboutTeam />
      </Responsive>

      <Footer />
    </>
  );
};

export default About;
