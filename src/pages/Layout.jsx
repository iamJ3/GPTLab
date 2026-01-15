import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { SignIn, useUser } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const navigate = useNavigate();
  const{user} = useUser();
  const [sidebar, setsidebar] = useState(false)
  return user ? (
    <div className='min-h-screen bg-black text-white'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-[#52E59E] bg-black'>
        <img width={36} className='cursor-pointer' height={36} src='/logo.png' onClick={() => navigate('/')} alt="Home" />
        {
          sidebar ? <X className='cursor-pointer w-6 h-5 text-[#52E59E] sm:hidden' onClick={() => setsidebar(false)} /> :
            <Menu className='cursor-pointer w-6 h-6 text-[#52E59E] sm:hidden' onClick={() => setsidebar(true)} />
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setsidebar={setsidebar} />
        <div className='flex-1 bg-black p-6 overflow-y-auto'>
          <div className='flex-1 bg-[#52E59E] text-black p-4 rounded-md'>

            <Outlet />
          </div>

        </div>
      </div>
    </div>
  ) : (
    <div className='h-screen bg-black items-center flex justify-center'>
      <SignIn />
    </div>
  )
}

export default Layout