import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "./Banner1";

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item className="Hero-pics">
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Banner1
          className="Hero-pics-img"
          imgSrc="./Images/banner-4.gif"
          altText="Home-Banner"
        />
        <Carousel.Caption>
          <h2>Welcome to Yellow Restaurant and Snack-bar</h2>
          <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Banner1 imgSrc="./Images/pix 4.jpg" altText="Home-Banner" />
        <Carousel.Caption>
          <h2>Home Away from home</h2>
          <h5>
            Our fast food Restaurant offers conducive environment for your
            relaxation, yummy Fast Food Restaurant{" "}
          </h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        {/* <img src="./Images/Banner 2.avif" className="d-block w-100" alt="" /> */}
        <Banner1 imgSrc="./Images/pix 3.jpg" altText="Home-Banner" />
        <Carousel.Caption>
          <h2>Home Away from home</h2>
          <h5>
            Our fast food Restaurant offers conducive environment for your
            relaxation, yummy Fast Food Restaurant{" "}
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
