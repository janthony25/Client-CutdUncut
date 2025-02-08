import React from 'react'
import haircuts from "../../images/haircuts.jpg"
import hairStyling from "../../images/styling2.jpg"
import hairTreatment from "../../images/treatment.jpg"
import hairColoring from "../../images/coloring.jpg"

export default function Services() {

  const services = [
    { title: "Haircuts", image: haircuts },
    { title: "Hair Styling", image: hairStyling },
    { title: "Hair Treatment", image: hairTreatment },
    { title: "Hair Coloring", image: hairColoring },
  ];


  return (
    <div className='h-screen bg-black'>
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {services.map((service, index) => (
          <div key={index} className='relative group '>
            <div className='relative w-full h-full overflow-hidden'>
              <img 
                src={service.image}
                alt={service.title}
                className='w-full h-auto object-cover transition-transform duration-400 group-hover:scale-110'
              />
              {/* Overlay that appears on hover */}
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
            <div className='absolute bottom-2 left-1/2 -translate-x-1/2 z-10'>
              <h3 className='text-white title text-2xl font-semibold transition-transform duration-300 group-hover:scale-110'>
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}