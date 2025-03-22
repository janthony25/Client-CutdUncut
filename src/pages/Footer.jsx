import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="text-white title text-2xl font-medium inline-block mb-4">
              Cut d Uncut
            </Link>
            <p className="text-gray-400 mb-6">
              Premium hair salon offering personalized styling services to help you unlock your best look.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cutduncut/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/CUTDUNCUTHAIRPAGE/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  33F Kirby Street Glendene<br />
                  Auckland
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-gray-300 hover:text-white transition-colors">
                  (+64) 22 060 6003
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@gupit.co.nz" className="text-gray-300 hover:text-white transition-colors">
                  info@gupit.co.nz
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Opening Hours */}
          <div>
            <h3 className="text-xl font-medium mb-4">Opening Hours</h3>
            <h6>Glendene Branch</h6>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Monday - Sunday</p>
                  <p className="text-gray-400">9:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
            <h6 className='mt-4'>New Lynn Branch</h6>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Tuesday - Saturday</p>
                  <p className="text-gray-400">8:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-400">8:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Cut d Uncut. All rights reserved.
          </p>
          {/* <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
}