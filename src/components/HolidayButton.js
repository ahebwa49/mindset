import React from "react";
import { Button } from "semantic-ui-react";

const HolidayButton = () => {
  const styles = {
    container: {
      display: "grid",
      justifyItems: "center",
      color: "#4BBBB5",
      backgroundColor: "#EAEEEE"
    },
    a: {
      textDecoration: "none",
      color: "#164C60"
    }
  };
  return (
    <div style={styles.container}>
      <br />
      <Button style={{ backgroundColor: "#4BBBB5" }}>
        <a
          style={styles.a}
          href="http://bit.ly/mindsetcoders"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Sign up for the end of year coding program :){" "}
        </a>
      </Button>
      <br />
    </div>
  );
};
export default HolidayButton;
