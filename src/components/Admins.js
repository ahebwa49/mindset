import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import AdminsForm from "./AdminsForm";
import { Button, Icon, Menu, Table } from "semantic-ui-react";

class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      currentPage: 1,
      showAdminForm: false,
      count: ""
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.addAdmin = this.addAdmin.bind(this);
  }
  incrementPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
    fetch(
      `https://www.backend.mindset-group.org/admins/page/${this.state
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
        this.setState({ admins: data });
      })
      .catch(error => {
        console.log(`Failed to fetch paginated admin data ${error}`);
      });
  }
  decrementPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
    fetch(
      `https://www.backend.mindset-group.org/admins/page/${this.state
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
        this.setState({ admins: data });
      })
      .catch(error => {
        console.log(`Failed to fetch paginated admin data ${error}`);
      });
  }
  componentWillMount() {
    fetch(
      `https://www.backend.mindset-group.org/admins/page/${
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
        this.setState({ admins: data });
      })
      .catch(error => {
        console.log(`Failed to fetch paginated admin data ${error}`);
      });

    fetch(`https://www.backend.mindset-group.org/admins`, {
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
        console.log(`Failed to fetch admin count ${error}`);
      });
  }

  addAdmin() {
    this.setState({
      showAdminForm: !this.state.showAdminForm
    });
  }
  render() {
    const size = 4;
    const pages = Math.ceil(this.state.count / size);

    const adminsRender = this.state.admins.map(item => {
      const date = moment(item.created_on);
      return (
        <Table.Row>
          <Table.Cell>{item.firstname}</Table.Cell>
          <Table.Cell>{item.lastname}</Table.Cell>
          <Table.Cell>{date.format("MMMM Do YYYY, h:mm:ss a")}</Table.Cell>
          <Table.Cell>
            <Link
              to={{
                pathname: `/admins/admin/${item._id}`
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
        {/** <AdminPanel />*/}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>fistname</Table.HeaderCell>
              <Table.HeaderCell>lastname</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {adminsRender}

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="left"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={this.addAdmin}
                >
                  <Icon name="user" /> Add Admin
                </Button>
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
        {this.state.showAdminForm && <AdminsForm />}
      </div>
    );
  }
}
export default Admins;
