import React from "react";
import { Header, Segment, Container, Responsive } from "semantic-ui-react";
import Footer from "./Footer";

const AboutBanner = () => {
  const styles = {
    segment: {
      padding: "6rem",
      backgroundColor: "#164C60",
      border: "1px solid red"
    }
  };
  return (
    <>
      <Responsive {...Responsive.onlyComputer}>
        <Segment style={styles.segment} vertical>
          <Header as="h1" style={{ fontSize: "3rem", color: "white" }}>
            when you don't create things, you become defined by your tastes
            rather than ability. your tastes only narrow & exclude people. so
            create.
          </Header>
          <p style={{ fontSize: "1.2rem", color: "white" }}>― Why The Lucky Stiff</p>
          <p style={{ fontSize: "2rem", color: "white" }}>
            At mindset, our job is to make sure you're doing that with a smile
            on your face.
          </p>
        </Segment>
      </Responsive>
    </>
  );
};

export default AboutBanner;
