import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import { Responsive } from "semantic-ui-react";

const width = "auto",
  height = "75vh";
const desktopHeight = "75vh";
const mobileHeight = "30vh";
const Container = styled.div`
  /*border: 1px solid red;*/
  position: relative;
  overflow: hidden;
  width: ${width};
  @media screen and (min-width: 1000px) {
    height: ${desktopHeight};
  }
  @media screen and (max-width: 700px) {
    height: ${mobileHeight};
  }
`;
const Children = styled.div`
  /*border: 1px solid green;*/
  width: ${width};
  position: relative;
  /*height: ${height};*/
  @media screen and (min-width: 1000px) {
    height: ${desktopHeight};
  }
  @media screen and (max-width: 700px) {
    height: ${mobileHeight};
  }
`;
const Arrow = styled.div`
  /*border: 1px solid purple;*/
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  /*line-height: ${height};*/
  @media screen and (min-width: 1000px) {
    line-height: ${desktopHeight};
  }
  @media screen and (max-width: 700px) {
    line-height: ${mobileHeight};
  }
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
const Dot = styled.span`
  font-size: 1.5em;
  color: #000000;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  /*border: 1px solid orange;*/
  display: flex;
  justify-content: center;
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      {children}
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

class TestimonialCarousel extends Component {
  render() {
    const styles = {
      mainContainer: {
        backgroundColor: "#EAEEEE"
      },
      container: {
        display: "grid",
        alignItems: "center",
        position: "absolute",
        textAlign: "center",
        left: "10%",
        top: "20%",
        width: "80%",
        color: "#164C60"

        //border: "1px solid blue"
      },
      mobileContainer: {
        display: "grid",
        alignItems: "center",
        position: "absolute",
        textAlign: "center",
        left: "10%",
        top: "10%",
        width: "80%",
        color: "#164C60"

        //border: "1px solid blue"
      },
      p: {
        fontSize: "2em"
      },
      mobileP: {
        fontSize: "1em"
      },
      name: {
        fontSize: "1.2em",
        fontStyle: "italic"
      },
      mobileName: {
        fontSize: "0.8em",
        fontStyle: "italic"
      }
    };
    return (
      <div style={styles.mainContainer}>
        <Responsive {...Responsive.onlyMobile}>
          <Carousel maxTurns={0} /*wait for 1000 milliseconds*/>
            <Slide right>
              <div style={styles.mobileContainer}>
                <p style={styles.mobileP}>
                  "I didn't have interest in coding the first time I came and
                  with time, I started enjoying making games in scratch and I
                  made the best game in my class"
                </p>
                <br />
                <p style={styles.mobileName}>Bwire Francis (15)</p>
              </div>
            </Slide>
            <Slide right>
              <div style={styles.mobileContainer}>
                <p style={styles.mobileP}>
                  I found the start to be a bit boring, but as we continued, and
                  made my own first app and had it on my phone, I became very
                  excited and I am now looking forward to making it an app and
                  upload it on google play
                </p>
                <br />
                <p style={styles.mobileName}>Joseph Muguluma (15)</p>
              </div>
            </Slide>

            <Slide right>
              <div style={styles.mobileContainer}>
                <p style={styles.mobileP}>
                  "I enjoyed making games and playing my friends games and
                  understanding how algorithims work, I enjoy coding"
                </p>
                <br />
                <p style={styles.mobileName}>Hannah Bagarukayo (12)</p>
              </div>
            </Slide>
            <Slide right>
              <div style={styles.mobileContainer}>
                <p style={styles.mobileP}>
                  I have learnt how to create a cool game, called Cool Beans,
                  and in this game this cool girl is cool like beans, she goes
                  around collecting gems, I really enjoy my coding sessions."
                </p>
                <br />
                <p style={styles.mobileName}>Allegra Katto(10)</p>
              </div>
            </Slide>
          </Carousel>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <Carousel maxTurns={0} /*wait for 1000 milliseconds*/>
            <Slide right>
              <div style={styles.container}>
                <p style={styles.p}>
                  "I didn't have interest in coding the first time I came and
                  with time, I started enjoying making games in scratch and I
                  made the best game in my class"
                </p>
                <br />
                <p style={styles.name}>Bwire Francis (15)</p>
              </div>
            </Slide>
            <Slide right>
              <div style={styles.container}>
                <p style={styles.p}>
                  I found the start to be a bit boring, but as we continued, and
                  made my own first app and had it on my phone, I became very
                  excited and I am now looking forward to making it an app and
                  upload it on google play
                </p>
                <br />
                <p style={styles.name}>Joseph Muguluma (15)</p>
              </div>
            </Slide>

            <Slide right>
              <div style={styles.container}>
                <p style={styles.p}>
                  "I enjoyed making games and playing my friends games and
                  understanding how algorithims work, I enjoy coding"
                </p>
                <br />
                <p style={styles.name}>Hannah Bagarukayo (12)</p>
              </div>
            </Slide>
            <Slide right>
              <div style={styles.container}>
                <p style={styles.p}>
                  I have learnt how to create a cool game, called Cool Beans,
                  and in this game this cool girl is cool like beans, she goes
                  around collecting gems, I really enjoy my coding sessions."
                </p>
                <br />
                <p style={styles.name}>Allegra Katto(10)</p>
              </div>
            </Slide>
          </Carousel>
        </Responsive>
      </div>
    );
  }
}

export default TestimonialCarousel;
