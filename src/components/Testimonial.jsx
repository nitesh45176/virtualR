import React from 'react'
import { testimonials } from '../constants'
import { motion } from "motion/react";

const Testimonial = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    
    id="testimonials"
    className='mt-20 tracking-wide  max-w-[1300px] lg:ml-25'>
       <h2 className='text-4xl sm:text-5xl lg:text-6xl text-center my-20'>What people are saying</h2>
       <div className='flex flex-wrap justify-center'>
           {testimonials.map((testimonial, index)=> (
             <div key={index} className='w-full sm:w-1/2 lg:w-1/3 max-w-130 px-4 py-2'>
                <div className='bg-neutral  rounded-md p-6 text-md border border-neutral-800 font-thin'>
                     <p>{testimonial.text}</p>
                     <div className='flex mt-8 items-start'>
                        <img src={testimonial.image} alt={testimonial.user} className='w-12 h-12 mr-6 rounded-full border border-neutral-300'/>
                        <h6 className='mt-3'>{testimonial.user}</h6>
                       
                     </div>
                      <h6 className='ml-17  text-sm font-normal italic text-neutral-600'>{testimonial.company}</h6>
                     
                </div>
             </div>
           ))}
       </div>
    </motion.div>
  )
}

export default Testimonial
