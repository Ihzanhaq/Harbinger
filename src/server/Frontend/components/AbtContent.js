import React, { useEffect } from 'react';
import img1 from '../images/About1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/About.css';
import video1 from '../Videos/video1.mp4';
import img2 from '../images/about2.jpg';
import img3 from '../images/about3.jpg';
import img4 from '../images/about4.jpg';
import img5 from '../images/about5.jpg';
import video2 from '../Videos/video2.mp4';
import video3 from '../Videos/video3.mp4';

function AbtImg() {
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 pb-4 pt-4 text-center animate-on-scroll">
          <img className="pic p-5" src={img1} alt="Not found" />
        </div>

        <div className="col-md-6 col-12 p-5 animate-on-scroll">
          <h1 className="heading text-center">Welcome to Harbinger, where culinary creativity meets a passion for flavor.</h1>
        </div>
      </div>
      <div className="row col-md-12 mx-auto pt-4 pb-4 animate-on-scroll">
        <video loop autoPlay muted className="vdo">
          <source src={video1} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div className="row">
        <div className="col-md-6 container animate-on-scroll">
          <p className="text-center p-4">At Harbinger, we believe in more than just dining; we believe in crafting experiences. Our journey began with a simple yet profound idea: to create a haven where food lovers can explore the boundaries of taste, texture, and presentation.</p>
        </div>
      </div>
      <div className="row container-fluid mx-auto p-3 animate-on-scroll">
        <div className="col-md-4 col-12 text-center">
          <img className="photo" src={img2} alt="Not found" />
        </div>
        <div className="col-md-4 col-12 text-center">
          <img className="photo" src={img3} alt="Not found" />
        </div>
        <div className="col-md-4 col-12 text-center">
          <img className="photo" src={img4} alt="Not found" />
        </div>
      </div>
      <div className="row animate-on-scroll">
        <div className="col-md-6 container">
          <p className="text-center p-4">Harbinger is more than just a restaurant—it's a culinary sanctuary, where every dish tells a story and every ingredient is meticulously selected to tantalize your senses. From the moment you step through our doors, you're enveloped in an atmosphere of warmth and sophistication, where every detail is designed to elevate your dining experience.</p>
        </div>
      </div>
      <div className="row col-md-12 mx-auto pt-4 pb-4 animate-on-scroll">
        <video loop autoPlay muted className="vdo">
          <source src={video2} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 pb-4 pt-4 text-center animate-on-scroll">
          <img className="pic p-5" src={img5} alt="Not found" />
        </div>

        <div className="col-md-6 col-12 p-5 animate-on-scroll">
          <p className="text-center pt-5">Our menu is a celebration of seasonal ingredients, expertly curated to showcase the best flavors each season has to offer. Whether you're craving a sumptuous steak, a delicate seafood dish, or a vibrant vegetarian option, our culinary artisans are dedicated to creating dishes that both surprise and delight.</p>
        </div>
      </div>
      <div className="row col-md-12 mx-auto pt-4 pb-4 animate-on-scroll">
        <video loop autoPlay muted className="vdo">
          <source src={video3} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 container animate-on-scroll">
          <p className="text-center pt-5 pb-5">But Harbinger is more than just a place to enjoy exquisite cuisine; it's a community. We take pride in fostering connections—between flavors, people, and the world around us. Our team is passionate about creating a welcoming environment where guests can come together to savor unforgettable meals, forge lasting memories, and celebrate the joy of good food.</p>
        </div>
      </div>
    </div>
  );
}

export default AbtImg;
