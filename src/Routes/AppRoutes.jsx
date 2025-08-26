import React from 'react'
import { Route, Routes } from 'react-router-dom';
import WriteArticle from '../pages/WriteArticle'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Dashboard from '../pages/Dashboard'
import BlogTitle from '../pages/BlogTitle'
import GenerateImages from '../pages/Generateimages'
import RemoveBg from '../pages/RemoveBg'
import RemoveObject from '../pages/RemoveObj'
import Community from '../pages/Community'
import ResumeReview from '../pages/ResumeReview'



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ai' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='Write-article' element={<WriteArticle />} />
          <Route path='blog-title' element={<BlogTitle />} />
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-bg' element={<RemoveBg />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='review-community' element={<Community />} />
          <Route path='remove-resume' element={<ResumeReview />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes