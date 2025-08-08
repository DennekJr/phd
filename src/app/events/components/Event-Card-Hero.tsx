"use client";

import YellowButton from "@/app/components/YellowButton";
import Image from "next/image";

export default function EventCardHero() {
    const timeline = [
        {
            tracker: "27 June",
            icon: "/images/events/calender-icon.svg",
        },
        {
            tracker: "7PM",
            icon: "/images/events/time-icon.svg",
        }
    ]
    const handleBecomeMember = () => {
        window.location.href = "mailto:NENFPHAS@gmail.com?subject=Membership%20Enquiry&body=Hello%20NNFPHAS%2C%0D%0A%0D%0AI'd%20like%20to%20become%20a%20member.%20Please%20share%20the%20next%20steps.%0D%0A%0D%0AThank%20you.";
    };
    return (
        <div className="bg-[#FFFFFF] lg:mx-0 lg:px-0 !mx-[20px] !px-[20px] flex flex-col-reverse lg:flex-row items-start justify-between !py-[18px] !gap-[20px] lg:!gap-[41px]">
            <div className="flex flex-col max-w-[576px] items-start justify-start gap-[20px] lg:!pl-[37px]">
                <h1 className="text-[#232427] whitespace-nowrap !text-left !text-[36px] !leading-[100%] font-bold">
                    "Meet the Mentors" Mixer
                </h1>
                <div className="flex items-center gap-[20px]">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex items-center gap-[10px]">
                            <Image src={item.icon} alt={item.tracker} width={18} height={20} />
                            <p className="text-[#232427] text-[16px] !leading-[100%] font-semibold">{item.tracker}</p>
                        </div>
                    ))}
                </div>
                <p className="text-[#232427] !text-[16px] !leading-[24px] lg:!leading-[120%] !tracking-[0.01em] font-light text-left">
                    An evening mixer in Lekki, Lagos, offering a relaxed environment for emerging female scholars to connect with experienced PhD holders for mentorship and career advice.
                </p>
                <div>
                    <YellowButton onClick={handleBecomeMember}>Become a Member</YellowButton>
                </div>
            </div>
            <div className="!pr-[16px] w-full">
                <Image
                    src="/images/events/event-card-image.svg"
                    alt="Event card hero"
                    width={428}
                    height={305}
                    className="object-cover w-full lg:w-auto h-auto"
                />
            </div>
        </div>
    )
}