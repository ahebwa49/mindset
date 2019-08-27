import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import { Icon, Menu, Table } from "semantic-ui-react";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
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
    fetch(`http://localhost:4000/students/page/${this.state.currentPage + 1}`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ students: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  decrementPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
    fetch(`http://localhost:4000/students/page/${this.state.currentPage - 1}`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ students: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  componentWillMount() {
    fetch(`http://localhost:4000/students/page/${this.state.currentPage}`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ students: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });

    fetch(`http://localhost:4000/students`, {
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
        console.log(`Failed to fetch profile data ${error}`);
      });
  }

  render() {
    const size = 4;
    const pages = Math.ceil(this.state.count / size);

    const studentsRender = this.state.students.map(item => (
      <Table.Row>
        <Table.Cell>{item.firstname}</Table.Cell>
        <Table.Cell>{item.lastname}</Table.Cell>
        <Table.Cell>{new Date().toLocaleTimeString()}</Table.Cell>
        <Table.Cell>
          <Link
            to={{
              pathname: `/students/student/${item._id}`
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
              <Table.HeaderCell>fistname</Table.HeaderCell>
              <Table.HeaderCell>lastname</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {studentsRender}

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
export default Students;
