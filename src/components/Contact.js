import React from "react";
import Footer from "./Footer";

import {
  Icon,
  Form,
  Segment,
  Grid,
  Header,
  Message,
  TextArea,
  Button,
  Responsive
} from "semantic-ui-react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    };
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }
  onSubmit = () => {
    document.querySelector(".form").classList.add("loading");
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      message: this.state.message
    };
    fetch("http://localhost:4000/messages", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        document.querySelector(".form").classList.remove("loading");
        document.querySelector(".message").classList.remove("success");
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          message: ""
        });
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(`failed to send message${err}`);
        document.querySelector(".form").classList.add("err");
      });
  };
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
  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  render() {
    const styles = {
      container: {
        color: "#164C60",
        backgroundColor: "#EAEEEE"
      },
      header: {
        color: "#164C60"
      }
    };
    return (
      <div style={styles.container}>
        <Header as="h2" icon textAlign="center" style={styles.header}>
          <Icon name="talk" />
          Let's talk
          <Header.Subheader style={styles.header}>
            Please feel free to leave us a message
          </Header.Subheader>
        </Header>
        <Responsive {...Responsive.onlyMobile}>
          <Grid centered columns={1}>
            <Grid.Column>
              <Header as="h2" textAlign="center" style={{ color: "#164C60" }}>
                Message
              </Header>
              <Segment>
                <Form size="large" onSubmit={this.onSubmit} className="form">
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
                  <Form.Field
                    fluid
                    control={TextArea}
                    placeholder="Tell us more..."
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                    required
                  />

                  <Message
                    className="message"
                    success
                    info
                    header="Success!"
                    content="Your message has been delivered!"
                  />
                  <Button
                    color="blue"
                    fluid
                    size="large"
                    style={{ color: "white", backgroundColor: "#164C60" }}
                  >
                    Submit
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Grid centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Message
              </Header>
              <Segment>
                <Form size="large" onSubmit={this.onSubmit} className="form">
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
                  <Form.Field
                    fluid
                    control={TextArea}
                    placeholder="Tell us more..."
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                    required
                  />

                  <Message
                    className="message"
                    success
                    info
                    header="Success!"
                    content="Your message has been delivered!"
                  />
                  <Button
                    color="blue"
                    fluid
                    size="large"
                    style={{ color: "white", backgroundColor: "#164C60" }}
                  >
                    Submit
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <Grid centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center" style={styles.header}>
                Message
              </Header>
              <Segment style={{ backgroundColor: "#EAEEEE" }}>
                <Form size="large" onSubmit={this.onSubmit} className="form">
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
                  <Form.Field
                    fluid
                    control={TextArea}
                    placeholder="Tell us more..."
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                    required
                  />

                  <Message
                    className="message"
                    success
                    info
                    header="Success!"
                    content="Your message has been delivered!"
                  />
                  <Button
                    color="blue"
                    fluid
                    size="large"
                    style={{ color: "white", backgroundColor: "#164C60" }}
                  >
                    Submit
                  </Button>
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

export default Contact;
