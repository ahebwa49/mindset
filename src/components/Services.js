import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";
import { Header, Image, Grid, Responsive } from "semantic-ui-react";

const Services = () => {
  const styles = {
    container: {
      color: "#164C60",
      backgroundColor: "#EAEEEE"
    },
    header: {
      color: "#164C60"
    }
  };
  return (
    <div style={styles.container}>
      <Responsive {...Responsive.onlyMobile}>
        <Fade left>
          <div>
            <Header as="h1" textAlign="center">
              After school program
            </Header>

            <Grid centered columns={1}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  The After School program runs in Primary and Secondary Schools
                  as a co-curricular activity. Students from Year 7- 16 [and the
                  equivalent in other educational systems] are eligible for the
                  program. The program runs each term for the duration of the
                  academic year.We also partner with schools to deliver the
                  Coding Club to students.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center">
              Weekend Code Program
            </Header>

            <Grid centered columns={1}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  Every weekend is an exciting time for our young coders. We
                  introduce programming in a fun way to children aged from 7 to
                  17 years through an 8-week programme that is delivered at the
                  The Innovation Village on Saturday morning.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center">
              Mid Year Program
            </Header>
            <Grid centered columns={1}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  This is where your child becomes an innovator, creator, and
                  change maker.These are programs designed for primary and
                  secondary school going students(7-17 years) during the mid
                  year holidays.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center">
              Holiday Bootcamps
            </Header>
            <Grid centered columns={1}>
              <Grid.Column>
                <p>
                  We have a junior program for 7-10 year olds and a senior
                  program for 11-17 year olds. The junior program is based on
                  drag and drop coding and the senior program uses text based
                  programming language. Every week during these program, we
                  unpack and communicate a science topic in a fun way for our
                  students.
                </p>
              </Grid.Column>
            </Grid>
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
        </Fade>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Fade left>
          <div>
            <Header as="h1" textAlign="center">
              After school program
            </Header>

            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  The After School program runs in Primary and Secondary Schools
                  as a co-curricular activity. Students from Year 7- 16 [and the
                  equivalent in other educational systems] are eligible for the
                  program. The program runs each term for the duration of the
                  academic year.We also partner with schools to deliver the
                  Coding Club to students.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center">
              Weekend Code Program
            </Header>

            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  Every weekend is an exciting time for our young coders. We
                  introduce programming in a fun way to children aged from 7 to
                  17 years through an 8-week programme that is delivered at the
                  The Innovation Village on Saturday morning.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center">
              Mid Year Program
            </Header>
            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  This is where your child becomes an innovator, creator, and
                  change maker.These are programs designed for primary and
                  secondary school going students(7-17 years) during the mid
                  year holidays.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center">
              Holiday Bootcamps
            </Header>
            <Grid centered columns={2}>
              <Grid.Column>
                <p>
                  We have a junior program for 7-10 year olds and a senior
                  program for 11-17 year olds. The junior program is based on
                  drag and drop coding and the senior program uses text based
                  programming language. Every week during these program, we
                  unpack and communicate a science topic in a fun way for our
                  students.
                </p>
              </Grid.Column>
            </Grid>
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
        </Fade>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Fade left>
          <div>
            <Header as="h1" textAlign="center" style={styles.header}>
              After school program
            </Header>

            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  The After School program runs in Primary and Secondary Schools
                  as a co-curricular activity. Students from Year 7- 16 [and the
                  equivalent in other educational systems] are eligible for the
                  program. The program runs each term for the duration of the
                  academic year.We also partner with schools to deliver the
                  Coding Club to students.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center" style={styles.header}>
              Weekend Code Program
            </Header>

            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  Every weekend is an exciting time for our young coders. We
                  introduce programming in a fun way to children aged from 7 to
                  17 years through an 8-week programme that is delivered at the
                  The Innovation Village on Saturday morning.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center" style={styles.header}>
              Mid Year Program
            </Header>
            <Grid centered columns={2}>
              <Grid.Column>
                <p style={{ textAlign: "center" }}>
                  This is where your child becomes an innovator, creator, and
                  change maker.These are programs designed for primary and
                  secondary school going students(7-17 years) during the mid
                  year holidays.
                </p>
              </Grid.Column>
            </Grid>
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
          <div>
            <Header as="h1" textAlign="center" style={styles.header}>
              Holiday Bootcamps
            </Header>
            <Grid centered columns={2}>
              <Grid.Column>
                <p>
                  We have a junior program for 7-10 year olds and a senior
                  program for 11-17 year olds. The junior program is based on
                  drag and drop coding and the senior program uses text based
                  programming language. Every week during these program, we
                  unpack and communicate a science topic in a fun way for our
                  students.
                </p>
              </Grid.Column>
            </Grid>
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
        </Fade>
      </Responsive>

      <br />
      <Footer />
    </div>
  );
};

export default Services;
