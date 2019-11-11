import React, { Component } from "react";
import {
  Button,
  Form,
  Select,
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
      email: "",
      error: ""
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

    fetch("https://www.backend.mindset-group.org/students", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        if (response.ok) {
          document.querySelector(".form").classList.remove("loading");
          return response.json();
        }
        return response.json().then(body => {
          document.querySelector(".form").classList.remove("loading");
          throw new Error(body.error);
        });
      })
      .then(data => {
        document.querySelector(".successMessage").classList.remove("success");
        this.setState({
          firstname: "",
          lastname: "",
          contact: "",
          email: ""
        });
      })
      .catch(error => {
        document.querySelector(".errorMessage").classList.remove("error");
        this.setState({
          error: error.message
        });
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
    const gradeOptions = [
      { key: "zero", text: "0", value: 0 },
      { key: "two", text: "2", value: 2 },
      { key: "four", text: "4", value: 4 },
      { key: "six", text: "6", value: 6 },
      { key: "eight", text: "8", value: 8 },
      { key: "ten", text: "10", value: 10 }
    ];
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
                <Form.Group inline>
                  <label>Scratch</label>
                  <Form.Radio
                    label="0"
                    value="0"
                    checked={this.state.scratchRating === "0"}
                    onChange={this.handleScratchRatingChange}
                  />
                  <Form.Radio
                    label="2"
                    value="2"
                    checked={this.state.scratchRating === "2"}
                    onChange={this.handleScratchRatingChange}
                  />
                </Form.Group>
                <Message
                  className="successMessage"
                  positive
                  success
                  header="Success!"
                  content="Student has been successfully added"
                />
                <Message
                  className="errorMessage"
                  negative
                  error
                  header="Forbidden!"
                  content={this.state.error}
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
