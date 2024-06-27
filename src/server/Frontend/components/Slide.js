import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/food.jpg';
import img2 from '../images/food2.jpg';
import img3 from '../images/food3.jpg';
import img4 from '../images/food4.jpg';
import img5 from '../images/food5.jpg';
import img6 from '../images/food6.jpg';
import video1 from '../Videos/video4.mp4';
import video2 from '../Videos/video5.mp4';
import video3 from '../Videos/video6.mp4';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slide() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold as needed
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid pt-2 pb-2 home">
      <Carousel data-bs-theme="dark" className="pt-3 animate-on-scroll" interval={1000}>
        <Carousel.Item className="p-0">
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className="text-center">
            <h5 className='text-dark'>Discover Our Culinary Delights</h5>
            <p className='slide-para1'>Indulge in a world of flavors crafted with passion and creativity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="p-0">
          <img className="d-block w-100" src={img3} alt="Second slide" />
          <Carousel.Caption className="text-center">
            <h5 className='text-white'>Experience a Cozy Ambiance</h5>
            <p className='slide-para2'>Enjoy a relaxing atmosphere that enhances your dining experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="p-0">
          <img className="d-block w-100" src={img2} alt="Third slide" />
          <Carousel.Caption className="text-center">
            <h5 className='text-white'>Exceptional Service Guaranteed</h5>
            <p className='slide-para3'>Our friendly staff is committed to providing attentive service.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="row animate-on-scroll">
        <div className="col-md-6 col-12 pt-5 text-center">
          <h2>Welcome to Our Restaurant</h2>
          <p className='home-para'>Discover a world of culinary delights and impeccable service.</p>
        </div>
        <div className="col-md-6 col-12 pt-5 text-center">
          <h2>Our Specialties</h2>
          <p className='home-para'>Explore our signature dishes crafted with passion and creativity.</p>
        </div>
      </div>

      <div className="row animate-on-scroll">
        <div className="col-md-4 col-12 text-center pt-5">
          <h3>Delicious Food</h3>
          <p className='home-para'>Indulge in mouth-watering flavors prepared with fresh, local ingredients.</p>
        </div>
        <div className="col-md-4 col-12 text-center pt-5">
          <h3>Relaxing Ambiance</h3>
          <p className='home-para'>Experience a cozy and welcoming atmosphere that enhances your dining experience.</p>
        </div>
        <div className="col-md-4 col-12 text-center pt-5">
          <h3>Exceptional Service</h3>
          <p className='home-para'>Enjoy attentive service from our friendly staff committed to your satisfaction.</p>
        </div>
      </div>

      <div className="row animate-on-scroll">
        <div className="col-md-6 col-12 pt-5 text-center">
          <video loop autoPlay muted className="w-100">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-6 col-12 pt-5 text-center">
          <video loop autoPlay muted className="w-100">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="row animate-on-scroll">
        <div className="col-md-12 col-12 pt-5 text-center">
          <h2>Our Mission</h2>
          <p className='home-para'>At Harbinger, we are dedicated to providing exceptional dining experiences that delight our guests.</p>
        </div>
      </div>

      <div className="row animate-on-scroll">
        <div className="col-md-4 col-12 text-center pt-5">
          <img className="w-100" src={img4} alt="Food" />
          <h4 className="pt-3">Exquisite Cuisine</h4>
          <p className='home-para'>Explore our diverse menu crafted with seasonal ingredients.</p>
        </div>
        <div className="col-md-4 col-12 text-center pt-5">
          <img className="w-100" src={img5} alt="Ambiance" />
          <h4 className="pt-3">Warm Ambiance</h4>
          <p className='home-para'>Experience a welcoming atmosphere that enhances your dining experience.</p>
        </div>
        <div className="col-md-4 col-12 text-center pt-5">
          <img className="w-100" src={img6} alt="Service" />
          <h4 className="pt-3">Exceptional Service</h4>
          <p className='home-para'>Our dedicated staff ensures your satisfaction with attentive service.</p>
        </div>
      </div>

      <div className="row animate-on-scroll">
        <div className="col-md-12 col-12 pt-5 text-center">
          <h2>Book Your Experience</h2>
          <p className='home-para'>Reserve your table today to enjoy a memorable dining experience at Harbinger.</p>
        </div>
      </div>

      <div className="row animate-on-scroll">
        <div className="col-md-12 col-12 pt-5 text-center">
          <video loop autoPlay muted className="w-100 vdo">
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="row animate-on-scroll">
        <div className="col-md-12 col-12 pt-5 text-center">
          <h2>Join Our Community</h2>
          <p className='home-para'>Follow us on social media to stay updated with our latest offerings and events.</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
