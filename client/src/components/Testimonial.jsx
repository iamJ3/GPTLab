import { cardsData } from "../assets/assets";

const Testimonial = () => {

  const CreateCard = ({ card }) => (
    <div className="relative group p-4 sm:p-5 md:p-6 rounded-2xl mx-2 sm:mx-3 md:mx-4 w-72 sm:w-80 shrink-0 
                       bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 
                       hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 
                       hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500">

      {/* Card Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 
                          rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* User Info */}
      <div className="relative z-10 flex gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="relative">
          <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600 group-hover:border-green-500/50 
                                  transition-colors duration-300"
            src={card.image}
            alt={`${card.name} profile`} />
          <div className="absolute inset-0 rounded-full bg-green-500/20 opacity-0 group-hover:opacity-100 
                                  blur-sm transition-opacity duration-300" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-green-300 
                                    transition-colors duration-300">
              {card.name}
            </p>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" viewBox="0 0 12 12" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-gray-400 text-xs">{card.handle}</span>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="relative z-10 text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-200 
                         transition-colors duration-300">
        "{card.testimonial}"
      </p>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-gray-500 text-xs">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-xs">Posted on</span>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-200">
            <svg width="12" height="11" viewBox="0 0 11 10" fill="none">
              <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
            </svg>
          </a>
        </div>
        <p className="text-gray-400">{card.date}</p>
      </div>

      {/* Bottom Shine Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                          from-transparent via-green-500/50 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );

  return (
    <section className="relative min-h-screen bg-black py-12 sm:py-14 md:py-16 overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">

      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-12 sm:mb-14 md:mb-16 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Creators
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg sm:max-w-2xl mx-auto">
            Here's what our users say about transforming their creative process with GPTLab
          </p>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative z-10">
        {/* First Row */}
        <div className="marquee-row w-full overflow-hidden relative mb-6 sm:mb-8">
          <div className="absolute left-0 top-0 h-full w-16 sm:w-20 md:w-32 z-20 pointer-events-none 
                                  bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%]">
            {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-20 pointer-events-none 
                                  bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>

        {/* Second Row - Reverse Direction */}
        <div className="marquee-row w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-16 sm:w-20 md:w-32 z-20 pointer-events-none 
                                  bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%]">
            {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-20 pointer-events-none 
                                  bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 30s linear infinite;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
            `}</style>

    </section>
  )
}

export default Testimonial