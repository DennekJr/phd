import YellowButton from "./YellowButton";
import SmartImage from "@/app/components/SmartImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-[100vh]">
        {/* Background Image */}
        <SmartImage
          src="/images/hero.webp"
          alt="Nigerian female PhD holders at graduation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
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
      <div className="relative bottom-[9.375rem] z-10 container mx-auto !px-[1.25rem] md:!px-[4.6875rem] py-20">
        <div className="max-w-[22.5rem] md:max-w-[47.5rem]">
          {/* Small heading */}
          <p className="text-white !text-[1.5rem] md:!text-[2rem] !leading-[100%] !tracking-[0%] mb-[0.625rem] font-bold">
            Network for
          </p>
          
          {/* Main heading */}
          <h1 className="!text-[2.25rem] md:!text-[3.75rem] !leading-[2.5rem] md:!leading-[5rem] !tracking-[0%] font-bold text-white !mb-[0.375rem] md:!mb-[0.75rem]">
            Nigerian Female<br />
            PHD Holders in<br />
            <span className="uppercase">ARTS & SCIENCES</span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-[34.125rem] !text-[1rem] md:!text-[1.25rem] !leading-[1.625rem] md:!leading-[1.75rem] !tracking-[0%] md:!pb-[3.125rem] !pb-[1.625rem] !font-light text-white">
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
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 