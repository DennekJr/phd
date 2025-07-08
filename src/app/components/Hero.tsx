import YellowButton from "./YellowButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-[100vw] h-[100vh]">
        {/* Background Image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero.jpg)'
          }}
        />
        
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto !px-[74px] py-20">
        <div className="max-w-[760px]">
          {/* Small heading */}
          <p className="text-[#FF8B8B] text-[24px] !leading-[100%] !tracking-[0%] mb-[10px] font-medium">
            Network for
          </p>
          
          {/* Main heading */}
          <h1 className="font-serif text-[60px] !leading-[80px] !tracking-[0%] font-bold text-white mb-[20px] leading-tight">
            Nigerian Female<br />
            PHD Holders in<br />
            <span className="uppercase">ARTS & SCIENCES</span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-[546px] !text-[24px] !leading-[100%] !tracking-[0%] !pb-[50px] font-light text-white">
            Empowering Nigerian Women in Academia for National Development
          </p>
          
          {/* CTA Button */}
          <YellowButton>
            JOIN US
          </YellowButton>
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