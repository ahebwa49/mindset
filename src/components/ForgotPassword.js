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

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  onSubmit() {
    const data = {
      email: this.state.email
    };
    document.querySelector(".form").classList.add("loading");

    fetch("https://backend.mindset-group.org/forgot-password", {
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
        document.querySelector(".success").classList.remove("success");
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
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
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
            style={{ paddingBottom: "10rem", paddingTop: "8rem" }}
          >
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
                    value={this.state.email}
                    onChange={this.handleEmailChange}
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
                    content="Password reset details successfully sent to your email address"
                  />
                  <Button
                    color="blue"
                    size="large"
                    fluid
                    style={{ color: "white", backgroundColor: "#164C60" }}
                  >
                    Submit
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

export default ForgotPassword;
