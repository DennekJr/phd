"use client"

import Image from "next/image";
import { useRef, useState } from "react";

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

  // Mobile carousel state/refs
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    let nearestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((el, idx) => {
      if (!el) return;
      const distance = Math.abs(el.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = idx;
      }
    });

    setActiveIdx(nearestIndex);
  };

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    const target = slideRefs.current[index];
    if (!container || !target) return;
    container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center bg-white !pt-[125px] !pb-[146px] !px-[76px]">
      <div className="mx-auto max-w-[1920px]">
        {/* Header */}
        <div className="text-center !mb-[50px] lg:!mb-[135px]">
          <h2 className="text-[24px] lg:text-[48px] font-bold text-[#222121] leading-[100%] flex items-center justify-center gap-2">
            What We Do
            <Image src={'/images/what-we-do/stars.svg'} alt='Title Icon' width={88} height={91} className="!w-[51px] lg:!w-[88px] !h-[53px] lg:!h-[91px]" />
          </h2>
        </div>

        {/* Activities - Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="w-[90vw] mx-right !px-[20px] flex overflow-x-auto gap-[22px] snap-x snap-mandatory px-2 [-webkit-overflow-scrolling:touch] scroll-smooth no-scrollbar"
          >
            {activities.map((activity, index) => (
              <div
                key={index}
                ref={(el) => { slideRefs.current[index] = el; }}
                className="snap-start shrink-0 w-[85%] first:ml-2 last:mr-2 bg-[#F9F5F2] min-h-[400px] lg:min-h-[510px] !px-[23px] !py-[53px] shadow-sm"
              >
                <div className="!mb-4">
                  <Image src={activity.icon} alt={activity.title} width={45} height={45} />
                </div>
                <h3 className="text-[24px] font-semibold text-[#222121] !mb-6 !leading-[100%] !tracking-[0%]">
                  {activity.title}
                </h3>
                <p className="text-[16px] font-light text-[#222121] !leading-[28px] !tracking-[0%]">
                  {activity.description}
                </p>
                {activity.descriptionTwo && (
                  <p className="text-[16px] font-light text-[#222121] !leading-[28px] !tracking-[0%] mt-2">
                    {activity.descriptionTwo}
                  </p>
                )}
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex items-center justify-center gap-3 !mt-[48px]">
            {activities.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full ${i === activeIdx ? 'bg-[#B00000] h-[15px] w-[15px]' : 'bg-[#D9D9D9] h-[10px] w-[10px]'}`}
              />
            ))}
          </div>
        </div>

        {/* Activities Grid - Desktop/Tablet */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-[70px]">
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
              {activity.descriptionTwo && (
                <p className="text-[16px] font-light text-[#222121] !leading-[28px] !tracking-[0%] mt-2">
                  {activity.descriptionTwo}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 