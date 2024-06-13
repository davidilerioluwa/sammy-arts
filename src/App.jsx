import React from 'react'
import Navbar from "./components/Navbar"
import Landing from './components/Landing'
import Services from './components/Services'
const App = () => {
  return (
    <div className='bg-lblack'>
      <Navbar/>
      <Landing/>
      <Services/>
    </div>
  )
}

export default App