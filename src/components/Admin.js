import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import AdminPanelButton from "./AdminPanelButton";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      contact: ""
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(`https://www.backend.mindset-group.org/admins/${params.adminId}`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          role_id: data.role_id
        });
      })
      .catch(error => {
        console.log(`Failed to fetch single admin ${error}`);
      });
  }

  render() {
    const styles = {
      container: {
        padding: "3rem"
      },
      label: {
        fontSize: "16px",
        marginBottom: "10px"
      }
    };
    return (
      <div style={styles.container}>
        <AdminPanelButton />
        <h3 style={{ textAlign: "center", color: "#164C60" }}>Admin</h3>

        <Label size="tiny" style={styles.label}>
          Firstname: {this.state.firstname}
        </Label>
        <br />
        <Label size="tiny" style={styles.label}>
          Lastname: {this.state.lastname}
        </Label>
        <br />
        <Label size="tiny" style={styles.label}>
          Email: {this.state.username}
        </Label>
        <br />
        <Label size="tiny" style={styles.label}>
          Role: {this.state.role_id}
        </Label>
      </div>
    );
  }
}
export default Admin;
