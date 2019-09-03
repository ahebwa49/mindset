import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

const width = "auto";
const desktopHeight = "75vh";
const mobileHeight = "30vh";

const Container = styled.div`
  /*border: 1px solid blue;*/
  border-radius: 3px;
  position: relative;
  text-align: center;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    height: ${desktopHeight};
  }
  @media screen and (max-width: 700px) {
    height: ${mobileHeight};
  }
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  @media screen and (min-width: 1000px) {
    height: ${desktopHeight};
  }
  @media screen and (max-width: 700px) {
    height: ${mobileHeight};
  }
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
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
    return (
      <div>
        <Carousel defaultWait={2000} /*wait for 1000 milliseconds*/>
          <Slide right>
            <img
              src="/static/class.jpg"
              alt="about us"
              max-width="100%"
              max-height="100%"
              width="100%"
            />
          </Slide>
          <Slide right>
            <img
              src="/static/coding.jpg"
              alt="about us"
              width="100%"
              max-width="100%"
              max-height="100%"
            />
          </Slide>
          <Slide right>
            <img
              src="/static/presentation.jpg"
              alt="about us"
              width="100%"
              height="auto"
              max-width="100%"
              max-height="100%"
            />
          </Slide>
          <Slide right>
            <img
              src="/static/mindset.jpg"
              alt="about us"
              width="100%"
              max-width="100%"
              max-height="100%"
            />
          </Slide>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
