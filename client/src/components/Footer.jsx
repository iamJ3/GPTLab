import { Linkedin, Twitter,Github } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-8 sm:py-10 md:py-12 text-center text-gray-300 mt-auto relative bg-[#192333] z-10">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          <span className="text-xs sm:text-sm md:text-base font-medium">&copy; {new Date().getFullYear()} GPTLab. All rights reserved.</span>
          <span className="text-xs sm:text-sm md:text-base">
            Made by{' '}
            <a
              href="https://x.com/Nitaj333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold focus:outline-none focus:underline"
            >
              Jatin Sharma
            </a>
          </span>
          <div className="flex gap-4 sm:gap-6 md:gap-8 mt-2">
            <a
              href="https://x.com/Nitaj333"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/10 hover:bg-[#D97757]/10 border border-white/10 hover:border-[#D97757]/20 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D97757]/30"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 hover:text-[#D97757] transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-sharma69/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/10 hover:bg-[#D97757]/10 border border-white/10 hover:border-[#D97757]/20 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D97757]/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 hover:text-[#D97757] transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/iamJ3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/10 hover:bg-[#D97757]/10 border border-white/10 hover:border-[#D97757]/20 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D97757]/30"
              aria-label="Github"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 hover:text-[#D97757] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer