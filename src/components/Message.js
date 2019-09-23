import React, { Component } from "react";
import AdminPanel from "./AdminPanel";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "", lastname: "", email: "", message: "" };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(
      `https://www.backend.mindset-group.org/messages/message/${
        params.messageId
      }`,
      {
        method: "GET",
        credentials: "include"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          message: data.message
        });
      })
      .catch(error => {
        console.log(`Failed to fetch single message data ${error}`);
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
        <AdminPanel />
        <h1>Message</h1>
        <h3>Firstname: {this.state.firstname}</h3>
        <h3>Lastname: {this.state.lastname}</h3>
        <p>Email: {this.state.email}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
export default Message;
