import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

class MobileMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/about">
          About
        </Menu.Item>
        <Menu.Item as={Link} to="/services">
          Services
        </Menu.Item>
        <Menu.Item as={Link} to="/contact">
          Contact
        </Menu.Item>
        {this.props.user.username ? (
          <div>
            <Menu.Item as="a">{this.props.user.username}</Menu.Item>
            <Menu.Item as="a" href="http://localhost:4000/logout">
              logout
            </Menu.Item>
          </div>
        ) : (
          <div>
            <Menu.Item as={Link} to="/login">
              Sign in
            </Menu.Item>
            <Menu.Item as={Link} to="/register">
              Register
            </Menu.Item>
          </div>
        )}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  null
)(MobileMenu);
