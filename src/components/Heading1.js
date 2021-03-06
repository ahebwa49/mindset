import React from "react";
import { Header, Responsive, Container, Segment } from "semantic-ui-react";

const Heading1 = () => {
  const styles = {
    container: {
      backgroundColor: "#EAEEEE"
    }
  };
  return (
    <div style={styles.container}>
      <Responsive {...Responsive.onlyMobile}>
        <Segment
          style={{ padding: "2rem 0em", backgroundColor: "", color: "#164C60" }}
          vertical
        >
          <Container text>
            <Header
              as="h2"
              style={{
                fontSize: "1.5em",
                color: "#164C60" /*transform: "skewX(-12deg)"*/
              }}
            >
              The most engaging way to learn computer science;
            </Header>
            <p style={{ textAlign: "start" }}>
              We believe that it is not enough to learn how to code. Our
              students should be able to use their coding skills to innovate and
              create value. Our model is anchored on a three pronged approach of
              Technology, Innovation, and Entrepreneurship
            </p>
          </Container>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Container
          text
          style={{ padding: "3em 0", color: "#164C60", textAlign: "start" }}
        >
          <Header
            as="h2"
            style={{
              fontSize: "2.0em",
              color: "#164C60" /*transform: "skewX(-12deg)"*/
            }}
          >
            The most engaging way to learn computer science;
          </Header>
          <p style={{ textAlign: "start", fontSize: "1.2em" }}>
            We believe that it is not enough to learn how to code. Our students
            should be able to use their coding skills to innovate and create
            value. Our model is anchored on a three pronged approach of
            Technology, Innovation, and Entrepreneurship.
          </p>
        </Container>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Container text style={{ padding: "2em 0" }}>
          <Header
            as="h2"
            style={{
              fontSize: "2.5em",
              color: "#164C60" /*transform: "skewX(-12deg)"*/
            }}
          >
            The most engaging way to learn computer science;
          </Header>
          <p
            style={{ textAlign: "start", fontSize: "1.2em", color: "#164C60" }}
          >
            We believe that it is not enough to learn how to code. Our students
            should be able to use their coding skills to innovate and create
            value. Our model is anchored on a three pronged approach of
            Technology, Innovation, and Entrepreneurship.
          </p>
        </Container>
      </Responsive>
    </div>
  );
};

export default Heading1;
