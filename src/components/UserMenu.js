import React, { Component } from "react";
import { Dropdown, Image } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
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

class UserMenu extends Component {
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
        console.log(data);
        await this.props.addNewUser(data);
        this.props.history.push("/login");
      });
  }
  render() {
    return (
      <Dropdown
        trigger={
          <Image
            avatar={true}
            //size="mini"
            src="/static/profile.png"
            style={{ width: "18px", height: "18px" }}
          />
        }
        pointing={true}
        className="link item"
      >
        <Dropdown.Menu>
          <Dropdown.Item>{this.props.username}</Dropdown.Item>
          <Dropdown.Item>Student</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Actions</Dropdown.Header>

          {(this.props.user.role_id === "SUPERADMIN" && (
            <Link to="/dashboard">
              <Dropdown.Item>dashboard</Dropdown.Item>
            </Link>
          )) ||
            (this.props.user.role_id === "ADMIN" && (
              <Link to="/dashboard">
                <Dropdown.Item>dashboard</Dropdown.Item>
              </Link>
            ))}

          <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserMenu)
);
