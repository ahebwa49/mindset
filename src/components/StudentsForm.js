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
      error: "",
      scratchRating: "0",
      cssRating: "0",
      htmlRating: "0"
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleScratchRatingChange = this.handleScratchRatingChange.bind(this);
    this.handleCssRatingChange = this.handleCssRatingChange.bind(this);
    this.handleHtmlRatingChange = this.handleHtmlRatingChange.bind(this);
  }
  onSubmit() {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      contact: this.state.contact,
      scratchRating: this.state.scratchRating,
      cssRating: this.state.cssRating,
      htmlRating: this.state.htmlRating
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
  handleScratchRatingChange(e, { value }) {
    this.setState({
      scratchRating: value
    });
  }
  handleCssRatingChange(e, { value }) {
    this.setState({
      cssRating: value
    });
  }
  handleHtmlRatingChange(e, { value }) {
    this.setState({
      htmlRating: value
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
                  <Form.Radio
                    label="4"
                    value="4"
                    checked={this.state.scratchRating === "4"}
                    onChange={this.handleScratchRatingChange}
                  />
                  <Form.Radio
                    label="6"
                    value="6"
                    checked={this.state.scratchRating === "6"}
                    onChange={this.handleScratchRatingChange}
                  />
                  <Form.Radio
                    label="8"
                    value="8"
                    checked={this.state.scratchRating === "8"}
                    onChange={this.handleScratchRatingChange}
                  />
                  <Form.Radio
                    label="10"
                    value="10"
                    checked={this.state.scratchRating === "10"}
                    onChange={this.handleScratchRatingChange}
                  />
                </Form.Group>
                <Form.Group inline>
                  <label>CSS</label>
                  <Form.Radio
                    label="0"
                    value="0"
                    checked={this.state.cssRating === "0"}
                    onChange={this.handleCssRatingChange}
                  />
                  <Form.Radio
                    label="2"
                    value="2"
                    checked={this.state.cssRating === "2"}
                    onChange={this.handleCssRatingChange}
                  />
                  <Form.Radio
                    label="4"
                    value="4"
                    checked={this.state.cssRating === "4"}
                    onChange={this.handleCssRatingChange}
                  />
                  <Form.Radio
                    label="6"
                    value="6"
                    checked={this.state.cssRating === "6"}
                    onChange={this.handleCssRatingChange}
                  />
                  <Form.Radio
                    label="8"
                    value="8"
                    checked={this.state.cssRating === "8"}
                    onChange={this.handleCssRatingChange}
                  />
                  <Form.Radio
                    label="10"
                    value="10"
                    checked={this.state.cssRating === "10"}
                    onChange={this.handleCssRatingChange}
                  />
                </Form.Group>
                <Form.Group inline>
                  <label>HTML</label>
                  <Form.Radio
                    label="0"
                    value="0"
                    checked={this.state.htmlRating === "0"}
                    onChange={this.handleHtmlRatingChange}
                  />
                  <Form.Radio
                    label="2"
                    value="2"
                    checked={this.state.htmlRating === "2"}
                    onChange={this.handleHtmlRatingChange}
                  />
                  <Form.Radio
                    label="4"
                    value="4"
                    checked={this.state.htmlRating === "4"}
                    onChange={this.handleHtmlRatingChange}
                  />
                  <Form.Radio
                    label="6"
                    value="6"
                    checked={this.state.htmlRating === "6"}
                    onChange={this.handleHtmlRatingChange}
                  />
                  <Form.Radio
                    label="8"
                    value="8"
                    checked={this.state.htmlRating === "8"}
                    onChange={this.handleHtmlRatingChange}
                  />
                  <Form.Radio
                    label="10"
                    value="10"
                    checked={this.state.htmlRating === "10"}
                    onChange={this.handleHtmlRatingChange}
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
