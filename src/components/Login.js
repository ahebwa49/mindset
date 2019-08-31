import React from "react";
import {
  Button,
  Form,
  Icon,
  Grid,
  Header,
  Message,
  Responsive,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends React.Component {
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

    fetch("http://localhost:4000/login", {
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
        <Responsive {...Responsive.onlyComputer}>
          <Grid centered columns={3}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Sign In
              </Header>
              <Segment>
                <Form size="large" onSubmit={this.onSubmit} className="form">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                  <Message
                    className="errorMessage"
                    negative
                    error
                    header=""
                    content={this.state.error}
                  />
                  <Button color="blue" fluid size="large">
                    Login
                  </Button>
                  <Message>
                    Login with{" "}
                    <Button color="github">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="http://localhost:4000/auth/github"
                      >
                        <Icon name="github" /> Github
                      </a>
                    </Button>
                  </Message>
                </Form>
              </Segment>
              <Message>
                Not registered yet? <Link to="/register">Sign Up</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Grid centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Sign In
              </Header>
              <Segment>
                <Form size="large" onSubmit={this.onSubmit} className="form">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                  <Message
                    className="errorMessage"
                    negative
                    error
                    header=""
                    content={this.state.error}
                  />
                  <Button color="blue" fluid size="large">
                    Login
                  </Button>
                  <Message>
                    Login with{" "}
                    <Button color="github">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="http://localhost:4000/auth/github"
                      >
                        <Icon name="github" /> Github
                      </a>
                    </Button>
                  </Message>
                </Form>
              </Segment>
              <Message>
                Not registered yet? <Link to="/register">Sign Up</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid centered columns={1}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Sign In
              </Header>
              <Segment>
                <Form size="large" onSubmit={this.onSubmit} className="form">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                  <Message
                    className="errorMessage"
                    negative
                    error
                    header=""
                    content={this.state.error}
                  />
                  <Button color="blue" fluid size="large">
                    Login
                  </Button>
                  <Message>
                    Login with{" "}
                    <Button color="github">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="http://localhost:4000/auth/github"
                      >
                        <Icon name="github" /> Github
                      </a>
                    </Button>
                  </Message>
                </Form>
              </Segment>
              <Message>
                Not registered yet? <Link to="/register">Sign Up</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </Responsive>
      </div>
    );
  }
}
export default Login;
