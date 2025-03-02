import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {

  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const navigateToContactUs = () => {
    navigate('/', {state: {scrollToContactUs: true}});
  }

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
      transition: { duration: 0.59, delay: 0.3 }
    }
  };

  const serviceCategories = [
    {
      title: "Men's Cut",
      items: [
        "Restyle",
        "Style Cut",
        "Clipper All Over",
        "Scissors Cut",
        "Lines and Design",
        "Beard Trim",
        "Beard Shave and Lines",
        "Head Shave"
      ]
    },
    {
      title: "Women's Cut",
      items: [
        "Restyle",
        "Straight Cut",
        "Layering"
      ]
    },
    {
      title: "Kid's Cut",
      items: [
        "0 to 5 Years Old",
        "6 to 10 Years Old",
        "11 to 13 Years Old"
      ]
    },
    {
      title: "Coloring",
      items: [
        "Global Color",
        "Root Retouch"
      ]
    },
    {
      title: "Foils/Highlights",
      items: [
        "Full Head Foils",
        "Ombre",
        "Balayage",
        "Toner",
        "Full Bleach"
      ]
    },
    {
      title: "Extra",
      items: [
        "Shampoo and Conditioning",
        "Blow Dry / Finger Dry",
        "Blow Wave",
        "Temporary Straight",
        "Temporary Curl",
        "Hair Treatment"
      ]
    },
    {
      title: "Brazilian Keratin Straight",
      description: "Suitable for colored hair, bleach hair or damaged hair. This treatment can help to repair hair, reduces frizz, smoother texture and tamed curls."
    },
    {
      title: "Permanent Straight (Rebonding)",
      description: "Suitable for virgin hair, curly and kinky hair. It gives permanent straight hair results."
    }
  ];

  return (
    <div className="bg-black text-white pt-20 pb-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock your best look with our professional salon services
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-2 mr-3">
                  <Scissors className="h-5 w-5 text-black" />
                </div>
                <h2 className="text-2xl font-serif">{category.title}</h2>
              </div>
              
              {category.description ? (
                <p className="text-gray-300 italic">{category.description}</p>
              ) : (
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 bg-white rounded-full mr-2"></span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.div>

        {/* Consultation Note */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-serif mb-4">Pricing</h3>
          <p className="text-gray-300 mb-2">
            Price and quote given through personal consultation.
          </p>
          <p className="text-gray-300 mb-6">
            Walk in and appointment available!
          </p>
          <button 
    className="px-8 py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white
    transition-all duration-300 text-lg tracking-wider uppercase shadow-lg"
    onClick={navigateToContactUs}
  >
    Book Appointment
  </button>
        </motion.div>

      
      </div>
    </div>
  );
}