import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-50 w-screen bg-lblack p-4 drop-shadow-xl' >
        <div className='flex flex-row text-white gap-4 justify-end mr-12 lg:mr-60 text-sm'>
            <div>HOME</div>
            <div>PROJECT</div>
            <div>ABOUT</div>
            <div>CONTACT</div>
        </div>
    </div>
  )
}

export default Navbar