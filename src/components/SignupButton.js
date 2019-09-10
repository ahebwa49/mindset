import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignupButton = () => {
  const styles = {
    container: {
      display: "grid",
      justifyItems: "center",
      color: "#4BBBB5"
    }
  };
  return (
    <div style={styles.container}>
      <Link to="/register">
        <Button style={{ backgroundColor: "#4BBBB5" }}>Sign Up</Button>
      </Link>

      <br />
    </div>
  );
};
export default SignupButton;
