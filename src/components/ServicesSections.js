import React from "react";
import { Image, Header, Responsive } from "semantic-ui-react";
import SignupButton from "./SignupButton";

const ServicesSection = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "2rem",
      padding: "2rem 3rem"
    },
    tabletContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "1.5rem",
      padding: "2rem"
    },
    mobileContainer: {
      display: "grid",
      padding: " 2rem 1rem"
    },
    program: {
      display: "grid",
      justifyItems: "center",
      border: "1px solid #EAEEEE",
      borderRadius: "4px",
      boxShadow: "5px 5px 5px #EAEEEE",
      padding: "1.5rem",
      paddingTop: "1rem"
    },
    desktopImg: {
      width: "100px",
      height: "100px",
      borderRadius: "50%"
    }
  };
  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <div style={styles.mobileContainer}>
          <div style={styles.program}>
            <Image src="/static/afterschool2.png" style={styles.desktopImg} />

            <Header style={{ fontSize: "1.5rem", color: "#4BBBB5" }}>
              After School Program
            </Header>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              The After School program runs in Primary and Secondary Schools as
              a co-curricular activity. Students from Year 7- 16 [and the
              equivalent in other educational systems] are eligible for the
              program.
            </p>
          </div>
          <br />
          <div style={styles.program}>
            <Image src="/static/afterschool.png" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "1.5rem", color: "#4BBBB5" }}>
              Weekend Code Program
            </Header>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              Every weekend is an exciting time for our young coders. We
              introduce programming in a fun way to children aged from 7 to 17
              years through an 8-week programme that is delivered at the The
              Innovation Village on Saturday morning.
            </p>
          </div>
          <br />
          <div style={styles.program}>
            <Image src="/static/midyear.jpg" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "1.5rem", color: "#4BBBB5" }}>
              Mid Year Program
            </Header>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              This is where your child becomes an innovator, creator, and change
              maker.These are programs designed for primary and secondary school
              going students(7-17 years) during the mid year holidays.
            </p>
          </div>
          <br />
          <div style={styles.program}>
            <Image src="/static/holiday.png" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "1.5rem", color: "#4BBBB5" }}>
              Holiday Bootcamps
            </Header>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#164C60",
                fontWeight: "50",
                textAlign: "center"
              }}
            >
              We have a junior program for 7-10 year olds and a senior program
              for 11-17 year olds. Every week during these program, we unpack
              and communicate a science topic in a fun way for our students.
            </p>
          </div>
        </div>
        <SignupButton />
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <div style={styles.tabletContainer}>
          <div style={styles.program}>
            <Image src="/static/afterschool2.png" style={styles.desktopImg} />

            <Header style={{ fontSize: "1.8em", color: "#4BBBB5" }}>
              After School Program
            </Header>

            <p
              style={{
                fontSize: "1.2em",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              The After School program runs in Primary and Secondary Schools as
              a co-curricular activity. Students from Year 7- 16 [and the
              equivalent in other educational systems] are eligible for the
              program.
            </p>
          </div>

          <div style={styles.program}>
            <Image src="/static/afterschool.png" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "1.8em", color: "#4BBBB5" }}>
              Weekend Code Program
            </Header>
            <p
              style={{
                fontSize: "1.2em",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              Every weekend is an exciting time for our young coders. We
              introduce programming in a fun way to children aged from 7 to 17
              years through an 8-week programme that is delivered at the The
              Innovation Village on Saturday morning.
            </p>
          </div>
        </div>

        <div style={styles.container}>
          <div style={styles.program}>
            <Image src="/static/midyear.jpg" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "1.8em", color: "#4BBBB5" }}>
              Mid Year Program
            </Header>
            <p
              style={{
                fontSize: "1.2em",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              This is where your child becomes an innovator, creator, and change
              maker.These are programs designed for primary and secondary school
              going students(7-17 years) during the mid year holidays.
            </p>
          </div>
          <div style={styles.program}>
            <Image src="/static/holiday.png" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "1.8em", color: "#4BBBB5" }}>
              Holiday Bootcamps
            </Header>
            <p
              style={{
                fontSize: "1.2em",
                color: "#164C60",
                fontWeight: "50",
                textAlign: "center"
              }}
            >
              We have a junior program for 7-10 year olds and a senior program
              for 11-17 year olds. Every week during these program, we unpack
              and communicate a science topic in a fun way for our students.
            </p>
          </div>
        </div>
        <SignupButton />
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <div style={styles.container}>
          <div style={styles.program}>
            <Image src="/static/afterschool2.png" style={styles.desktopImg} />

            <Header style={{ fontSize: "2em", color: "#4BBBB5" }}>
              After School Program
            </Header>

            <p
              style={{
                fontSize: "1.3em",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              The After School program runs in Primary and Secondary Schools as
              a co-curricular activity. Students from Year 7- 16 [and the
              equivalent in other educational systems] are eligible for the
              program.
            </p>
          </div>

          <div style={styles.program}>
            <Image src="/static/afterschool.png" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "2em", color: "#4BBBB5" }}>
              Weekend Code Program
            </Header>
            <p
              style={{
                fontSize: "1.3em",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              Every weekend is an exciting time for our young coders. We
              introduce programming in a fun way to children aged from 7 to 17
              years through an 8-week programme that is delivered at the The
              Innovation Village on Saturday morning.
            </p>
          </div>
        </div>

        <div style={styles.container}>
          <div style={styles.program}>
            <Image src="/static/midyear.jpg" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "2em", color: "#4BBBB5" }}>
              Mid Year Program
            </Header>
            <p
              style={{
                fontSize: "1.3em",
                color: "#164C60",
                textAlign: "center"
              }}
            >
              This is where your child becomes an innovator, creator, and change
              maker.These are programs designed for primary and secondary school
              going students(7-17 years) during the mid year holidays.
            </p>
          </div>
          <div style={styles.program}>
            <Image src="/static/holiday.png" style={styles.desktopImg} />
            <Header as="h3" style={{ fontSize: "2em", color: "#4BBBB5" }}>
              Holiday Bootcamps
            </Header>
            <p
              style={{
                fontSize: "1.3em",
                color: "#164C60",
                fontWeight: "50",
                textAlign: "center"
              }}
            >
              We have a junior program for 7-10 year olds and a senior program
              for 11-17 year olds. Every week during these program, we unpack
              and communicate a science topic in a fun way for our students.
            </p>
          </div>
        </div>
        <SignupButton />
      </Responsive>
    </>
  );
};
export default ServicesSection;
