"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import slide1 from "../../../public/images/slide1.png";
import slide2 from "../../../public/images/slide2.png";
import slide3 from "../../../public/images/slide3.png";
import slide4 from "../../../public/images/slide4.png";
import slide5 from "../../../public/images/slide5.png";

const ImageSlider = () => {
  const slides = [
    slide4,
    slide1,
    slide2,
    slide3,
    slide5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Use useEffect to automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slider Container */}
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Slider */}
        <div
          className="flex transition-transform duration-[3000ms]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-lg h-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;
