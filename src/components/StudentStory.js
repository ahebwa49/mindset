import React from "react";
import { connect } from "react-redux";
import {
  Header,
  Divider,
  Container,
  Segment,
  Grid,
  Responsive
} from "semantic-ui-react";
import SignupButton from "./SignupButton";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

class SuccessStories2 extends React.Component {
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <Segment
            style={{ padding: "1em 0em", backgroundColor: "#1E5145" }}
            vertical
          >
            <Grid centered columns={1} divided style={{ padding: "7% 5%" }}>
              <Grid.Column floated={"left"} /* style={{ padding: "0% 5%" }}*/>
                <Header as="h3" style={{ fontSize: "1.5em", color: "white" }}>
                  We all have a “before mindset” and “after mindset” version of
                  ourselves.
                </Header>
                <section style={{ fontSize: "1em", color: "white" }}>
                  At mindset, we strive to:
                  <ul>
                    <li>
                      Engage every student so that they believe coding is for
                      them.
                    </li>
                  </ul>{" "}
                  <ul>
                    <li>
                      Empower any educator to feel confident when teaching
                      coding.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Inspire all school leaders to create a world-class
                      computer science program and this is evident in all our
                      course graduates.
                    </li>
                  </ul>
                </section>
              </Grid.Column>
              <Divider
                as="h6"
                className="header"
                horizontal
                style={{ margin: "1em 0em", color: "white" }}
              >
                Meet Alegra, our recent graduate
              </Divider>
              <Grid.Column floated={"right"}>
                <iframe
                  title="student"
                  width="100%"
                  height="200vh"
                  src="https://www.youtube.com/embed/rWJm7R1PHvc?controls=0"
                />
              </Grid.Column>
              {/* <SignupButton /> */}
              {this.props.user.username || this.props.user.email ? (
                ""
              ) : (
                <SignupButton />
              )}
            </Grid>
          </Segment>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Segment
            style={{ padding: "3em 2em", backgroundColor: "#1E5145" }}
            vertical
          >
            <Grid centered columns={1} divided>
              <Grid.Column floated={"left"}>
                <Header as="h3" style={{ fontSize: "2rem", color: "white" }}>
                  We all have a “before mindset” and “after mindset” version of
                  ourselves.
                </Header>
                <section style={{ fontSize: "1.2rem", color: "white" }}>
                  At mindset, we strive to:
                  <ul>
                    <li>
                      Engage every student so that they believe coding is for
                      them.
                    </li>
                  </ul>{" "}
                  <ul>
                    <li>
                      Empower any educator to feel confident when teaching
                      coding.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Inspire all school leaders to create a world-class
                      computer science program and this is evident in all our
                      course graduates.
                    </li>
                  </ul>
                </section>
              </Grid.Column>
              <Divider
                as="h6"
                className="header"
                horizontal
                style={{ margin: "1rem 0em", color: "white" }}
              >
                Meet Alegra, our recent graduate
              </Divider>
              <Grid.Column floated={"right"}>
                <iframe
                  title="student"
                  width="100%"
                  height="300vh"
                  src="https://www.youtube.com/embed/rWJm7R1PHvc?controls=0"
                />
              </Grid.Column>
              {/* <SignupButton /> */}
              {this.props.user.username || this.props.user.email ? (
                ""
              ) : (
                <SignupButton />
              )}
            </Grid>
          </Segment>
        </Responsive>

        <Responsive {...Responsive.onlyComputer}>
          <Segment
            style={{ padding: "3em 0em", backgroundColor: "#1E5145" }}
            vertical
          >
            <Container text>
              <Header as="h3" style={{ fontSize: "2.5em", color: "white" }}>
                We all have a “before mindset” and “after mindset” version of
                ourselves.
              </Header>
              <section style={{ fontSize: "1.2em", color: "white" }}>
                At mindset, we strive to:
                <ul>
                  <li>
                    Engage every student so that they believe coding is for
                    them.
                  </li>
                </ul>{" "}
                <ul>
                  <li>
                    Empower any educator to feel confident when teaching coding.
                  </li>
                </ul>
                <ul>
                  <li>
                    Inspire all school leaders to create a world-class computer
                    science program and this is evident in all our course
                    graduates.
                  </li>
                </ul>
              </section>
              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: "3em 0em", color: "white" }}
              >
                Meet Alegra, our recent graduate
              </Divider>
              <Grid centered columns={1}>
                <Grid.Column>
                  <iframe
                    title="student"
                    width="90%"
                    height="300vh"
                    src="https://www.youtube.com/embed/rWJm7R1PHvc?controls=0"
                  />
                </Grid.Column>
              </Grid>
              <br />
              {/* <SignupButton /> */}
              {this.props.user.username || this.props.user.email ? (
                ""
              ) : (
                <SignupButton />
              )}
            </Container>
          </Segment>
        </Responsive>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(SuccessStories2);
