import Image from "next/image";
import { Playwrite_CA } from "next/font/google";

export default function Hero() {
  const image = {
    src: "/images/our-team/Adaeze-Patricia-Esenwah.png",
    alt: "Nigerian female academic 1",
    width: 645,
    height: 660,
  };
  const experience = [
    {
      title: "Socio-economic Policy Expertise",
      description:
        "Specializes in socio-economic policy analysis for developing countries, with a significant emphasis on youth and women empowerment and poverty reduction, drawing from her PhD research from the University of Bristol.",
    },
    {
      title: "Extensive Public Service Career",
      description:
        "Meritoriously served the Central Bank of Nigeria for 34 years, retiring in 2023 from an executive cadre position, and now provides private consultation on socio-economic policy.",
    },
    {
      title: "Academic and Professional Development",
      description:
        "Holds a Doctor of Social Science in Policy from the University of Bristol, an M.A. in International Development Studies from the University of Bradford, and earlier qualifications in Agricultural Cooperatives and Cooperative Economics and Management",
    },
  ];
  return (
    <section className="relative !bg-[#ffffff] !py-[150px] lg:!py-[182px]">
      <div className="relative mx-auto !mt-[px] !mb-[62px] lg:!pl-[75px]  lg:!pr-[197px]">
        <div className="!mb-[50px] lg:!mb-[137px] !px-[50px]">
          <div className="w-full flex f justify-center gap-4">
            <h1 className="text-[24px] lg:text-[48px] font-bold text-[#232427] leading-[100%]">
              Meet our team
            </h1>
            <Image
              src="/images/our-team/heart.svg"
              alt="heart image"
              width={45}
              height={57}
              className="object-cover w-[30px] h-[38px] lg:w-[45px] lg:h-[57px]"
              priority
            />
          </div>
          <p className="text-center font-light text-[16px] lg:text-[24px] text-[#454545]">
            Get to know the dedicated individuals who drive the mission of
            NENFPHAS
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch ">
          {/* only visible for mobile view */}
          <div className="inline-block ">
            <span className="text-[#000000] font-bold text-[16px] !leading-[100%] !tracking-[0%] !mx-[28px] lg:hidden ">
              Dr. Ada Esenwah
            </span>
          </div>
          {/* Dynamic Images Grid */}
          <div className="relative  w-full h-full flex justify-center md:justify-start lg:justify-center md:!pl-[28px]">
            <div
              className="group relative w-full  max-w-[343px] h-[351px] lg:max-w-[645px] lg:h-[660px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute bg-white !p-[9px] !m-[20px] lg:!p-[15px] lg:!m-[40px] font-bold rounded-[3px] !text-[10px] lg:!text-[16px]">
                CEO & PRESIDENT
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="relative justify-start gap-[26px] !mx-[28px] ">
            {/* only visible for desktop view */}
            <div className="inline-block ">
              <span className="text-[#000000] font-bold text-[24px] !leading-[100%] !tracking-[0%]  hidden lg:inline-block">
                Dr. Ada Esenwah
              </span>
            </div>

            <p className="font-light whitespace max-w-[709px] lg:!text-[16px] !text-[16px] !leading-7 !tracking-[0%] text-[#222121] ">
              Dr. Ada Esenwah is a distinguished Socio-economic Policy Analyst
              with a strong focus on socio-economic growth in developing
              countries, particularly Nigeria. Her work emphasizes youth and
              women empowerment and poverty reduction, stemming from her
              doctoral research on "Youth Poverty Reduction in Nigeria: Policy
              Perspective." She is also an accomplished author, editor, and
              organizer of national and international seminars and conferences.
            </p>

            <div className="!space-y-[20px]">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-[#000000] font-bold text-[16px] lg:text-[24px] !leading-16 !tracking-[0%]">
                Experience
              </span>
              {experience.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="relative ">
                    <div className="flex items-start !gap-4">
                      <div className="flex-shrink-0 w-[16px] h-[20px] flex items-center justify-center !pt-[10px]">
                        <Image
                          src={"/images/about/red-checkmark.svg"}
                          width={16}
                          height={20}
                          alt="Red checkmark"
                        />
                      </div>
                      <div className="flex">
                        <p className="text-[#222121] font-light !text-[16px] !leading-7 !tracking-[0%]">
                          <span className="font-medium">{item.title}:</span>{" "}
                          {item.description}
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

      <div></div>
    </section>
  );
}
