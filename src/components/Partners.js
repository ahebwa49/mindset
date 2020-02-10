import React from "react";
import { Header, Responsive } from "semantic-ui-react";
const Partners = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center"
    }
  };
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Header
          as="h1"
          textAlign="center"
          style={{ fontSize: "1.5em", color: "#164C60" }}
        >
          Our Partners
        </Header>
        <div style={styles.container}>
          <img height="50px" src="./static/acw.png" alt="acw" />
          <img height="50px" src="./static/inv.png" alt="innovation village" />
          <img height="50px" src="./static/BritishCouncil.jpg" alt="bc" />
          <img height="50px" src="./static/afrosoft.jpg" alt="afrosoft" />
        </div>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Header
          as="h1"
          textAlign="center"
          style={{ fontSize: "1.5em", color: "#164C60" }}
        >
          Our Partners
        </Header>
        <div style={styles.container}>
          <img height="75px" src="./static/acw.png" alt="acw" />
          <img height="75px" src="./static/inv.png" alt="innovation village" />
          <img height="100px" src="./static/BritishCouncil.jpg" alt="bc" />
          <img height="75px" src="./static/afrosoft.jpg" alt="afrosoft" />
        </div>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Header
          as="h1"
          textAlign="center"
          style={{ fontSize: "2.5em", color: "#164C60" }}
        >
          Our Partners
        </Header>
        <div style={styles.container}>
          <img height="100px" src="./static/acw.png" alt="acw" />
          <img height="100px" src="./static/inv.png" alt="innovation village" />
          <img height="100px" src="./static/BritishCouncil.jpg" alt="bc" />
          <img height="100px" src="./static/afrosoft.jpg" alt="afrosoft" />
        </div>
      </Responsive>
    </div>
  );
};
export default Partners;
