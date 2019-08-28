import React from "react";

const SuccessStories1 = () => {
  const styles = {
    container: {
      display: "grid",
      height: "400px",
      gridTemplateColumns: "3fr 2fr",
      justifyContent: "center",
      border: "1px solid red",
      borderRadius: "3px"
    },
    studentVideo: {
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
      border: "1px solid red"
    },
    studentParagraph: {
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
      border: "1px solid red"
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.studentVideo}>
        <iframe
          title="student"
          width="75%"
          height="75%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        />
      </div>
      <div style={styles.studentParagraph}>
        <h2>We make mindblowing online courses.</h2>
        <p>
          Most online courses suck...unless you enjoy paying for monotonous
          lectures with a powerpoint slide or two thrown in. At Jumpcut, we
          ditch the traditional lecture-style course and utilize storytelling,
          cinematography, and soundtracks to make each course feel like a movie.
          To see how much of a difference this makes, push “c” while watching
          this video.
        </p>
      </div>
    </div>
  );
};

export default SuccessStories1;
