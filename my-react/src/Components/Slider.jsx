import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file for styling

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slider;
