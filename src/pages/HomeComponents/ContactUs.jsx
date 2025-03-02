import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, User, Mail, Phone, Scissors, Users, MessageSquare } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: '',
    specificService: '',
    stylist: '',
    date: '',
    comments: ''
  });

  // State to store services by category
  const [availableServices, setAvailableServices] = useState([]);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

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

  // Services data structure
  const serviceCategories = [
    {
      title: "Men's Cut",
      services: [
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
      services: [
        "Restyle",
        "Straight Cut",
        "Layering"
      ]
    },
    {
      title: "Kid's Cut",
      services: [
        "0 to 5 Years Old",
        "6 to 10 Years Old",
        "11 to 13 Years Old"
      ]
    },
    {
      title: "Coloring",
      services: [
        "Global Color",
        "Root Retouch"
      ]
    },
    {
      title: "Foils/Highlights",
      services: [
        "Full Head Foils",
        "Ombre",
        "Balayage",
        "Toner",
        "Full Bleach"
      ]
    },
    {
      title: "Extra",
      services: [
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
      services: ["Brazilian Keratin Treatment"]
    },
    {
      title: "Permanent Straight (Rebonding)",
      services: ["Permanent Straightening"]
    }
  ];

  // List of stylists
  const stylists = [
    "Amanda",
    "Stylist 2",
    "Stylist 3",
  ];

  // Update available services when service category changes
  useEffect(() => {
    if (formData.serviceCategory) {
      const category = serviceCategories.find(cat => cat.title === formData.serviceCategory);
      setAvailableServices(category ? category.services : []);
      
      // Reset specific service selection when category changes
      setFormData(prev => ({
        ...prev,
        specificService: ''
      }));
    } else {
      setAvailableServices([]);
    }
  }, [formData.serviceCategory]);

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
      serviceCategory: '',
      specificService: '',
      stylist: '',
      date: '',
      comments: ''
    });
  };

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

          {/* Service Category - First Step */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Scissors className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white appearance-none"
            >
              <option value="" disabled>Select Service Category</option>
              {serviceCategories.map((category, index) => (
                <option key={index} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Specific Service - Second Step */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Scissors className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="specificService"
              value={formData.specificService}
              onChange={handleChange}
              required
              disabled={availableServices.length === 0}
              className={`w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white appearance-none ${availableServices.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="" disabled>
                {availableServices.length === 0 ? 'Select category first' : 'Select specific service'}
              </option>
              {availableServices.map((service, index) => (
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
                backgroundImage: 'none'
              }}
              onClick={(e) => e.target.showPicker()}
            />
          </motion.div>

          {/* Comments/Additional Info - spans full width */}
          <motion.div className="relative md:col-span-2" variants={itemVariants}>
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Additional comments or special requests"
              rows="3"
              className="w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors text-white"
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