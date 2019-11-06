import React, { Component } from "react";
import AdminPanelButton from "./AdminPanelButton";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      _id: ""
    };
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onContactChange = this.onContactChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
  onFirstNameChange(event) {
    this.setState({
      firstname: event.target.value
    });
  }
  onLastNameChange(event) {
    this.setState({
      lastname: event.target.value
    });
  }
  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  onContactChange(event) {
    this.setState({
      contact: event.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("Ready to fetch");
    const {
      match: { params }
    } = this.props;

    const data = {
      contact: this.state.contact,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    };

    fetch(`http://localhost:4000/students/${params.studentId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(`failed to fetch${err}`);
      });
  }
  render() {
    const styles = {
      container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        border: "1px solid green"
      },
      modify: {
        display: "grid",
        //border: "1px solid red",
        justifyItems: "center",
        justifySelf: "center",
        alignSelf: "center",
        cursor: "pointer",
        fontSize: "1.6rem"
      }
    };
    return (
      <div>
        <AdminPanelButton />
        <h1>Edit Student</h1>
        <div style={styles.container}>
          <form id="formElem" onSubmit={this.onSubmit}>
            <div>
              <h3>
                firstname:
                <input
                  name="firstname"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.onFirstNameChange}
                />
              </h3>
              <h3>
                lastname:
                <input
                  name="lastname"
                  type="text"
                  value={this.state.lastname}
                  onChange={this.onLastNameChange}
                />
              </h3>
              <h3>
                email:{" "}
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
              </h3>
              <h3>
                contact:
                <input
                  name="contact"
                  type="text"
                  value={this.state.contact}
                  onChange={this.onContactChange}
                />
              </h3>
            </div>
            <br />
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EditStudent;
