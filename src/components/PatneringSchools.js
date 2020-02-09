import React from "react";
import { Header, Segment, Responsive } from "semantic-ui-react";

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
      width: "150px",
      height: "150px",
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
      fontSize: "1.1rem",
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
        <Segment
          style={{ padding: "1em 2em", backgroundColor: "white" }}
          vertical
        >
          <Header
            as="h3"
            style={{
              fontSize: "1.5rem",
              color: "#164C60",
              textAlign: "center"
            }}
          >
            Schools patnering with mindset
            <br />
          </Header>
          <br />

          <div style={styles.mobileContainer}>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.mobileImg}
                src="./static/HarvestAcademy.jpg"
                alt="software engineer"
              />
              <p style={styles.mobileName}>Harvest Academy C.S</p>
            </div>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.mobileImg}
                src="./static/Mbuya.png"
                alt="team lead"
              />
              <p style={styles.mobileName}>Mbuya Parents' School</p>
            </div>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.mobileImg}
                src="./static/OrelVine.png"
                alt="prossy"
              />
              <p style={styles.mobileName}>Orel-Vine I. Academy</p>
            </div>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/Rubaga.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Rubaga Girls SS</p>
            </div>
            <div style={styles.mobilePersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/MengoNew.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Mengo SS</p>
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
            Schools patnering with mindset
            <br />
          </Header>
          <br />

          <div style={styles.container}>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/HarvestAcademy.jpg"
                alt="software engineer"
              />
              <p style={styles.desktopName}>Harvest Academy C.S</p>
            </div>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/Mbuya.png"
                alt="team lead"
              />
              <p style={styles.desktopName}>Mbuya Parents' School</p>
            </div>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/OrelVine.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Orel-Vine I. Academy</p>
            </div>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/Rubaga.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Rubaga Girls SS</p>
            </div>
            <div style={styles.tabletPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/MengoNew.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Mengo SS</p>
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
            Schools patnering with mindset
            <br />
          </Header>
          <br />

          <div style={styles.container}>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/HarvestAcademy.jpg"
                alt="software engineer"
              />
              <p style={styles.desktopName}>Harvest Academy C.S</p>
            </div>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/Mbuya.png"
                alt="team lead"
              />
              <p style={styles.desktopName}>Mbuya Parents' School</p>
            </div>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/OrelVine.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Orel-Vine I. Academy</p>
            </div>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/Rubaga.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Rubaga Girls SS</p>
            </div>
            <div style={styles.desktopPersonDiv}>
              <img
                style={styles.desktopImg}
                src="./static/MengoNew.png"
                alt="prossy"
              />
              <p style={styles.desktopName}>Mengo SS</p>
            </div>
          </div>
        </Segment>
      </Responsive>
    </div>
  );
};

export default AboutTeam;
