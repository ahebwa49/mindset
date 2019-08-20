import React, { Component } from "react";
//import "./style.css";

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
        <h2>{item.name} </h2>
        <h4>{item.email}</h4>
        <p>{item.message}</p>
      </div>
    ));
    return (
      <div>
        <h3>Viewing messages from mindset guests</h3>
        <div>{messagesRender}</div>
      </div>
    );
  }
}
export default Messages;
