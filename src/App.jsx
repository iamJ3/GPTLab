import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AiTool from './components/AiTool'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
      <Hero/>
      {/* <Data/> */}
      <AiTool/>
    </div>
  )
}

export default App