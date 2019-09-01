import React from "react";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import { Header, Grid, Image, Responsive } from "semantic-ui-react";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Zoom>
          <Header as="h1" textAlign="center">
            Welcome to a world of Innovation and Creativity
          </Header>
          <br />
          <div>
            <Grid centered columns={1}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  MindSet aims to get the young people in Uganda exposed to
                  digital skills and to encourage them to dive more into tech
                  related careers. Currently, the education system in Uganda is
                  traditional and the curriculum in most schools do not take
                  into consideration the tech revolution that’s going on
                  globally. To change this, we are bringing tech into the
                  classrooms by offering co curricular programs in schools and
                  out of school to empower the youth with digital literacy and
                  entrepreneurship skills in bid to encourage innovation,
                  creativity and to get a headstart into the future with these
                  skills.
                </p>
              </Grid.Column>
            </Grid>
          </div>
          <br />
          <Header as="h1" textAlign="center">
            Mission
          </Header>
          <br />
          <Header as="h3" textAlign="center">
            To ensure every school going child in Uganda learns how to code.
          </Header>
          <br />
          <div>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image
                  src="/static/mindset.jpg"
                  circular="true"
                  alt="about us"
                  width="100%"
                  height="100%"
                  float="left"
                />
              </Grid.Column>
            </Grid>
          </div>

          <br />
          <Header as="h1" textAlign="center">
            Vision
          </Header>
          <br />
          <Header as="h3" textAlign="center">
            Introduce basic digital skills to the young generation in Uganda for
            them to thrive in tomorrow's society.
          </Header>
          <br />
          <div>
            <Grid centered columns={1}>
              <Grid.Column>
                <Image
                  src="/static/mindset.jpg"
                  circular="true"
                  alt="about us"
                  width="100%"
                  height="100%"
                  float="left"
                />
              </Grid.Column>
            </Grid>
          </div>
        </Zoom>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Zoom>
          <Header as="h1" textAlign="center">
            Welcome to a world of Innovation and Creativity
          </Header>
          <br />
          <div>
            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  MindSet aims to get the young people in Uganda exposed to
                  digital skills and to encourage them to dive more into tech
                  related careers. Currently, the education system in Uganda is
                  traditional and the curriculum in most schools do not take
                  into consideration the tech revolution that’s going on
                  globally. To change this, we are bringing tech into the
                  classrooms by offering co curricular programs in schools and
                  out of school to empower the youth with digital literacy and
                  entrepreneurship skills in bid to encourage innovation,
                  creativity and to get a headstart into the future with these
                  skills.
                </p>
              </Grid.Column>
            </Grid>
          </div>
          <br />
          <Header as="h1" textAlign="center">
            Mission
          </Header>
          <br />
          <Header as="h3" textAlign="center">
            To ensure every school going child in Uganda learns how to code.
          </Header>
          <br />
          <div>
            <Grid centered columns={3}>
              <Grid.Column>
                <Image
                  src="/static/mindset.jpg"
                  circular="true"
                  alt="about us"
                  width="100%"
                  height="100%"
                  float="left"
                />
              </Grid.Column>
            </Grid>
          </div>

          <br />
          <Header as="h1" textAlign="center">
            Vision
          </Header>
          <br />
          <Header as="h3" textAlign="center">
            Introduce basic digital skills to the young generation in Uganda for
            them to thrive in tomorrow's society.
          </Header>
          <br />
          <div>
            <Grid centered columns={3}>
              <Grid.Column>
                <Image
                  src="/static/mindset.jpg"
                  circular="true"
                  alt="about us"
                  width="100%"
                  height="100%"
                  float="left"
                />
              </Grid.Column>
            </Grid>
          </div>
        </Zoom>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Zoom>
          <Header as="h1" textAlign="center">
            Welcome to a world of Innovation and Creativity
          </Header>
          <br />
          <div>
            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  MindSet aims to get the young people in Uganda exposed to
                  digital skills and to encourage them to dive more into tech
                  related careers. Currently, the education system in Uganda is
                  traditional and the curriculum in most schools do not take
                  into consideration the tech revolution that’s going on
                  globally. To change this, we are bringing tech into the
                  classrooms by offering co curricular programs in schools and
                  out of school to empower the youth with digital literacy and
                  entrepreneurship skills in bid to encourage innovation,
                  creativity and to get a headstart into the future with these
                  skills.
                </p>
              </Grid.Column>
            </Grid>
          </div>
          <br />
          <Header as="h1" textAlign="center">
            Mission
          </Header>
          <br />
          <Header as="h3" textAlign="center">
            To ensure every school going child in Uganda learns how to code.
          </Header>
          <br />
          <div>
            <Grid centered columns={3}>
              <Grid.Column>
                <Image
                  src="/static/mindset.jpg"
                  circular="true"
                  alt="about us"
                  width="100%"
                  height="100%"
                  float="left"
                />
              </Grid.Column>
            </Grid>
          </div>

          <br />
          <Header as="h1" textAlign="center">
            Vision
          </Header>
          <br />
          <Header as="h3" textAlign="center">
            Introduce basic digital skills to the young generation in Uganda for
            them to thrive in tomorrow's society.
          </Header>
          <br />
          <div>
            <Grid centered columns={3}>
              <Grid.Column>
                <Image
                  src="/static/mindset.jpg"
                  circular="true"
                  alt="about us"
                  width="100%"
                  height="100%"
                  float="left"
                />
              </Grid.Column>
            </Grid>
          </div>
        </Zoom>
      </Responsive>

      <br />
      <Footer />
    </div>
  );
};

export default About;
