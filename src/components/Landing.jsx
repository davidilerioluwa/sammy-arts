import React, { useState } from 'react'
import landing from "../assets/samuel.png"
import { ReactTyped } from 'react-typed'
import { motion } from 'framer-motion'
import BioPopup from './BioPopup'
import TorusCanvas from './TorusCanvas'


const Landing = () => {
  const [popup,setPopup]=useState(false)
  return (
    <motion.div 
    initial={{opacity:0,x:-100}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    className='flex relative gap-8 text-white items-center lg:h-screen lg:w-fit p-8 pt-16 lg:p-20 bg-white bg-clip-padding backdrop-filter backdrop-blur-md  bg-opacity-20' >
        {popup?<BioPopup setPopup={setPopup}/>:""}
        <div className='rounded-full w-96'>
            <img src={landing} alt="" className='  lg:w-lg lg:h-96 bg-red rounded-full'/>
        </div>
        <div className='flex flex-col text-left w-fit lg:max-w-lg gap-4'>
            <motion.div 
             initial={{opacity:0,y:-200}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:2}}
             viewport={{once:true}}
            className={`text-red md:text-lg text-nowrap`}><ReactTyped strings={["Hi, i'm Sammyarts"]} typeSpeed={100} /></motion.div>
            <motion.h1 
             initial={{opacity:0,x:200}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:2}}
             viewport={{once:true}}
            className='font-bold md:text-xl lg:text-4xl text-nowrap'><ReactTyped strings={["BRAND DESIGNER"]} typeSpeed={120} /></motion.h1>
            <motion.div
            initial={{opacity:0,y:200}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:2}}
            viewport={{once:true}}
            className='text-sm hidden md:block'><ReactTyped strings={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, modi. Quas illo illum obcaecati incidunt totam soluta deserunt, enim itaque vero magni similique recusandae sequi consequatur corporis expedita maiores cumque."]} /></motion.div>
            <button className='text-white bg-red px-6 py-4 w-fit rounded-md text-nowrap' onClick={()=>setPopup(true)}>ABOUT ME</button>
        </div>
    </motion.div>
  )
}

export default Landing