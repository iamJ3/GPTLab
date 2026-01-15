import { useClerk, useUser,Protect } from '@clerk/clerk-react'
import { CoinsIcon, Eraser, FileText, Hash, House, Images, LogOut, Scissors, SquarePen, Users } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems= [
  { to:'/ai', label:"Dashboard" , Icon : House},
  { to:'/ai/write-article', label:"Write Article" , Icon: SquarePen},
  { to:'/ai/blog-title', label:"Blog Titles" , Icon :Hash},
  { to:'/ai/generate-images', label:"Generate Images" , Icon :Images},
  { to:'/ai/remove-object', label:"Remove Objects" , Icon : Scissors},
  { to:'/ai/remove-bg', label:"Remove Background" , Icon : Eraser},
  { to:'/ai/review-resume', label:"Review Resume" , Icon :FileText},
  { to:'/ai/review-community', label:"Community" , Icon :Users},
]

const Sidebar = ({sidebar, setsidebar}) => {
  const { isLoaded, user } = useUser()
  const { signOut, openUserProfile } = useClerk()
  if (!isLoaded) return null
  return (
    <div className={`w-60 bg-black border-r border-gray-800 text-white flex justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0': 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out flex-col `} >
        <div>
          <img src={user?.imageUrl || '/default-avatar.png'} alt="User Avatar" className='w-13 rounded-full mx-auto' />
          <h1 className='mt-1 text-center text-white'>{user?.fullName || 'Guest'}</h1>
          {navItems.map(({to, label, Icon}) => (
            <NavLink
              to={to}
              key={to}
              end={to==='/ai'}
              onClick={() => setsidebar(false)}
              className={({ isActive }) => `px-4 py-2 hover:bg-[#52E59E]/10 cursor-pointer flex items-center gap-2 mt-4 ${isActive ? 'bg-[#52E59E]/20' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#52E59E]' : 'text-gray-300'}`} />
                  <span className='ml-1 text-sm text-gray-100'>{label}</span>
                </>
              )}
            </NavLink>
          ))}
    </div>

    <div className='w-full border-t border-gray-800 px-4 p-4 flex items-center justify-between'>
      <div onClick={openUserProfile} className='flex gap-2 items-center cursor-pointer'>
        <img src={user?.imageUrl || '/default-avatar.png'} alt="User Avatar" className='w-10 rounded-full ring-2 ring-[#52E59E]' />
        <div>
          <h1 className='text-sm font-medium text-white'>{user.fullName}</h1>
          <p className='text-xs text-gray-400'
          >
            <Protect fallback='free' plan="premium">Premium </Protect>
            Plan
          </p>
        </div>
        <LogOut onClick={(e) => { e.stopPropagation(); signOut(); }} className='w-4.5 text-gray-300 hover:text-[#52E59E] transition cursor-pointer'/>
      </div>
    

    </div>
    </div>

  )
}

export default Sidebar