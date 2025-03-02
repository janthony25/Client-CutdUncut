import React, { useState, useRef, useEffect } from 'react';
import coloring from '../../images/compressed/coloring.jpg';
import haircuts from '../../images//compressed/haircuts.jpg';
import treatment from '../../images//compressed/treatment.jpg';
import styling2 from '../../images/compressed/styling2.jpg';
import kid from '../../images/compressed/kid-min.jpg';
import man from '../../images/compressed/man-min.jpg';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

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

  // Mobile view services - only show these 4 services
  const mobileViewServices = [
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
      src: coloring, 
      title: 'Hair Coloring',
      details: 'Professional coloring services including highlights, balayage, and full color transformations'
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
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  // Button animation variant
  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1.5 }
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
    if (!isPaused && !isTransitioning) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [images.length, isPaused, isTransitioning]);

  const handleCardClick = (clickedIndex) => {
    if (clickedIndex === activeIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setIsPaused(true);

    // Calculate the shortest path to the target index
    const totalItems = images.length;
    let diff = (clickedIndex - activeIndex + totalItems) % totalItems;
    if (diff > totalItems / 2) {
      diff = diff - totalItems;
    }

    // Animate through intermediate positions
    const animate = (step) => {
      if (step === 0) {
        setIsTransitioning(false);
        setIsPaused(false);
        return;
      }

      const direction = diff > 0 ? 1 : -1;
      setActiveIndex(prev => (prev + direction + totalItems) % totalItems);

      setTimeout(() => {
        animate(step - direction);
      }, 200); // Adjust timing to match transition duration
    };

    animate(diff);
  };

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
      cursor: isCenter ? 'default' : 'pointer'
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
          {/* Display only the 4 specific services in mobile view */}
          {mobileViewServices.map((service, index) => (
            <div key={index} className="w-full aspect-[7/10] overflow-hidden">
              <div className="relative group w-full h-full">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={service.src}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-0 w-full text-center">
                  <h3 className="text-white text-xl font-semibold px-4">{service.title}</h3>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="px-6 text-center">
                    <p className="text-white/90 text-sm">{service.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* View All Button for mobile that links to the Services page */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mt-10 mb-8"
        >
          <Link to="/services">
            <motion.button
              variants={buttonVariant}
              className="px-8 py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white
              transition-all duration-300 text-lg tracking-wider uppercase shadow-lg"
            >
              VIEW ALL
            </motion.button>
          </Link>
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
                onClick={() => !isCenter && handleCardClick(index)}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <h3 className="text-white text-xl font-semibold px-4">{image.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 text-center">
                      <p className="text-white/90 text-sm">{image.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      
      {/* View All Button for desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-5"
      >
        <Link to="/services">
          <motion.button
            variants={buttonVariant}
            className="px-20 py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white
            transition-all duration-300 text-lg tracking-wider uppercase shadow-lg"
          >
            VIEW ALL
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CircularCarousel;