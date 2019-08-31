import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Responsive,
  Segment
} from "semantic-ui-react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
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
        window.location.assign("/");
      })
      .catch(error => {
        document.querySelector(".errorMessage").classList.remove("error");
        this.setState({
          error: error.message
        });
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
        <Responsive {...Responsive.onlyMobile}>
          <Grid centered columns={1}>
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
                    className="errorMessage"
                    negative
                    error
                    header=""
                    content={this.state.error}
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
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Grid centered columns={2}>
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
                    className="errorMessage"
                    negative
                    error
                    header=""
                    content={this.state.error}
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
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <Grid centered columns={1}>
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
                    className="errorMessage"
                    negative
                    error
                    header=""
                    content={this.state.error}
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
        </Responsive>
      </div>
    );
  }
}
export default Register;
