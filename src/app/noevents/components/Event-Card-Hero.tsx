import YellowButton from "@/app/components/YellowButton";
import Image from "next/image";

export default function EventCardHero() {
  return (
    <div className="bg-[#161617] flex flex-col md:flex-row items-start justify-between !py-[18px] !gap-[4px]">
      <div className="!px-[37px] !py-[57px]">
        <h1 className="!text-[24px] md:!text-[36px] text-left !font-bold !leading-[100%] !mb-[20px] w-full h-full">
          No Upcoming Events
        </h1>
        <p className="text-[16px] text-left !font-light !leading-[100%] !mb-[20px]">
          Join now to get updates on when we have events{" "}
        </p>
        <YellowButton className="w-full">BECOME A MEMBER</YellowButton>
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
  );
}
