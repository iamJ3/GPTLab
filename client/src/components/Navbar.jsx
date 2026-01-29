import { useNavigate } from "react-router-dom";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn, openSignUp } = useClerk();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed backdrop-blur-md top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="flex justify-between items-center py-3 sm:py-4 px-2 sm:px-4">
        {/* Logo & title */}
        <div
          className="group cursor-pointer flex items-center gap-2 sm:gap-3 hover:scale-105 
                     transition-transform duration-300 focus:outline-none focus:ring-2 
                     focus:ring-green-500 focus:ring-opacity-50 rounded-lg p-1.5 sm:p-2"
        >
          {/* Logo */}
          <div onClick={() => navigate("/")} className="relative">
            <img width={28} height={28} className="sm:w-9 sm:h-9" src="/chat-bot.png" />
          </div>
          {/* Title */}
          <span
            className="text-white text-lg sm:text-xl font-bold tracking-wide group-hover:text-green-300 
                           transition-colors duration-300"
          >
            GPTLab
          </span>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex">
          {user ? (
            <UserButton />
          ) : (
            <div className="flex flex-row gap-2 sm:gap-3 items-center">
              {/* Log In */}
              <button
                onClick={openSignIn}
                className="group cursor-pointer relative flex items-center gap-1.5 sm:gap-2 rounded-xl 
                           text-xs sm:text-sm font-semibold 
                           text-black bg-gradient-to-r from-green-400 to-emerald-500 
                           hover:from-green-300 hover:to-emerald-400 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 
                           shadow-lg hover:shadow-xl hover:shadow-green-500/25 hover:scale-105 
                           focus:scale-105 active:scale-95 transition-all duration-200 
                           focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Log In
              </button>

              {/* Sign Up */}
              <div
                className="group relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 
                              hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <button
                  onClick={openSignUp}
                  className="relative cursor-pointer flex justify-center items-center gap-1.5 sm:gap-2 rounded-xl 
                             text-xs sm:text-sm font-semibold text-white bg-black/90 backdrop-blur-sm 
                             px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 hover:scale-105 focus:scale-105 active:scale-95 
                             transition-transform duration-200 shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                >
                  <svg
                    className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 sm:p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="px-4 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
            {user ? (
              <div className="flex justify-center">
                <UserButton />
              </div>
            ) : (
              <div className="space-y-3">
                {/* Mobile Log In */}
                <button
                  onClick={() => {
                    openSignIn();
                    setIsOpen(false);
                  }}
                  className="w-full group cursor-pointer relative flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl 
                             text-xs sm:text-sm font-semibold 
                             text-black bg-gradient-to-r from-green-400 to-emerald-500 
                             hover:from-green-300 hover:to-emerald-400 px-4 sm:px-6 py-2.5 sm:py-3 
                             shadow-lg hover:shadow-xl hover:shadow-green-500/25 hover:scale-105 
                             focus:scale-105 active:scale-95 transition-all duration-200 
                             focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                >
                  <svg
                    className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Log In
                </button>

                {/* Mobile Sign Up */}
                <div className="group relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 
                               hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
                  <button
                    onClick={() => {
                      openSignUp();
                      setIsOpen(false);
                    }}
                    className="relative cursor-pointer w-full flex justify-center items-center gap-1.5 sm:gap-2 rounded-xl 
                               text-xs sm:text-sm font-semibold text-white bg-black/90 backdrop-blur-sm 
                               px-4 sm:px-6 py-2.5 sm:py-3 hover:scale-105 focus:scale-105 active:scale-95 
                               transition-transform duration-200 shadow-lg
                               focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;