import React from 'react'
import {motion} from 'framer-motion'
 

// Animation variants for the container
const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren"
      }
    }
  }
  
  // Export variants for use in other components
  export const variants = {
    image: {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.5
        }
      }
    },
    
    title: {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 1.5
        }
      }
    },
    
    button: {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 2.0
        }
      }
    }
  }
  
  export default function FadeIn({ children }) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    )
  }