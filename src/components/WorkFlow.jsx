import {CheckCircle2, Divide} from 'lucide-react'
import codeImg from '../assets/code.jpg'
import { motion } from "motion/react";
import { checklistItems } from '../constants'

function WorkFlow() {
  return (
    <motion.div 
         initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    
    
    id="workflow"
    className='mt-20  border-b border-neutral-800'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
            Accelerate your 
            <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>{' '}coding workflow.</span>
        </h2>
        <div  className='flex flex-wrap justify-center mt-4'>
            <div className='p-2 w-full lg:w-1/2'>
                <img src={codeImg} alt="" className='h-150 w-150 lg:ml-18'  />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item, index)=> (
                    <div key={index} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                            <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default WorkFlow
