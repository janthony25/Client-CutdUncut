import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

// This component initializes EmailJS once when the app loads
// You can include it in your App.jsx or main layout component
const EmailJSInit = () => {
  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('ifM8UjPBC9pXikrWE');
  }, []);

  // This component doesn't render anything
  return null;
};

export default EmailJSInit;