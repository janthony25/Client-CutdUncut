import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Scissors, Sparkle, SparkleIcon } from 'lucide-react';

export default function ChooseUs() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;
  
  // Reference for scroll detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation variants
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
      transition: { 
        duration: 0.5, 
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Benefits section content with associated icons
  const benefits = [
    {
      title: "Expert Stylists & Personalized Care",
      description: "Skilled professionals who tailor every service to your unique style and hair needs.",
      icon: <Scissors className="h-6 w-6 text-white" />
    },
    {
      title: "High-Quality Products & Techniques",
      description: "We use top-tier, hair-friendly products and stay updated with the latest trends.",
      icon: <Sparkle className="h-6 w-6 text-white" />
    },
    {
      title: "Relaxing & Luxurious Experience",
      description: "Enjoy a calm, welcoming atmosphere where you can unwind and be pampered.",
      icon: <SparkleIcon className="h-6 w-6 text-white" />
    }
  ];

  // Reviews data - 3 reviews per page, 4 pages total
  const reviews = [
    // Page 1
    [
      { name: "Jamie White", text: "Best haircut I've ever had! The stylist really listened to what I wanted.", rating: 5 },
      { name: "Alex Johnson", text: "The atmosphere is so relaxing and the service was fantastic.", rating: 5 },
      { name: "Sam Taylor", text: "Great attention to detail and amazing results with my color treatment.", rating: 5 }
    ],
    // Page 2
    [
      { name: "Jordan Lee", text: "Absolutely love how my hair turned out. Will definitely be back!", rating: 5 },
      { name: "Casey Morgan", text: "The staff is so professional and made me feel right at home.", rating: 5 },
      { name: "Riley Smith", text: "They use quality products that have made my hair healthier than ever.", rating: 5 }
    ],
    // Page 3
    [
      { name: "Dana Brown", text: "The stylists really know their craft. Best salon in town!", rating: 5 },
      { name: "Taylor Wilson", text: "I love how they took the time to understand exactly what I wanted.", rating: 5 },
      { name: "Morgan Bailey", text: "Super clean, very professional, and fantastic results.", rating: 5 }
    ],
    // Page 4
    [
      { name: "Avery Thomas", text: "I've been coming here for years and have never been disappointed.", rating: 5 },
      { name: "Quinn Roberts", text: "The personalized care and attention is unmatched.", rating: 5 },
      { name: "Drew Parker", text: "My go-to place for all my hair styling needs. Simply the best!", rating: 5 }
    ]
  ];

  // Animation variants for the carousel
  const carouselVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 20 : -20
    }),
    center: {
      opacity: 1,
      y: 0
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction < 0 ? 20 : -20
    })
  };

  // Render stars for ratings
  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
    ));
  };

  return (
    <div className="bg-black text-white py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl font-serif text-center mb-16"
        >
          Why choose us
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left column - Benefits */}
          <div className="space-y-10">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="bg-gray-700 rounded-full p-2 mt-1 flex-shrink-0 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right column - Reviews carousel */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            <motion.div
              key={currentPage}
              custom={1}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 1,
                ease: "easeInOut"
              }}
              className="space-y-4"
            >
              {reviews[currentPage].map((review, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-lg p-6"
                >
                  <div className="flex mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <p className="mb-4 text-gray-300">"{review.text}"</p>
                  <p className="text-sm text-gray-400">- {review.name}</p>
                </div>
              ))}
            </motion.div>
            
            {/* Page indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array(totalPages).fill(0).map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${currentPage === i ? 'bg-white' : 'bg-gray-600'}`}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}