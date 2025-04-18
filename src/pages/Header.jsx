import React, {useState, useEffect} from 'react'
import { Menu, OctagonPauseIcon, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react';

const headerVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 3.5
        }
    }
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const navigateToContactUs = () => {
        if (location.pathname === '/') {
            // Already on home page, just scroll to contact section
            const contactElement = document.getElementById("contact-section");
            if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to home page with state to scroll to contact section
            navigate('/', {state: {scrollToContactUs: true}});
        }
        // Close mobile menu if open
        if (isOpen) {
            setIsOpen(false);
        }
    };

    const menuItems = [
        { title: 'Home', href: '/'},
        {title: 'Services', href: '/services'},
        {title: 'About', href: '/About'}
    ];

    return (
        <motion.header 
            className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 
                ${hasScrolled ? 'bg-black/80 backdrop-blur-sm' : 'md:bg-transparent md:backdrop-blur-none bg-black/80 backdrop-blur-sm'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.5 }}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        {location.pathname === '/' ? (
                            <a 
                                href="#" 
                                className="text-white title text-xl font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToTop();
                                }}
                            >
                                GUPIT
                            </a>
                        ) : (
                            <Link to="/" className="text-white title text-xl font-medium">
                                GUPIT
                            </Link>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {menuItems.map((item) => (
                                item.title === 'Home' && location.pathname === '/' ? (
                                    <a
                                        key={item.title}
                                        href="#"
                                        className={`text-white hover:text-blue-200 transition-colors duration-200 
                                            ${location.pathname === item.href ? 'border-b-2 border-blue-200' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToTop();
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.title}
                                        to={item.href}
                                        className={`text-white hover:text-blue-200 transition-colors duration-200 
                                            ${location.pathname === item.href ? 'border-b-2 border-blue-200' : ''}`}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            ))}
                            <button 
                                className="px-4 py-2 bg-white text-black rounded-md hover:bg-blue-200 transition-colors duration-200"
                                onClick={navigateToContactUs}
                            >
                                Book now
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-blue-200 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item) => (
                                item.title === 'Home' && location.pathname === '/' ? (
                                    <a
                                        key={item.title}
                                        href="#"
                                        className={`block text-white hover:text-blue-200 py-2 transition-colors duration-200
                                            ${location.pathname === item.href ? 'border-l-4 border-blue-200 pl-2' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToTop();
                                            setIsOpen(false);
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.title}
                                        to={item.href}
                                        className={`block text-white hover:text-blue-200 py-2 transition-colors duration-200
                                            ${location.pathname === item.href ? 'border-l-4 border-blue-200 pl-2' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            ))}
                            <button 
                                className="w-full mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-blue-200 transition-colors duration-200"
                                onClick={navigateToContactUs}
                            >
                                Book now
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </motion.header>
    )
}