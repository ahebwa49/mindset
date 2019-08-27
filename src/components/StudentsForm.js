import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      contact: "",
      email: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
  }
  onSubmit() {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      contact: this.state.contact
    };
    console.log("ready to StudentsForm");
    console.log(data);
    document.querySelector(".form").classList.add("loading");

    fetch("http://localhost:4000/students", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        document.querySelector(".form").classList.remove("loading");
        console.log("Successfully inserted document");
        return response.json();
      })
      .then(data => {
        window.location.assign("/students");
      })
      .catch(err => {
        console.log(`failed to post${err}`);
        document.querySelector(".form").classList.add("err");
      });
  }
  handleFirstnameChange(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  handleLastnameChange(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleContactChange(e) {
    this.setState({
      contact: e.target.value
    });
  }
  render() {
    return (
      <div>
        <br />
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Add Student
            </Header>
            <Segment>
              <Form size="large" className="form" onSubmit={this.onSubmit}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="firstname"
                  value={this.state.firstname}
                  onChange={this.handleFirstnameChange}
                  required
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="lastname"
                  value={this.state.lastname}
                  onChange={this.handleLastnameChange}
                  required
                />
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required
                />
                <Form.Input
                  fluid
                  icon="call"
                  iconPosition="left"
                  placeholder="contact"
                  type="text"
                  value={this.state.contact}
                  onChange={this.handleContactChange}
                  required
                />
                <Message
                  error
                  header="Action Forbidden"
                  content="Failed to add student."
                />

                <Button color="blue" fluid size="large">
                  Add
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default StudentForm;
