import React, { Component } from "react";
import { connect } from "react-redux";
import CarouselComponent from "./CarouselComponent";
import StudentStory from "./StudentStory";
import Footer from "./Footer";
import Heading1 from "./Heading1";
import HeroSection from "./HeroSection";
import ParentDashboard from "./ParentDashboard";
import TestimonialCarousel from "./TestimonialCarousel";
import Heading2 from "./Heading2";
import Cards from "./Cards";
import Partners from "./Partners";
// import HolidayButton from "./HolidayButton";
import PatneringSchools from "./PatneringSchools";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

class App extends Component {
  render() {
    return (
      <div>
        {/* <HolidayButton /> */}
        <CarouselComponent />
        <HeroSection />
        <ParentDashboard />
        <Heading1 />
        <Cards />
        <Heading2 />
        <StudentStory />
        <TestimonialCarousel />
        <br />
        <br />
        <Partners />
        <br />
        <PatneringSchools />
        <br />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
