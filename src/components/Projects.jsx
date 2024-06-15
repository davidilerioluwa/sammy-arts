import React from 'react'
import landing from "../assets/landing.jpg"

const ProjectsComponents= ()=>{
    return(
    <div className='flex flex-col gap-2 justify-start'>
        <div className='w-80 h-80 md:w-5xl md:h-92 bg-vlblack drop-shadow-5xl'>
            <img src={landing} className=' bg-vlblack drop-shadow-xl object-contain p-2 w-80 h-80 md:w-5xl md:h-92'/>
        </div>
        <h1 className='text-xl text-white font-bold'>The Vintage</h1>
        <span className='text-red'>KNOW MORE</span>
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