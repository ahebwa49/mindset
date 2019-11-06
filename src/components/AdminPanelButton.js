import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const AdminPanelButton = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "3rem"
    }
  };
  return (
    <div style={styles.container}>
      <Link to="/dashboard">
        <Button style={{ backgroundColor: "#4BBBB5" }}>dashboard</Button>{" "}
      </Link>
    </div>
  );
};
export default AdminPanelButton;
