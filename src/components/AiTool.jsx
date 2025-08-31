import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useClerk, useUser } from '@clerk/clerk-react'

const AiTool = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  const { openSignIn } = useClerk();




  return (
    <section className='relative min-h-screen bg-black overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-24 py-20'>
      {/* Animated Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className='text-center mb-16 max-w-4xl mx-auto'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
            Smart AI <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'>Solutions</span>
          </h1>
          <p className='text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto'>
            Discover advanced tools to generate, improve, and streamline your content with next-generation AI technology.
          </p>
        </header>

        {/* Tools Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {AiToolsData.map((tool, index) => (
            <article
              key={index}
              onClick={()=>navigate(tool.path)}
              className="group relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl 
                       border border-gray-700/50 hover:border-green-500/50 
                       hover:shadow-2xl hover:shadow-green-500/20 
                       transform hover:-translate-y-3 hover:scale-105
                       transition-all duration-500 cursor-pointer
                       focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-opacity-50">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 
                            opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="relative z-10 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center
                           shadow-lg transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: tool.bg ?
                      `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})` :
                      'linear-gradient(135deg, #10b981, #059669)'
                  }}
                >
                  <tool.Icon className='w-8 h-8 text-white drop-shadow-sm' aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-white text-xl font-bold mb-4 group-hover:text-green-300 
                             transition-colors duration-300">
                  {tool.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 
                            transition-colors duration-300 min-h-[3rem]">
                  {tool.description}
                </p>
              </div>

              {/* Hover Arrow Indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 
                            transform translate-x-2 group-hover:translate-x-0 
                            transition-all duration-300">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Bottom Shine Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                            from-transparent via-green-500/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AiTool