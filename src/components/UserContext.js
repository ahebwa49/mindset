import React, { createContext, Component } from "react";

export const UserContext = createContext({
  username: "",
  role_id: "",
  setUser: () => {}
});

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      role_id: ""
    };
    this.setUser = this.setUser.bind(this);
  }
  setUser(username = null, role_id = null) {
    this.setState({
      username: username,
      role_id: role_id
    });
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export const UserConsumer = UserContext.Consumer;
