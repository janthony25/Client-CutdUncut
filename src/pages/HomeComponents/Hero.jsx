import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import bgPhoto from "../../images/webp/hero-bg.webp";
import FadeIn, { variants } from '../../animations/FadeIn';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Preload image with complete loading guarantee
  useEffect(() => {
    // Create XMLHttpRequest to track loading progress
    const xhr = new XMLHttpRequest();
    xhr.open('GET', bgPhoto, true);
    xhr.responseType = 'blob';
    
    // Track loading progress
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setLoadingProgress(progress);
      }
    };
    
    // When fully loaded
    xhr.onload = () => {
      if (xhr.status === 200) {
        // Create a local URL for the downloaded image
        const localUrl = URL.createObjectURL(xhr.response);
        
        // Create image element to ensure it's rendered in browser cache
        const img = new Image();
        img.src = localUrl;
        
        img.onload = () => {
          setLoadingProgress(100);
          
          // Short delay before showing content to ensure smooth transition
          setTimeout(() => {
            setImageLoaded(true);
            URL.revokeObjectURL(localUrl); // Clean up
          }, 300);
        };
      }
    };
    
    xhr.send();
    
    // Very long fallback timeout as absolute last resort
    const fallbackTimeout = setTimeout(() => {
      if (!imageLoaded) {
        console.warn("Image load fallback triggered");
        setImageLoaded(true);
      }
    }, 8000);
    
    return () => {
      xhr.abort();
      clearTimeout(fallbackTimeout);
    };
  }, []);
  
  // Trigger content display after image loads
  useEffect(() => {
    if (imageLoaded) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  return (
    <div className="relative bg-black min-h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {!showContent && (
          <motion.div 
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white flex flex-col items-center">
              {/* Circular progress indicator */}
              <div className="relative w-20 h-20 mb-4">
                <motion.div 
                  className="w-20 h-20 border-4 border-white/30 rounded-full absolute"
                />
                <svg className="absolute inset-0 w-20 h-20" viewBox="0 0 100 100">
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: loadingProgress / 100 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="text-white stroke-current"
                    cx="50"
                    cy="50"
                    r="48"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    style={{ 
                      strokeDashoffset: 0, 
                      strokeDasharray: 302, 
                      transform: "rotate(-90deg)", 
                      transformOrigin: "center" 
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{loadingProgress}%</span>
                </div>
              </div>
              <p className="text-xl tracking-widest uppercase">Loading</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Only render the content when ready */}
        {showContent && (
          <FadeIn>
            <motion.div variants={variants.image} className="relative w-full h-screen">
              <img 
                src={bgPhoto} 
                alt="colored-haired-girl with salon backdrop" 
                className="w-auto h-screen lg:w-full object-cover" 
                loading="eager" 
                fetchpriority="high"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
            
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-20">
              {/* Title */}
              <motion.h1 
                variants={variants.title} 
                className="text-white title text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide drop-shadow-2xl"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                GUPIT
              </motion.h1>
  
              {/* Tagline */}
              <motion.p 
                variants={variants.tagline} 
                className="text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase font-light drop-shadow-lg"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                Unlock your best look
              </motion.p>
  
              {/* Buttons */}
              <motion.div 
                variants={variants.button} 
                className="flex flex-col md:flex-row gap-4 mt-8"
              >
                <button 
                  className="px-8 py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white
                  transition-all duration-300 text-lg tracking-wider uppercase shadow-lg"
                >
                  Book Appointment
                </button>
                <button 
                  className="px-8 py-3 bg-transparent text-white border-2 border-white hover:bg-black hover:text-white
                  transition-all duration-300 text-lg tracking-wider uppercase shadow-lg"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}