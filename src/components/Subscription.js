import React, { Component } from "react";
import moment from "moment";
import AdminPanel from "./AdminPanel";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      cFirstname: "",
      cLastname: "",
      contact: "",
      age: "",
      referral: "",
      created_on: ""
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(
      `https://www.backend.mindset-group.org/subscriptions/subscription/${
        params.subscriptionId
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
          cFirstname: data.cFirstname,
          cLastname: data.cLastname,
          contact: data.contact,
          age: data.age,
          referral: data.referral,
          email: data.email,
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
        padding: "3rem"
      }
    };
    return (
      <div style={styles.container}>
        <AdminPanel />
        <h1>Subscriber</h1>
        <h3>{date.format("MMMM Do YYYY, h:mm:ss a")}</h3>
        <h3>Firstname: {this.state.firstname}</h3>
        <h3>Lastname: {this.state.lastname}</h3>
        <h3>Child's firstname: {this.state.cFirstname}</h3>
        <h3>Child's lastname: {this.state.cLastname}</h3>
        <h3>Child's age: {this.state.age}</h3>
        <h3>Parent's Contact: {this.state.contact}</h3>
        <h3>Parent's Email: {this.state.email}</h3>
        <h3>Referral: {this.state.referral}</h3>
        <h3>Message/Question: {this.state.message}</h3>
      </div>
    );
  }
}
export default Message;
