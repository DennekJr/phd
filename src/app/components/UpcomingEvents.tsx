import Image from 'next/image';
import Link from 'next/link';
import SmartImage from "@/app/components/SmartImage";

type EventStatus = 'upcoming' | 'past';

interface EventItem {
    status: EventStatus;
    date: {
        month: string;
        day: string;
        year?: string;
    };
    time: string;
    title: string;
    description: string;
    image: string;
}

const events: EventItem[] = [
    // COMING SOON EVENTS
    {
        status: 'upcoming',
        date: { month: 'Aug', day: '27' },
        time: '7:00 pm',
        title: 'Annual NENFPHAS Research Symposium',
        description: 'A full-day symposium showcasing cutting-edge research by Nigerian female PhD holders across various disciplines.',
        image: '/images/upcoming-events/event-one.webp'
    },
    {
        status: 'upcoming',
        date: { month: 'Sep', day: '3' },
        time: '7:00 pm',
        title: '"Meet the Mentors" Networking Mixer',
        description: 'An evening mixer, offering a relaxed environment for emerging female scholars to connect with experienced PhD holders for mentorship and career advice.',
        image: '/images/upcoming-events/event-two.webp'
    },
    {
        status: 'upcoming',
        date: { month: 'Sep', day: '3' },
        time: '7:00 pm',
        title: 'Virtual Grant Writing Workshop: Securing International Funding',
        description: 'An online workshop providing practical strategies and insights for Nigerian female academics seeking international research grants.',
        image: '/images/upcoming-events/event-three.webp'
    },
    {
        status: 'upcoming',
        date: { month: 'Sep', day: '30' },
        time: '7:00 pm',
        title: 'Online Professional Development Series: Publishing in High-Impact Journals',
        description: 'A virtual session offering practical advice and strategies for Nigerian female PhD holders aiming to publish their research in reputable international journals.',
        image: '/images/upcoming-events/event-four.webp'
    },

    // PAST EVENTS
    {
        status: 'past',
        date: { month: 'Oct', day: '22', year: '2026' },
        time: '7:00 pm',
        title: 'NENFPHAS Inauguration, Award Presentation & Gala',
        description: `Held on Thursday, October 22nd, 2026, the landmark NENFPHAS Inauguration celebrated academic excellence, leadership, and service through an Award Presentation and Gala featuring four award categories and first-degree scholarships:

1. Academic Excellence Awards (with cash prizes for top 2026 performers):
- JAMB: Daniella Owoeye
- High Performer in WASC: Treasure Ubani
- Joint Best, Nigerian Law School: Loren Gomez
- Joint Best, Nigerian Law School: Chiamaka Happiness Modestus

2. Distinguished Ladies of Honour Awards:
- Dr. Ngozi Okonjo-Iweala (Director-General, WTO)
- Dr. Chioma Ejikeme (Former Executive Secretary, PTAD)
- Prof. Nnenna Oti (Former Vice-Chancellor, FUTO & Abia State INEC Returning Officer)
- Prof. Moji Adeyeye (Director-General, NAFDAC)
- Hajia Amina Mohammed (Deputy Secretary-General, United Nations)
- Ojy Okpe (Anchor, "What's Trending", Arise TV)

3. Best Sponsor Award:
- CEO, Terra Industries

4. Benevolence Award (to highly committed NENFPHAS members):
- Prof. Princess Victoria Ayishetu Enape
- Dr. Favour Eme-Nsa

5. First-Degree Scholarship Recipients:
- Blessing Onuoha
- Judith Andrew`,
        image: '/images/upcoming-events/inauguration.jpeg'
    }
];

function EventRow({ event }: { event: EventItem }) {
    const isPast = event.status === 'past';

    return (
        <div className="flex flex-col-reverse lg:flex-row items-start !gap-[1.5rem] lg:!gap-[2.5rem] transition-colors duration-300 !pb-[3rem] lg:!pb-[4rem] lg:border-b border-[#454545] last:border-b-0 last:!pb-0">
            {/* Desktop Date / Status Block */}
            <div className="lg:block hidden shrink-0">
                <div className={`${isPast ? 'bg-[#3A3A3D]' : 'bg-[#AD0000]'} text-white text-center w-[6.375rem] h-[4.875rem] flex flex-col justify-center`}>
                    <div className="text-[0.875rem] lg:text-[1.25rem] font-bold !leading-[100%] !tracking-[0%]">
                        {isPast ? `${event.date.month} ${event.date.day}` : 'Coming'}
                    </div>
                </div>
                <div className={`${isPast ? 'bg-[#D6CFC2] text-[#232427]' : 'bg-[#FDC182] text-[#000000]'} text-center !text-[0.75rem] lg:!text-[0.875rem] font-bold !py-[0.625rem] !px-[1.3125rem]`}>
                    {isPast ? (event.date.year || 'Past') : 'Soon'}
                </div>
            </div>

            {/* Event Content */}
            <div className="flex-grow min-w-0">
                <h3 className="flex w-full justify-between items-start !gap-[1rem] text-[1.5rem] lg:text-[2rem] font-bold text-white !mb-[1.25rem] !leading-[125%] !tracking-[0%]">
                    <span>{event.title}</span>
                    {/* Mobile Date / Status Block */}
                    <div className="lg:hidden block w-fit shrink-0">
                        <div className={`${isPast ? 'bg-[#3A3A3D]' : 'bg-[#AD0000]'} text-white text-center w-[4.5rem] h-[3.125rem] flex flex-col justify-center`}>
                            <div className="text-[0.8125rem] font-bold !leading-[100%] !tracking-[0%]">
                                {isPast ? `${event.date.month} ${event.date.day}` : 'Coming'}
                            </div>
                        </div>
                        <div className={`${isPast ? 'bg-[#D6CFC2] text-[#232427]' : 'bg-[#FDC182] text-[#000000]'} text-center !text-[0.75rem] font-bold !py-[0.3125rem] !px-[0.5rem]`}>
                            {isPast ? (event.date.year || 'Past') : 'Soon'}
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
                    <SmartImage
                        src={event.image}
                        alt={event.title}
                        width={331}
                        height={203}
                        sizes="(max-width: 1024px) 100vw, 21rem"
                        wrapperClassName="w-full lg:w-[20.6875rem] h-[12.6875rem]"
                        className="w-full lg:w-[20.6875rem] h-[12.6875rem] object-cover object-top rounded-sm"
                    />
                </div>
            </div>
        </div>
    );
}

export default function UpcomingEvents({ showAllEvents = false }: { showAllEvents?: boolean }) {
    const upcomingEvents = events.filter((e) => e.status === 'upcoming');
    const pastEvents = events.filter((e) => e.status === 'past');

    const visibleUpcoming = showAllEvents ? upcomingEvents : upcomingEvents.slice(0, 3);
    const visiblePast = showAllEvents ? pastEvents : pastEvents.slice(0, 2);

    return (
        <section className="relative flex items-center justify-center bg-[#161617] !pt-[8rem] !pb-[6.25rem] lg:!pb-[8.4375rem] !px-[1.25rem] lg:!px-[6.25rem] xxl:!px-[12.75rem]">
            <div className="mx-auto relative w-full max-w-[120rem]">
                {/* Header */}
                {!showAllEvents && (
                    <div className="w-full relative">
                        <div className="text-center !mb-[5rem] lg:!mb-[8rem]">
                            <p className="text-white !text-[1.25rem] lg:!text-[1.5rem] font-light !mb-[1.25rem] !leading-[150%] !tracking-[0%]">
                                Discover the exciting events and opportunities we have planned, alongside our past milestones.
                            </p>
                            <h2 className="!text-[1.5rem] lg:!text-[3rem] font-bold text-[#FDC182] !leading-[100%] !tracking-[0%]">
                                NENFPHAS Events
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
                    </div>
                )}

                {/* Coming Soon Section */}
                <div className="flex flex-col !gap-[3rem] lg:!gap-[4rem]">
                    <h3 className="text-[1.375rem] lg:text-[2rem] font-bold text-[#FDC182] !leading-[110%]">
                        Coming Soon
                    </h3>
                    {visibleUpcoming.map((event) => (
                        <EventRow key={event.title} event={event} />
                    ))}
                </div>

                {/* Past Events Section */}
                {visiblePast.length > 0 && (
                    <div className="flex flex-col !gap-[3rem] lg:!gap-[4rem] !mt-[5rem] lg:!mt-[6.5rem] !pt-[4rem] border-t border-[#2E2E32]">
                        <h3 className="text-[1.375rem] lg:text-[2rem] font-bold text-white !leading-[110%]">
                            Past Events
                        </h3>
                        {visiblePast.map((event) => (
                            <EventRow key={event.title} event={event} />
                        ))}
                    </div>
                )}

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
