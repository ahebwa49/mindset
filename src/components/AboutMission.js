import React from "react";
import { Header, Image, Segment, Grid, Responsive } from "semantic-ui-react";

const AboutMission = () => {
  const styles = {
    desktopSegment: {
      padding: "2em 0em",
      backgroundColor: "white"
    },
    tabletSegment: {
      padding: "2em",
      backgroundColor: "white"
    }
  };
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment style={styles.tabletSegment} vertical>
          <Header
            as="h3"
            style={{
              fontSize: "1.5em",
              color: "#164C60",
              textAlign: "center"
            }}
          >
            <h2 style={{ textDecoration: "underline", fontFamily: "dosis" }}>
              Our Mission
            </h2>
            <h2 style={{ fontFamily: "dosis" }}>
              To ensure every school going child in Uganda learns how to code.
            </h2>
          </Header>
          <br />

          <Segment style={{ textAlign: "center" }}>
            <Image src="/static/mission.png" wrapped ui={true} />
          </Segment>

          <Grid centered columns={1} divided style={{ paddingTop: "3%" }}>
            <Grid.Column
              floated={"right"}
              style={{ margin: "0", paddingRight: "5%", textAlign: "start" }}
            >
              <section style={{ fontSize: "1.1em", color: "#164C60" }}>
                <p>
                  Mindset aims to get the young people in Uganda exposed to
                  digital skills and to encourage them to dive more into tech
                  related careers.
                </p>
                <p>
                  Currently, the education system in Uganda is traditional and
                  the curriculum in most schools do not take into consideration
                  the tech revolution that’s going on globally. To change this,
                  we are bringing tech into the classrooms by offering co
                  curricular programs in schools and out of school to empower
                  the youth with digital literacy and entrepreneurship skills in
                  bid to encourage innovation, creativity and to get a headstart
                  into the future with these skills.
                </p>
              </section>
            </Grid.Column>
          </Grid>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment style={styles.tabletSegment} vertical>
          <Grid centered columns={2} divided style={{ paddingTop: "3%" }}>
            <Grid.Column floated={"left"} style={{ paddingLeft: "5%" }}>
              <Header
                as="h3"
                style={{
                  fontSize: "2em",
                  color: "#164C60",
                  textAlign: "center",
                  textDecoration: "underline"
                }}
              >
                Our Mission
              </Header>
              <Header
                style={{
                  fontSize: "2em",
                  color: "#164C60",
                  textAlign: "center",
                  fontFamily: "dosis"
                }}
              >
                To ensure every school going child in Uganda learns how to code.
              </Header>
              <br />
            </Grid.Column>

            <Grid.Column
              floated={"right"}
              style={{ margin: "0", paddingRight: "5%", textAlign: "start" }}
            >
              <Segment style={{ textAlign: "center" }}>
                <Image src="/static/mission.png" wrapped ui={true} />
              </Segment>
            </Grid.Column>
          </Grid>
          <Grid centered columns={1} divided style={{ paddingTop: "3%" }}>
            <Grid.Column
              floated={"right"}
              style={{ margin: "0", paddingRight: "5%", textAlign: "start" }}
            >
              <section style={{ fontSize: "1.3em", color: "#164C60" }}>
                <p>
                  Mindset aims to get the young people in Uganda exposed to
                  digital skills and to encourage them to dive more into tech
                  related careers.
                </p>
                <p>
                  Currently, the education system in Uganda is traditional and
                  the curriculum in most schools do not take into consideration
                  the tech revolution that’s going on globally. To change this,
                  we are bringing tech into the classrooms by offering co
                  curricular programs in schools and out of school to empower
                  the youth with digital literacy and entrepreneurship skills in
                  bid to encourage innovation, creativity and to get a headstart
                  into the future with these skills.
                </p>
              </section>
            </Grid.Column>
          </Grid>
        </Segment>
      </Responsive>

      <Responsive {...Responsive.onlyComputer}>
        <Segment style={styles.desktopSegment} vertical>
          <Grid centered columns={2} divided style={{ paddingTop: "3%" }}>
            <Grid.Column floated={"left"} style={{ paddingLeft: "5%" }}>
              <Header
                as="h3"
                style={{
                  fontSize: "2em",
                  color: "#164C60",
                  textAlign: "center",
                  textDecoration: "underline"
                }}
              >
                Our Mission
              </Header>
              <Header
                style={{
                  fontSize: "2em",
                  color: "#164C60",
                  textAlign: "center",
                  fontFamily: "dosis"
                }}
              >
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
              <section style={{ fontSize: "1.3em", color: "#164C60" }}>
                <p>
                  Mindset aims to get the young people in Uganda exposed to
                  digital skills and to encourage them to dive more into tech
                  related careers.
                </p>
                <p>
                  Currently, the education system in Uganda is traditional and
                  the curriculum in most schools do not take into consideration
                  the tech revolution that’s going on globally. To change this,
                  we are bringing tech into the classrooms by offering co
                  curricular programs in schools and out of school to empower
                  the youth with digital literacy and entrepreneurship skills in
                  bid to encourage innovation, creativity and to get a headstart
                  into the future with these skills.
                </p>
              </section>
            </Grid.Column>
          </Grid>
        </Segment>
      </Responsive>
    </div>
  );
};

export default AboutMission;
