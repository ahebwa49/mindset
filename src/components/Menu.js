import React, { Component } from "react";
import { connect } from "react-redux";
import MenuButton from "./MenuButton";
import { addUser } from "../actions/addUser";

import {
  Container,
  Segment,
  Responsive,
  Button,
  Image,
  Menu
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

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

class NavMenu extends Component {
  state = {};
  componentWillMount() {
    fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(async data => {
        await this.props.addNewUser(data);
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Segment.Group>
        <Responsive {...Responsive.onlyMobile}>
          <Menu borderless>
            <Container>
              <Menu.Item as="a" header>
                <Image size="small" src="/static/mindset.png" />
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item>
                  <MenuButton
                    visible={this.props.visible}
                    handleShowClick={this.props.handleShowClick}
                  />
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Menu borderless>
            <Container>
              <Menu.Item as="a" header>
                <Image size="small" src="/static/mindset.png" />
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item
                  as={Link}
                  to="/"
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/about"
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/services"
                  name="services"
                  active={activeItem === "services"}
                  onClick={this.handleItemClick}
                >
                  Services
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/contact"
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={this.handleItemClick}
                >
                  Contact
                </Menu.Item>

                <Menu.Item>
                  {this.props.user.username ? (
                    <UserMenu username={this.props.user.username} />
                  ) : (
                    <Button.Group>
                      <Button
                        name="sign in"
                        active={activeItem === "sign in"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/login"
                      >
                        Sign In
                      </Button>

                      <Button.Or />

                      <Button
                        name="register"
                        active={activeItem === "register"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/register"
                        primary={true}
                        style={{ marginLeft: "0.5em" }}
                      >
                        Register
                      </Button>
                    </Button.Group>
                  )}
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Responsive>

        <Responsive {...Responsive.onlyComputer}>
          <Menu borderless>
            <Container>
              <Menu.Item as="a" header>
                <Image size="small" src="/static/mindset.png" />
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item
                  as={Link}
                  to="/"
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/about"
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/services"
                  name="services"
                  active={activeItem === "services"}
                  onClick={this.handleItemClick}
                >
                  Services
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/contact"
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={this.handleItemClick}
                >
                  Contact
                </Menu.Item>

                <Menu.Item>
                  {this.props.user.username ? (
                    <UserMenu username={this.props.user.username} />
                  ) : (
                    <Button.Group>
                      <Button
                        name="sign in"
                        active={activeItem === "sign in"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/login"
                      >
                        Sign In
                      </Button>

                      <Button.Or />

                      <Button
                        name="register"
                        active={activeItem === "register"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/register"
                        primary={true}
                        style={{ marginLeft: "0.5em" }}
                      >
                        Register
                      </Button>
                    </Button.Group>
                  )}
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Responsive>
      </Segment.Group>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
