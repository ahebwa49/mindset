import React, { Component } from "react";

class MenuButton extends Component {
  render() {
    const styles = {
      container: {
        display: "relative",
        cursor: "pointer",
        top: "10px"
      },
      bar1: {
        width: "20px",
        height: "3px",
        backgroundColor: "#333",
        margin: "3px 0px",
        marginBottom: "3px"
      },
      bar2: {
        width: "20px",
        height: "3px",
        backgroundColor: "#333",
        margin: "3px 0px"
      },
      bar3: {
        width: "20px",
        height: "3px",
        backgroundColor: "#333",
        margin: "3px 0px",
        marginTop: "3px"
      }
    };
    return (
      <div>
        <div style={styles.container} onClick={this.props.handleShowClick}>
          <div style={styles.bar1} />
          <div style={styles.bar2} />
          <div style={styles.bar3} />
        </div>
      </div>
    );
  }
}
export default MenuButton;
