import React from "react";
import {
  Container,
  Header,
  Divider,
  Segment,
  Grid,
  Responsive
} from "semantic-ui-react";
import SignupButton from "./SignupButton";

const SuccessStories2 = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment
          style={{ padding: "1em 0em", backgroundColor: "#1E5145" }}
          vertical
        >
          <Grid centered columns={1} divided style={{ padding: "7% 5%" }}>
            <Grid.Column floated={"left"} /* style={{ padding: "0% 5%" }}*/>
              <Header as="h3" style={{ fontSize: "1.5em", color: "white" }}>
                We all have a “before mindset” and “after mindset” version of
                ourselves.
              </Header>
              <p style={{ fontSize: "1em", color: "white" }}>
                At mindset, we strive to:
                <ul>
                  <li>
                    Engage every student so that they believe coding is for
                    them.
                  </li>
                </ul>{" "}
                <ul>
                  <li>
                    Empower any educator to feel confident when teaching coding.
                  </li>
                </ul>
                <ul>
                  <li>
                    Inspire all school leaders to create a world-class computer
                    science program and this is evident in all our course
                    graduates.
                  </li>
                </ul>
              </p>
            </Grid.Column>
            <Divider
              as="h6"
              className="header"
              horizontal
              style={{ margin: "1em 0em", color: "white" }}
            >
              Meet Alegra, our recent graduate
            </Divider>
            <Grid.Column floated={"right"}>
              <iframe
                title="student"
                width="100%"
                height="200vh"
                src="https://www.youtube.com/embed/rWJm7R1PHvc?controls=0"
              />
            </Grid.Column>
            <SignupButton />
          </Grid>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment
          style={{ padding: "1em 0em", backgroundColor: "#1E5145" }}
          vertical
        >
          <Grid centered columns={1} divided style={{ padding: "7% 5%" }}>
            <Grid.Column floated={"left"} /* style={{ padding: "0% 5%" }}*/>
              <Header as="h3" style={{ fontSize: "1.5em", color: "white" }}>
                We all have a “before mindset” and “after mindset” version of
                ourselves.
              </Header>
              <p style={{ fontSize: "1.2em", color: "white" }}>
                At mindset, we strive to:
                <ul>
                  <li>
                    Engage every student so that they believe coding is for
                    them.
                  </li>
                </ul>{" "}
                <ul>
                  <li>
                    Empower any educator to feel confident when teaching coding.
                  </li>
                </ul>
                <ul>
                  <li>
                    Inspire all school leaders to create a world-class computer
                    science program and this is evident in all our course
                    graduates.
                  </li>
                </ul>
              </p>
            </Grid.Column>
            <Divider
              as="h6"
              className="header"
              horizontal
              style={{ margin: "1em 0em", color: "white" }}
            >
              Meet Alegra, our recent graduate
            </Divider>
            <Grid.Column floated={"right"}>
              <iframe
                title="student"
                width="100%"
                height="300vh"
                src="https://www.youtube.com/embed/rWJm7R1PHvc?controls=0"
              />
            </Grid.Column>
            <SignupButton />
          </Grid>
        </Segment>
      </Responsive>
     
      <Responsive {...Responsive.onlyComputer}>
        <Segment
          style={{ padding: "2em 0em", backgroundColor: "#1E5145" }}
          vertical
        >
          <Grid centered columns={2} divided style={{ paddingTop: "3%" }}>
            <Grid.Column floated={"left"} style={{ paddingLeft: "5%" }}>
              <Header as="h3" style={{ fontSize: "2em", color: "white" }}>
                We all have a “before mindset” and “after mindset” version of
                ourselves.
              </Header>
              <p style={{ fontSize: "1.2em", color: "white" }}>
                At mindset, we strive to:
                <ul>
                  <li>
                    Engage every student so that they believe coding is for
                    them.
                  </li>
                </ul>{" "}
                <ul>
                  <li>
                    Empower any educator to feel confident when teaching coding.
                  </li>
                </ul>
                <ul>
                  <li>
                    Inspire all school leaders to create a world-class computer
                    science program and this is evident in all our course
                    graduates.
                  </li>
                </ul>
              </p>
              <br />
              <SignupButton />
            </Grid.Column>

            {/**  <Divider
            as="h4"
            className="header"
            vertical
            style={{ margin: "3em 0em", color: "white" }}
          >
            Meet Alegra, one of our course graduates
          </Divider>*/}
            <Grid.Column floated={"right"}>
              <iframe
                title="student"
                width="90%"
                height="300vh"
                src="https://www.youtube.com/embed/rWJm7R1PHvc?controls=0"
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </Responsive>
    </div>
  );
};

export default SuccessStories2;
