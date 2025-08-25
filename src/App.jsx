import React from 'react'
import { Route, Routes } from 'react-router-dom';
import WriteArticel from './pages/WriteArticel'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import BlogTitle from './pages/BlogTitle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='Write-article' element={<WriteArticel />} />
          <Route path='blog-title' element={<BlogTitle />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App