import React from "react";
import Hero from "./HomeComponents/Hero";
import Services from "./HomeComponents/Services";
import ChooseUs from "./HomeComponents/ChooseUs";


export default function HomePage() {
  return (
    <div className="overflow-hidden">
        
    <Hero />
    <Services />
    <ChooseUs />
    </div>
  );
}
