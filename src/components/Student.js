import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(`http://localhost:4000/students/${params.studentId}`, {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        //this.setState({ students: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }

  render() {
    return (
      <div>
        <h1>Single student</h1>
      </div>
    );
  }
}
export default Student;
