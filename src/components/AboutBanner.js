import React from "react";
import { Header, Segment, Responsive } from "semantic-ui-react";

const AboutBanner = () => {
  const styles = {
    desktopSegment: {
      padding: "6rem",
      backgroundColor: "#164C60"
    },
    tabletSegment: {
      padding: "4rem",
      backgroundColor: "#164C60"
    },
    mobileSegment: {
      padding: "2rem",
      backgroundColor: "#164C60"
    }
  };
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment style={styles.mobileSegment} vertical>
          <Header as="h1" style={{ fontSize: "1.5rem", color: "white" }}>
            When you don't create things, you become defined by your tastes
            rather than ability. Your tastes only narrow & exclude people. So
            create.
          </Header>

          <p style={{ fontSize: "1rem", color: "white" }}>
            ― Why The Lucky Stiff
          </p>
          <br />
          <p style={{ fontSize: "1.3rem", color: "white" }}>
            At mindset, our job is to make sure you're doing that with a smile
            on your face.
          </p>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment style={styles.tabletSegment} vertical>
          <Header as="h1" style={{ fontSize: "2rem", color: "white" }}>
            When you don't create things, you become defined by your tastes
            rather than ability. Your tastes only narrow & exclude people. So
            create.
          </Header>
          <p style={{ fontSize: "1.2rem", color: "white" }}>
            ― Why The Lucky Stiff
          </p>
          <p style={{ fontSize: "1.5rem", color: "white" }}>
            At mindset, our job is to make sure you're doing that with a smile
            on your face.
          </p>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Segment style={styles.desktopSegment} vertical>
          <Header as="h1" style={{ fontSize: "3rem", color: "white" }}>
            When you don't create things, you become defined by your tastes
            rather than ability. Your tastes only narrow & exclude people. So
            create.
          </Header>
          <p style={{ fontSize: "1.2rem", color: "white" }}>
            ― Why The Lucky Stiff
          </p>
          <p style={{ fontSize: "2rem", color: "white" }}>
            At mindset, our job is to make sure you're doing that with a smile
            on your face.
          </p>
        </Segment>
      </Responsive>
    </div>
  );
};

export default AboutBanner;
