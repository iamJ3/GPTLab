import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-3 sm:px-4 md:px-6 py-8 sm:py-12">
      <div className="w-full max-w-4xl sm:max-w-5xl bg-gray-900/95 rounded-2xl shadow-2xl border border-gray-800 p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 tracking-tight">
          Choose Your Plan
        </h2>
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-stretch">
          <PricingTable />
        </div>
      </div>
    </div>
  )
}

export default Plans