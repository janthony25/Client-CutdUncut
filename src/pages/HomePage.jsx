import React from 'react'
import { motion } from 'framer-motion'
import bgPhoto from "../images/cropped-hd-girl.PNG"
import FadeIn, { variants } from '../animations/FadeIn'

export default function HomePage() {
    return (
      <div className="relative bg-black min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-screen flex items-center justify-center">
          <FadeIn>
            {/* Image with fade animation */}
            <motion.div variants={variants.image}>
              <img 
                src={bgPhoto || "/placeholder.svg"} 
                alt="absolute colored-haired-girl" 
                className="w-auto h-screen lg:scale-125 object-contain" 
              />
            </motion.div>
            
            {/* Title with fade animation */}
            <motion.h1 
              variants={variants.title}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-2xl font-bold z-10"
            >
              Cut d Uncut
            </motion.h1>
  
            {/* Optional: Button with fade animation */}
            <motion.button
              variants={variants.button}
              className="absolute bottom-20 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-black rounded-full z-10"
            >
              Get Started
            </motion.button>
          </FadeIn>
        </div>
      </div>
    )
  }