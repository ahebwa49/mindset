import React, { Component } from "react";
import moment from "moment";
import { Label } from "semantic-ui-react";
import AdminPanelButton from "./AdminPanelButton";

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
        color: "#164C60"
      },
      child: {
        fontSize: "16px",
        fontWeight: "200"
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
        <div className="subscription">
          <div className="parent">
            <h3 style={styles.heading}>Parent</h3>
            <Label size="tiny" style={styles.child}>
              Date: {date.format("MMMM Do YYYY, h:mm:ss a")}
            </Label>
            <br />
            <Label size="tiny" style={styles.child}>
              Firstname: {this.state.firstname}
            </Label>
            <br />
            <Label size="tiny" style={styles.child}>
              Lastname: {this.state.lastname}
            </Label>
            <br />
            <Label size="tiny" style={styles.child}>
              Contact: {this.state.contact}
            </Label>
            <br />
            <Label size="tiny" style={styles.child}>
              Parent's Email: {this.state.email}
            </Label>
          </div>
          <div className="child">
            <h3 style={styles.heading}>Child</h3>
            <Label size="tiny" style={styles.child}>
              Firstname: {this.state.cFirstname}
            </Label>
            <br />
            <Label style={styles.child}>Lastname: {this.state.cLastname}</Label>
            <br />
            <Label style={styles.child}>Age group: {this.state.age}</Label>
            <br />
            <Label style={styles.child}>Referral: {this.state.referral}</Label>
            <br />
            <Label style={styles.child}>
              Message/Question: {this.state.message}
            </Label>
          </div>
        </div>
      </>
    );
  }
}
export default Message;
