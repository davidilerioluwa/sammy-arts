import React from 'react'

const Navbar = ({projectsRef,contactsRef}) => {
  return (
    <div className='fixed z-50 w-screen bg-lblack p-4 drop-shadow-xl' >
        <div className='flex flex-row text-white gap-4 justify-end mr-12 lg:mr-60 text-sm'>
            <div className='cursor-pointer hover:text-red' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>HOME</div>
            <div className='cursor-pointer hover:text-red' onClick={()=>window.scrollTo({top:projectsRef.current.offsetTop-100,behavior:"smooth"})}>PROJECT</div>
            <div>ABOUT</div>
            <div className='cursor-pointer hover:text-red' onClick={()=>window.scrollTo({top:contactsRef.current.offsetTop-100,behavior:"smooth"})}>CONTACT</div>
        </div>
    </div>
  )
}

export default Navbar