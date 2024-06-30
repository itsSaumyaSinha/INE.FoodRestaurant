import React from 'react';
import './ContactUs.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contact Us</h2>
      <p className="contact-us-text">
        We’d love to hear from you! Whether you have a question about our menu, need assistance with a reservation, or just want to share your dining experience, feel free to reach out.
      </p>
      <div className="contact-details">
        <p><strong>Phone:</strong> (91) 844826735</p>
        <p><strong>Email:</strong> info@tastyeats.com</p>
        <p><strong>Address:</strong> 123 Culinary Avenue, Foodie City, FC 12345</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
