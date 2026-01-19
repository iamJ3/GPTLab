import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { dummyCreationData } from '../assets/assets'
import { SignIn, useUser, Protect } from '@clerk/clerk-react'
import { Gem, Sparkle } from 'lucide-react'
import CreationItem from '../components/CreationItem'

const Dashboard = () => {
  const [creations, setcreations] = useState([])

  const getdaashboarddata = async () => {
    setcreations(dummyCreationData)
  }

  useEffect(() => {
    getdaashboarddata()
  })

  return (
    <div className='h-full  p-6 bg-black text-white'>
      <div className='flex justify-start gap-4 flex-wrap'>

        {/* cards */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-black rounded-xl border border-gray-800'>
          <div className='text-gray-300'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold text-white'>
              {creations.length}
            </h2>
          </div>

          {/* <div className='w-10 h-10 rounded-lg bg-[#00CF79]/10 border border-[#00CF79] flex justify-center items-center'> */}
            <Sparkle className='text-[#00CF79]' size={24} />
          {/* </div> */}
        </div>

        {/* plan card */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-black rounded-xl border border-gray-800'>
          <div className='text-gray-300'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold text-white'>
              {creations.length}
            </h2>
            <Protect plan="premium" fallback="Free">Premium</Protect>
          </div>

          {/* <div className='w-10 h-10 rounded-lg bg-[#00CF79]/10 border border-[#00CF79] flex justify-center items-center'> */}
            <Gem className='text-[#00CF79]' size={24} />
          {/* </div> */}
        </div>
      </div>

      <div className='space-y-3'>
        <p className='mt-6 mb-4 text-gray-300'>
          Recent Creations
        </p>
        {
          creations.map((item) => (
            <div key={item.id}>
              <CreationItem item={item} />
            </div>
          ))
        }
        <div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
