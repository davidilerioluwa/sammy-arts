import React from 'react'
import { Tilt } from 'react-tilt'

const ServiceTile = ({active,setActive,title}) => {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  return (
    <Tilt options={defaultOptions}>
        <div className={` drop-shadow-xl rounded-md text-white flex flex-col px-8 py-12 gap-4  w-60 lg:w-72 cursor-pointer ${active === title?"bg-red":"bg-vlblack"}`} onClick={()=>setActive(title)}>
            <span>ICon</span>
            <h1 className='text-xl font-bold'>{title}</h1>
            <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tenetur.</span>
            <span className={`text-red font-bold ${active === title?"text-white":""}`}>KNOW MORE</span>
        </div>
    </Tilt>
  )
}

export default ServiceTile