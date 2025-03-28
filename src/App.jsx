
import { Children, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./pages/ScrollToTopComponent";
import AboutPage from "./pages/AboutPage";
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("4YQFYE8jFZ7Ptrays");
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}


export default App
