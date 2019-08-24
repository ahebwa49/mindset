import React, { Component } from "react";
import { Container, Button, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ username: data.username || data.email });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
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
              {this.state.username ? (
                <UserMenu username={this.state.username} />
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
    );
  }
}
export default NavMenu;
