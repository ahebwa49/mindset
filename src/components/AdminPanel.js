import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const styles = {
    container: {
      display: "grid",
      justifyItems: "center"
    }
  };
  return (
    <div style={styles.container}>
      <Link to="/dashboard">
        <Button
          style={{
            marginLeft: "0.5em",
            color: "white",
            backgroundColor: "#4BBBB5"
          }}
        >
          dashboard
        </Button>
      </Link>

      <br />
    </div>
  );
};
export default AdminPanel;
