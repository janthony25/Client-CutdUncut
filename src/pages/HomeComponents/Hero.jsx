import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import FadeIn, { variants } from '../../animations/FadeIn';

export default function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Preload the image
    useEffect(() => {
        const img = new Image();
        img.src = bgPhoto;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    // Optimized variants with reduced delays
    const optimizedVariants = {
        ...variants,
        image: {
            ...variants.image,
            show: {
                ...variants.image.show,
                transition: {
                    duration: 0.3,
                    delay: 0.2
                }
            }
        },
        title: {
            ...variants.title,
            show: {
                ...variants.title.show,
                transition: {
                    duration: 0.3,
                    delay: 0.5
                }
            }
        },
        tagline: {
            ...variants.tagline,
            show: {
                ...variants.tagline.show,
                transition: {
                    duration: 0.3,
                    delay: 0.8
                }
            }
        },
        button: {
            ...variants.button,
            show: {
                ...variants.button.show,
                transition: {
                    duration: 0.3,
                    delay: 1.1
                }
            }
        }
    };

    return (
        <div className="relative bg-black min-h-screen w-full flex justify-center items-center overflow-hidden">
            <div className="relative w-full h-screen flex items-center justify-center">
                <FadeIn>
                    <motion.div 
                        variants={optimizedVariants.image} 
                        className="relative"
                        initial="hidden"
                        animate={imageLoaded ? "show" : "hidden"}
                    >
                        <img 
                            src={bgPhoto} 
                            alt="absolute colored-haired-girl" 
                            className="w-auto h-screen lg:scale-100 object-cover"
                            loading="eager"
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-black/20"></div>
                    </motion.div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-20">
                        <motion.h1 
                            variants={optimizedVariants.title} 
                            className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl title tracking-wide drop-shadow-2xl"
                            style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}
                        >
                            Cut d Uncut
                        </motion.h1>

                        <motion.p 
                            variants={optimizedVariants.tagline} 
                            className="text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase font-light drop-shadow-lg"
                            style={{
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}
                        >
                            Unlock your best look
                        </motion.p>

                        <motion.div 
                            variants={optimizedVariants.button} 
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
            </div>
        </div>
    );
}