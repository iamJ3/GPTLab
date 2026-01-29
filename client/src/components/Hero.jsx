import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
    const navigate = useNavigate()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])


    return (
        <section className="relative pt-16 sm:pt-20 md:pt-24 w-full min-h-screen overflow-hidden bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat opacity-90"
                style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}
            />

            {/* Animated Stars Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-70"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

            {/* Main Content */}
            <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">

                {/* Hero Text */}
                <div className='mb-8 sm:mb-10 md:mb-12 relative mt-8 sm:mt-10 md:mt-12 max-w-4xl sm:max-w-5xl mx-auto'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight'>
                        Craft Stunning Content
                        <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 
                                       animate-pulse drop-shadow-2xl'>
                            with GPTLab
                        </span>
                    </h1>

                    <p className='text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto 
                                font-light tracking-wide'>
                        Supercharge your creativity using our premium AI tools — write engaging articles,
                        generate breathtaking content, and unlock unlimited possibilities.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-8 sm:mb-10 md:mb-12">
                    {/* Get Started Button */}
                    <div
                        onClick={() => navigate('/ai')}
                        className="group relative p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 
                                 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 
                                      opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                        <button className="relative cursor-pointer flex items-center gap-2 sm:gap-3 rounded-full text-base sm:text-lg font-semibold text-white 
                                         bg-black px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 hover:scale-105 focus:scale-105 active:scale-95 
                                         transition-transform duration-200 shadow-xl">
                            <span>Get Started</span>

                            {/* arrow svg */}
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>

                        </button>
                    </div>
                    {/* GitHub Button */}
                    <button
                        onClick={() => window.open('https://github.com/iamJ3/GPTLab', '_blank')}
                        className="group relative flex items-center gap-2 sm:gap-3 rounded-full text-base sm:text-lg font-semibold text-black 
                                 bg-gradient-to-r from-green-400 to-emerald-500 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 
                                 hover:from-green-300 hover:to-emerald-400 hover:scale-105 hover:shadow-2xl 
                                 hover:shadow-green-500/25 focus:scale-105 active:scale-95 
                                 transition-all duration-200 shadow-xl"
                        aria-label="Star on GitHub"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-200"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>Star on GitHub</span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full 
                                      animate-ping opacity-75" />
                    </button>
                </div>
                {/* Enhanced Social Proof */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mx-auto">
                    <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                                  bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 
                                  hover:border-green-500/50 transition-all duration-300">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300">

                            <img src='/user_group.png' width={60} className="sm:w-20" />
                            <span className="text-xs sm:text-sm font-medium">
                                Trusted by <span className="text-green-400 font-bold">2K+</span> creators
                            </span>
                        </div>
                    </div>
                </div>
                {/* Floating Action Indicator */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-green-400 
                                  transition-colors duration-300 cursor-pointer">
                        <span className="text-xs font-medium tracking-wider uppercase">Explore Tools</span>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero;