import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { dummyCreationData } from '../assets/assets'
import { SignIn, useUser, Protect, useAuth } from '@clerk/clerk-react'
import { Gem, Sparkle } from 'lucide-react'
import CreationItem from '../components/CreationItem'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const Dashboard = () => {
  const [creations, setcreations] = useState([]);
  const [loading, setloading] = useState(true);
  const {getToken} = useAuth();
const getDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/user/get-user-creations", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setcreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setloading(false);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className='h-full p-4 sm:p-6 bg-black text-white'>
      <div className='flex justify-start gap-3 sm:gap-4 flex-wrap'>

        {/* cards */}
        <div className='flex justify-between items-center w-full sm:w-72 p-3 sm:p-4 px-4 sm:px-6 bg-black rounded-xl border border-gray-800'>
          <div className='text-gray-300'>
            <p className='text-xs sm:text-sm'>Total Creations</p>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>
              {creations.length}
            </h2>
          </div>

          {/* <div className='w-10 h-10 rounded-lg bg-[#00CF79]/10 border border-[#00CF79] flex justify-center items-center'> */}
            <Sparkle className='text-[#00CF79]' size={20} />
          {/* </div> */}
        </div>

        {/* plan card */}
        <div className='flex justify-between items-center w-full sm:w-72 p-3 sm:p-4 px-4 sm:px-6 bg-black rounded-xl border border-gray-800'>
          <div className='text-gray-300'>
            <p className='text-xs sm:text-sm'>Active Plan</p>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>
              {creations.length}
            </h2>
            <Protect plan="premium" fallback="Free">Premium</Protect>
          </div>

          {/* <div className='w-10 h-10 rounded-lg bg-[#00CF79]/10 border border-[#00CF79] flex justify-center items-center'> */}
            <Gem className='text-[#00CF79]' size={20} />
          {/* </div> */}
        </div>
      </div>

 {loading ? (
        <div className="flex justify-center items-center h-3/4">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-11 sm:w-11 border-3 border-purple-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="space-y-2 sm:space-y-3">
          <p className="mt-4 sm:mt-6 mb-3 sm:mb-4 text-base sm:text-lg">Recent Creations</p>
          {creations.map((item) => (
            <CreationItem key={item.id} item={item} />
          ))}
        </div>
      )}
     
    </div>
  )
}

export default Dashboard
