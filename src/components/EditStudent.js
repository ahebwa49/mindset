import React, { Component } from "react";
import { Button, Segment, Message, Form, Grid } from "semantic-ui-react";
import AdminPanelButton from "./AdminPanelButton";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      _id: ""
    };
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(
      `https://backend.mindset-group.org/students/student/${params.studentId}`,
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
          _id: data._id
        });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  handleFirstnameChange(event) {
    this.setState({
      firstname: event.target.value
    });
  }
  handleLastnameChange(event) {
    this.setState({
      lastname: event.target.value
    });
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  handleContactChange(event) {
    this.setState({
      contact: event.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    document.querySelector(".form").classList.add("loading");
    console.log("Ready to fetch");
    const {
      match: { params }
    } = this.props;

    const data = {
      contact: this.state.contact,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    };

    fetch(
      `https://backend.mindset-group.org/students/student/${params.studentId}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      }
    )
      .then(response => {
        if (response.ok) {
          document.querySelector(".form").classList.remove("loading");
          return response.json();
        }
      })
      .then(data => {
        document.querySelector(".successMessage").classList.remove("success");
        console.log(data);
      })
      .catch(err => {
        console.log(`failed to fetch${err}`);
      });
  }
  render() {
    return (
      <>
        <div style={{ margin: "2rem 0" }}>
          <AdminPanelButton />
        </div>

        <Grid centered columns={3}>
          <Grid.Column>
            <h3 style={{ textAlign: "center", color: "#164C60" }}>
              Edit student details
            </h3>

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
                  className="successMessage"
                  positive
                  success
                  header="Success!"
                  content="Student details have been successfully updated"
                />
                <Message
                  className="errorMessage"
                  negative
                  error
                  header="Forbidden!"
                  content={this.state.error}
                />

                <Button color="blue" fluid size="large">
                  Edit
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
export default EditStudent;
