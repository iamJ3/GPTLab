import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './components/Navbar'
import Data from './components/Data'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
      <Hero/>
      <Data/>
    </div>
  )
}

export default App