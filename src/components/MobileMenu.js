import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { addUser } from "../actions/addUser";
import MenuButtonClose from "./MenuButtonClose";

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

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    fetch("https://www.backend.mindset-group.org/logout", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(async data => {
        await this.props.addNewUser(data);
        this.props.history.push("/login");
      });
  }
  render() {
    return (
      <div className="mobileMenu">
        <div className="listItems">
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

          {this.props.user.username || this.props.user.email ? (
            <>
              <Menu.Item as="a">
                {this.props.user.username || this.props.user.email}
              </Menu.Item>
              <Menu.Item as="a" onClick={this.handleLogout}>
                logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item as={Link} to="/login">
                Sign in
              </Menu.Item>
              <Menu.Item as={Link} to="/register">
                Register
              </Menu.Item>
            </>
          )}
        </div>
        <div className="close">
          <MenuButtonClose handleSidebarHide={this.props.handleSidebarHide} />
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MobileMenu)
);
