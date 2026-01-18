import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>Dashboard
      <Outlet/>
    </div>// 2hr
  )
}

export default Dashboard