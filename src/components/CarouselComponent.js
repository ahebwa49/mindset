import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import styled, { css } from "styled-components";

const width = "100%";
const desktopHeight = "500px";
const tabletHeight = "450px";
const mobileHeight = "350px";

const Container = styled.div`
  border: 1px solid blue;
  background-color: #eaeeee;
  border-radius: 3px;
  position: relative;
  text-align: center;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    height: ${desktopHeight};
  }
  @media screen and (max-width: 999px) {
    height: ${tabletHeight};
  }
  @media screen and (max-width: 767px) {
    height: ${mobileHeight};
  }
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  border: 1px solid green;
  @media screen and (min-width: 1000px) {
    height: 95%;
  }
  @media screen and (max-width: 999px) {
    height: 95%;
  }
  @media screen and (max-width: 767px) {
    height: 92%;
  }
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  @media screen and (min-width: 1000px) {
    line-height: ${desktopHeight};
  }
  @media screen and (max-width: 999px) {
    line-height: ${tabletHeight};
  }
  @media screen and (max-width: 767px) {
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
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;

  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
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

class CarouselComponent extends Component {
  render() {
    const styles = {
      transparent: {
        display: "grid",
        position: "relative",
        width: "50%",
        height: "50%",
        opacity: "0.5",
        borderRadius: "3px",
        backgroundColor: "white",
        justifyItems: "center",
        alignItems: "center",
        //border: "1px solid red"
      }
    };
    return (
      <div>
        <Carousel defaultWait={2000} /*wait for 1000 milliseconds*/>
          <Slide right>
            <div id="carousel-image1">
              <div style={styles.transparent}>
                <Bounce top>
                  <p>THINK</p>
                </Bounce>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div id="carousel-image2">
              <div style={styles.transparent}>
                <Bounce bottom>
                  <p>CODE</p>
                </Bounce>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div id="carousel-image3">
              <div style={styles.transparent}>
                <Bounce left>
                  <p>CREATE</p>
                </Bounce>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div id="carousel-image4">
              <div style={styles.transparent}>
                <Bounce right>
                  <p>SOLVE</p>
                </Bounce>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
