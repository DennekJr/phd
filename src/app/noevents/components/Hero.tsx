import Image from "next/image";
import EventCardHero from "./Event-Card-Hero";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-end w-full min-h-[924px] overflow-hidden !pb-[120px] !pt-[151px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/events/events-hero.jpg"
          alt="Events hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: "#000000", opacity: 0.8 }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-[48px] !text-[#FDC182] font-bold !mb-[100px] flex items-center justify-center md:!gap-[19px] !gap-[10px] ">
            Featured Events{" "}
            <span>
              <Image
                src="/images/events/featured-events-header.svg"
                alt="Events hero background"
                width={51}
                height={58}
                className="object-cover w-auto h-auto"
                priority
              />
            </span>
          </h1>
          <div className="!px-[15px]">
            <EventCardHero />
          </div>
        </div>
      </div>
    </section>
  );
}
