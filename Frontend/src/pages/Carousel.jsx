import React, { useState } from 'react';
import image1 from '../assets/Carousel/Carousel-1.webp';
import image2 from '../assets/Carousel/Carousel-2.webp';
import image3 from '../assets/Carousel/Carousel-3.webp';
import image4 from '../assets/Carousel/Carousel-4.webp';

// Sample images (replace these with your actual image paths)
const images = [image1, image2, image3, image4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden z-10">
      {/* Carousel Inner */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide images
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            {/* Responsive Image */}
            <img
              className="block w-full h-auto object-contain" // Maintain aspect ratio with full width and variable height
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 text-black text-4xl opacity-50 hover:opacity-100 focus:outline-none"
        onClick={prevSlide}
      >
        &#10094; {/* Left Arrow */}
      </button>

      <button
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 text-black text-4xl opacity-50 hover:opacity-100 focus:outline-none"
        onClick={nextSlide}
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
