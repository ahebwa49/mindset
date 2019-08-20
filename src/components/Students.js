import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentsForm from "./StudentsForm";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/students", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ students: data });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }

  render() {
    const styles = {
      container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "20px"
      },
      students: {
        display: "grid",
        border: "1px solid red"
      },
      form: {
        display: "grid",
        border: "1px solid blue"
      }
    };
    const studentsRender = this.state.students.map(item => (
      <div>
        <h4>
          {item.firstname} {item.lastname}{" "}
          <Link
            to={{
              pathname: `/students/${item._id}`
            }}
          >
            view more
          </Link>
        </h4>
      </div>
    ));
    return (
      <div style={styles.container}>
        <div style={styles.students}>
          <h1 style={{ textDecoration: "underline" }}>Students</h1>
          <div>{studentsRender}</div>
        </div>
        <div style={styles.form}>
          <StudentsForm />
        </div>
      </div>
    );
  }
}
export default Messages;
