import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';

const Testimonials = () => {
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
      <LightSpeed left>
        <div style={styles.container}>
          <h1>After school program</h1>
          <p>
            Testimonials "I didn't have interest in coding the first time I came
            and with time, I started enjoying making games in scratch and I made
            the best game in my class" -Bwire Francis (15)
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
            "I found the start to be a bit boring, but as we continued, and made
            my own first app and had it on my phone, I became very excited and I
            am now looking forward to making it an app and upload it on google
            play" Joseph Muguluma (15)
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
            "I enjoyed making games and playing my friends games and
            understanding how algorithims work, I enjoy coding" Hannah
            Bagarukayo (12)
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
            "I am interested in website development, and every time I come for
            the lessons, I look forward to coming back for the next one" ELijah
            Bunga (17)
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
            "I have learnt how to create a cool game, called Cool Beans, and in
            this game this cool girl is cool like beans, she goes around
            collecting gems, I really enjoy my coding sessions." Allegra
            Katto(10)
          </p>
          <img
            src="../static/mindset.jpg"
            alt="after school program"
            width="100%"
            height="auto"
          />
        </div>
      </LightSpeed>
    </div>
  );
};

export default Testimonials;
