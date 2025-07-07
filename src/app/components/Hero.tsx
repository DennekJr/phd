export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Simulated background that represents the graduation photo */}
        <div className="w-full h-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800" />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Small heading */}
          <p className="text-red-300 text-lg md:text-xl mb-4 font-medium tracking-wide">
            Network for
          </p>
          
          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Nigerian Female<br />
            PHD Holders in<br />
            <span className="text-red-300">ARTS & SCIENCES</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Empowering Nigerian Women in Academia for National Development
          </p>
          
          {/* CTA Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            JOIN US
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full border-4 border-yellow-400 rounded-full animate-pulse" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-70">Scroll down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 