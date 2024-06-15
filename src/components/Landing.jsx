import React, { useState } from 'react'
import landing from "../assets/samuel.png"
import { ReactTyped } from 'react-typed'
import { motion } from 'framer-motion'


const Landing = () => {

  return (
    <motion.div 
    className='flex gap-8 text-white items-center p-8 pt-16 lg:p-20' >
        <div className='rounded-full w-96'>
            <img src={landing} alt="" className='  lg:w-lg lg:h-96 bg-red rounded-full'/>
        </div>
        <div className='flex flex-col text-left w-fit lg:max-w-lg gap-4'>
            <span className={`text-red`}><ReactTyped strings={["Hi, i'm Samuel"]} typeSpeed={100} /></span>
            <h1 className='font-bold md:text-xl lg:text-4xl'><ReactTyped strings={["VISUAL DESIGNER"]} typeSpeed={120} /></h1>
            <div className='text-sm'><ReactTyped strings={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, modi. Quas illo illum obcaecati incidunt totam soluta deserunt, enim itaque vero magni similique recusandae sequi consequatur corporis expedita maiores cumque."]} typeSpeed={50}/></div>
            <button className='text-white bg-red px-4 py-1.5 w-fit'>ABOUT ME</button>
        </div>
    </motion.div>
  )
}

export default Landing