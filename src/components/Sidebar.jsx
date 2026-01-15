import { useClerk, useUser } from '@clerk/clerk-react'
import { CoinsIcon, Hash } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems= [
  { to:'/ai', label:"Dashboard" , Icon :'House'},
  { to:'/ai/write-article', label:"Write Article" , Icon: SquarePen},
  { to:'/ai/blog-titles', label:"Blog Titles" , Icon :Hash},
  { to:'/ai/generate-images', label:"Generate Images" , Icon :Eraser},
  { to:'/ai/remove-objects', label:"Remove Objects" , Icon : Scissors},
  { to:'/ai/remove-background', label:"Remove Background" , Icon : Eraser},
  { to:'/ai/review-resume', label:"Review Resume" , Icon :FileText},
  { to:'/ai/community', label:"Community" , Icon :Users},
]

const Sidebar = ({sidebar, setsidebar}) => {
  const {user} = useUser()
  const{signOut, openuserProfile} = useClerk()
  return (
    <div className={`w-60 bg-white border-r border-gray-200 flex justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0': 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out flex-col `} >
        <div>
          <img src={user.imageUrl} alt="User Avatar" className='w-13 rounded-full mx-auto' />
          <h1 className='mt-1 text-center'>{user.fullName}</h1>
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
    </div>

  )
}

export default Sidebar