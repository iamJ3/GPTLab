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
    <div className={`w-60 bg-white border-r border-gray-200 flex justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0': 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out flex-col `} >
        <div>
          <img src={user?.imageUrl || '/default-avatar.png'} alt="User Avatar" className='w-13 rounded-full mx-auto' />
          <h1 className='mt-1 text-center'>{user?.fullName || 'Guest'}</h1>
          {navItems.map(({to, label, Icon}) => (
            <NavLink
              to={to}
              key={to}
              end={to==='/ai'}
              onClick={() => setsidebar(false)}
              className={({ isActive }) => `px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 mt-4 ${isActive ? 'bg-gray-100' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
    </div>

    <div className='w-full border-t border-gray-200 px-4 p-4 flex items-center justify-between'>
      <div onClick={openUserProfile} className='flex gap-2 items-center cursor-pointer'>
        <img src={user?.imageUrl || '/default-avatar.png'} alt="User Avatar" className='w-10 rounded-full' />
        <div>
          <h1 className='text-sm font-medium'>{user.fullName}</h1>
          <p className='text-xs text-gray-500'
          >
            <Protect fallback='free' plan="premium">Premium </Protect>
            Plan
          </p>
        </div>
        <LogOut onClick={(e) => { e.stopPropagation(); signOut(); }} className='w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer'/>
      </div>
    

    </div>
    </div>

  )
}

export default Sidebar