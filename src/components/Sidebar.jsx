import { useClerk, useUser } from '@clerk/clerk-react'
import React from 'react'

const Sidebar = ({sidebar, setsidebar}) => {
  const {user} = useUser()
  const{signOut, openuserProfile} = useClerk()
  return (
    <div className={`w-60 bg-white border-r border-gray-200 flex justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0': 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out flex-col `} >
        <div>
          <img src={user.imageUrl} alt="User Avatar" className='w-13 rounded-full mx-auto' />
          <h1 className='mt-1 text-center'>{user.fullName}</h1>
        </div>
    </div>
  )
}

export default Sidebar