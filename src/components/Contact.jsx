import React from 'react'

const Contact = () => {
  return (
    <div className='relative z-20   flex flex-col md:flex-row justify-between items-center bg-vlblack drop-shadow-lg p-8 lg:p-10 gap-8'>
        <div className='flex flex-col text-white'>
            <h1 className='text-xl md:text-3xl font-bold'>Let's work together on your next project</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, impedit aspernatur nostrum tenetur eius saepe.</p>
        </div>
        <button className='bg-red text-white px-6 py-2 h-fit text-sm text-nowrap'>CONTACT ME</button>
    </div>
  )
}

export default Contact