import React, { useRef } from 'react'
import landing from "../assets/landing.jpg"
import { FaArrowRight } from 'react-icons/fa'

const ProjectsComponents= ()=>{
    return(
    <div className='flex flex-col gap-2 justify-start drop-shadow-xl  p-4 rounded-md bg-lblack' >
        <div className='w-80 h-80 md:w-5xl md:h-92 bg-vlblack drop-shadow-5xl'>
            <img src={landing} className=' bg-vlblack drop-shadow-xl object-contain p-2 w-80 h-80 md:w-5xl md:h-92 rounded-md'/>
        </div>
        <h1 className='text-xl text-white font-bold'>The Vintage</h1>
        <p className='text-red flex gap-2 items-center'><span >KNOW MORE</span> <FaArrowRight/></p>
    </div>
    )
}
const Projects = () => {
  

  return (
    <section className='flex flex-col items-center justify-center'>
        <div className='flex justify-between w-full text-white p-6 md:p-10 lg:px-40'>
            <div>
                <h1 className='text-xl lg:text-2xl font-bold'>FEATURED PROJECTS</h1>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <button className='bg-red text-white px-6 py-2'>VIEW ALL</button>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 lg:px-20'>
            <ProjectsComponents/>
            <ProjectsComponents/>
            <ProjectsComponents/>
            <ProjectsComponents/>
        </div>
    </section>
  )
}

export default Projects