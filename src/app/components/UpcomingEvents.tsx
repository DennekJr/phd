import Image from 'next/image';
import Link from 'next/link';
import SmartImage from "@/app/components/SmartImage";

export default function UpcomingEvents({ showAllEvents = false }: { showAllEvents?: boolean }) {
    const events = [
        {
            date: {
                month: 'Oct',
                day: '22'
            },
            time: '7:00 pm',
            title: 'NENFPHAS Inauguration',
            description: `A landmark two-day inauguration ceremony on October 22nd & 23rd, 2026, at a top-notch hotel in Abuja (full address to be announced). The inauguration will showcase:
• Presentation of Members & Trustees
• Paper presentations by top successful Nigerian women
• Scholarship awards — Bachelor's, Master's, and Doctorate degrees for deserving indigent students
• Awards Night featuring:
  – Female Youth Academic Excellence Awards
  – Professionals & Distinguished Honour's Awards
  – Distinguished Honour's Awards to male-driven organisations impacting women's education and empowerment
• Gala Night`,
            image: '/images/upcoming-events/event-three.webp'
        },
        {
            date: {
                month: 'Aug',
                day: '27'
            },
            time: '7:00 pm',
            title: 'Annual NENFPHAS Research Symposium',
            description: 'A full-day symposium showcasing cutting-edge research by Nigerian female PhD holders across various disciplines.',
            image: '/images/upcoming-events/event-one.webp'
        },
        {
            date: {
                month: 'Sep',
                day: '3'
            },
            time: '7:00 pm',
            title: '"Meet the Mentors" Networking Mixer',
            description: 'An evening mixer, offering a relaxed environment for emerging female scholars to connect with experienced PhD holders for mentorship and career advice.',
            image: '/images/upcoming-events/event-two.webp'
        },
        {
            date: {
                month: 'Sep',
                day: '3'
            },
            time: '7:00 pm',
            title: 'Virtual Grant Writing Workshop: Securing International Funding',
            description: 'An online workshop providing practical strategies and insights for Nigerian female academics seeking international research grants.',
            image: '/images/upcoming-events/event-three.webp'
        },
        {
            date: {
                month: 'Sep',
                day: '30'
            },
            time: '7:00 pm',
            title: 'Online Professional Development Series: Publishing in High-Impact Journals',
            description: 'A virtual session offering practical advice and strategies for Nigerian female PhD holders aiming to publish their research in reputable international journals.',
            image: '/images/upcoming-events/event-four.webp'
        },
    ];

    return (
        <section className="relative flex items-center justify-center bg-[#161617] !pt-[8rem] !pb-[6.25rem] lg:!pb-[8.4375rem] !px-[1.25rem] lg:!px-[6.25rem] xxl:!px-[12.75rem]">
            {/* Decorative arrow */}
            <div className="mx-auto relative w-full max-w-[120rem]">
                {/* Header */}
                {!showAllEvents && <div className="w-full relative">
                    <div className="text-center !mb-[5rem] lg:!mb-[8rem]">
                        <p className="text-white !text-[1.25rem] lg:!text-[1.5rem] font-light !mb-[1.25rem] !leading-[150%] !tracking-[0%]">
                            Discover the exciting events and opportunities we have planned.
                        </p>
                        <h2 className="!text-[1.5rem] lg:!text-[3rem] font-bold text-[#FDC182] !leading-[100%] !tracking-[0%]">
                            Upcoming Events
                        </h2>
                    </div>
                    <div className="absolute top-0 right-0 lg:block hidden">
                        <Image
                            src="/images/upcoming-events/downward-arrow.svg"
                            alt="Decorative arrow"
                            width={178}
                            height={191}
                            className="!w-[11.125rem] !h-[11.9375rem]"
                        />
                    </div>
                </div>}

                {/* Events List */}
                <div className="flex flex-col !gap-[3rem] lg:!gap-[4rem]">
                    {events.slice(0, showAllEvents ? events.length : 3).map((event, index) => (
                        <div key={index} className="flex flex-col-reverse lg:flex-row items-start !gap-[1.5rem] lg:!gap-[2.5rem] transition-colors duration-300 !pb-[3rem] lg:!pb-[4rem] lg:border-b border-[#454545] last:border-b-0 last:!pb-0">
                            {/* Date Block */}
                            <div className="lg:block hidden shrink-0">
                                <div className="bg-[#AD0000] text-white text-center w-[6.375rem] h-[4.875rem] flex flex-col justify-center">
                                    <div className="text-[0.875rem] lg:text-[1.25rem] font-bold !leading-[100%] !tracking-[0%]">Coming</div>
                                </div>
                                <div className="bg-[#FDC182] text-[#000000] text-center !text-[0.75rem] lg:!text-[0.875rem] font-bold !py-[0.625rem] !px-[1.3125rem]">
                                    Soon
                                </div>
                            </div>

                            {/* Event Content */}
                            <div className="flex-grow min-w-0">
                                <h3 className="flex w-full justify-between items-start !gap-[1rem] text-[1.5rem] lg:text-[2rem] font-bold text-white !mb-[1.25rem] !leading-[125%] !tracking-[0%]">
                                    {event.title}
                                    <div className="lg:hidden block w-fit">
                                        <div className="bg-[#AD0000] text-white text-center w-[4.0625rem] lg:w-[6.375rem] h-[3.125rem] lg:h-[4.875rem] flex flex-col justify-center">
                                            <div className="text-[0.875rem] lg:text-[1.25rem] font-bold !leading-[100%] !tracking-[0%]">Coming</div>
                                        </div>
                                        <div className="bg-[#FDC182] text-[#000000] text-center !text-[0.75rem] lg:!text-[0.875rem] font-bold !py-[0.3125rem] lg:!py-[0.625rem] !px-[0.5rem] lg:!px-[1.3125rem]">
                                            Soon
                                        </div>
                                    </div>
                                </h3>
                                <p className="text-[1rem] font-light text-[#FFFFFF] max-w-[62rem] !leading-[170%] !tracking-[0%] whitespace-pre-line">
                                    {event.description}
                                </p>
                            </div>

                            {/* Event Image */}
                            <div className="flex-shrink-0 w-full lg:w-fit lg:block">
                                <div className="relative w-full md:w-[20.6875rem] h-[12.6875rem]">
                                    {/* Event image - positioned behind the card frame */}
                                    <div className="">
                                        <SmartImage
                                            src={event.image}
                                            alt={event.title}
                                            width={331}
                                            height={203}
                                            sizes="(max-width: 1024px) 100vw, 21rem"
                                            wrapperClassName="w-full lg:w-[20.6875rem] h-[12.6875rem]"
                                            className="w-full lg:w-[20.6875rem] h-[12.6875rem] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Events Button */}
                {!showAllEvents && (
                    <div className="text-center !mt-[6.25rem] lg:!mt-[8.4375rem]">
                        <Link
                            href="/events"
                            className="inline-block border-[2px] border-white text-white !px-[4.375rem] !py-[1.25rem] rounded-[4px] font-bold text-[1rem] hover:bg-white hover:text-[#2A2A2A] transition-colors duration-300"
                        >
                            SEE ALL EVENTS
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
