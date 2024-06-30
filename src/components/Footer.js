import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart, faAward } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item">
                <FontAwesomeIcon icon={faUtensils} className="footer-icon" />
                <div>
                    <h4>Exceptional Cuisine</h4>
                    <p>Our chefs meticulously craft each dish to deliver a culinary experience like no other.</p>
                </div>
            </div>
            <div className="footer-item">
                <FontAwesomeIcon icon={faHeart} className="footer-icon" />
                <div>
                    <h4>Passionate Service</h4>
                    <p>We are dedicated to providing warm, attentive service that exceeds expectations.</p>
                </div>
            </div>
            <div className="footer-item">
                <FontAwesomeIcon icon={faAward} className="footer-icon" />
                <div>
                    <h4>Award-Winning Quality</h4>
                    <p>Recognized for our commitment to quality ingredients and exceptional dining experiences.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
