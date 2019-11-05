import React, { Component } from "react";
import { connect } from "react-redux";
import AdminPanel from "./AdminPanel";
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
import HolidayButton from "./HolidayButton";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <HolidayButton />
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
