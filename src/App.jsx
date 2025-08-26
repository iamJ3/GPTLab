import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App