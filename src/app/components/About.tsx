import Image from 'next/image';
import SmartImage from "@/app/components/SmartImage";

export default function About() {
  const images = [
    { src: '/images/about/image-one.webp', alt: 'Nigerian female academic 1', width: 375, height: 249 },
    { src: '/images/about/image-two.webp', alt: 'Nigerian female academic 2', width: 347, height: 231 },
    { src: '/images/about/image-three.webp', alt: 'Nigerian female academic 3', width: 372, height: 558 },
  ]

  const ideals = [
    {
      title: 'Our Mission',
      description: 'To promote academic excellence for Nigerian females towards the socioeconomic development of Nigeria.',
    },
    {
      title: 'Our Motto',
      description: 'Academic Excellence',
    },
    {
      title: 'Our Goal',
      description: 'Awarding Female Academic Excellence',
    }
  ]
  return (
    <section id="about" className="relative scroll-mt-[7rem] !bg-[#ffffff] !px-[1.25rem] md:!px-[4.6875rem] !py-[3.125rem] lg:!py-[7.9375rem]">
      <div className="relative mx-auto">
        {/* About Title and Heading - Only visible on small screens */}
        <div className="mb-8 lg:mb-16 lg:hidden">
          <div className="inline-block">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-[#EFB025] font-bold !text-[1.25rem] md:!text-[1.5rem] !leading-[100%] !tracking-[0%]">
              About
            </span>
          </div>

          <h2 className="font-bold whitespace-nowrap max-w-[44.3125rem] !text-[1.875rem] md:!text-[2.25rem] xl:!text-[3rem] !leading-[100%] !tracking-[0%] text-[#222121] md:!mt-[0.625rem] !mb-[1.625rem]">
            Fostering<br />
            Academic Excellence & <br />
            Socioeconomic Growth.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dynamic Images Grid */}
          <div className="relative order-1 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* First column - Images 1 and 2 */}
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

              {/* Second column - Image 3 */}
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

          {/* Dynamic Content - Ideals */}
          <div className="relative order-2 lg:order-2">
            {/* About Title and Heading - Only visible on md screens and larger */}
            <div className="hidden lg:block">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-[#EFB025] font-bold !text-[1.25rem] md:!text-[1.5rem] !leading-[100%] !tracking-[0%]">
                  About
                </span>
              </div>

              <h2 className="font-bold whitespace-nowrap max-w-[44.3125rem] !text-[1.875rem] md:!text-[2.25rem] xl:!text-[3rem] !leading-[100%] !tracking-[0%] text-[#222121] md:!mt-[0.625rem] !mb-[1.625rem]">
                Fostering<br />
                Academic Excellence & <br />
                Socioeconomic Growth.
              </h2>
            </div>

            <div className="!space-y-[0.875rem] lg:!space-y-[1.25rem]">
              {ideals.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start !gap-[1rem] lg:!gap-4">
                      <div className="flex-shrink-0 w-[1rem] h-[1.25rem] flex items-center justify-center">
                        <Image src={'/images/about/red-checkmark.svg'} className='lg:w-[1rem] w-[0.75rem] lg:h-[1.25rem] h-[0.875rem]' width={16} height={20} alt='Red checkmark' />
                      </div>
                      <div className='flex'>
                        <p className="text-[#222121] font-light !text-[1rem] lg:!text-[1.5rem] !leading-[100%] !tracking-[0%]">
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
      </div>
      <div className='flex flex-col gap-[1.25rem]'>
        <Image src={'/images/about/branch.svg'} alt='Branch image' width={180} height={244} className='object-cover w-[11.25rem] h-[15.25rem] absolute top-[16.6875rem] right-0 lg:block hidden' />
        <Image src={'/images/about/flag.svg'} alt='Flag image' width={144} height={148} className='object-cover w-[4.0625rem] lg:w-[9rem] h-[4.125rem] lg:h-[9.25rem] absolute bottom-[22.0625rem] lg:bottom-[8.9375rem] right-[3.75rem] lg:right-[45.25rem]' />
        <Image src={'/images/about/flower.svg'} alt='Flower image' width={144} height={145} className='object-cover w-[4rem] lg:w-[9rem] h-[4.0625rem] lg:h-[9.0625rem] absolute top-[16.875rem] lg:top-[3.5625rem] left-[2.5rem] lg:left-0' />
      </div>
    </section>
  );
} 