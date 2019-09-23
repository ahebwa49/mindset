import React, { Component } from "react";
import AdminPanel from "./AdminPanel";
import { Link } from "react-router-dom";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      _id: ""
    };
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(
      `https://www.backend.mindset-group.org/students/${params.studentId}`,
      {
        method: "GET",
        credentials: "include"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          contact: data.contact,
          _id: data._id
        });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }

  onDelete() {
    fetch(`https://www.backend.mindset-group.org/students/${this.state._id}`, {
      method: "DELETE",
      credentials: "include"
    })
      .then(() => {
        console.log("Succesffuly deleted student");
      })
      .catch(error => {
        console.log(`Failled to delete${error}`);
      });
    //this.props.history.push("/");
  }
  render() {
    const styles = {
      container: {
        padding: "3rem"
      },

      subContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        border: "1px solid green"
      },
      modify: {
        display: "grid",
        justifyItems: "center",
        justifySelf: "center",
        alignSelf: "center",
        cursor: "pointer",
        fontSize: "1.6rem"
      }
    };
    return (
      <div style={styles.container}>
        <AdminPanel />
        <h1>student</h1>
        <div style={styles.subContainer}>
          <div>
            <h3>firstname:{this.state.firstname}</h3>
            <h3>lastname:{this.state.lastname}</h3>
            <h3>email:{this.state.email}</h3>
            <h3>contact:{this.state.contact}</h3>
          </div>
          <div style={styles.modify}>
            <div>
              <Link
                to={{
                  pathname: `/students/edit/${this.state._id}`
                }}
              >
                Edit
              </Link>
            </div>
            <br />
            <div onClick={this.onDelete} style={{ color: "red" }}>
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Student;
