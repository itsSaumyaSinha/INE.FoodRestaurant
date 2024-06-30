import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Ringcarousel.css';

const images = [
  { src: `${process.env.PUBLIC_URL}/assets/starter.png`, text: ' Irresistible Starters ', paragraph: '"Explore a medley of flavors with our starters, where every bite promises a delicious introduction to your meal."' },
  { src: `${process.env.PUBLIC_URL}/assets/maincourse.png`, text: 'Main Signature Courses', paragraph: '"Discover our chefs specialties, where each main course is a masterpiece of flavors and presentation"' },
  { src: `${process.env.PUBLIC_URL}/assets/dessert.png`, text: 'Dessert Delights', paragraph: '"Treat yourself to our exquisite desserts, meticulously prepared to bring a perfect conclusion to your dining experience."' },
  { src: `${process.env.PUBLIC_URL}/assets/dishes.png`, text: 'Our Crowd favourites', paragraph: '"Explore our most-loved dishes, cherished by our patrons for their exceptional taste and quality."' },
  { src: `${process.env.PUBLIC_URL}/assets/family.png`, text: 'Capture it', paragraph: '"Capture unforgettable memories with your loved ones as you dine and unwind. Cherish every smile, laughter, and delicious moment shared at our restaurant, where every snap becomes a cherished memory. Enjoy our exquisite dishes together and make your family time truly special."' },
];


const Ringcarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Changes image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="left-text">
        <p id="display-text">{images[currentIndex].text}</p>
        <p id="display-paragraph">{images[currentIndex].paragraph}</p>
        <Link to="/Menuitems">
        <button className="order-now-btn">Order Now</button>
        </Link>
      </div>
      <div className="ring-container">
        <button className="prev-btn" onClick={prevImage}>&#9664;</button>
        <div className="image-ring">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.text}
              className={`ring-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <button className="next-btn" onClick={nextImage}>&#9654;</button>
      </div>
    </div>
     
  );
};

export default Ringcarousel;

