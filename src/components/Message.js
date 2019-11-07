import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import moment from "moment";
import AdminPanelButton from "./AdminPanelButton";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      message: ""
    };
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
          contact: data.contact,
          message: data.message,
          created_on: data.created_on
        });
      })
      .catch(error => {
        console.log(`Failed to fetch single message data ${error}`);
      });
  }

  render() {
    const date = moment(this.state.created_on);
    const styles = {
      container: {
        color: "#164C60",
        fontSize: "16px",
        padding: "1rem 3rem"
      },
      item: {
        fontSize: "16px",
        fontWeight: "200",
        margin: "5px 0px"
      },
      heading: {
        color: "#164C60",
        textAlign: "center",
        fontWeight: "1000"
      }
    };

    return (
      <>
        <AdminPanelButton />
        <div style={styles.container}>
          <h2 style={styles.heading}>Message</h2>
          <p>Date: {date.format("MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Firstname: {this.state.firstname}</p>
          <p>Lastname: {this.state.lastname}</p>
          <p>Contact: {this.state.contact}</p>
          <p>Email: {this.state.email}</p>
          <p>{this.state.message}</p>
        </div>
      </>
    );
  }
}
export default Message;
