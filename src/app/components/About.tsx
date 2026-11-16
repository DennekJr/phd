import Image from 'next/image';
import SmartImage from "@/app/components/SmartImage";

export default function About() {
  const images = [
    { src: '/images/about/image-one.webp', alt: 'Nigerian female academic 1', width: 375, height: 249 },
    { src: '/images/about/image-two.webp', alt: 'Nigerian female academic 2', width: 347, height: 231 },
    { src: '/images/about/image-three.webp', alt: 'Nigerian female academic 3', width: 372, height: 558 },
  ]

  const coreIdeals = [
    {
      title: 'Our Mission',
      description: 'To unite and empower Nigerian female PhD holders to advance academic excellence, research, mentorship, leadership and service for national development.',
    },
    {
      title: 'Our Vision',
      description: 'To be Nigeria’s foremost network of female scholars, advancing knowledge, leadership and transformative impact for a better nation.',
    },
    {
      title: 'Our Motto',
      description: 'Knowledge • Excellence • Leadership • Service',
    },
    {
      title: 'Our Goal',
      description: 'To promote, recognise and harness female academic excellence, scholarship and leadership for Nigeria’s socioeconomic development.',
    }
  ]

  const objectives = [
    "Promote and celebrate female academic excellence by recognising outstanding achievements in education, research, scholarship and professional life.",
    "Advance research and knowledge creation through multidisciplinary collaboration, scholarly publications, conferences, seminars and intellectual exchange.",
    "Mentor and develop the next generation of female scholars by connecting accomplished female PhD holders with younger women and girls pursuing academic and professional excellence.",
    "Support academically outstanding but financially disadvantaged young women through scholarships and other educational opportunities.",
    "Promote women’s leadership and professional advancement in academia, public service, industry, research and national institutions.",
    "Harness the expertise of Nigerian female PhD holders for national development through policy dialogue, advisory services, research and evidence-based solutions to socioeconomic challenges.",
    "Build strategic national and international partnerships with universities, government institutions, development organisations, professional bodies and the private sector.",
    "Advocate for equitable opportunities for women and girls in education, research and leadership, particularly in areas where they remain underrepresented."
  ];

  return (
    <section id="about" className="relative scroll-mt-[7rem] !bg-[#ffffff] !px-[1.25rem] md:!px-[4.6875rem] !py-[3.125rem] lg:!py-[7.9375rem]">
      <div className="relative mx-auto max-w-[78.125rem]">
        
        {/* Mobile Heading */}
        <div className="mb-8 lg:mb-16 lg:hidden">
          <div className="inline-block">
            <span className="text-[#EFB025] font-bold !text-[1.25rem] md:!text-[1.5rem] !leading-[100%]">
              About Us
            </span>
          </div>
          <h2 className="font-bold max-w-[44.3125rem] !text-[1.875rem] md:!text-[2.25rem] text-[#222121] md:!mt-[0.625rem] !mb-[1.625rem]">
            Fostering<br />
            Academic Excellence & <br />
            Socioeconomic Growth.
          </h2>
        </div>

        {/* Top Grid: Images & Core Ideals (Mission, Vision, Motto, Goal) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Images Grid */}
          <div className="relative order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="group relative aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative h-full bg-white/10 backdrop-blur-md overflow-hidden border border-white/10 shadow-xl transform hover:scale-105 hover:-rotate-2 transition-all duration-500">
                      <SmartImage
                        src={images[i].src}
                        alt={images[i].alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="group relative aspect-[1/2]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative h-full bg-white/10 backdrop-blur-md overflow-hidden border border-white/10 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <SmartImage
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Ideals Content */}
          <div className="relative order-2">
            <div className="hidden lg:block">
              <div className="inline-block">
                <span className="text-[#EFB025] font-bold !text-[1.25rem] md:!text-[1.5rem] !leading-[100%]">
                  About Us
                </span>
              </div>
              <h2 className="font-bold max-w-[44.3125rem] !text-[1.875rem] md:!text-[2.25rem] xl:!text-[3rem] text-[#222121] md:!mt-[0.625rem] !mb-[1.625rem]">
                Fostering<br />
                Academic Excellence & <br />
                Socioeconomic Growth.
              </h2>
            </div>

            <div className="!space-y-[0.875rem] lg:!space-y-[1.25rem]">
              {coreIdeals.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="relative border border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start !gap-[1rem] lg:!gap-4">
                      <div className="flex-shrink-0 w-[1rem] h-[1.25rem] flex items-center justify-center">
                        <Image src={'/images/about/red-checkmark.svg'} className='lg:w-[1rem] w-[0.75rem] lg:h-[1.25rem] h-[0.875rem]' width={16} height={20} alt='Red checkmark' />
                      </div>
                      <div className='flex'>
                        <p className="text-[#222121] font-light !text-[1rem] lg:!text-[1.25rem] xl:!text-[1.35rem] !leading-[1.5rem]">
                          <span className='font-medium'>{item.title}:</span> {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Aspiration & Objectives Grid */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          
          {/* Aspiration Banner */}
          <div className="bg-[#FBF7ED] !p-8 rounded-2xl mb-12 text-center max-w-3xl mx-auto border border-[#EFB025]/20 shadow-sm">
            <h3 className="text-[#EFB025] font-bold text-xl uppercase tracking-wider mb-2">Our Aspiration</h3>
            <p className="text-[#222121] font-semibold text-2xl">A Better Nigeria</p>
          </div>

          {/* Objectives Grid */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#222121] mb-8 text-center">Our Core Objectives</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {objectives.map((obj, index) => (
                <div key={index} className="bg-[#FBF7ED]/50 border border-gray-100 !p-6 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#EFB025]/20 text-[#AD0000] font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-[#454545] font-light text-[0.95rem] lg:text-[1.05rem] leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Decorative Background Assets */}
      <div className='flex flex-col gap-[1.25rem]'>
        <Image src={'/images/about/branch.svg'} alt='Branch image' width={180} height={244} className='object-cover w-[11.25rem] h-[15.25rem] absolute top-[16.6875rem] right-0 lg:block hidden' />
        <Image src={'/images/about/flag.svg'} alt='Flag image' width={144} height={148} className='object-cover w-[4.0625rem] lg:w-[9rem] h-[4.125rem] lg:h-[9.25rem] absolute bottom-[40rem] lg:bottom-[28rem] right-[3.75rem] lg:right-[45.25rem]' />
        <Image src={'/images/about/flower.svg'} alt='Flower image' width={144} height={145} className='object-cover w-[4rem] lg:w-[9rem] h-[4.0625rem] lg:h-[9.0625rem] absolute top-[16.875rem] lg:top-[3.5625rem] left-[2.5rem] lg:left-0' />
      </div>
    </section>
  );
}
