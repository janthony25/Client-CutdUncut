import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./HomeComponents/Hero";
import Services from "./HomeComponents/Services";
import ContactUs from "./HomeComponents/ContactUs";
import ChooseUs from "./HomeComponents/ChooseUs";

export default function HomePage() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we should scroll to the ContactUs section
    if (location.state?.scrollToContactUs) {
      // Allow time for the page to render
      setTimeout(() => {
        const contactElement = document.getElementById("contact-section");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Short delay to ensure DOM is ready
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <ChooseUs />
      <div id="contact-section">
        <ContactUs />
      </div>
    </>
  );
}