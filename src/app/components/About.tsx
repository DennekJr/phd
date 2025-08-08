import Image from 'next/image';

export default function About() {
  const images = [
    { src: '/images/about/image-one.png', alt: 'Nigerian female academic 1', width: 375, height: 249 },
    { src: '/images/about/image-two.jpg', alt: 'Nigerian female academic 2', width: 347, height: 231 },
    { src: '/images/about/image-three.jpg', alt: 'Nigerian female academic 3', width: 372, height: 558 },
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
    <section className="relative !bg-[#ffffff] !px-[20px] md:!px-[75px] !py-[50px] lg:!py-[127px]">
      <div className="relative mx-auto">
        {/* About Title and Heading - Only visible on small screens */}
        <div className="mb-8 lg:mb-16 lg:hidden">
          <div className="inline-block">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-[#EFB025] font-bold !text-[20px] md:!text-[24px] !leading-[100%] !tracking-[0%]">
              About
            </span>
          </div>

          <h2 className="font-bold whitespace-nowrap max-w-[709px] !text-[30px] md:!text-[36px] xl:!text-[48px] !leading-[100%] !tracking-[0%] text-[#222121] md:!mt-[10px] !mb-[26px]">
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
                      <Image
                        src={images[i].src}
                        alt={images[i].alt}
                        fill
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
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
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
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-[#EFB025] font-bold !text-[20px] md:!text-[24px] !leading-[100%] !tracking-[0%]">
                  About
                </span>
              </div>

              <h2 className="font-bold whitespace-nowrap max-w-[709px] !text-[30px] md:!text-[36px] xl:!text-[48px] !leading-[100%] !tracking-[0%] text-[#222121] md:!mt-[10px] !mb-[26px]">
                Fostering<br />
                Academic Excellence & <br />
                Socioeconomic Growth.
              </h2>
            </div>

            <div className="!space-y-[14px] lg:!space-y-[20px]">
              {ideals.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start !gap-[16px] lg:!gap-4">
                      <div className="flex-shrink-0 w-[16px] h-[20px] flex items-center justify-center">
                        <Image src={'/images/about/red-checkmark.svg'} className='lg:w-[16px] w-[12px] lg:h-[20px] h-[14px]' width={16} height={20} alt='Red checkmark' />
                      </div>
                      <div className='flex'>
                        <p className="text-[#222121] font-light !text-[16px] lg:!text-[24px] !leading-[100%] !tracking-[0%]">
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
      <div className='flex flex-col gap-[20px]'>
        <Image src={'/images/about/branch.svg'} alt='Branch image' width={180} height={244} className='object-cover w-[180px] h-[244px] absolute top-[267px] right-0 lg:block hidden' />
        <Image src={'/images/about/flag.svg'} alt='Flag image' width={144} height={148} className='object-cover w-[65px] lg:w-[144px] h-[66px] lg:h-[148px] absolute bottom-[353px] lg:bottom-[143px] right-[60px] lg:right-[724px]' />
        <Image src={'/images/about/flower.svg'} alt='Flower image' width={144} height={145} className='object-cover w-[64px] lg:w-[144px] h-[65px] lg:h-[145px] absolute top-[270px] lg:top-[57px] left-[40px] lg:left-0' />
      </div>
    </section>
  );
} 