import Image from 'next/image';

export default function UpcomingEvents({ showAllEvents = false }: { showAllEvents?: boolean }) {
    const events = [
        {
            date: {
                month: 'Aug',
                day: '27'
            },
            time: '7:00 pm',
            title: 'Annual NENFPHAS Research Symposium',
            description: 'A full-day symposium showcasing cutting-edge research by Nigerian female PhD holders across various disciplines.',
            image: '/images/upcoming-events/event-one.jpg'
        },
        {
            date: {
                month: 'Sep',
                day: '3'
            },
            time: '7:00 pm',
            title: '"Meet the Mentors" Networking Mixer',
            description: 'An evening mixer, offering a relaxed environment for emerging female scholars to connect with experienced PhD holders for mentorship and career advice.',
            image: '/images/upcoming-events/event-two.jpg'
        },
        {
            date: {
                month: 'Sep',
                day: '3'
            },
            time: '7:00 pm',
            title: 'Virtual Grant Writing Workshop: Securing International Funding',
            description: 'An online workshop providing practical strategies and insights for Nigerian female academics seeking international research grants.',
            image: '/images/upcoming-events/event-three.jpg'
        },
        {
            date: {
                month: 'Sep',
                day: '30'
            },
            time: '7:00 pm',
            title: 'Online Professional Development Series: Publishing in High-Impact Journals',
            description: 'A virtual session offering practical advice and strategies for Nigerian female PhD holders aiming to publish their research in reputable international journals.',
            image: '/images/upcoming-events/event-four.png'
        },
        {
            date: {
                month: 'Oct',
                day: '8'
            },
            time: '7:00 pm',
            title: 'Annual NENFPHAS Gala & Scholarship Awards Night',
            description: 'Description: An elegant evening in Lagos celebrating academic achievements and recognizing our annual scholarship recipients. Features a keynote address and networking opportunities.',
            image: '/images/upcoming-events/event-three.jpg'
        },

    ];

    return (
        <section className="relative flex items-center justify-center bg-[#161617] !pt-[128px] !pb-[100px] lg:!pb-[135px] !px-[20px] lg:!px-[100px] xxl:!px-[204px]">
            {/* Decorative arrow */}
            <div className="mx-auto relative max-w-[1920px]">
                {/* Header */}
                {!showAllEvents && <div className="w-full relative">
                    <div className="text-center !mb-[100px] lg:!mb-[182px]">
                        <p className="text-white !text-[20px] lg:!text-[24px] font-light mb-4 !leading-[100%] !tracking-[0%]">
                            Discover the exciting events and opportunities we have planned.
                        </p>
                        <h2 className="!text-[24px] lg:!text-[48px] font-bold text-[#FDC182] !leading-[100%] !tracking-[0%]">
                            Upcoming Events
                        </h2>
                    </div>
                    <div className="absolute top-0 right-0 lg:block hidden">
                        <Image
                            src="/images/upcoming-events/downward-arrow.svg"
                            alt="Decorative arrow"
                            width={178}
                            height={191}
                            className="!w-[178px] !h-[191px]"
                        />
                    </div>
                </div>}

                {/* Events List */}
                <div className="space-y-12">
                    {events.slice(0, showAllEvents ? events.length : 3).map((event, index) => (
                        <div key={index} style={{ paddingTop: index === 0 ? '0px' : '40px' }} className="flex flex-col-reverse lg:flex-row items-start gap-[12px] lg:gap-8 transition-colors duration-300 !pb-[40px] lg:border-b border-[#454545]">
                            {/* Date Block */}
                            <div className="!py-[20px] lg:block hidden">
                                <div className="bg-[#AD0000] text-white text-center w-[102px] h-[78px] flex flex-col justify-center">
                                    {/* <div className="text-[14px] font-medium !leading-[100%] !tracking-[0%]">{event.date.month}</div>
                                    <div className="text-[32px] font-bold !leading-[100%] !tracking-[0%]">{event.date.day}</div> */}
                                    <div className="text-[20px] font-bold !leading-[100%] !tracking-[0%]">Coming</div>
                                </div>
                                <div className="bg-[#FDC182] text-[#000000] text-center text-[14px] font-bold !py-[10px] !px-[21px]">
                                    Soon
                                </div>
                            </div>

                            {/* Event Content */}
                            <div className="flex-grow lg:!py-[20px]">
                                <h3 className="flex w-full justify-between items-center text-[24px] lg:text-[32px] font-bold text-white !mb-[14px] !leading-[100%] !tracking-[0%]">
                                    {event.title}
                                    <div className="lg:hidden block w-fit">
                                        <div className="bg-[#AD0000] text-white text-center w-[65px] lg:w-[102px] h-[50px] lg:h-[78px] flex flex-col justify-center">
                                            {/* <div className="text-[14px] font-medium !leading-[100%] !tracking-[0%]">{event.date.month}</div>
                                            <div className="text-[20px] lg:text-[32px] font-bold !leading-[100%] !tracking-[0%]">{event.date.day}</div> */}
                                            <div className="text-[14px] lg:text-[20px] font-bold !leading-[100%] !tracking-[0%]">Coming</div>
                                        </div>
                                        <div className="bg-[#FDC182] text-[#000000] text-center !text-[12px] lg:!text-[14px] font-bold !py-[5px] lg:!py-[10px] !px-[8px] lg:!px-[21px]">
                                            Soon
                                        </div>
                                    </div>
                                </h3>
                                <p className="text-[16px] font-light text-[#FFFFFF] lg:!mb-[34px] !leading-[24px] lg:!leading-[100%] !tracking-[0%]">
                                    {event.description}
                                </p>
                            </div>

                            {/* Event Image */}
                            <div className="flex-shrink-0 w-full md:w-fit md:block">
                                <div className="relative w-full md:w-[331px] h-[203px]">
                                    {/* Event image - positioned behind the card frame */}
                                    <div className="">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={331}
                                            height={203}
                                            className="w-full md:w-[331px] h-[203px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Events Button */}
                {!showAllEvents && (
                    <div className="text-center !mt-[100px] lg:!mt-[135px]">
                        <button className="border-[2px] hover:cursor-pointer border-white text-white !px-[70px] !py-[20px] rounded-[4px] font-bold text-[16px] hover:bg-white hover:text-[#2A2A2A] transition-colors duration-300">
                            SEE ALL EVENTS
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
} 