import React from 'react'
import landing from "../assets/samuel.png"


const Landing = () => {
  return (
    <div className='flex gap-8 text-white items-center p-4' >
        <div className='rounded-full w-96'>
            <img src={landing} alt="" className='  lg:w-lg lg:h-96 bg-red rounded-full'/>
        </div>
        <div className='flex flex-col text-left w-fit lg:max-w-lg gap-4'>
            <span className='text-red'>Hi, i'm Samuel</span>
            <h1 className='font-bold md:text-xl lg:text-4xl'>VISUAL DESIGNER</h1>
            <div className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, modi. Quas illo illum obcaecati incidunt totam soluta deserunt, enim itaque vero magni similique recusandae sequi consequatur corporis expedita maiores cumque.</div>
            <button className='text-white bg-red px-4 py-1.5 w-fit'>ABOUT ME</button>
        </div>
    </div>
  )
}

export default Landing