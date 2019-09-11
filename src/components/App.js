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

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

class App extends Component {
  render() {
    return (
      <div>
        {this.props.user.role_id === "SUPERADMIN" ? (
          <AdminPanel />
        ) : this.props.user.role_id === "ADMIN" ? (
          <AdminPanel />
        ) : (
          ""
        )}
        <CarouselComponent />
        <br />
        <HeroSection />
        <ParentDashboard />
        <br />
        <Heading1 />
        <br />
        <Cards />
        <br />
        <Heading2 />
        <StudentStory />
        <TestimonialCarousel />
        <br />
        <br />
        <Partners />
        <br />
        <br />
        {/** <ParentStory />*/}
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
