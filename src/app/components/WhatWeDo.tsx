import Image from "next/image";

export default function WhatWeDo() {
  const activities = [
    {
      icon: '/images/what-we-do/card-one.svg',
      title: "Sponsoring Future Scholars",
      description: 'We are committed to sponsoring 2 to 5 "indigent" female doctorate students each year, providing vital support for their research and academic journeys.'
    },
    {
      icon: '/images/what-we-do/card-two.svg',
      title: "Recognizing Top Talent",
      description: "We proudly acknowledge and award academic excellence to the brightest Nigerian female minds, including the best performers in:",
      descriptionTwo: "WAEC/GCE, Nigerian Medical & Dental Council exams, Nigerian Law School, ICAN, Pharmaceutical Board exams, Key academic disciplines like Economics, Statistics, Mathematics, English, and IT."
    },
    {
      icon: '/images/what-we-do/card-three.svg',
      title: "Fostering Competition",
      description: "We organize and conduct academic competitions to encourage intellectual rigor and celebrate scholarly achievement."
    },
    {
      icon: '/images/what-we-do/card-four.svg',
      title: "Driving Research Initiatives",
      description: "We conduct individual and group research projects, contributing to knowledge creation and addressing critical issues."
    },
    {
      icon: '/images/what-we-do/card-five.svg',
      title: "Securing Resources",
      description: "We actively seek funding to support our programs and expand our impact."
    },
    {
      icon: '/images/what-we-do/card-six.svg',
      title: "Building Global Connections",
      description: "We aim to affiliate with international organizations, fostering global collaboration and opportunities for our members."
    },
    {
      icon: '/images/what-we-do/card-seven.svg',
      title: "Supporting Scholarly Output",
      description: "We organize and conduct academic competitions to encourage intellectual rigor and celebrate scholarly achievement."
    },
    {
      icon: '/images/what-we-do/card-eight.svg',
      title: "Engaging in Professional Development",
      description: "We organize and attend seminars and conferences, promoting continuous learning and knowledge exchange within the academic community."
    }
  ];

  return (
    <section className="relative flex items-center justify-center bg-white !pt-[125px] !pb-[146px] !px-[76px]">
      <div className="mx-auto max-w-[1920px]">
        {/* Header */}
        <div className="text-center !mb-[135px]">
          <h2 className="text-[48px] font-bold text-[#222121] leading-[100%] flex items-center justify-center gap-2">
            What We Do
            <Image src={'/images/what-we-do/stars.svg'} alt='Title Icon' width={88} height={91} className="!w-[88px] !h-[91px]" />
          </h2>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-[70px]">
          {activities.map((activity, index) => (
            <div key={index} className="bg-[#F9F5F2] w-full min-h-[510px] !px-[23px] !py-[53px] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="!mb-4">
                <Image src={activity.icon} alt={activity.title} width={45} height={45} />
              </div>
              <h3 className="text-[24px] font-semibold text-[#222121] !mb-6 !leading-[100%] !tracking-[0%]">
                {activity.title}
              </h3>
              <p className="text-[16px] font-light text-[#222121] !leading-[28px] !tracking-[0%]">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 