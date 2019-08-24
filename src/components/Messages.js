import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

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
    var date = new Date();
    const messagesRender = this.state.messages.map(item => (
      <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
        <Table.Cell>{date.getTime()}</Table.Cell>
        <Table.Cell>
          <Link
            to={{
              pathname: `/messages/${item._id}`
            }}
          >
            view more
          </Link>{" "}
        </Table.Cell>
      </Table.Row>
    ));

    return (
      <div>
        <AdminPanel />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {messagesRender}
          {this.state.messages.length}
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}
export default Messages;
