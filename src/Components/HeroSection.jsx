import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from './Banner1';


const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item className='Hero-pics'>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Banner1 className='Hero-pics-img' imgSrc= "./Images/banner-4.gif" altText= "Home-Banner"/>
        <Carousel.Caption>
          <h3>Welcome to Yellow Restaurant and Snack-bar</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Banner1 imgSrc= "./Images/pix 4.jpg" altText= "Home-Banner"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        {/* <img src="./Images/Banner 2.avif" className="d-block w-100" alt="" /> */}
        <Banner1 imgSrc= "./Images/pix 3.jpg" altText= "Home-Banner"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default HeroSection