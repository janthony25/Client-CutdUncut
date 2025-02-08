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
    <div className='bg-black h-150'>
        <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
           {services.map((service, index) => (
              <div key={index}  className='relative overflow-hidden mt-10 '>
                <div className='hover:gray-50 overflow-hidden  transition-transform duration-300 hover:scale-110 '>
                  <img src={service.image}
                       alt={service.title}
                       className='w-full h-full object-cover '
                  />
                     <div className='absolute inset-0  flex items-end justify-center py-4'>
                      <h3 className='text-white text-2xl title font-semibold'>{service.title}</h3>
                  </div>
                 
                </div>
               
              </div>
              
           ))}
        </div>
  </div>
  )
}
