import React from "react";

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push("/Success");
  };
  render() {
    const styles = {
      heading: {
        display: "grid",
        justifyItems: "center",
        justifySelf: "center",
        border: "1px solid red",
        width: "80vw",
        height: "auto",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto"
      },
      info: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        border: "1px solid green",
        //fontSize: "1.2em",
        width: "80vw",
        marginLeft: "auto",
        marginRight: "auto"
      },
      address: {
        display: "grid",
        justifyItems: "center",
        border: "1px solid orange"
      },
      contact: {
        display: "grid",
        justifyItems: "center",
        border: "1px solid orange"
      },
      messageDiv: {
        display: "grid",
        border: "1px solid red",
        justifyItems: "center",
        justifySelf: "center",
        width: "100%"
      }
    };
    return (
      <div>
        <div style={styles.heading}>
          <h1>Contact Us</h1>
          <p>Feel free to contact us for any inquiries</p>
        </div>
        <div style={styles.info}>
          <div style={styles.address}>
            <h1>address</h1>
            <p>
              The Innovation Village Plot 31 Ntinda - Kisaasi Road, Ntinda
              Shopping Complex, Block B&C 3rd Floor, Kampala Kampala, Uganda
            </p>
          </div>
          <div style={styles.contact}>
            <h1>contacts</h1>
            Phone: +256704679017 Email: info@mindset-group.org
          </div>
        </div>
        <br />
        <div style={styles.heading}>
          <h2>LEAVE US A MESSAGE</h2>
          <form action="http://localhost:4000/messages" method="POST">
            <div style={styles.messageDiv}>
              <label htmlFor="name">
                Name
                <input type="text" name="name" placeholder="name" size="26" />
              </label>
              <label htmlFor="email">
                Email
                <input type="text" name="email" placeholder="email" size="26" />
              </label>
              <br />
              <label htmlFor="message">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="8"
                  cols="60"
                />
              </label>
              <button onSubmit={this.onSubmit} id="messageBtn" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
