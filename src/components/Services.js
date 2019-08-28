import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const Services = () => {
  const styles = {
    container: {
      display: "grid",
      justifyItems: "center",
      justifySelf: "center",
      border: "1px solid red",
      width: "50vw",
      height: "auto",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto"
    }
  };
  return (
    <div>
      <Fade left>
        <div style={styles.container}>
          <h1>After school program</h1>
          <p>
            The After School program runs in Primary and Secondary Schools as a
            co-curricular activity. Students from Year 7- 16 [and the equivalent
            in other educational systems] are eligible for the program. The
            program runs each term for the duration of the academic year.We also
            partner with schools to deliver the Coding Club to students.
          </p>
          <img
            src="../static/mindset.jpg"
            alt="after school program"
            width="100%"
            height="auto"
          />
        </div>
        <div style={styles.container}>
          <h1>Weekend Code Program</h1>
          <p>
            Every weekend is an exciting time for our young coders. We introduce
            programming in a fun way to children aged from 7 to 17 years through
            an 8-week programme that is delivered at the The Innovation Village
            on Saturday morning.
          </p>
          <img
            src="../static/mindset.jpg"
            alt="after school program"
            width="100%"
            height="auto"
          />
        </div>
        <div style={styles.container}>
          <h1>Mid Year Program</h1>
          <p>
            This is where your child becomes an innovator, creator, and change
            maker.These are programs designed for primary and secondary school
            going students(7-17 years) during the mid year holidays.
          </p>
          <img
            src="../static/mindset.jpg"
            alt="after school program"
            width="100%"
            height="auto"
          />
        </div>
        <div style={styles.container}>
          <h1>Holiday Bootcamps</h1>
          <p>
            We have a junior program for 7-10 year olds and a senior program for
            11-17 year olds. The junior program is based on drag and drop coding
            and the senior program uses text based programming language. Every
            week during these program, we unpack and communicate a science topic
            in a fun way for our students.
          </p>
          <img
            src="../static/mindset.jpg"
            alt="after school program"
            width="100%"
            height="auto"
          />
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default Services;
