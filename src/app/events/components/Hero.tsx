import Image from 'next/image';
import EventCardHero from './Event-Card-Hero';
import SmartImage from "@/app/components/SmartImage";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-end w-full min-h-[57.75rem] overflow-hidden lg:pt-0 pt-[9.4375rem] !pb-[7.5rem]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <SmartImage
                    src="/images/events/events-hero.webp"
                    alt="Events hero background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div
                className="absolute inset-0 w-full h-full"
                style={{ backgroundColor: '#000000', opacity: 0.8 }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center !pt-[9.4375rem] justify-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-[1.5rem] md:text-[3rem] !text-[#fff] font-bold !mb-[3.125rem] lg:!mb-[6.25rem] flex items-center justify-center !gap-[1.1875rem]">
                        Upcoming Events <span>
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
                    <EventCardHero />
                    {/* <div className="flex items-center justify-center gap-[0.75rem] !mt-[1.9375rem]">
                        <span className="flex items-center justify-center gap-[0.625rem]">
                            <Image
                                src="/images/events/location-icon.svg"
                                alt="Events hero background"
                                width={19}
                                height={25}
                                className="object-contain w-auto h-auto"
                            />
                        </span>
                        <span className="text-[1.5rem] !leading-[100%] !tracking-[0.01em]">
                        The Podium, 124 T. F. Kuboye Rd, Lekki Phase I, Lekki 106104, Lagos
                        </span>
                    </div> */}
                </div>
            </div>
        </section>
    );
}