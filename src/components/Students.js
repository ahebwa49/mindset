import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import StudentsForm from "./StudentsForm";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      showStudentForm: false,
      currentPage: 1,
      count: ""
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }
  incrementPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
    fetch(`https://www.backend.mindset-group.org/students/page/${this.state.currentPage + 1}`, {
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
        console.log(`Failed to fetch student paginated data ${error}`);
      });
  }
  decrementPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
    fetch(`https://www.backend.mindset-group.org/students/page/${this.state.currentPage - 1}`, {
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
        console.log(`Failed to fetch student paginated data ${error}`);
      });
  }
  componentWillMount() {
    fetch(`https://www.backend.mindset-group.org/students/page/${this.state.currentPage}`, {
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
        console.log(`Failed to fetch student data ${error}`);
      });

    fetch(`https://www.backend.mindset-group.org/students`, {
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
        console.log(`Failed to fetch student count ${error}`);
      });
  }
  addStudent() {
    this.setState({
      showStudentForm: !this.state.showStudentForm
    });
    console.log(this.state.showStudentForm);
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
          {studentsRender}

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="left"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={this.addStudent}
                >
                  <Icon name="user" /> Add Student
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
        {this.state.showStudentForm && <StudentsForm />}
      </div>
    );
  }
}
export default Students;
