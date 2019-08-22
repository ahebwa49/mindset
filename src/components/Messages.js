import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminPanel from "./AdminPanel";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/messages", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ messages: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }

  render() {
    const messagesRender = this.state.messages.map(item => (
      <div>
        <h3>
          {item.name}{" "}
          <Link
            to={{
              pathname: `/messages/${item._id}`
            }}
          >
            view more
          </Link>{" "}
        </h3>
      </div>
    ));
    return (
      <div>
        <AdminPanel />
        <h1>Messsages</h1>
        <div>{messagesRender}</div>
      </div>
    );
  }
}
export default Messages;
