import React from "react";
import { Header, Segment, Responsive } from "semantic-ui-react";

const ServicesBanner = () => {
  const styles = {
    segment: {
      padding: "3rem 6rem",
      backgroundColor: "#164C60",
      border: "1px solid red"
    },
    mobileSegment: {
      padding: "2rem 1rem",
      backgroundColor: "#164C60",
      border: "1px solid red"
    }
    
  };
  return (
    <>
    <Responsive {...Responsive.onlyMobile}>
        <Segment style={styles.mobileSegment} vertical>
          <Header
            as="h1"
            style={{ fontSize: "2rem", color: "white", textAlign: "center" }}
          >
            21st Century Skills
          </Header>

          <Header
            as="h3"
            style={{ fontSize: "1.5rem", color: "white", textAlign: "center" }}
          >
            We help empower educators and inspire students across the country.
          </Header>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "white"
            }}
          >
            A Comprehensive, Standards-Aligned Computer Science Program.
          </p>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment style={styles.segment} vertical>
          <Header
            as="h1"
            style={{ fontSize: "2.5rem", color: "white", textAlign: "center" }}
          >
            21st Century Skills
          </Header>

          <Header
            as="h3"
            style={{ fontSize: "1.5rem", color: "white", textAlign: "center" }}
          >
            We help empower educators and inspire students across the country.
          </Header>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "white"
            }}
          >
            A Comprehensive, Standards-Aligned Computer Science Program.
          </p>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Segment style={styles.segment} vertical>
          <Header
            as="h1"
            style={{ fontSize: "3rem", color: "white", textAlign: "center" }}
          >
            21st Century Skills
          </Header>

          <Header
            as="h3"
            style={{ fontSize: "2rem", color: "white", textAlign: "center" }}
          >
            We help empower educators and inspire students across the country.
          </Header>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "white"
            }}
          >
            A Comprehensive, Standards-Aligned Computer Science Program.
          </p>
        </Segment>
      </Responsive>
    </>
  );
};

export default ServicesBanner;
