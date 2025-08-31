import Image from "next/image";
import YellowButton from "@/app/components/YellowButton";

export default function NoEvents() {
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
            {/* No Events Card */}
            <div className="bg-[#161617] flex flex-col md:flex-row items-start justify-between !py-[18px] !gap-[4px]">
              <div className="!px-[37px] !py-[57px]">
                <h1 className="!text-[24px] md:!text-[36px] text-left !font-bold !leading-[100%] !mb-[20px] w-full h-full">
                  No Upcoming Events
                </h1>
                <p className="text-[16px] text-left !font-light !leading-[100%] !mb-[20px]">
                  Join now to get updates on when we have events{" "}
                </p>
                <YellowButton className="w-full whitespace-nowrap">
                  BECOME A MEMBER
                </YellowButton>
              </div>
              <div className=" order-first md:order-last !px-[30px]">
                <Image
                  src="/images/events/no-event.svg"
                  alt="No event image"
                  width={428}
                  height={305}
                  className="object-cover w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
