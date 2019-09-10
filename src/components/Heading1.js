import React from "react";
import { Header, Responsive, Container } from "semantic-ui-react";

const Heading1 = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Header
          as="h2"
          style={{
            fontSize: "1.5em",
            color: "#164C60" /*transform: "skewX(-12deg)"*/
          }}
          textAlign="start"
        >
          The most engaging way to learn computer science;
        </Header>
        <p style={{ textAlign: "start" }}>
          We believe that it is not enough to learn how to code. Our students
          should be able to use their coding skills to innovate and create
          value. Our model is anchored on a three pronged approach of
          Technology, Innovation, and Entrepreneurship
        </p>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Header
          as="h2"
          style={{
            fontSize: "2.0em",
            color: "#164C60" /*transform: "skewX(-12deg)"*/
          }}
          textAlign="start"
        >
          The most engaging way to learn computer science;
        </Header>
        <p style={{ textAlign: "center", fontSize: "1.2em" }}>
          We believe that it is not enough to learn how to code. Our students
          should be able to use their coding skills to innovate and create
          value. Our model is anchored on a three pronged approach of
          Technology, Innovation, and Entrepreneurship
        </p>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Container text style={{ padding:"2em 0" }}>
          <Header
            as="h2"
            style={{
              fontSize: "2.5em",
              color: "#164C60" /*transform: "skewX(-12deg)"*/
            }}
            textAlign="start"
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
