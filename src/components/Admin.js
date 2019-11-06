import React, { Component } from "react";
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
      }
    };
    return (
      <div style={styles.container}>
        <AdminPanelButton />
        <h1>Admin</h1>
        <h3>firstname:{this.state.firstname}</h3>
        <h3>lastname:{this.state.lastname}</h3>
        <h3>email:{this.state.username}</h3>
        <h3>role_id:{this.state.role_id}</h3>
      </div>
    );
  }
}
export default Admin;
