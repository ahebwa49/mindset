import React from "react";
import {
  Button,
  Header,
  Modal,
  Message,
  Grid,
  Form,
  Responsive,
  Segment,
  TextArea
} from "semantic-ui-react";

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      cFirstname: "",
      cLastname: "",
      message: "",
      age: "",
      referral: ""
    };
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleCFirstnameChange = this.handleCFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleCLastnameChange = this.handleCLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleReferralChange = this.handleReferralChange.bind(this);
  }

  onSubmit = () => {
    document.querySelector(".form").classList.add("loading");
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      cFirstname: this.state.cFirstname,
      cLastname: this.state.cLastname,
      email: this.state.email,
      contact: this.state.contact,
      age: this.state.age,
      referral: this.state.referral,
      message: this.state.message
    };
    fetch("https://www.backend.mindset-group.org/subscriptions", {
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
          cFirstname: "",
          cLastname: "",
          contact: "",
          email: "",
          age: "",
          referral: "",
          message: ""
        });
        return response.json();
      })
      .then(data => {
        // console.log(data);
      })
      .catch(err => {
        console.log(`failed to register${err}`);
        document.querySelector(".form").classList.add("err");
      });
  };

  handleFirstnameChange(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  handleCFirstnameChange(e) {
    this.setState({
      cFirstname: e.target.value
    });
  }
  handleLastnameChange(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  handleCLastnameChange(e) {
    this.setState({
      cLastname: e.target.value
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
  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  handleAgeChange(e, { value }) {
    this.setState({
      age: value
    });
  }
  handleReferralChange(e, { value }) {
    this.setState({
      referral: value
    });
  }
  render() {
    return (
      <>
        <Responsive {...Responsive.onlyMobile}>
          <Modal trigger={<Button>Register</Button>}>
            <Modal.Header style={{ color: "#164C60" }}>
              Mindset coding program
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header style={{ color: "#164C60" }} textAlign="center">
                  Venue: Ntinda Complex, Block B 3rd Floor.
                </Header>

                <Grid
                  centered
                  columns={1}
                  style={{ paddingBottom: "6rem", paddingTop: "2rem" }}
                >
                  <Grid.Column>
                    <Header
                      as="h3"
                      textAlign="center"
                      style={{ color: "#164C60" }}
                    >
                      Register here
                    </Header>
                    <Segment>
                      <Form
                        size="large"
                        onSubmit={this.onSubmit}
                        className="form"
                      >
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Firstname"
                          value={this.state.password}
                          onChange={this.handleFirstnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Lastname"
                          value={this.state.password}
                          onChange={this.handleLastnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="mail"
                          iconPosition="left"
                          placeholder="Email address"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="phone"
                          iconPosition="left"
                          placeholder="Contact No."
                          value={this.state.contact}
                          onChange={this.handleContactChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Child's firstname"
                          value={this.state.cFirstname}
                          onChange={this.handleCFirstnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Child's lastname"
                          value={this.state.cLastname}
                          onChange={this.handleCLastnameChange}
                          required
                        />
                        <Form.Group grouped>
                          <label>Age</label>
                          <Form.Radio
                            label="7-12 years old UGX 200,000/-"
                            value="7-12"
                            checked={this.state.age === "7-12"}
                            onChange={this.handleAgeChange}
                          />
                          <Form.Radio
                            label="13-17 years old UGX 250,000/-"
                            value="13-17"
                            checked={this.state.age === "13-17"}
                            onChange={this.handleAgeChange}
                          />
                        </Form.Group>
                        <Form.Group grouped>
                          <label>How did you hear about us?</label>
                          <Form.Radio
                            label="Website"
                            value="website"
                            checked={this.state.referral === "website"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Friend"
                            value="friend"
                            checked={this.state.referral === "friend"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Twitter"
                            value="twitter"
                            checked={this.state.referral === "twitter"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Facebook"
                            value="facebook"
                            checked={this.state.referral === "facebook"}
                            onChange={this.handleReferralChange}
                          />
                        </Form.Group>
                        <Form.Field
                          fluid
                          control={TextArea}
                          placeholder="Comments and/or questions"
                          value={this.state.message}
                          onChange={this.handleMessageChange}
                        />
                        <Message
                          className="message"
                          success
                          info
                          header="Success!"
                          content="You've Successfully registered, We shall get back to you shortly"
                        />
                        <Button
                          color="blue"
                          size="large"
                          fluid
                          style={{ color: "white", backgroundColor: "#164C60" }}
                        >
                          Register
                        </Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Modal trigger={<Button>Register</Button>}>
            <Modal.Header style={{ color: "#164C60" }}>
              Mindset coding program
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header style={{ color: "#164C60" }} textAlign="center">
                  Venue: Ntinda Complex, Block B 3rd Floor.
                </Header>

                <Grid
                  centered
                  columns={2}
                  style={{ paddingBottom: "6rem", paddingTop: "2rem" }}
                >
                  <Grid.Column>
                    <Header
                      as="h2"
                      textAlign="center"
                      style={{ color: "#164C60" }}
                    >
                      Register here
                    </Header>
                    <Segment>
                      <Form
                        size="large"
                        onSubmit={this.onSubmit}
                        className="form"
                      >
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Firstname"
                          value={this.state.password}
                          onChange={this.handleFirstnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Lastname"
                          value={this.state.password}
                          onChange={this.handleLastnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="mail"
                          iconPosition="left"
                          placeholder="Email address"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="phone"
                          iconPosition="left"
                          placeholder="Contact No."
                          value={this.state.contact}
                          onChange={this.handleContactChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Child's firstname"
                          value={this.state.cFirstname}
                          onChange={this.handleCFirstnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Child's lastname"
                          value={this.state.cLastname}
                          onChange={this.handleCLastnameChange}
                          required
                        />
                        <Form.Group grouped>
                          <label>Age</label>
                          <Form.Radio
                            label="7-12 years old UGX 200,000/-"
                            value="7-12"
                            checked={this.state.age === "7-12"}
                            onChange={this.handleAgeChange}
                          />
                          <Form.Radio
                            label="13-17 years old UGX 250,000/-"
                            value="13-17"
                            checked={this.state.age === "13-17"}
                            onChange={this.handleAgeChange}
                          />
                        </Form.Group>
                        <Form.Group grouped>
                          <label>How did you hear about us?</label>
                          <Form.Radio
                            label="Website"
                            value="website"
                            checked={this.state.referral === "website"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Friend"
                            value="friend"
                            checked={this.state.referral === "friend"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Twitter"
                            value="twitter"
                            checked={this.state.referral === "twitter"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Facebook"
                            value="facebook"
                            checked={this.state.referral === "facebook"}
                            onChange={this.handleReferralChange}
                          />
                        </Form.Group>
                        <Form.Field
                          fluid
                          control={TextArea}
                          placeholder="Comments and/or questions"
                          value={this.state.message}
                          onChange={this.handleMessageChange}
                        />
                        <Message
                          className="message"
                          success
                          info
                          header="Success!"
                          content="You've Successfully registered, We shall get back to you shortly"
                        />
                        <Button
                          color="blue"
                          size="large"
                          fluid
                          style={{ color: "white", backgroundColor: "#164C60" }}
                        >
                          Register
                        </Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <Modal trigger={<Button>Register</Button>}>
            <Modal.Header style={{ color: "#164C60" }}>
              Mindset coding program
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header style={{ color: "#164C60" }} textAlign="center">
                  Venue: Ntinda Complex, Block B 3rd Floor.
                </Header>

                <Grid
                  centered
                  columns={2}
                  style={{ paddingBottom: "6rem", paddingTop: "2rem" }}
                >
                  <Grid.Column>
                    <Header
                      as="h2"
                      textAlign="center"
                      style={{ color: "#164C60" }}
                    >
                      Register here
                    </Header>
                    <Segment>
                      <Form
                        size="large"
                        onSubmit={this.onSubmit}
                        className="form"
                      >
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Firstname"
                          value={this.state.password}
                          onChange={this.handleFirstnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Lastname"
                          value={this.state.password}
                          onChange={this.handleLastnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="mail"
                          iconPosition="left"
                          placeholder="Email address"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="phone"
                          iconPosition="left"
                          placeholder="Contact No."
                          value={this.state.contact}
                          onChange={this.handleContactChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Child's firstname"
                          value={this.state.cFirstname}
                          onChange={this.handleCFirstnameChange}
                          required
                        />
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Child's lastname"
                          value={this.state.cLastname}
                          onChange={this.handleCLastnameChange}
                          required
                        />
                        <Form.Group grouped>
                          <label>Age</label>
                          <Form.Radio
                            label="7-12 years old UGX 200,000/-"
                            value="7-12"
                            checked={this.state.age === "7-12"}
                            onChange={this.handleAgeChange}
                          />
                          <Form.Radio
                            label="13-17 years old UGX 250,000/-"
                            value="13-17"
                            checked={this.state.age === "13-17"}
                            onChange={this.handleAgeChange}
                          />
                        </Form.Group>
                        <Form.Group grouped>
                          <label>How did you hear about us?</label>
                          <Form.Radio
                            label="Website"
                            value="website"
                            checked={this.state.referral === "website"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Friend"
                            value="friend"
                            checked={this.state.referral === "friend"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Twitter"
                            value="twitter"
                            checked={this.state.referral === "twitter"}
                            onChange={this.handleReferralChange}
                          />
                          <Form.Radio
                            label="Facebook"
                            value="facebook"
                            checked={this.state.referral === "facebook"}
                            onChange={this.handleReferralChange}
                          />
                        </Form.Group>
                        <Form.Field
                          fluid
                          control={TextArea}
                          placeholder="Comments and/or questions"
                          value={this.state.message}
                          onChange={this.handleMessageChange}
                        />
                        <Message
                          className="message"
                          success
                          info
                          header="Success!"
                          content="You've Successfully registered, We shall get back to you shortly"
                        />
                        <Button
                          color="blue"
                          size="large"
                          fluid
                          style={{ color: "white", backgroundColor: "#164C60" }}
                        >
                          Register
                        </Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Responsive>
      </>
    );
  }
}
export default RegisterModal;
