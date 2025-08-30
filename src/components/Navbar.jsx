import { useNavigate } from 'react-router-dom';
import { useUser, UserButton, useClerk } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser();
  const { openSignIn, openSignUp } = useClerk()



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-24 py-4">
      <div >

        <div className="flex justify-between items-center py-4 px-6 sm:px-8">

          <div
            className="group cursor-pointer flex items-center gap-3 hover:scale-105 
                     transition-transform duration-300 focus:outline-none focus:ring-2 
                     focus:ring-green-500 focus:ring-opacity-50 rounded-lg p-2"
          >
            <div onClick={() => navigate('/')} className="relative">
              <img
                width={36}
                height={36}
                src="/chat-bot.png"
              />

            </div>
            <span className='text-white text-xl font-bold tracking-wide group-hover:text-green-300 
                           transition-colors duration-300'>
              GPTLab
            </span>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              {/* User Button with Enhanced Styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm opacity-0 
                              hover:opacity-100 transition-opacity duration-300" />
                <UserButton />
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 items-center">

              <button
                onClick={openSignIn}
                className="group relative flex items-center gap-2 rounded-xl text-sm font-semibold 
                         text-black bg-gradient-to-r from-green-400 to-emerald-500 
                         hover:from-green-300 hover:to-emerald-400 px-6 py-3 
                         shadow-lg hover:shadow-xl hover:shadow-green-500/25 hover:scale-105 
                         focus:scale-105 active:scale-95 transition-all duration-200 
                         focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              >
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Log In
              </button>

              <div className="group relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 
                            hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 
                              opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" />

                <button
                  onClick={openSignUp}
                  className="relative w-full flex justify-center items-center gap-2 rounded-xl 
                           text-sm font-semibold text-white bg-black/90 backdrop-blur-sm 
                           px-6 py-3 hover:scale-105 focus:scale-105 active:scale-95 
                           transition-transform duration-200 shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                  aria-label="Sign up for an account"
                >
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Sign Up</span>

                  <div className="absolute -top-1 -right-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-300 rounded-full" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>


    </nav>
  );
};

export default Navbar;