import React from 'react'
import { motion } from 'framer-motion'
// import { a } from 'react-router-dom'

const ContactForm = ({setPopup}) => {
    const viewportWidth= window.innerWidth
    const viewportHeight= window.innerHeight
  return (
    <motion.div 
    initial={{x:-viewportWidth,y:-viewportHeight,scale:0}}
    animate={{x:0,y:0,scale:1}}
    transition={{
        duration:0.8,
        type:"spring"
    }}
    className='fixed flex items-center justify-center top-0 left-0 bg-black w-screen h-screen z-50 pt-16 lg:pt-20 px-4 lg:px-40 pb-10'>
        <div className='relative flex flex-col gap-4 text-white text-center w-96 bg-lblack p-4 lg:p-12 rounded-md '>
            <span className='absolute top-2 right-2 bg-red px-4 py-2 cursor-pointer rounded-md' onClick={()=>setPopup(false)}>X</span>
            <form className='flex flex-col gap-4 items-center pt-12'>
                    <input type='text' placeholder='Enter your name' className='outline-0 w-full border rounded-md p-2 border-dgray bg-lblack'/>
                    <input type='email' placeholder='Enter your email' className='outline-0 w-full border rounded-md p-2 border-dgray bg-lblack'/>
                    <textarea  placeholder='Enter your enquiry' className='outline-0 w-full border rounded-md p-2 border-dgray bg-lblack'/>
                    <button className=' w-full py-2 bg-red text-white rounded-md'>Send Mail</button>
            </form>
            <p className='text-lg font-bold'>OR</p>
            <a href='https://wa.me/message/URTQO34LCW5KP1' target='_blank' className='w-full py-2 bg-green text-white rounded-md'>Contact me on Whatsapp</a>
                
        </div>
    </motion.div>
  )
}

export default ContactForm