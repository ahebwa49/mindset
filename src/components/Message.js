import React, { Component } from "react";
import AdminPanel from "./AdminPanel";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(`http://localhost:4000/messages/message/${params.messageId}`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          name: data.name,
          email: data.email,
          message: data.message
        });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }

  render() {
    return (
      <div>
        <AdminPanel />
        <h1>Message</h1>
        <h3>Name: {this.state.name}</h3>
        <p>Email: {this.state.email}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
export default Message;
