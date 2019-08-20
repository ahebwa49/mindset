import React from "react";

class StudentsForm extends React.Component {
  onSubmit = () => {
    this.props.history.push("/Success");
  };
  render() {
    const styles = {
      form: {
        display: "grid",
        justifyItems: "center",
        justifySelf: "center",
        width: "100%",
        height: "100%",
        textAlign: "center"
      }
    };
    return (
      <div style={styles.form}>
        <h2>ADD A STUDENT</h2>
        <form action="http://localhost:4000/students" method="POST">
          <div style={styles.messageDiv}>
            <label htmlFor="firstname">
              Firstname
              <input
                type="text"
                name="firstname"
                placeholder="firstname"
                size="26"
              />
            </label>
            <br />
            <label htmlFor="lastname">
              Lastname
              <input
                type="text"
                name="lastname"
                placeholder="lastname"
                size="26"
              />
            </label>
            <br />
            <label htmlFor="contact">
              Contact
              <input
                type="text"
                name="contact"
                placeholder="contact"
                size="26"
              />
            </label>
            <br />
            <label htmlFor="email">
              Email
              <input type="text" name="email" placeholder="email" size="26" />
            </label>
            <br />

            <button onSubmit={this.onSubmit} id="messageBtn" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentsForm;
