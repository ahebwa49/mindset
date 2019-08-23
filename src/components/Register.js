import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  onSubmit() {
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("ready to register");
    console.log(data);
    document.querySelector(".form").classList.add("loading");

    fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        document.querySelector(".form").classList.remove("loading");
        console.log("Successfully loged in");
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(`failed to post${err}`);
        document.querySelector(".form").classList.add("err");
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
  render() {
    return (
      <div>
        <br />
        <Grid centered columns={3}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Register
            </Header>
            <Segment>
              <Form size="large" className="form" onSubmit={this.onSubmit}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email address"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  required
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  required
                />
                <Message
                  error
                  header="Action Forbidden"
                  content="You can only sign up for an account once with a given e-mail address."
                />

                <Button color="blue" fluid size="large">
                  Register
                </Button>
              </Form>
            </Segment>
            <Message>
              Registered already? <Link to="/login">Sign In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Register;
