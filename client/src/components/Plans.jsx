import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-gray-900/95 rounded-2xl shadow-2xl border border-gray-800 p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8 tracking-tight">
          Choose Your Plan
        </h2>
        <div className="bg-gray-800 rounded-xl p-6 flex flex-row gap-8 justify-center items-stretch">
          <PricingTable />
        </div>
      </div>
    </div>
  )
}

export default Plans