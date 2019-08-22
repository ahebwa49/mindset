import React, { Component } from "react";
//import "./style.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ""
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
        this.setState({ profile: data.username });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }

  render() {
    return (
      <div>
        <h3>
          Successfully registered or logged in {this.state.profile}
          <br /> Logout <a href="http://localhost:4000/logout">here</a>
        </h3>
        <h2>
          View profile <a href="http://localhost:4000/profile">here</a>
        </h2>
      </div>
    );
  }
}
export default Profile;
