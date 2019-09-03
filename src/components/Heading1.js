import React from "react";
import { Header, Responsive } from "semantic-ui-react";

const Heading1 = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Header
          as="h2"
          style={{ fontSize: "1.5em", transform: "skewX(-12deg)" }}
          textAlign="center"
        >
          Our Approach
        </Header>
        <p style={{ textAlign: "center" }}>
          We believe that it is not enough to learn how to code. Our students
          should be able to use their coding skills to innovate and create
          value. Our model is anchored on a three pronged approach of
          Technology, Innovation, and Entrepreneurship
        </p>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Header
          as="h2"
          style={{ fontSize: "2.0em", transform: "skewX(-12deg)" }}
          textAlign="center"
        >
          Our Approach
        </Header>
        <p style={{ textAlign: "center", fontSize: "1.2em" }}>
          We believe that it is not enough to learn how to code. Our students
          should be able to use their coding skills to innovate and create
          value. Our model is anchored on a three pronged approach of
          Technology, Innovation, and Entrepreneurship
        </p>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Header
          as="h2"
          style={{ fontSize: "2.5em", transform: "skewX(-12deg)" }}
          textAlign="center"
        >
          Our Approach
        </Header>
        <p style={{ textAlign: "center", fontSize: "1.2em" }}>
          We believe that it is not enough to learn how to code. Our students
          should be able to use their coding skills to innovate and create
          value. Our model is anchored on a three pronged approach of
          Technology, Innovation, and Entrepreneurship
        </p>
      </Responsive>
    </div>
  );
};

export default Heading1;
