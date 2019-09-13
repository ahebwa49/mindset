import React from "react";
import { Header, Divider, Segment, Grid, Responsive } from "semantic-ui-react";

const AboutTeam = () => {
  const styles = {
    container: {
      display: "flex",
      color: "#164C60",
      justifyContent: "center"
    },
    mobileContainer: {
      display: "flex",
      color: "#164C60",
      flexDirection: "column",
      justifyContent: "center"
    },
    desktopPersonDiv: {
      padding: "2rem"
    },
    tabletPersonDiv: {
      padding: "1.5rem"
    },
    mobilePersonDiv: {
      display: "grid",
      justifyItems: "center",
      padding: "1rem"
    },
    desktopImg: {
      width: "150px",
      height: "150px",
      borderRadius: "50%"
    },
    mobileImg: {
      width: "100px",
      height: "100px",
      borderRadius: "50%"
    },
    desktopName: {
      fontSize: "1rem",
      textAlign: "center"
    },
    desktopRole: {
      fontSize: "1.5rem",
      textAlign: "center"
    },
    tabletName: {
      fontSize: "0.9rem",
      textAlign: "center"
    },
    tabletRole: {
      fontSize: "1.3rem",
      textAlign: "center"
    }
  };
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment style={{ padding: "1em 2em", backgroundColor: "white" }} vertical>
          <Header
            as="h3"
            style={{ fontSize: "1.5rem", color: "#164C60", textAlign: "center" }}
          >
            Meet the mindset team
            <br />
          </Header>
          <br />
          <p style={{ fontSize: "1.1rem", color: "#164C60", textAlign: "start" }}>
            We value open and respectful dialog, where the best idea wins. Our
            decisions are grounded in customer research and our process is
            focused on delivering tangible results for them. Everyone is
            hands-on, from our CEO to our trainers, because we value
            growth and learning in our team.
          </p>

          <div style={styles.mobileContainer}>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.mobileImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.tabletName}>Livingstone Asabahebwa</p>
              <p style={styles.tabletRole}>Software Engineer</p>
            </div>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.mobileImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.tabletName}>Livingstone Asabahebwa</p>
              <p style={styles.tabletRole}>Software Engineer</p>
            </div>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.mobileImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.tabletName}>Livingstone Asabahebwa</p>
              <p style={styles.tabletRole}>Software Engineer</p>
            </div>
          </div>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment
          style={{ padding: "2em 3em", backgroundColor: "white" }}
          vertical
        >
          <Header
            as="h3"
            style={{ fontSize: "1.5em", color: "#164C60", textAlign: "center" }}
          >
            Meet the mindset team
            <br />
          </Header>
          <br />
          <p
            style={{ fontSize: "1.2em", color: "#164C60", textAlign: "center" }}
          >
            We value open and respectful dialog, where the best idea wins. Our
            decisions are grounded in customer research and our process is
            focused on delivering tangible results for them. Everyone is
            hands-on, from our CEO to our trainers, because we value
            growth and learning in our team.
          </p>

          <div style={styles.container}>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.tabletName}>Livingstone Asabahebwa</p>
              <p style={styles.tabletRole}>Software Engineer</p>
            </div>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.tabletName}>Livingstone Asabahebwa</p>
              <p style={styles.tabletRole}>Software Engineer</p>
            </div>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.tabletName}>Livingstone Asabahebwa</p>
              <p style={styles.tabletRole}>Software Engineer</p>
            </div>
          </div>
        </Segment>
      </Responsive>

      <Responsive {...Responsive.onlyComputer}>
        <Segment
          style={{ padding: "2em 3em", backgroundColor: "white" }}
          vertical
        >
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "#164C60", textAlign: "center" }}
          >
            Meet the mindset team
            <br />
          </Header>
          <br />
          <p
            style={{ fontSize: "1.3em", color: "#164C60", textAlign: "center" }}
          >
            We value open and respectful dialog, where the best idea wins. Our
            decisions are grounded in customer research and our process is
            focused on delivering tangible results for them. Everyone is
            hands-on, from our CEO to our trainers, because we value
            growth and learning in our team.
          </p>

          <div style={styles.container}>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.desktopName}>Livingstone Asabahebwa</p>
              <p style={styles.desktopRole}>Software Engineer</p>
            </div>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.desktopName}>Livingstone Asabahebwa</p>
              <p style={styles.desktopRole}>Software Engineer</p>
            </div>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/asaba.jpg"
                alt="acw"
              />
              <p style={styles.desktopName}>Livingstone Asabahebwa</p>
              <p style={styles.desktopRole}>Software Engineer</p>
            </div>
          </div>
        </Segment>
      </Responsive>
    </div>
  );
};

export default AboutTeam;
