import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  render() {
    const styles = {
      container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyItems: "center",
        width: "auto",
        height: "auto",
        border: "1px solid red"
      }
    };
    return (
      <div style={styles.container}>
        <div>
          <h3>
            <Link
              to={{
                pathname: `/messages`
              }}
            >
              messages
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            <Link to="/students">students</Link>
          </h3>
        </div>
        <div>
          <h3>
            <Link to="/admins">admins</Link>
          </h3>
        </div>
      </div>
    );
  }
}
export default AdminPanel;
