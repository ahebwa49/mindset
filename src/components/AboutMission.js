import React from "react";
import {
  Header,
  Divider,
  Image,
  Segment,
  Grid,
  Responsive
} from "semantic-ui-react";
import SignupButton from "./SignupButton";

const AboutMission = () => {
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
          style={{ padding: "2em 0em", backgroundColor: "white" }}
          vertical
        >
          <Grid centered columns={2} divided style={{ paddingTop: "3%" }}>
            <Grid.Column floated={"left"} style={{ paddingLeft: "5%" }}>
              <Header
                as="h3"
                style={{
                  fontSize: "2em",
                  color: "#164C60",
                  textAlign: "center"
                }}
              >
                Our Mission:
                <br />
                To ensure every school going child in Uganda learns how to code.
              </Header>
              <br />
              <Segment style={{ textAlign: "center" }}>
                <Image src="/static/mission.png" wrapped ui={true} />
              </Segment>
            </Grid.Column>

            <Grid.Column
              floated={"right"}
              style={{ margin: "0", paddingRight: "5%", textAlign: "start" }}
            >
              <p style={{ fontSize: "1.3em", color: "#164C60" }}>
                mindset aims to get the young people in Uganda exposed to
                digital skills and to encourage them to dive more into tech
                related careers. Currently, the education system in Uganda is
                traditional and the curriculum in most schools do not take into
                consideration the tech revolution that’s going on globally. To
                change this, we are bringing tech into the classrooms by
                offering co curricular programs in schools and out of school to
                empower the youth with digital literacy and entrepreneurship
                skills in bid to encourage innovation, creativity and to get a
                headstart into the future with these skills.
              </p>
            </Grid.Column>
          </Grid>
        </Segment>
      </Responsive>
    </div>
  );
};

export default AboutMission;
