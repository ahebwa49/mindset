import React from "react";
import { Grid, Header, Responsive, Segment } from "semantic-ui-react";

const ServicesSection = () => {
  return (
    <Responsive {...Responsive.onlyComputer}>
      <Segment
        style={{ padding: "2em 0em", backgroundColor: "white" }}
        vertical
      >
        <Grid centered columns={2} divided style={{ paddingTop: "3%" }}>
          <Grid.Column floated={"left"} style={{ paddingLeft: "5%" }}>
            <Header as="h3" style={{ fontSize: "2em", color: "#164C60" }}>
              After School Program
            </Header>
            <p style={{ fontSize: "1.3em", color: "#164C60" }}>
              The After School program runs in Primary and Secondary Schools as
              a co-curricular activity. Students from Year 7- 16 [and the
              equivalent in other educational systems] are eligible for the
              program. The program runs each term for the duration of the
              academic year.We also partner with schools to deliver the Coding
              Club to students.
            </p>
          </Grid.Column>

          <Grid.Column
            floated={"right"}
            style={{ margin: "0", paddingRight: "5%", textAlign: "start" }}
          >
            <Header as="h3" style={{ fontSize: "2em", color: "#164C60" }}>
              Weekend Code Program
            </Header>
            <p style={{ fontSize: "1.3em", color: "#164C60" }}>
              Every weekend is an exciting time for our young coders. We
              introduce programming in a fun way to children aged from 7 to 17
              years through an 8-week programme that is delivered at the The
              Innovation Village on Saturday morning.
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment
        style={{ padding: "2em 0em", backgroundColor: "white" }}
        vertical
      >
        <Grid centered columns={2} divided style={{ paddingTop: "3%" }}>
          <Grid.Column floated={"left"} style={{ paddingLeft: "5%" }}>
            <Header as="h3" style={{ fontSize: "2em", color: "#164C60" }}>
              Mid Year Program
            </Header>
            <p style={{ fontSize: "1.3em", color: "#164C60" }}>
              This is where your child becomes an innovator, creator, and change
              maker.These are programs designed for primary and secondary school
              going students(7-17 years) during the mid year holidays.
            </p>
          </Grid.Column>

          <Grid.Column
            floated={"right"}
            style={{ margin: "0", paddingRight: "5%", textAlign: "start" }}
          >
            <Header as="h3" style={{ fontSize: "2em", color: "#164C60" }}>
              Holiday Bootcamps
            </Header>
            <p style={{ fontSize: "1.3em", color: "#164C60" }}>
              We have a junior program for 7-10 year olds and a senior program
              for 11-17 year olds. The junior program is based on drag and drop
              coding and the senior program uses text based programming
              language. Every week during these program, we unpack and
              communicate a science topic in a fun way for our students.
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Responsive>
  );
};
export default ServicesSection;
