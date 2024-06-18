import React, { useRef, useState } from 'react'
import landing from "../assets/landing.jpg"
import ProjectPopup from './ProjectPopup'
import { FaArrowRight } from 'react-icons/fa'
import projects from '../store'
import { motion } from 'framer-motion'

const ProjectsComponents= ({details,setPopup})=>{
    return(
    <motion.div 
    initial={{opacity:0,x:-200}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:2}}
    viewport={{once:true}}
    className='flex flex-col gap-2 justify-start drop-shadow-xl cursor-pointer  p-4 rounded-md bg-lblack' onClick={()=>setPopup({showPopup:true,id:details.id})}>
        <div className='w-80 h-80 md:w-5xl md:h-92 bg-vlblack  rounded-md drop-shadow-5xl'>
            <img src={details.coverImg} className=' bg-vlblack drop-shadow-xl object-contain p-2 w-80 h-80 md:w-5xl md:h-92 rounded-md'/>
        </div>
        <h1 className='text-xl text-white font-bold'>{details.title}</h1>
        <p className='text-red flex gap-2 items-center'><span >KNOW MORE</span> <FaArrowRight/></p>
    </motion.div>
    )
}
const Projects = () => {
    const [popup,setPopup]= useState({showPopup:false,id:null})

  return (
    <section className='flex flex-col items-center justify-center'>
        {popup.showPopup?<ProjectPopup popup={popup} setPopup={setPopup}/>:""}
        <div className='flex justify-between w-full text-white p-6 md:p-10 lg:px-40'>
            <div>
                <h1 className='text-xl lg:text-2xl font-bold'>FEATURED PROJECTS</h1>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <button className='bg-red text-white px-6 py-4 rounded-md h-fit'>VIEW ALL</button>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 lg:px-20'>
            {projects.map((details)=><ProjectsComponents details={details} setPopup={setPopup}/>)}
        </div>
    </section>
  )
}

export default Projects