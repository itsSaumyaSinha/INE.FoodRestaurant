import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-text">
        At Tastyeats, we believe that every meal should be a delightful experience. Our restaurant is dedicated to bringing you the finest in culinary creations, crafted with the freshest ingredients and a passion for flavor. Here's what sets us apart:
      </p>
      <ul className="about-us-list">
        <li className="about-us-item"><strong>Exceptional Quality:</strong> We source only the best ingredients to ensure every dish is a masterpiece.</li>
        <li className="about-us-item"><strong>Diverse Menu:</strong> From starters to desserts, our menu offers a wide range of delectable options to satisfy every palate.</li>
        <li className="about-us-item"><strong>Ambience:</strong> Enjoy your meal in a warm and inviting atmosphere, perfect for family gatherings, romantic dinners, or a night out with friends.</li>
        <li className="about-us-item"><strong>Customer Satisfaction:</strong> Our friendly and attentive staff are here to make your dining experience unforgettable.</li>
        <li className="about-us-item"><strong>Sustainability:</strong> We are committed to sustainable practices, including sourcing locally and minimizing waste.</li>
      </ul>
      <p className="about-us-text">
        Come and discover why Tastyeats is a favorite among food lovers. We look forward to serving you!
      </p>
    </div>
  );
};

export default AboutUs;

