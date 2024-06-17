import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'

const BioPopup = ({setPopup}) => {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const secondParagraphString = "I help brands build an online presence by creating captivating and catchy designs that communicates the brand's message effectively to their target audience"
    const firstParagraphString = "My name is Samuel Olusola, I am a freelance graphic designer known as Sammyarts. I am a creative designer exploring my creative potentials to the fullest, accustomed to problem solving and creating solutions through graphic design."
    const SecondParagraph = ()=>{
        return(<ReactTyped strings={[secondParagraphString]} typeSpeed={50}/>)
    }
    const [showSecond,setShowSecond] = useState(false)
    setTimeout(() => {
        setShowSecond(true)
    }, 11200);
    
  return (
    <motion.div 
    initial={{x:viewportWidth,y:viewportHeight,scale:0}}
    animate={{x:0,y:0,scale:1}}
    transition={{
        duration:0.8,
        type:"spring"
    }}
    className='fixed flex items-center justify-center top-0 left-0 bg-black w-screen h-screen z-50 pt-16 lg:pt-20 px-4 lg:px-40 pb-10'>
        <div className='relative flex flex-col gap-4 text-white text-center w-96 bg-lblack p-8 lg:p-12 rounded-md '>
            <span className='absolute top-2 right-2 bg-red px-4 py-2 cursor-pointer rounded-md' onClick={()=>setPopup(false)}>X</span>
            <p className='px-4' onClick={()=>setShowSecond(true)}>
             <ReactTyped strings={[firstParagraphString]} typeSpeed={30}/>
            </p>
            <p className={`${showSecond?"":"hidden"}`}>
                <SecondParagraph/>
            </p>
        </div>
    </motion.div>
  )
}

export default BioPopup