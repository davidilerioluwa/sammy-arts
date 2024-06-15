import React from 'react'
import Navbar from "./components/Navbar"
import Landing from './components/Landing'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-lblack'>
      <Navbar/>
      <Landing/>
      <div className='relative'>
        <div className='absolute h-full w-1/2 bg-vlblack z-10'></div>
        <Services/>
        <Experience/>
      </div>
        <Projects/>
      <div className='relative p-4 md:p-10 lg:px-40 :py-10'>
          <Contact/>
          <div className='absolute top-1/2 h-full left-0  w-full bg-vlblack z-10'></div>
      </div>
      <Footer/>
    </div>
  )
}

export default App