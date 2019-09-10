import React from "react";
import {
  Container,
  Responsive,
  Grid,
  Segment,
  Header
} from "semantic-ui-react";
const Heading2 = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment style={{ padding: "1em 0em", backgroundColor: "" }} vertical>
          <Container text>
            <Header
              as="h1"
              style={{
                fontSize: "1.5em",
                color: "#164C60",
                textAlign: "start"
              }}
            >
              If you want to learn to program, you need to write (a lot of)
              code.
            </Header>
            <p style={{ fontSize: "1em", color: "#164C60" }}>
              At mindset, our job is to make sure you're doing that with a smile
              on your face.
            </p>
            <p style={{ fontSize: "1em", color: "#164C60" }}>
              Our classrooms are fun, exciting, engaging, and messy all in one
              and we love them that way. Our main focus is practice rather than
              theory. We want our students to come with a maker’s mindset, a
              sense of curiosity and a willingness to leave their comfort zone,
              try out new things, and build programs.
            </p>

            <Grid centered columns={1} />
          </Container>
          <br />
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Segment style={{ padding: "2em 0em", backgroundColor: "" }} vertical>
          <Container text>
            <Header as="h1" style={{ fontSize: "2.5em", color: "#164C60" }}>
              If you want to learn to program, you need to write (a lot of)
              code.
            </Header>
            <p style={{ fontSize: "1.2em", color: "#164C60" }}>
              At mindset, our job is to make sure you're doing that with a smile
              on your face.
            </p>
            <p style={{ fontSize: "1.2em", color: "#164C60" }}>
              Our classrooms are fun, exciting, engaging, and messy all in one
              and we love them that way. Our main focus is practice rather than
              theory. We want our students to come with a maker’s mindset, a
              sense of curiosity and a willingness to leave their comfort zone,
              try out new things, and build programs.
            </p>

            <Grid centered columns={1} />
          </Container>
          <br />
        </Segment>
      </Responsive>
    </div>
  );
};
export default Heading2;
