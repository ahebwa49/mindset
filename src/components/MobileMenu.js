import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { addUser } from "../actions/addUser";

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
    fetch("http://localhost:4000/logout", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(async data => {
        //console.log(data);
        await this.props.addNewUser(data);
        this.props.history.push("/login");
      });
  }
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
        {this.props.user.username || this.props.user.email ? (
          <div>
            <Menu.Item as="a">
              {this.props.user.username || this.props.user.email}
            </Menu.Item>
            <Menu.Item as="a" onClick={this.handleLogout}>
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
//href="http://localhost:4000/logout"
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MobileMenu)
);
