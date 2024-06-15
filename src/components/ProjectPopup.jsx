import React from 'react'
import projects from '../store'

const ProjectPopup = ({popup,setPopup}) => {
    const project= projects.find((project)=>project.id=== popup.id)
  return (
    <div className='bg-black w-screen h-screen fixed top-0 z-30 pt-16 lg:pt-20 px-4 lg:px-40 pb-10'>
        <div className='relative text-white h-full bg-vlblack p-4 lg:p-12 rounded-md '>
            <span className='absolute top-2 right-2 bg-red px-4 py-2 cursor-pointer rounded-md' onClick={()=>setPopup({showPopup:false})}>X</span>
            <div className='overflow-y-auto flex flex-col gap-4  items-center h-full'>
                <h1 className='text-xl font-bold'>{project.title}</h1>
                <p>description</p>
                <img src={project.mainImg} className='w'/>
            </div>
        </div>
    </div>
  )
}

export default ProjectPopup