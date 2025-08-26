import { useNavigate } from 'react-router-dom';
import { useUser, UserButton, useClerk } from '@clerk/clerk-react'
const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser();
  const { openSignIn } = useClerk()

  return (
    <div className="fixed top-5 backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 w-full z-50">
      <h2
        onClick={() => navigate('/')}
        className="cursor-pointer font-bold flex items-center gap-2  text-lg"
      >
        <img width={30} src="/chat-bot.png" alt="logo" />
        <span className='text-white'>GPTLab</span>
      </h2>
      {
        user ? <UserButton /> : (
          <div className='flex gap-4'>



            <button onClick={openSignIn} className="flex text-black items-center gap-2 rounded-full text-sm cursor-pointer bg-primary px-8 py-2 shadow-md hover:scale-105 transition">
              Log In
            </button>
            <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-gradient-x">
              <button className="flex items-center gap-2 rounded-full text-sm font-medium text-white 
    bg-black/80 backdrop-blur-md px-8 py-2 shadow-lg hover:shadow-xl 
    hover:scale-105 transition-all duration-300">
                🚀 Sign Up
              </button>
            </div>

          </div>
        )

      }

    </div>
  );
};

export default Navbar;
