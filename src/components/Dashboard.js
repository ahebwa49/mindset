import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import Messages from "./Messages";
import Students from "./Students";
import Admins from "./Admins";

class Dashboard extends Component {
  state = { activeItem: "messages" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid style={{ padding: "3rem" }}>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="students"
              active={activeItem === "students"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="admins"
              active={activeItem === "admins"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {activeItem === "messages" && <Messages />}
            {activeItem === "students" && <Students />}
            {activeItem === "admins" && <Admins />}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Dashboard;
