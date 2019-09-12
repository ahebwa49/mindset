import React from "react";
import { Responsive } from "semantic-ui-react";
import ServicesBanner from "./ServicesBanner";
import ServicesSection from "./ServicesSections";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <Responsive {...Responsive.onlyComputer}>
        <ServicesBanner />
        <ServicesSection />
      </Responsive>

      <Footer />
    </>
  );
};

export default Services;
