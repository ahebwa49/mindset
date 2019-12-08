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
import Footer from "./Footer";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false,
      isLoading: true,
      update: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    fetch(`http://localhost:4000/reset/${params.resetToken}`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
        if (data.message === "password reset link is valid") {
          this.setState({
            isLoading: false,
            username: data.username,
            update: false,
            error: false
          });
        } else {
          this.setState({
            isLoading: false,
            update: false,
            error: true
          });
        }
      })
      .catch(error => {
        console.log(`${error}`);
      });
  }

  onSubmit() {
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    document.querySelector(".form").classList.add("loading");

    fetch("http://localhost:4000/update-password", {
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
        // return response.json().then(body => {
        //   document.querySelector(".form").classList.remove("loading");
        //   throw new Error(body.error);
        // });
      })
      .then(data => {
        if (data.message === "password updated") {
          document.querySelector(".success").classList.remove("success");
        }

        // console.log(data);
        // await this.props.addNewUser(data);
        // this.props.history.push("/");
      })
      .catch(error => {
        // document.querySelector(".form").classList.remove("loading");
        document.querySelector(".errorMessage").classList.remove("error");
        this.setState({
          error: error.message
        });
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
    if (this.state.isLoading) {
      return (
        <div>
          <h1>loading ...</h1>
        </div>
      );
    } else if (this.state.error) {
      return (
        <div>
          <h1>password reset link is invalid or has expired</h1>
        </div>
      );
    } else {
      return (
        <div style={styles.container}>
          <br />
          <Responsive {...Responsive.onlyComputer}>
            <Grid
              centered
              columns={3}
              style={{ paddingBottom: "10rem", paddingTop: "8rem" }}
            >
              <Grid.Column>
                <Header as="h2" textAlign="center" style={{ color: "#164C60" }}>
                  Reset your password here
                </Header>
                <Segment>
                  <Form size="large" onSubmit={this.onSubmit} className="form">
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Enter new password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      required
                    />

                    <Message
                      className="errorMessage"
                      negative
                      error
                      header="Error!"
                      content={this.state.error}
                    />

                    <Message
                      className="message"
                      success
                      info
                      header="Success!"
                      content="Your password has been successfully reset, please try logging in again"
                    />
                    <Button
                      color="blue"
                      size="large"
                      fluid
                      style={{ color: "white", backgroundColor: "#164C60" }}
                    >
                      Reset Password
                    </Button>
                    <br />
                    <section style={{ textAlign: "center" }}>
                      Not registered yet? <Link to="/login">Sign In</Link>
                    </section>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid>
          </Responsive>
          <Responsive {...Responsive.onlyTablet}>
            <Grid centered columns={2}>
              <Grid.Column>
                <Header as="h2" textAlign="center" style={{ color: "#164C60" }}>
                  Enter your email address
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
                      href="https://www.backend.mindset-group.org/auth/github"
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
              </Grid.Column>
            </Grid>
          </Responsive>
          <br />
          <Footer />
        </div>
      );
    }
  }
}

export default ResetPassword;
