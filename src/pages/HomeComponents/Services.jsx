import React, { useState, useRef, useEffect } from 'react';
import coloring from '../../images/compressed/coloring.jpg';
import haircuts from '../../images//compressed/haircuts.jpg';
import treatment from '../../images//compressed/treatment.jpg';
import styling2 from '../../images/compressed/styling2.jpg';
import kid from '../../images/compressed/kid-min.jpg';
import man from '../../images/compressed/man-min.jpg';
import { motion, useInView } from 'framer-motion';

const CircularCarousel = () => {
  const images = [
    { 
      src: coloring, 
      title: 'Hair Coloring',
      details: 'Professional coloring services including highlights, balayage, and full color transformations'
    },
    { 
      src: haircuts, 
      title: 'Hair Styling',
      details: 'Expert styling for any occasion - from everyday looks to special events'
    },
    { 
      src: man, 
      title: `Men's Haircut`,
      details: 'Classic and modern cuts tailored to your style and preferences'
    },
    { 
      src: styling2, 
      title: `Women's Haircuts`,
      details: 'Precision cuts and styles to enhance your natural beauty'
    },
    { 
      src: kid, 
      title: 'Kids Haircuts',
      details: 'Gentle and fun haircuts in a kid-friendly environment'
    },
    { 
      src: treatment, 
      title: 'Hair Treatment',
      details: 'Revitalizing treatments for healthy, beautiful hair'
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.59, delay: 0.78 }
    }
  };

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
    const zIndex = 100 - Math.abs(adjustedOffset) * 10;
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
      <div className="w-full bg-black py-8" ref={ref}>
        <motion.h1 
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white text-center mb-8 font-serif text-4xl"
        >
          Our Services
        </motion.h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 px-4"
        >
          {images.map((image, index) => (
            <div key={index} className="w-full aspect-[7/10] overflow-hidden">
              <div className="relative group w-full h-full">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover object-center transform scale-105"
                  />
                </div>
                {/* Permanent dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Title (always visible) */}
                <div className="absolute bottom-6 left-0 w-full text-center">
                  <h3 className="text-white text-xl font-semibold px-4">{image.title}</h3>
                </div>
                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="px-6 text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center" ref={ref}>
      <motion.h1 
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-white text-center mb-8 font-serif text-5xl"
      >
        Our Services
      </motion.h1>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-full h-[500px] overflow-visible"
      >
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
                <div className="relative group w-full h-full overflow-hidden rounded-xl">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover object-center transform scale-105"
                      draggable="false"
                    />
                  </div>
                  {/* Permanent dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Title (always visible) */}
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <h3 className="text-white text-xl font-semibold px-4">{image.title}</h3>
                  </div>
                  {/* Hover overlay with details */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 text-center">
                      {/* <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3> */}
                      <p className="text-white/90 text-sm">{image.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CircularCarousel;