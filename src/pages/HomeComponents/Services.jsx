import React from 'react'
import haircuts from "../../images/compressed/haircuts.jpg"
import hairStyling from "../../images/compressed/styling2.jpg"
import hairTreatment from "../../images/compressed/treatment.jpg"
import hairColoring from "../../images/compressed/coloring.jpg"
import { useInView } from 'motion/react'
import { motion } from 'framer-motion'

const services = [
  { title: "Haircuts", image: haircuts },
  { title: "Hair Styling", image: hairStyling },
  { title: "Hair Treatment", image: hairTreatment },
  { title: "Hair Coloring", image: hairColoring },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.6,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
}

export default function Services() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-white text-center mb-10 font-serif text-4xl pt-10">Our Services</h1>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants} className="relative group">
            <div className="relative w-full h-75 overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
              <h3 className="text-white title text-2xl font-semibold transition-transform duration-300 group-hover:scale-110">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
