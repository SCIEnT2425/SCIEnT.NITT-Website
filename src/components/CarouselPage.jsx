import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/home1.jpeg';
import img2 from '../assets/home2.png';
import img3 from '../assets/home3.jpg';
import img4 from '../assets/home6.jpg';
import img5 from '../assets/home5.jpg';
import img6 from '../assets/home4.JPG';
import './CarouselPage.css';

function CarouselPage() {
  return (
    <div>
      <div className="headingcarousel">
        <h2>SCIENT</h2>
        <p className="desc">
          Student Centre for Innovation in Engineering and Technology
        </p>
        <p className="typewriter">
          <Typewriter
            words={['Walk in with an Idea, Walk out with a Prototype.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={3000}
          />
        </p>
      </div>

      <Carousel className='carouselhead' interval={1000} fade> {/* Added auto-scroll (interval) and fade effect */}
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carosel_imagebox"
              src={img1}
              alt="First slide"
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carosel_imagebox"
              src={img2}
              alt="Second slide"
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carosel_imagebox"
              src={img3}
              alt="Third slide"
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carosel_imagebox"
              src={img4}
              alt="Fourth slide"
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carosel_imagebox"
              src={img5}
              alt="Fifth slide"
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carosel_imagebox"
              src={img6}
              alt="Fifth slide"
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
