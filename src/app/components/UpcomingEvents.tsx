import Image from 'next/image';
import YellowButton from './YellowButton';

export default function UpcomingEvents() {
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
                day: '5'
            },
            time: '7:00 pm',
            title: '"Meet the Mentors" Networking Mixer',
            description: 'An evening mixer in Lekki, Lagos, offering a relaxed environment for emerging female scholars to connect with experienced PhD holders for mentorship and career advice.',
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
        }
    ];

    return (
        <section className="relative flex items-center justify-center bg-[#161617] !pt-[128px] !pb-[135px] lg:!px-[100px] xxl:!px-[204px]">
            {/* Decorative arrow */}
            <div className="mx-auto relative max-w-[1920px]">
                {/* Header */}
                <div className="w-full relative">
                    <div className="text-center !mb-[182px]">
                        <p className="text-white !text-[24px] font-light mb-4 !leading-[100%] !tracking-[0%]">
                            Discover the exciting events and opportunities we have planned.
                        </p>
                        <h2 className="!text-[48px] font-bold text-[#FDC182] !leading-[100%] !tracking-[0%]">
                            Upcoming Events
                        </h2>
                    </div>
                    <div className="absolute top-0 right-0">
                        <Image
                            src="/images/upcoming-events/downward-arrow.svg"
                            alt="Decorative arrow"
                            width={178}
                            height={191}
                            className="!w-[178px] !h-[191px]"
                        />
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-12">
                    {events.map((event, index) => (
                        <div key={index} style={{paddingTop: index === 0 ? '0px' : '40px'}} className="flex items-start gap-8 transition-colors duration-300 !pb-[40px] border-b border-[#454545]">
                            {/* Date Block */}
                            <div className="!py-[20px]">
                                <div className="bg-[#AD0000] text-white text-center w-[102px] h-[78px] flex flex-col justify-center">
                                    <div className="text-[14px] font-medium !leading-[100%] !tracking-[0%]">{event.date.month}</div>
                                    <div className="text-[32px] font-bold !leading-[100%] !tracking-[0%]">{event.date.day}</div>
                                </div>
                                <div className="bg-[#FDC182] text-[#000000] text-center text-[14px] font-bold !py-[10px] !px-[21px]">
                                    {event.time}
                                </div>
                            </div>

                            {/* Event Content */}
                            <div className="flex-grow !py-[20px]">
                                <h3 className="text-[32px] font-bold text-white !mb-[14px] !leading-[100%] !tracking-[0%]">
                                    {event.title}
                                </h3>
                                <p className="text-[16px] font-light text-[#FFFFFF] !mb-[34px] !leading-[100%] !tracking-[0%]">
                                    {event.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <YellowButton>
                                        Register
                                    </YellowButton>
                                    <button className="text-white hover:cursor-pointer underline font-extrabold !tracking-[0.2px] !leading-[16px] !px-[70px] !py-[20px] font-bold text-[16px] hover:text-[#fff]/90 transition-colors duration-300">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>

                            {/* Event Image */}
                            <div className="flex-shrink-0 hidden md:block">
                                <div className="relative w-[331px] h-[203px]">
                                    {/* Background card image */}
                                    {/* <Image
                                        src="/images/upcoming-events/image-card.svg"
                                        alt="Image card background"
                                        width={331}
                                        height={203}
                                        className="absolute inset-0 w-[331px] h-[203px] z-10 pointer-events-none"
                                    /> */}
                                    {/* Event image - positioned behind the card frame */}
                                    <div className="absolute inset-[15px] z-0">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={331}
                                            height={203}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Events Button */}
                <div className="text-center !mt-[135px]">
                    <button className="border-[2px] hover:cursor-pointer border-white text-white !px-[70px] !py-[20px] rounded-[4px] font-bold text-[16px] hover:bg-white hover:text-[#2A2A2A] transition-colors duration-300">
                        SEE ALL EVENTS
                    </button>
                </div>
            </div>
        </section>
    );
} 