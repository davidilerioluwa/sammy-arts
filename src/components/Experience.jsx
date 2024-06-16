import React from 'react'
import { motion } from 'framer-motion'


const ExperienceComponent =()=>{
    return(<div className='bg-vlblack px-4 md:px-12 py-4 drop-shadow-xl rounded-md'>
        <h1 className='text-xl text-center text-red'>60+</h1>
        <p className='text-center text-white '>Clients</p>
    </div>)
}

const Experience = () => {
  return (
    <motion.section
    initial={{opacity:0,scale:0.5}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:2}}
      viewport={{once:true}}
    className='relative z-20 flex flex-col md:flex-row items-center justify-center p-4 lg:px-40 lg:py-20'>
        <div className='p-6 md:p-10 '>
            <h1 className='text-red text-5xl lg:text-9xl font-bold text-center'>12</h1>
            <p className='text-white font-bold text-center border w-36'>Years Experience</p>
        </div>
        <div className=' flex flex-col grid grid-cols-2 w-full gap-4 lg:gap-4 p-2 sm:p-6 md:p-10'>
            <ExperienceComponent/>
            <ExperienceComponent/>
            <ExperienceComponent/>
            <ExperienceComponent/>
        </div>
    </motion.section>
  )
}

export default Experience