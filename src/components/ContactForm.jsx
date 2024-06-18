import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';



const ContactForm = ({setPopup}) => {
  const [sender,setSender]= useState("")
  const [message,setMessage]= useState("")
  const [contact,setContact]= useState("")
  console.log(sender+message+contact);
  function sendEmail() {
    emailjs.send('service_pxqsl6e', 'template_73c114l', {
      to_name: 'SammyArts',
      from_name:sender,
        message: message,
        contact:contact
    }, 'SK8zEZ97hhgUGpYrn')
    .then(function(response) {
        console.log('Email sent!', response.status, response.text);
    }, function(error) {
        console.error('Email could not be sent:', error);
    });
}
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
                    <input type='text' onChange={(e)=>setSender(e.target.value)} placeholder='Enter your name' className='outline-0 w-full border rounded-md p-2 border-dgray bg-lblack'/>
                    <input type='text' onChange={(e)=>setContact(e.target.value)} placeholder='Enter your email or phone number' className='outline-0 w-full border rounded-md p-2 border-dgray bg-lblack'/>
                    <textarea  placeholder='Enter your enquiry'onChange={(e)=>setMessage(e.target.value)} className='outline-0 w-full border rounded-md p-2 border-dgray bg-lblack'/>
                    <button className=' w-full py-2 bg-red text-white rounded-md' onClick={(e)=>{
                      sendEmail()
                      e.preventDefault()
                      }}>Send Mail</button>
            </form>
            <p className='text-lg font-bold'>OR</p>
            <a href='https://wa.me/message/URTQO34LCW5KP1' target='_blank' className='w-full py-2 bg-green text-white rounded-md'>Contact me on Whatsapp</a>
                
        </div>
    </motion.div>
  )
}

export default ContactForm