import React from "react";
import {
  Container,
  Header,
  Divider,
  Segment,
  Grid,
  Image,
  Responsive
} from "semantic-ui-react";

const HeroSection = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment
          style={{
            padding: "1em 0em",
            backgroundColor: "#EAEEEE",
            color: "#164C60"
          }}
          vertical
        >
          <Container text>
            <Header as="h1" style={{ fontSize: "1.5em", color: "#164C60" }}>
              Prepare your child to join the world’s next workforce.
            </Header>
            <p style={{ fontSize: "1em" }}>
              Basic programming has become an essential skill for grown-ups and
              children alike and the benefits of picking up this skill,
              especially for kids, are really huge. Learning how to build games
              helps kids refine their design, logic, and problem-solving
              abilities. It also allows them to express ideas and creativity in
              unique ways.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "1em 0em", color: "#164C60" }}
            >
              One-on-one mentorship and guidance.
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image src="/static/mentoring.jpg" wrapped ui={true} />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment
          style={{
            padding: "1em 0em",
            backgroundColor: "#EAEEEE",
            color: "#164C60"
          }}
          vertical
        >
          <Container text>
            <Header as="h1" style={{ fontSize: "2.0em", color: "#164C60" }}>
              Prepare your child to join the world’s next workforce.
            </Header>
            <p style={{ fontSize: "1.2em" }}>
              Basic programming has become an essential skill for grown-ups and
              children alike and the benefits of picking up this skill,
              especially for kids, are really huge. Learning how to build games
              helps kids refine their design, logic, and problem-solving
              abilities. It also allows them to express ideas and creativity in
              unique ways.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "1em 0em", color: "#164C60" }}
            >
              One-on-one mentorship and guidance.
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image src="/static/mentoring.jpg" wrapped ui={true} />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Segment
          style={{
            padding: "2em 0em",
            backgroundColor: "#EAEEEE",
            color: "#164C60"
          }}
          vertical
        >
          <Container text>
            <Header as="h1" style={{ fontSize: "2.5em", color: "#164C60" }}>
              Prepare your child to join the world’s next workforce.
            </Header>
            <p style={{ fontSize: "1.2em" }}>
              Basic programming has become an essential skill for grown-ups and
              children alike and the benefits of picking up this skill,
              especially for kids, are really huge. Learning how to build games
              helps kids refine their design, logic, and problem-solving
              abilities. It also allows them to express ideas and creativity in
              unique ways.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", color: "#164C60" }}
            >
              One-on-one mentorship and guidance, every step of the way
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image src="/static/mentoring.jpg" wrapped ui={true} />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
    </div>
  );
};

export default HeroSection;
