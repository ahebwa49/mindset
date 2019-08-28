import React from "react";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import Footer from "./Footer";

const About = () => {
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
      <Zoom>
        <div style={styles.heading}>
          <h1>Welcome to a world of Innovation and Creativity</h1>
          <p>
            MindSet aims to get the young people in Uganda exposed to digital
            skills and to encourage them to dive more into tech related careers.
            Currently, the education system in Uganda is traditional and the
            curriculum in most schools do not take into consideration the tech
            revolution that’s going on globally. To change this, we are bringing
            tech into the classrooms by offering co curricular programs in
            schools and out of school to empower the youth with digital literacy
            and entrepreneurship skills in bid to encourage innovation,
            creativity and to get a headstart into the future with these skills.
          </p>
          <img
            src="/static/mindset.jpg"
            alt="about us"
            width="100%"
            height="100%"
            float="left"
          />
        </div>
        <div style={styles.container}>
          <h1>Mission</h1>
          <p>
            To ensure every school going child in Uganda learns how to code.
          </p>
          <img
            src="../static/mindset.jpg"
            alt="mission"
            width="100%"
            height="auto"
            float="left"
          />
        </div>
        <div style={styles.container}>
          <h1>Vision</h1>
          <p>
            Introduce basic digital skills to the young generation in Uganda for
            them to thrive in tomorrow's society.
          </p>
          <img
            src="../static/mindset.jpg"
            alt="vision"
            width="100%"
            height="auto"
            float="left"
          />
        </div>
      </Zoom>
      <Footer />
    </div>
  );
};

export default About;
