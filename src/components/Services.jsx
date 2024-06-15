import React, { useState } from 'react'
import ServiceTile from './ServiceTile'
import { motion } from 'framer-motion'
const Services = () => {
    const [active,setActive]= useState("Product Design")
  return (
    <motion.div
      initial={{opacity:0,scale:0.5}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:2}}
      viewport={{once:true}}
    className='relative z-20 lg:pt-20 flex flex-col items-center md:flex-row justify-center gap-4'>
        <ServiceTile active={active} setActive={setActive} title={"UI Design"}/>
        <ServiceTile active={active} setActive={setActive} title={"Product Design"}/>
        <ServiceTile active={active} setActive={setActive} title={"Branding"}/>
    </motion.div>
  )
}

export default Services