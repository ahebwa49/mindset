import React, { Component } from "react";
import moment from "moment";
import { Label, Button } from "semantic-ui-react";
import AdminPanelButton from "./AdminPanelButton";
import { Link } from "react-router-dom";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      cssRating: "",
      scratchRating: "",
      htmlRating: "",
      date: "",
      _id: ""
    };
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(
      `https://www.backend.mindset-group.org/students/student/${
        params.studentId
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
        console.log(data);
        this.setState({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          contact: data.contact,
          scratchRating: data.scratchRating,
          cssRating: data.cssRating,
          htmlRating: data.htmlRating,
          date: data.created_on,
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
    const date = moment(this.state.date);
    const styles = {
      container: {
        padding: "1rem 3rem"
        // border:"1px solid red"
      },

      subContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        // border: "1px solid green",
        padding: "0rem 8rem"
      },
      modify: {
        display: "grid",
        justifyItems: "center",
        justifySelf: "end",
        alignSelf: "center",
        cursor: "pointer",
        fontSize: "1.6rem"
        // border: "1px solid blue"
      },
      label: {
        fontSize: "16px",
        marginBottom: "10px"
      }
    };
    return (
      <div style={styles.container}>
        <AdminPanelButton />
        <h3 style={{ textAlign: "center", color: "#164C60" }}>student</h3>
        <div style={styles.subContainer}>
          <div>
            <Label size="tiny" style={styles.label}>
              Date created: {date.format("MMMM Do YYYY, h:mm:ss a")}
            </Label>
            <br />
            <Label size="tiny" style={styles.label}>
              firstname:{this.state.firstname}
            </Label>
            <br />
            <Label size="tiny" style={styles.label}>
              lastname:{this.state.lastname}
            </Label>
            <br />
            <Label size="tiny" style={styles.label}>
              email:{this.state.email}
            </Label>
            <br />
            <Label size="tiny" style={styles.label}>
              contact:{this.state.contact}
            </Label>
          </div>
          <div style={styles.modify}>
            <Button primary>
              <Link
                style={{ color: "white" }}
                to={{
                  pathname: `/students/student/edit/${this.state._id}`
                }}
              >
                Edit
              </Link>
            </Button>
            <br />
            <Button negative onClick={this.onDelete} style={{ color: "white" }}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Student;
