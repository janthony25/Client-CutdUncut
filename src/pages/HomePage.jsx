import React from "react";
import { motion } from "framer-motion";
import bgPhoto from "../images/cropped-hd-girl.PNG";
import FadeIn, { variants } from "../animations/FadeIn";
import { div } from "motion/react-client";
import Services from "./Services";


export default function HomePage() {
  return (
    <div className="relative bg-black min-h-screen w-full flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-screen flex items-center justify-center">
            <FadeIn>
                <motion.div variants={variants.image}>
                    <img 
                        src={bgPhoto} 
                        alt="absolute colored-haired-girl" 
                        className="w-auto h-screen lg:scale-100 object-contain" 
                    />
                </motion.div>
                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-10">
                    {/* Title  */}
                    <motion.h1 variants={variants.title} 
                    className="text-white text-6xl  sm:text-7xl md:text-8xl lg:text-9xl title tracking-wide">
                        Cut d Uncut
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p variants={variants.tagline} 
                    className="text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase font-light">
                        Unlock your best look
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={variants.button} 
                    className="flex flex-col md:flex-row gap-4 mt-8">
                        <button 
                        className="px-8 py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white
                        transition-all duration-300 text-lg tracking-wider uppercase">
                            Book an Appointment</button>
                        <button className="px-8 py-3 bg-transparent text-white border-2 border-white hover:bg-black hover:text-white
                        transition-all duration-300 text-lg tracking-wider uppercase">
                            View Services
                        </button>
                    </motion.div>
                </div>
            </FadeIn>
        </div>

    </div>
  );
}
