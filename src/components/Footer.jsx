import React from 'react'
import { FaHeart,FaFacebook,FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center gap-4 mt-60 lg:mt-20 bg-vlblack text-white p-10 lg:p-20 flex justify-around'>      
            <div className='text-xl text-red font-bold'>SAMMYARTS</div>
            <div className='flex gap-4 text-white text-3xl justify-center items-center'>
                <FaFacebook/>
                <FaInstagram/>
            </div>
            <div className='text-sm flex gap-2 items-center'>Created with <span className='text-red '><FaHeart/></span> by Godswill</div>
    </div>
  )
}

export default Footer