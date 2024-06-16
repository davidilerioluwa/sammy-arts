import React, { useEffect, useRef, useState } from 'react'
import Navbar from "./components/Navbar"
import Landing from './components/Landing'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
const App = () => {
  const projectsRef= useRef(null)
  const contactsRef= useRef(null)
  const [popup,setPopup]= useState(false)
  return (
    <div className='bg-lblack'>
      <Navbar projectsRef={projectsRef} contactsRef={contactsRef}/>
      <Landing/>
      <div className='relative'>
        <div className='absolute h-full w-1/2 bg-vlblack z-10'></div>
        <Services/>
        <Experience/>
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div className='relative p-4 md:p-10 lg:px-40 :py-10' ref={contactsRef}>
          <Contact setPopup={setPopup}/>
          {popup?<ContactForm setPopup={setPopup}/>:""}
          <div className='absolute top-1/2 h-full left-0  w-full bg-vlblack z-10'></div>
      </div>
      <Footer/>
    </div>
  )
}

export default App