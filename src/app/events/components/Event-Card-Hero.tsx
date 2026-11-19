"use client";

import YellowButton from "@/app/components/YellowButton";
import Image from "next/image";
import SmartImage from "@/app/components/SmartImage";

export default function EventCardHero() {
    const upcomingHighlights = [
        "NENFPHAS Annual Conference is expected October 2027 in Abuja",
        "Online seminars for members",
        "Mentoring programs for young promising females",
        "More exciting events",
    ];

    const handleBecomeMember = () => {
        window.location.href =
            "mailto:NENFPHAS@gmail.com?subject=Membership%20Enquiry&body=Hello%20NENFPHAS%2C%0D%0A%0D%0AI'd%20like%20to%20become%20a%20member.%20Please%20share%20the%20next%20steps.%0D%0A%0D%0AThank%20you.";
    };

    return (
        <div className="bg-[#FFFFFF] lg:mx-0 lg:px-0 !mx-[1.25rem] !px-[1.25rem] flex flex-col-reverse lg:flex-row items-start justify-between !py-[1.125rem] !gap-[1.25rem] lg:!gap-[2.5625rem]">
            <div className="flex flex-col sm:max-w-[36rem] items-start justify-start gap-[1.25rem] lg:!pl-[2.3125rem]">
                <h1 className="text-[#232427] sm:whitespace-nowrap !text-left !text-[2.25rem] !leading-[100%] font-bold">
                    Upcoming Events
                </h1>
                <div className="flex items-center gap-[1.25rem]">
                    <div className="flex items-center gap-[0.625rem]">
                        <Image
                            src={"/images/events/calender-icon.svg"}
                            alt={"calendar-icon"}
                            width={18}
                            height={20}
                        />
                        <p className="text-[#232427] text-[1rem] !leading-[100%] font-semibold">
                            Coming Soon
                        </p>
                    </div>
                </div>
                <ul className="flex flex-col gap-[0.625rem] text-[#232427] !text-[1rem] !leading-[1.5rem] !tracking-[0.01em] font-light text-left list-disc !pl-[1.25rem]">
                    {upcomingHighlights.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div>
                    <YellowButton onClick={handleBecomeMember}>
                        Become a Member
                    </YellowButton>
                </div>
            </div>
            <div className="!pr-[1rem] w-full">
                <SmartImage
                    src="/images/events/event-card-image.svg"
                    alt="Event card hero"
                    width={428}
                    height={305}
                    tone="light"
                    sizes="(max-width: 1024px) 100vw, 27rem"
                    wrapperClassName="w-full lg:w-auto"
                    className="object-cover w-full lg:w-auto h-auto"
                />
            </div>
        </div>
    );
}
