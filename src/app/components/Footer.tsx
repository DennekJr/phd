import Image from 'next/image';
import Link from 'next/link';
import SmartImage from "@/app/components/SmartImage";

export default function Footer() {
    const navigationLinks = [
        { name: 'HOME', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'What We Do', href: '/#what-we-do' },
        { name: 'EVENTS', href: '/events' },
        { name: 'OUR TEAM', href: '/our-team' }
    ];

    return (
        <footer className="relative bg-[#880C24] flex flex-col overflow-hidden">
            {/* Footer Graphic Overlay */}
            <div className="relative inset-0 pointer-events-none">
                <Image
                    src="/images/footer/footer-graphic.svg"
                    alt="Footer graphic overlay"
                    width={1920}
                    height={353}
                    className="object-cover w-full h-[2.5rem] lg:h-[3.5rem]"
                />
            </div>

            {/* Background Image Grid */}
            <div className="relative w-full h-[20.625rem]">
                <SmartImage
                    src="/images/footer/image-gride-frame.webp"
                    alt="Graduate photos background"
                    width={1920}
                    height={330}
                    sizes="100vw"
                    wrapperClassName="w-full h-[20.625rem]"
                    className="object-cover w-full h-[20.625rem]"
                />
                {/* Color overlay */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: '#880C24', opacity: 0.75 }}
                />
            </div>

            <div className="relative w-full z-10 mx-auto max-w-[120rem] !px-[1.25rem] lg:!px-[4.75rem] !pt-[3.5rem] !pb-[3rem] lg:!pt-[4rem] lg:!pb-[3.5rem]">
                {/* Top row - the president's welcome, with navigation alongside it */}
                <div className="flex flex-col-reverse xl:flex-row w-full !gap-[2.5rem] xl:!gap-[4rem] justify-between">
                    <div className="!text-[#FDC182] flex-1 min-w-0 xl:max-w-[62rem]">
                        <div className="!mb-[1.25rem]">
                            <Image src="/images/footer/nigeria.svg" alt="Nigerian flag ribbon" width={71} height={101} className="w-[3.25rem] h-auto lg:w-[4.4375rem]" />
                        </div>
                        <p className="font-medium text-[0.9375rem] !leading-[160%] !tracking-[0%] lg:columns-2 lg:gap-[2.5rem]">
                            I welcome everyone to this unique Association, the Network for Nigerian
                            Female PhD Holders in Arts and Sciences - (NENFPHAS) with great delight,
                            especially members of the Board of Trustees and the Executive Officers. This
                            is an Association for all to contribute towards the development of Nigeria
                            and the upliftment of the academic status of women. I believe that,
                            together we can make a difference to support our dear country through this
                            platform, which is our desire. I have a dedicated team that
                            will work assiduously with their diverse experiences, knowledge
                            disciplines, and dedication to make our goal a success.
                        </p>
                        <p className="text-[0.9375rem] !leading-[150%] font-bold !mt-[1.5rem]">
                            DR. ADAEZE PATRICIA ESENWAH (Founder &amp; President of NENFPHAS)
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="text-white shrink-0">
                        <ul className="text-left xl:text-right">
                            {navigationLinks.map((link) => {
                                const isSecondary = link.name === 'About' || link.name === 'What We Do';
                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={
                                                isSecondary
                                                    ? 'text-[1.375rem] !mb-[1rem] font-light !leading-[100%] text-[#FDC182] hover:text-[#EFB025] transition-colors duration-300 block'
                                                    : 'text-[1.75rem] whitespace-nowrap !mb-[1rem] font-bold !leading-[100%] text-[#FDC182] hover:text-[#EFB025] transition-colors duration-300 block'
                                            }
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Bottom row - the wordmark anchors the footer, contact details
                    sit on the same baseline on the right. */}
                <div className="flex flex-col xl:flex-row xl:items-end justify-between !gap-[2.5rem] xl:!gap-[4rem] !mt-[3.5rem] lg:!mt-[4.5rem]">
                    <div className="flex-1 min-w-0">
                        <h1 className="!text-[3rem] md:!text-[4rem] lg:!text-[5rem] font-semibold leading-[100%] !mb-[1.5rem] text-[#FDC182]">
                            NENFPHAS
                        </h1>
                        <div className="border-[2px] !gap-[1rem] md:!gap-[1.75rem] flex flex-col md:flex-row md:items-center border-[#FDC182] w-full !max-w-[36rem] !px-[1.5rem] !py-[1.25rem] text-[#FDC182]">
                            <span className="font-bold whitespace-nowrap leading-[100%] text-[2.25rem]"> &copy; 2025</span>
                            <span className="text-[1.25rem] !font-medium !leading-[125%]">Network For Nigerian Female PHD Holders in Arts &amp; Sciences</span>
                        </div>
                    </div>

                    {/* Contact Info - anchored to the bottom of the footer */}
                    <div className="text-white shrink-0 text-left xl:text-right">
                        <p className="!text-[1rem] text-[#FDC182] font-medium !mb-[1.25rem]">(Connect with us)</p>
                        <div className="flex flex-col items-start xl:items-end !gap-[1rem]">
                            <a
                                href="mailto:NENFPHAS@gmail.com"
                                className="flex items-center gap-[1.4375rem] hover:text-[#EFB025] transition-colors duration-300"
                                aria-label="Email"
                            >
                                <span className="text-[1rem] leading-[150%] font-bold">NENFPHAS@gmail.com</span>
                                <Image src="/images/footer/mail.svg" alt="" aria-hidden="true" width={41} height={33} className="w-[2.5625rem] h-auto" />
                            </a>

                            <a
                                href="tel:08162375044"
                                className="flex items-center gap-[1.4375rem] hover:text-[#EFB025] transition-colors duration-300"
                                aria-label="Phone Number"
                            >
                                <span className="text-[1rem] leading-[150%] font-bold">08162375044</span>
                                <Image src="/images/footer/phone.svg" alt="" aria-hidden="true" width={25} height={40} className="w-[1.5625rem] h-auto" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 