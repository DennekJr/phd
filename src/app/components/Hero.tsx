import YellowButton from "./YellowButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-[100vh]">
        {/* Background Image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero.jpg)'
          }}
        />
        
        {/* Black Gradient Overlay - 70% left to 0% right */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative bottom-[150px] z-10 container mx-auto !px-[20px] md:!px-[75px] py-20">
        <div className="max-w-[360px] md:max-w-[760px]">
          {/* Small heading */}
          <p className="text-white !text-[24px] md:!text-[32px] !leading-[100%] !tracking-[0%] mb-[10px] font-bold">
            Network for
          </p>
          
          {/* Main heading */}
          <h1 className="!text-[36px] md:!text-[60px] !leading-[80px] !tracking-[0%] font-bold text-white !mb-[6px] md:!mb-[12px]">
            Nigerian Female<br />
            PHD Holders in<br />
            <span className="uppercase">ARTS & SCIENCES</span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-[546px] !text-[16px] md:!text-[20px] !leading-[26px] md:!leading-[28px] !tracking-[0%] md:!pb-[50px] !pb-[26px] !font-light text-white">
          Empowering Nigerian women with Doctorate degrees in various fields of study for National development.
          </p>
          
          {/* CTA Button */}
          <a href="mailto:NENFPHAS@gmail.com">
            <YellowButton>
              Join Us
            </YellowButton>
          </a>
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