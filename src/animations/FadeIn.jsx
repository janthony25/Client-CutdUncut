import { delay } from 'motion'
import { del } from 'motion/react-client'
import { motion } from 'framer-motion'
import React, { Children } from 'react'

const containerVariant = {
    hidden: {opacity: 0, y: 40},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren"
        }
    }
}

export const variants = {
    image: {
        hidden: {opacity: 0, y: 20},
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
        hidden: {opacity: 0, y: 20},
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.5
            }
        }
    },

    tagline: {
        hidden: {opacity: 0, y:20},
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 2.0
            }
        }
    },

    button: {
        hidden: {opacity: 0, y: 20},
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 3.0
            }
        }
    }
}

export default function FadeIn({children}) {
  return (
    <motion.div variants={containerVariant} initial="hidden" animate="show">
        {children}
    </motion.div>
  )
}
