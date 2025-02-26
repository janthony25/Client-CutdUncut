import React from "react";
import Hero from "./HomeComponents/Hero";
import Services from "./HomeComponents/Services";
import ChooseUs from "./HomeComponents/ChooseUs";
import ContactUs from "./HomeComponents/ContactUs";


export default function HomePage() {
  return (
    <div className="overflow-hidden">
        
    <Hero />
    <Services />
    <ChooseUs />
    <ContactUs />
    </div>
  );
}
