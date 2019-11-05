import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Icon, Menu, Table } from "semantic-ui-react";

class Subscriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: [],
      currentPage: 1,
      count: ""
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }
  incrementPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
    fetch(
      `https://www.backend.mindset-group.org/subscriptions/page/${this.state
        .currentPage + 1}`,
      {
        method: "GET",
        credentials: "include"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ messages: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  decrementPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
    fetch(
      `https://www.backend.mindset-group.org/subscriptions/page/${this.state
        .currentPage - 1}`,
      {
        method: "GET",
        credentials: "include"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ messages: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  componentWillMount() {
    fetch(
      `https://www.backend.mindset-group.org/subscriptions/page/${
        this.state.currentPage
      }`,
      {
        method: "GET",
        credentials: "include"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ subscriptions: data });
      })
      .catch(error => {
        console.log(`Failed to fetch paginated subscriptions data ${error}`);
      });

    fetch(`https://www.backend.mindset-group.org/subscriptions`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          count: data.length
        });
      })
      .catch(error => {
        console.log(`Failed to fetch subscriptions ${error}`);
      });
  }

  render() {
    const size = 4;
    const pages = Math.ceil(this.state.count / size);

    const subscriptionsRender = this.state.subscriptions.map(item => {
      const date = moment(item.created_on);
      return (
        <Table.Row>
          <Table.Cell>{item.firstname}</Table.Cell>
          <Table.Cell>{item.lastname}</Table.Cell>
          <Table.Cell>{date.format("MMMM Do YYYY, h:mm:ss a")}</Table.Cell>
          <Table.Cell>
            <Link
              to={{
                pathname: `/subscriptions/subscription/${item._id}`
              }}
            >
              view more
            </Link>{" "}
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Firstname</Table.HeaderCell>
              <Table.HeaderCell>Lastname</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {subscriptionsRender}

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Menu floated="right" pagination>
                  <Menu.Item
                    as="a"
                    onClick={this.decrementPage}
                    disabled={this.state.currentPage <= 1}
                    icon
                  >
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">{this.state.currentPage}</Menu.Item>
                  <Menu.Item as="a">of</Menu.Item>
                  <Menu.Item as="a">{pages}</Menu.Item>

                  <Menu.Item
                    as="a"
                    onClick={this.incrementPage}
                    disabled={this.state.currentPage >= pages}
                    icon
                  >
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
export default Subscriptions;
