import React, { useState } from 'react'
import ServiceTile from './ServiceTile'

const Services = () => {
    const [active,setActive]= useState("Product Design")
  return (
    <div className='relative z-20 lg:pt-20 flex flex-col items-center md:flex-row justify-center gap-4'>
        <ServiceTile active={active} setActive={setActive} title={"UI Design"}/>
        <ServiceTile active={active} setActive={setActive} title={"Product Design"}/>
        <ServiceTile active={active} setActive={setActive} title={"Branding"}/>
    </div>
  )
}

export default Services