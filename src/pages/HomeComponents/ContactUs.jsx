import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, User, Mail, Phone, Scissors, Users } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    stylist: '',
    date: ''
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

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
        staggerChildren: 0.1
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

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: '',
      stylist: '',
      date: ''
    });
  };

  // List of services
  const services = [
    "Hair Coloring",
    "Hair Styling",
    "Men's Haircut",
    "Women's Haircuts",
    "Kids Haircuts",
    "Hair Treatment"
  ];

  // List of stylists
  const stylists = [
    "Sarah Johnson",
    "Michael Chen",
    "Olivia Rodriguez",
    "James Smith",
    "Any Available Stylist"
  ];

  return (
    <div className="bg-black text-white py-20 w-full" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-serif text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Book Your Appointment
        </motion.h2>

        <motion.form 
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Full Name */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white"
            />
          </motion.div>

          {/* Email */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white"
            />
          </motion.div>

          {/* Phone */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white"
            />
          </motion.div>

          {/* Service Type */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Scissors className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white appearance-none"
            >
              <option value="" disabled>Select Service Type</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Stylist */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="stylist"
              value={formData.stylist}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white appearance-none"
            >
              <option value="" disabled>Select Stylist</option>
              {stylists.map((stylist, index) => (
                <option key={index} value={stylist}>
                  {stylist}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Date */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white cursor-pointer"
              style={{
                colorScheme: 'dark',
                // Improve calendar icon visibility
                backgroundImage: 'none'
              }}
              onClick={(e) => e.target.showPicker()}
            />
          </motion.div>

          {/* Submit Button - spans full width */}
          <motion.div className="md:col-span-2 mt-4" variants={buttonVariant}>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white
              transition-all duration-300 text-lg tracking-wider uppercase shadow-lg"
            >
              Book Appointment
            </button>
          </motion.div>
        </motion.form>
        
        <motion.p 
          className="text-center text-gray-400 mt-6 text-sm"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          We'll confirm your appointment within 24 hours
        </motion.p>
      </div>
    </div>
  );
}