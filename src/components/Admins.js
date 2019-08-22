import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminsForm from "./AdminsForm";
import AdminPanel from "./AdminPanel";

class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/admins", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ admins: data });
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
    const adminsRender = this.state.admins.map(item => (
      <div>
        <h4>
          {item.firstname} {item.lastname}{" "}
          <Link
            to={{
              pathname: `/admins/${item._id}`
            }}
          >
            view more
          </Link>
        </h4>
      </div>
    ));
    return (
      <div>
        <AdminPanel />
        <br />
        <div style={styles.container}>
          <div style={styles.students}>
            <h1 style={{ textDecoration: "underline" }}>Admins</h1>
            <div>{adminsRender}</div>
          </div>
          <div style={styles.form}>
            <AdminsForm />
          </div>
        </div>
      </div>
    );
  }
}
export default Admins;
