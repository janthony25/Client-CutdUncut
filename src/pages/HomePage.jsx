import React from 'react'
import {motion} from 'framer-motion'
import bgPhoto from "../images/cropped-hd-girl.PNG"
import FadeIn, {variants} from '../animations/FadeIn'

export default function HomePage() {
  return (
    <div className='relative bg-black min-h-screen w-full flex justify-center items-center overflow-hidden'>
        <div className='relative w-full h-screen flex items-center justify-center'>
            <FadeIn>
                {/* Photo Background */}
                <motion.div variants={variants.image}>
                    <img 
                        src={bgPhoto} 
                        alt="absolute colored-haired-girl" 
                        className="w-auto h-screen lg:scale-125 object-contain" 
                    />
                </motion.div>

                {/* Title */}
                <motion.h1 variants={variants.title}
                 className='absolute title top-50 -translate-x-1/2 left-1/2 text-white text-9xl font-medium z-10'
                >
                    Cut d Uncut
                </motion.h1>

                {/* Tagline */}
                <motion.p variants={variants.tagline} className='absolute title top-90 -translate-x-1/2 left-1/2 font-medium
                text-3xl text-white'>
                    Unlock your best look
                </motion.p>

                {/* Button */}
               {/* Button Container */}
<div className='absolute left-1/2 -translate-x-1/2 flex space-x-4 top-100'>
    <motion.button 
        variants={variants.button} 
        className='px-4 py-2 bg-white text-black rounded-md hover:bg-blue-200'>
        Book now
    </motion.button>
    <motion.button 
        variants={variants.button} 
        className='px-4 py-2 bg-white text-black rounded-md hover:bg-blue-200'>
        Book now
    </motion.button>
</div>

               
            </FadeIn>
        </div>
    </div>
  )
}
