import React, { useState } from 'react'
import projects from '../store'
const ImagePopup=({project,imageIndex,setShowFullImage})=>{

  const src=`${project.images[imageIndex]}HD.png`
  console.log(src);
  
  return(<div  className='bg-black fixed top-0 left-0 z-50 w-screen h-screen px-4 rounded-md'>
     <span className='absolute top-4 right-10  bg-red px-4 py-2 cursor-pointer rounded-md' onClick={()=>setShowFullImage(false)}>X</span>
      
      <div style={{paddingTop:"400px"}} className=' flex justify-center items-center  w-full h-full p-4 overflow-y-auto'>
        {/* <div className='text-white'>h</div> */}
        <img src={src} style={{width:"1000px"}} className=' object-contain '/>
      </div>
    </div>)
}
const ProjectPopup = ({popup,setPopup}) => {
    const project= projects.find((project)=>project.id=== popup.id)
    const [showFullImage,setShowFullImage]=useState(false)
    const [imageIndex,setImageIndex]=useState(0)
  return (
    <div className='bg-black w-screen h-screen fixed top-0 z-30 pt-16 lg:pt-20 px-4 lg:px-40 pb-10 rounded-md'>
        {showFullImage?<ImagePopup project={project} imageIndex={imageIndex} setShowFullImage={setShowFullImage}/>:""}
        <div className='relative text-white h-full bg-lblack p-4 lg:p-12 rounded-md '>
            <span className='absolute top-2 right-2 bg-red px-4 py-2 cursor-pointer rounded-md' onClick={()=>setPopup({showPopup:false})}>X</span>
            <div className='overflow-y-auto flex flex-col gap-4  items-center h-full'>
                <h1 className='text-xl font-bold'>{project.title}</h1>
                <p>description</p>
                
               <div className='flex flex-row items-center justify-center gap-4 flex-wrap'>
                  {project.images.map((img,index)=>{
                    
                    return(<div className='w-60  relative'>
                            
                            <div onClick={()=>{
                              setShowFullImage(true)
                              setImageIndex(index)
                              }} className='opacity-0 cursor-zoom-in flex justify-center items-center hover:opacity-100 absolute top-0 left-0 w-full h-full bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 '>
                                  <button>Click to View Full Image</button>
                            </div>
                            <img src={`${img}.jpg`} className='w-60'/>
                          </div>)
                  })}
               </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectPopup