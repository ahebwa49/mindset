import React from "react";
import { Header, Segment, Responsive } from "semantic-ui-react";
import Footer from "./Footer";

const ServicesBanner = () => {
  const styles = {
    segment: {
      padding: "3rem 6rem",
      backgroundColor: "white",
      border: "1px solid red"
    }
  };
  return (
    <>
      <Responsive {...Responsive.onlyComputer}>
        <Segment style={styles.segment} vertical>
          <Header as="h1" style={{ fontSize: "3rem", color: "#164C60" }}>
            Building World-Class Computer Science Programs
          </Header>

          <Header as="h3" style={{ fontSize: "2rem", color: "#164C60" }}>
            We help empower educators and inspire students across the country
          </Header>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#164C60"
            }}
          >
            Code, Create, Innovate and have fun with us
          </p>
        </Segment>
      </Responsive>
    </>
  );
};

export default ServicesBanner;
