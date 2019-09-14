import React, { Component } from "react";
import { connect } from "react-redux";
import MenuButton from "./MenuButton";
import { addUser } from "../actions/addUser";

import { Container, Responsive, Button, Image, Menu } from "semantic-ui-react";
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
      <>
        <Responsive {...Responsive.onlyMobile}>
          <Menu borderless>
            <>
              <Menu.Item as={Link} to="/" header>
                <Image size="small" src="/static/logo.png" />
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item>
                  <MenuButton handleShowClick={this.props.handleShowClick} />
                </Menu.Item>
              </Menu.Menu>
            </>
          </Menu>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Menu borderless>
            <Container>
              <Menu.Item as={Link} to="/" header>
                <Image size="small" src="/static/logo.png" />
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
                        style={{ color: "white", backgroundColor: "#164C60" }}
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
                        style={{
                          marginLeft: "0.5em",
                          color: "white",
                          backgroundColor: "#4BBBB5"
                        }}
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
              <Menu.Item as={Link} to="/" header>
                <Image size="small" src="/static/logo.png" />
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item
                  as={Link}
                  to="/"
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                  style={{ color: "#164C60" }}
                >
                  Home
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/about"
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                  style={{ color: "#164C60" }}
                >
                  About
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/services"
                  name="services"
                  active={activeItem === "services"}
                  onClick={this.handleItemClick}
                  style={{ color: "#164C60" }}
                >
                  Services
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to="/contact"
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={this.handleItemClick}
                  style={{ color: "#164C60" }}
                >
                  Contact
                </Menu.Item>

                <Menu.Item>
                  {this.props.user.username || this.props.user.email ? (
                    <UserMenu
                      username={
                        this.props.user.username || this.props.user.email
                      }
                    />
                  ) : (
                    <Button.Group>
                      <Button
                        name="sign in"
                        active={activeItem === "sign in"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/login"
                        style={{ color: "white", backgroundColor: "#164C60" }}
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
                        style={{
                          marginLeft: "0.5em",
                          color: "white",
                          backgroundColor: "#4BBBB5"
                        }}
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
      </>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
