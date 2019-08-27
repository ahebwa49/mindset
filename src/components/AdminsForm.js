import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class AdminsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      role_id: "",
      username: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRoleIdChange = this.handleRoleIdChange.bind(this);
  }
  onSubmit() {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      role_id: this.state.role_id
    };
    console.log("ready to submit AdminsForm");
    console.log(data);
    document.querySelector(".form").classList.add("loading");

    fetch("http://localhost:4000/admins", {
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
        window.location.assign("/admins");
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
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleRoleIdChange(e, { value }) {
    this.setState({
      role_id: value
    });
  }

  render() {
    return (
      <div>
        <br />
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Add Admin
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
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  required
                />
                <Form.Input
                  fluid
                  icon="lock"
                  type="password"
                  iconPosition="left"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  required
                />
                <Form.Group inline>
                  <label>Role</label>
                  <Form.Radio
                    label="Admin"
                    value="ADMIN"
                    checked={this.state.role_id === "ADMIN"}
                    onChange={this.handleRoleIdChange}
                  />
                  <Form.Radio
                    label="Super Admin"
                    value="SUPERADMIN"
                    checked={this.state.role_id === "SUPERADMIN"}
                    onChange={this.handleRoleIdChange}
                  />
                </Form.Group>
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
export default AdminsForm;
