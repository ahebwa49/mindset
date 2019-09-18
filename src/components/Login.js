import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/addUser";
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
import Footer from "./Footer";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  addNewUser: user => {
    dispatch(addUser(user));
  }
});

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

    fetch("https://www.backend.mindset-group.org/login", {
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
      .then(async data => {
        console.log(data);
        await this.props.addNewUser(data);
        this.props.history.push("/");
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
    const styles = {
      container: {
        backgroundColor: "#EAEEEE"
      }
    };
    return (
      <div style={styles.container}>
        <br />
        <Responsive {...Responsive.onlyComputer}>
          <Grid
            centered
            columns={3}
            style={{ paddingBottom: "6rem", paddingTop: "2rem" }}
          >
            <Grid.Column>
              <Header as="h2" textAlign="center" style={{ color: "#164C60" }}>
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
                  <Button
                    color="blue"
                    size="large"
                    fluid
                    style={{ color: "white", backgroundColor: "#164C60" }}
                  >
                    Login
                  </Button>
                  <br />
                  <section style={{ textAlign: "center" }}>
                    Not registered yet? <Link to="/register">Sign Up</Link>
                  </section>
                </Form>
              </Segment>
              <Message style={{ textAlign: "center" }}>
                Login with{" "}
                <Button color="github">
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="https://mindset-backend.herokuapp.com/auth/github"
                  >
                    <Icon name="github" /> Github
                  </a>
                </Button>
              </Message>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Grid centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center" style={{ color: "#164C60" }}>
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
                  <Button
                    color="blue"
                    fluid
                    size="large"
                    style={{ color: "white", backgroundColor: "#164C60" }}
                  >
                    Login
                  </Button>
                  <br />
                  <section style={{ textAlign: "center" }}>
                    Not registered yet? <Link to="/register">Sign Up</Link>
                  </section>
                </Form>
              </Segment>
              <Message style={{ textAlign: "center" }}>
                Login with{" "}
                <Button color="github">
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="https://mindset-backend.herokuapp.com/auth/github"
                  >
                    <Icon name="github" /> Github
                  </a>
                </Button>
              </Message>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid
            centered
            columns={1}
            style={{ padding: "1rem", backgroundColor: "#EAEEEE" }}
          >
            <Grid.Column>
              <Header as="h2" textAlign="center" style={{ color: "#164C60" }}>
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
                  <Button
                    color="blue"
                    fluid
                    size="large"
                    style={{ color: "white", backgroundColor: "#164C60" }}
                  >
                    Login
                  </Button>
                  <br />
                  <section style={{ textAlign: "center" }}>
                    Not registered yet? <Link to="/register">Sign Up</Link>
                  </section>
                </Form>
              </Segment>
              <Message style={{ textAlign: "center" }}>
                Login with{" "}
                <Button color="github">
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="https://mindset-backend.herokuapp.com/auth/github"
                  >
                    <Icon name="github" /> Github
                  </a>
                </Button>
              </Message>
            </Grid.Column>
          </Grid>
        </Responsive>
        <br />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
