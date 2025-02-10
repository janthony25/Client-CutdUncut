import React, { useState, useRef, useEffect } from 'react';
import coloring from '../../images/compressed/coloring.jpg';
import haircuts from '../../images//compressed/haircuts.jpg';
import treatment from '../../images//compressed/treatment.jpg';
import styling2 from '../../images/compressed/styling2.jpg';
import kid from '../../images/compressed/kid-min.jpg';
import man from '../../images/compressed/man-min.jpg';
import { motion } from 'framer-motion';

const CircularCarousel = () => {
  const images = [
    { src: coloring, title: 'Hair Coloring' },
    { src: haircuts, title: 'Haircuts' },
    { src: man, title: 'Hair Treatment' },
    { src: styling2, title: 'Hair Styling' },
    { src: kid, title: 'Kids Haircuts' },
    { src: treatment, title: 'Haircuts' }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [images.length, isPaused]);

  const calculatePosition = (index) => {
    const maxVisibleCards = 5;
    const totalItems = images.length;
    const offset = (((index - activeIndex) % totalItems) + totalItems) % totalItems;
    let adjustedOffset = offset;
    
    if (offset > Math.floor(maxVisibleCards / 2)) {
      adjustedOffset = offset - totalItems;
    }
    
    if (Math.abs(adjustedOffset) > Math.floor(maxVisibleCards / 2)) {
      return {
        transform: 'translateX(0px) scale(0)',
        zIndex: -1,
        opacity: 0,
        visibility: 'hidden'
      };
    }

    const baseTransform = adjustedOffset * 220;
    const scale = 1 - Math.abs(adjustedOffset) * 0.2;
    const zIndex = 100 - Math.abs(adjustedOffset * 10);
    
    // Check if this is the center card
    const isCenter = adjustedOffset === 0;
    
    return {
      transform: `translateX(${baseTransform}px) scale(${scale})`,
      zIndex,
      opacity: Math.max(0.5, 1 - Math.abs(adjustedOffset) * 0.3),
      visibility: 'visible',
      transition: 'all 1s ease-in-out',
      cursor: isCenter ? 'pointer' : 'default'
    };
  };

  if (isMobile) {
    return (
      <div className="w-full bg-black py-8">
        <h1 className="text-white text-center mb-8 font-serif text-4xl">Our Services</h1>
        <div className="grid grid-cols-1 gap-4 px-4">
          {images.map((image, index) => (
            <div key={index} className="w-full aspect-[7/10]">
              <div className="relative group w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl">
                  {image.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-white text-center mb-8 font-serif text-5xl">Our Services</h1>
      
      <div className="relative w-full h-[500px] overflow-visible">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px]">
          {images.map((image, index) => {
            const position = calculatePosition(index);
            const isCenter = position.transform.includes('translateX(0px)');
            
            return (
              <div
                key={index}
                className="absolute left-0 top-0 select-none"
                style={{
                  ...position,
                  width: '280px',
                  height: '400px',
                }}
                onMouseEnter={() => isCenter && setIsPaused(true)}
                onMouseLeave={() => isCenter && setIsPaused(false)}
              >
                <div className="relative group w-full h-full">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularCarousel;