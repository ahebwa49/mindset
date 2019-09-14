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
import SignupButton from "./SignupButton";

const ParentDashboard = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment
          style={{ padding: "2rem 0em", backgroundColor: "#164C60" }}
          vertical
        >
          <Container text>
            <Header as="h1" style={{ fontSize: "1.5em", color: "white" }}>
              Student dashboard
            </Header>
            <p style={{ fontSize: "1em", color: "white" }}>
              Sign in or sign up to view data on your child's progress, discover
              curriculum resources, and access real-time support to empower
              student learning.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "1em 0em", color: "white" }}
            >
              Child's progress just a click away
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image src="/static/parent.jpeg" wrapped ui={true} />
              </Grid.Column>
            </Grid>
          </Container>
          <br />
          <SignupButton />
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment
          style={{ padding: "3em 0em", backgroundColor: "#164C60" }}
          vertical
        >
          <Container text>
            <Header as="h1" style={{ fontSize: "2.0em", color: "white" }}>
              Student dashboard
            </Header>
            <p style={{ fontSize: "1.2em", color: "white" }}>
              Sign in or sign up to view data on your child's progress, discover
              curriculum resources, and access real-time support to empower
              student learning.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "1em 0em", color: "white" }}
            >
              Child's progress just a click away
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image src="/static/parent.jpeg" wrapped ui={true} />
              </Grid.Column>
            </Grid>
          </Container>
          <br />
          <SignupButton />
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Segment
          style={{ padding: "3em 0em", backgroundColor: "#164C60" }}
          vertical
        >
          <Container text>
            <Header as="h1" style={{ fontSize: "2.5em", color: "white" }}>
              Student dashboard
            </Header>
            <p style={{ fontSize: "1.2em", color: "white" }}>
              Sign in or sign up to view data on your child's progress, discover
              curriculum resources, and access real-time support to empower
              student learning.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", color: "white" }}
            >
              Monitor your student's progress with your device
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image src="/static/parent.jpeg" wrapped ui={true} />
              </Grid.Column>
            </Grid>
          </Container>
          <br />
          <SignupButton />
        </Segment>
      </Responsive>
    </div>
  );
};

export default ParentDashboard;
