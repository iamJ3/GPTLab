import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="relative sm:px-20 xl:px-32 inline-flex flex-col w-full justify-center min-h-screen px-4 bg-[url(/bg.png)] bg-cover bg-no-repeat"  >
            {/* Your content here */}
            <div className='text-white text-center mb-5'>
                <h1 className='text-3xl  sm:text-5xl md:text-6xl font-semibold mx-auto '>Craft Stunning Content <br />  with <span className='text-primary'>
                    GPTLab </span></h1>
                <p className='mt-6 text-lg sm:text-xl max-w-2xl mx-auto'>
                    Supercharge your creativity using our premium AI tools — write engaging articles,
                    generate breathtaking.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">

                <div
                    onClick={() => navigate("./ai")}
                    className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Get Started"
                >
                    <button className="flex items-center gap-2 rounded-full text-sm font-medium text-white bg-black px-8 py-2 shadow-md hover:scale-105 focus:scale-105 active:scale-95 transition-transform duration-200">
                        Get Started
                    </button>
                </div>
                

                {/* Watch Demo Button */}
                <button
                    className="flex items-center gap-2 rounded-full text-sm font-medium text-black bg-primary px-8 py-2 shadow-md hover:scale-105 focus:scale-105 active:scale-95 transition-transform duration-200"
                    aria-label="Watch Demo"
                >
                   star on github
                </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-3 mx-auto mt-4 text-white">
                <img
                    src={assets.user_group}
                    alt="User group illustration"
                    className="h-8 w-auto animate-pulse"
                />
                <span className="text-gray-400 text-sm">
                    ✅ Trusted by <span className="font-semibold text-white">2K+</span> users
                </span>
            </div>


        </div>
    )
}

export default Hero