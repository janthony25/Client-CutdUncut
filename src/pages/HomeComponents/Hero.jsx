import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import bgPhoto from "../../images/compressed/hero-bg.PNG";
import FadeIn, { variants } from '../../animations/FadeIn';
import { div } from "motion/react-client";

export default function Hero() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    
    useEffect(() => {
        const img = new Image();
        img.src = bgPhoto;
        img.onload = () => setIsImageLoaded(true);
    }, []);

    return (
        <div className="relative bg-black min-h-screen w-full flex justify-center items-center overflow-hidden">
            <div className="relative w-full min-h-screen flex items-center justify-center">
                <AnimatePresence>
                    {isImageLoaded && (
                        <FadeIn>
                            <motion.div 
                                variants={variants.image} 
                                className="relative w-full min-h-screen"
                            >
                                <img 
                                    src={bgPhoto}
                                    alt="absolute colored-haired-girl"
                                    className="w-full h-full object-cover absolute inset-0"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                                {/* Gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-black/20"></div>
                            </motion.div>
                            
                            {/* Content Container */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 space-y-6 md:space-y-8 z-20">
                                {/* Title */}
                                <motion.h1 
                                    variants={variants.title}
                                    className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl title tracking-wide drop-shadow-2xl text-center"
                                    style={{
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    GUPIT
                                </motion.h1>

                                {/* Tagline */}
                                <motion.p 
                                    variants={variants.tagline}
                                    className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest uppercase font-light drop-shadow-lg text-center px-4"
                                    style={{
                                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    Where hair has no gender
                                </motion.p>

                                {/* Buttons */}
                                <motion.div 
                                    variants={variants.button}
                                    className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md px-4 sm:px-0"
                                >
                                    <button 
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-black border-2 border-white 
                                        hover:bg-black hover:text-white transition-all duration-300 
                                        text-base sm:text-lg tracking-wider uppercase shadow-lg"
                                    >
                                        Book Appointment
                                    </button>
                                    <button 
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent text-white border-2 
                                        border-white hover:bg-black hover:text-white transition-all duration-300 
                                        text-base sm:text-lg tracking-wider uppercase shadow-lg"
                                    >
                                        Learn More
                                    </button>
                                </motion.div>
                            </div>
                        </FadeIn>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}